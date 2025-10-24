'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: string;
  content: string;
  options?: string[];
}

export default function AISolutions() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: 'Merhaba! 👋 Özden Solutions proje danışmanıyım. Projeniz hakkında konuşalım! Hangi tür bir çözüm arıyorsunuz?',
      options: [
        'Web Uygulaması / Web Sitesi',
        'Mobil Uygulama',
        'Yapay Zeka Çözümleri',
        'RPA / Otomasyon',
        'Grafik Tasarım / UI/UX',
        'Diğer Hizmetler'
      ]
    }]);
  }, []);

  const callAIWithRetry = async (conversationHistory: Array<{role: string; parts: Array<{text: string}>}>, systemPrompt: string, maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=AIzaSyAXa00FoFLPQAHeotpkWT6HDxRRtc9nBFU', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }]
            },
            contents: conversationHistory
          })
        });

        const data = await response.json();
        
        if (!response.ok || !data.candidates || data.candidates.length === 0) {
          const errorMsg = data.error?.message || 'API yanıt vermedi';
          if (errorMsg.includes('overloaded') || errorMsg.includes('quota') || errorMsg.includes('limit')) {
            if (attempt < maxRetries) {
              await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
              continue;
            }
            throw new Error('OVERLOAD');
          }
          throw new Error(errorMsg);
        }
        
        return data.candidates[0]?.content?.parts[0]?.text || 'Üzgünüm, bir hata oluştu.';
      } catch (error) {
        if (attempt === maxRetries) throw error;
        await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
      }
    }
    throw new Error('Maksimum deneme sayısına ulaşıldı');
  };

  const handleOptionClick = async (option: string) => {
    if (isLoading) return;
    
    const userMessage = option;
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const systemPrompt = `Sen Özden Solutions şirketinin proje danışmanısın. Görevin kullanıcının proje ihtiyaçlarını anlamak, projeyi geliştirmek ve özellikler önermek.

Şirketin sunduğu hizmetler:
- Web Uygulaması & Web Sitesi
- Yapay Zeka Çözümleri (Ürün öneri sistemleri, chatbot, görüntü analizi)
- Mobil Uygulama
- RPA (Robotik Süreç Otomasyonu)
- Grafik Tasarım & UI/UX
- Elektronik Kart Tasarım
- Otomasyon Sistemleri
- Sosyal Medya Yönetimi
- Mikroişlemci Programlama
- 3D Baskı
- Siber Güvenlik
- Bulut & DevOps

Kurallar:
1. Önceki konuşmaları hatırla ve bağlamı koru
2. Her mesajda merhaba deme, sadece ilk mesajda selamlaştın
3. Kullanıcının proje ihtiyacını dinle ve anla
4. Açık uçlu soru sormak yerine, kullanıcıya seçebileceği SEÇENEKLER sun
5. ÇOK ÖNEMLİ: Her yanıtında MUTLAKA seçenekler sun! Açık uçlu soru sorma!
6. Seçenekleri AYNEN ŞU FORMATTA listele (boşluk ve tire önemli):
   
[SEÇENEKLER]
- Seçenek 1
- Seçenek 2
- Seçenek 3
[/SEÇENEKLER]

7. Her seçenek kısa ve net olmalı (maksimum 5-6 kelime)
8. 3-6 arası seçenek sun
9. Teknik öneriler sun
10. Samimi, profesyonel ve yardımcı ol
11. FİYAT KONUSUNDA ÖNEMLİ: Fiyat sorulduğunda kesinlikle fiyat verme! "Fiyatlandırma konusunda size yardımcı olamıyorum. Ancak aşağıdaki buton ile yetkili kişilerimizden detaylı fiyat teklifi alabilirsiniz." şeklinde yanıt ver.

Örnek yanıt (TAM OLARAK BU FORMATTA):
Harika! Web sitesi için size yardımcı olabilirim. Hangi tür bir web sitesi istersiniz?

[SEÇENEKLER]
- E-Ticaret Sitesi
- Kurumsal Web Sitesi
- Blog/İçerik Sitesi
- Portfolyo Sitesi
- Online Eğitim Platformu
[/SEÇENEKLER]

Kısa, anlaşılır ve konuşkan ol. Türkçe yanıt ver.`;

      const conversationHistory = newMessages.slice(1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      let aiResponse = await callAIWithRetry(conversationHistory, systemPrompt);
      
      let options: string[] | undefined = undefined;
      const optionsMatch = aiResponse.match(/\[SEÇENEK[LER]*\]([\s\S]*?)\[\/SEÇENEK[LER]*\]/i);
      
      if (optionsMatch) {
        const optionsText = optionsMatch[1];
        options = optionsText
          .split('\n')
          .map((line: string) => line.trim())
          .filter((line: string) => line.startsWith('-'))
          .map((line: string) => line.substring(1).trim())
          .filter((line: string) => line.length > 0);
        
        aiResponse = aiResponse.replace(/\[SEÇENEK[LER]*\][\s\S]*?\[\/SEÇENEK[LER]*\]/i, '').trim();
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse, options }]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata';
      
      let userFriendlyMessage = 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.';
      if (errorMessage === 'OVERLOAD') {
        userFriendlyMessage = '⚠️ AI sistemi şu anda yoğun. Lütfen birkaç saniye bekleyip tekrar deneyin veya mesajınızı manuel yazabilirsiniz.';
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: userFriendlyMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const systemPrompt = `Sen Özden Solutions şirketinin proje danışmanısın. Görevin kullanıcının proje ihtiyaçlarını anlamak, projeyi geliştirmek ve özellikler önermek.

Şirketin sunduğu hizmetler:
- Web Uygulaması & Web Sitesi
- Yapay Zeka Çözümleri (Ürün öneri sistemleri, chatbot, görüntü analizi)
- Mobil Uygulama
- RPA (Robotik Süreç Otomasyonu)
- Grafik Tasarım & UI/UX
- Elektronik Kart Tasarım
- Otomasyon Sistemleri
- Sosyal Medya Yönetimi
- Mikroişlemci Programlama
- 3D Baskı
- Siber Güvenlik
- Bulut & DevOps

Kurallar:
1. Önceki konuşmaları hatırla ve bağlamı koru
2. Her mesajda merhaba deme, sadece ilk mesajda selamlaştın
3. Kullanıcının proje ihtiyacını dinle ve anla
4. Açık uçlu soru sormak yerine, kullanıcıya seçebileceği SEÇENEKLER sun
5. ÇOK ÖNEMLİ: Her yanıtında MUTLAKA seçenekler sun! Açık uçlu soru sorma!
6. Seçenekleri AYNEN ŞU FORMATTA listele (boşluk ve tire önemli):
   
[SEÇENEKLER]
- Seçenek 1
- Seçenek 2
- Seçenek 3
[/SEÇENEKLER]

7. Her seçenek kısa ve net olmalı (maksimum 5-6 kelime)
8. 3-6 arası seçenek sun
9. Teknik öneriler sun
10. Samimi, profesyonel ve yardımcı ol
11. FİYAT KONUSUNDA ÖNEMLİ: Fiyat sorulduğunda kesinlikle fiyat verme! "Fiyatlandırma konusunda size yardımcı olamıyorum. Ancak aşağıdaki buton ile yetkili kişilerimizden detaylı fiyat teklifi alabilirsiniz." şeklinde yanıt ver.

Örnek yanıt (TAM OLARAK BU FORMATTA):
Harika! Web sitesi için size yardımcı olabilirim. Hangi tür bir web sitesi istersiniz?

[SEÇENEKLER]
- E-Ticaret Sitesi
- Kurumsal Web Sitesi
- Blog/İçerik Sitesi
- Portfolyo Sitesi
- Online Eğitim Platformu
[/SEÇENEKLER]

Kısa, anlaşılır ve konuşkan ol. Türkçe yanıt ver.`;

      const conversationHistory = newMessages.slice(1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      let aiResponse = await callAIWithRetry(conversationHistory, systemPrompt);
      
      let options: string[] | undefined = undefined;
      const optionsMatch = aiResponse.match(/\[SEÇENEK[LER]*\]([\s\S]*?)\[\/SEÇENEK[LER]*\]/i);
      
      if (optionsMatch) {
        const optionsText = optionsMatch[1];
        options = optionsText
          .split('\n')
          .map((line: string) => line.trim())
          .filter((line: string) => line.startsWith('-'))
          .map((line: string) => line.substring(1).trim())
          .filter((line: string) => line.length > 0);
        
        aiResponse = aiResponse.replace(/\[SEÇENEK[LER]*\][\s\S]*?\[\/SEÇENEK[LER]*\]/i, '').trim();
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse, options }]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen hata';
      
      let userFriendlyMessage = 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.';
      if (errorMessage === 'OVERLOAD') {
        userFriendlyMessage = '⚠️ AI sistemi şu anda yoğun. Lütfen birkaç saniye bekleyip tekrar deneyin veya mesajınızı manuel yazabilirsiniz.';
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: userFriendlyMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const summarizeAndSendToWhatsApp = async () => {
    if (messages.length <= 1 || isSummarizing) return;

    setIsSummarizing(true);

    try {
      const conversationText = messages
        .map(msg => `${msg.role === 'user' ? 'Kullanıcı' : 'Asistan'}: ${msg.content}`)
        .join('\n\n');

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=AIzaSyAXa00FoFLPQAHeotpkWT6HDxRRtc9nBFU', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Aşağıdaki müşteri-danışman konuşmasını analiz et.

Konuşma:
${conversationText}

Görevin:
1. Kullanıcının istediği projeyi/çözümü belirle
2. Konuşmada bahsedilen tüm özellik ve gereksinimleri maddeler halinde listele
3. Önerilen teknolojileri ve yaklaşımları belirt
4. Profesyonel bir WhatsApp mesajı formatında yaz
5. Önerileri koyma 
6. Sadece kullanıcının onay verdiği veya istediği şeyleri yaz 

Format:
Merhaba Özden Solutions,

[Proje Özeti]

İstediğim Özellikler:
• [Özellik 1]
• [Özellik 2]
• [Özellik 3]


Bu proje hakkında detaylı görüşmek istiyorum.

Sadece mesajı yaz, başka açıklama ekleme.`
            }]
          }]
        })
      });

      const data = await response.json();
      
      if (!response.ok || !data.candidates || data.candidates.length === 0) {
        throw new Error(data.error?.message || 'API yanıt vermedi');
      }
      
      const summary = data.candidates[0]?.content?.parts[0]?.text || 'Konuşma özeti oluşturulamadı.';
      
      const phoneNumber = '+905398884561';
      const message = encodeURIComponent(summary.trim());
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    } catch (error) {
      console.error('Error:', error);
      alert('Özet oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full">
                  <span className="text-cyan-400 font-semibold text-sm tracking-wide uppercase">Yapay Zeka Çözümleri</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  İşletmenizi Geleceğe Taşıyan<br/>Yapay Zeka Teknolojileri
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Makine öğrenmesi, derin öğrenme ve yapay zeka ile iş süreçlerinizi otomatikleştirin, müşteri deneyimini geliştirin
                </p> 
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">500K+</div>
                  <div className="text-slate-400 text-sm">İşlenmiş Veri</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">95%</div>
                  <div className="text-slate-400 text-sm">Doğruluk Oranı</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-slate-400 text-sm">Otomatik İşlem</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-slate-400 text-sm">AI Modeli</div>
                </div>
              </div>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Yapay Zeka Çözümlerimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  İşletmenizin ihtiyaçlarına özel, gelişmiş yapay zeka ve makine öğrenmesi çözümleri ile verimliliğinizi artırın
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="relative bg-gradient-to-br from-slate-900/90 via-purple-900/40 to-blue-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
                  
                  <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-5 flex items-center space-x-4 border-b border-purple-500/30">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-purple-600 animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl">Proje Danışmanı</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-purple-100 text-sm">Aktif • Projenizi birlikte geliştirelim</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <svg className="w-4 h-4 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-purple-100 text-xs font-medium">Güvenli Bağlantı</span>
                    </div>
                  </div>

                  <div ref={chatContainerRef} className="relative p-6 h-[500px] overflow-y-auto space-y-6 scroll-smooth" style={{scrollbarWidth: 'thin', scrollbarColor: '#9333ea transparent'}}>
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900/80 to-transparent pointer-events-none z-10"></div>
                    
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-3 animate-fade-in`}>
                        {message.role === 'assistant' && (
                          <div className="relative flex-shrink-0 mb-1">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/40">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <div className={`group relative max-w-[75%] rounded-3xl px-6 py-4 transition-all duration-300 hover:scale-[1.01] ${
                          message.role === 'user' 
                            ? 'bg-gradient-to-br from-purple-600 via-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40' 
                            : 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl text-slate-100 border border-purple-500/20 shadow-xl shadow-black/30 hover:border-purple-500/40'
                        }`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          
                          <div className="relative text-sm leading-relaxed space-y-3 formatted-content">
                            {message.content.split('\n').map((paragraph, pIndex) => {
                              if (!paragraph.trim()) return null;
                              
                              if (paragraph.trim().startsWith('*   ') || paragraph.trim().startsWith('* ')) {
                                const cleanText = paragraph.replace(/^\*\s+/, '').trim();
                                const formattedText = cleanText
                                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-purple-300">$1</strong>')
                                  .replace(/\*(.*?)\*/g, '<em class="italic text-slate-300">$1</em>');
                                return (
                                  <div key={pIndex} className="flex items-start space-x-3 ml-1 group/item">
                                    <span className="text-purple-400 mt-1 flex-shrink-0 text-base">•</span>
                                    <span dangerouslySetInnerHTML={{ __html: formattedText }} className="text-slate-200 flex-1" />
                                  </div>
                                );
                              }
                              
                              const formattedText = paragraph
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="italic text-purple-200">$1</em>');
                              
                              return (
                                <p key={pIndex} dangerouslySetInnerHTML={{ __html: formattedText }} className={message.role === 'user' ? 'text-white' : 'text-slate-200'} />
                              );
                            }).filter(Boolean)}
                          </div>
                          {message.options && message.options.length > 0 && (
                            <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                              {message.options.map((option, optIndex) => (
                                <button
                                  key={optIndex}
                                  onClick={() => handleOptionClick(option)}
                                  disabled={isLoading}
                                  className="relative z-10 px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/50 hover:to-blue-600/50 border border-purple-500/40 hover:border-purple-400/60 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        {message.role === 'user' && (
                          <div className="relative flex-shrink-0 mb-1">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center shadow-lg shadow-blue-500/40">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start items-end space-x-3 animate-fade-in">
                        <div className="relative flex-shrink-0 mb-1">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/40 animate-pulse">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl px-7 py-5 shadow-xl">
                          <div className="flex space-x-2">
                            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></div>
                            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="relative p-5 bg-gradient-to-r from-slate-900/80 via-purple-900/20 to-slate-900/80 backdrop-blur-xl border-t border-purple-500/30 space-y-3">
                    {messages.length > 1 && (
                      <button
                        onClick={summarizeAndSendToWhatsApp}
                        disabled={isSummarizing}
                        className="w-full px-8 py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-2xl text-base font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/40 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg shadow-green-500/30"
                      >
                        {isSummarizing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Özet Hazırlanıyor...</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span>Konuşma Özetini WhatsApp ile Yetkileye Aktar</span>
                          </>
                        )}
                      </button>
                    )}
                    <div className="flex space-x-3">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !isLoading) {
                              e.preventDefault();
                              sendMessage();
                            }
                          }}
                          placeholder="Projeniz hakkında konuşalım..."
                          className="w-full bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl pl-6 pr-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 shadow-lg"
                          disabled={isLoading}
                        />
                        
                      </div>
                      <button
                        onClick={sendMessage}
                        disabled={isLoading || !inputMessage.trim()}
                        className="group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-700 disabled:to-slate-800 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30"
                      >
                        <svg className="w-6 h-6 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Akıllı Ürün Öneri Sistemleri</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Kullanıcı davranışlarını analiz ederek kişiselleştirilmiş ürün önerileri sunan yapay zeka sistemleri. E-ticaret sitenize entegre ederek satışlarınızı %40&apos;a kadar artırın.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">Collaborative Filtering</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Deep Learning</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Real-time</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Chatbot & Sanal Asistan</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Doğal dil işleme (NLP) teknolojisi ile müşterilerinize 7/24 destek veren akıllı chatbot&apos;lar. Müşteri memnuniyetini artırırken operasyonel maliyetleri düşürün.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">NLP</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">GPT-4</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">Multi-language</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Görüntü Analizi & Tanıma</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Computer vision teknolojisi ile görüntü sınıflandırma, nesne tanıma, yüz tanıma ve ürün kalite kontrolü sistemleri. Üretim süreçlerinizi otomatikleştirin.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">CNN</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">YOLO</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">OCR</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-pink-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">Tahmin & Analiz Modelleri</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Geçmiş verilerinizi analiz ederek gelecek trendlerini tahmin eden AI modelleri. Satış tahmini, talep planlaması ve risk analizi çözümleri.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">Time Series</span>
                    <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">Regression</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-indigo-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">Duygu Analizi</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Müşteri yorumlarını, sosyal medya paylaşımlarını analiz ederek marka algısını ölçün. Sentiment analysis ile müşteri memnuniyetini takip edin.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400">NLP</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">BERT</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Otomasyon & Optimizasyon</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    İş süreçlerinizi AI ile optimize edin. Stok yönetimi, rota optimizasyonu, fiyatlandırma stratejileri ve kaynak planlaması çözümleri.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">ML</span>
                    <span className="text-xs px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Geliştirme Sürecimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Veri toplama&apos;dan model eğitimi&apos;ne, profesyonel yapay zeka çözümleri
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden lg:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">Veri Toplama & Analiz</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Mevcut verilerinizi analiz ediyor, eksik veri kaynaklarını belirliyoruz. Veri kalitesini ve yapısını değerlendirerek optimum veri seti oluşturuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/50 border-4 border-slate-900">
                        1
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/50 border-4 border-slate-900">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">Model Seçimi & Tasarım</h3>
                        <p className="text-slate-300 leading-relaxed">
                          İhtiyacınıza uygun AI algoritması ve model mimarisini belirliyoruz. Transfer learning, custom model veya hybrid yaklaşım kararı veriyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">Model Eğitimi</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Hazırlanan veri seti ile AI modelini eğitiyoruz. Hyperparameter tuning ve cross-validation ile modelin performansını optimize ediyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/50 border-4 border-slate-900">
                        3
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-pink-500/50 border-4 border-slate-900">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-pink-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-3">Test & Doğrulama</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Model accuracy, precision, recall ve F1-score metriklerini değerlendiriyoruz. A/B testing ile gerçek ortam performansını ölçüyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-indigo-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-3">Deployment & Entegrasyon</h3>
                        <p className="text-slate-300 leading-relaxed">
                          AI modelini mevcut sistemlerinize entegre ediyoruz. API, microservice veya cloud deployment seçenekleri sunuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-500/50 border-4 border-slate-900">
                        5
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-500/50 border-4 border-slate-900">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">Monitoring & İyileştirme</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Model performansını sürekli izliyoruz. Yeni verilerle model&apos;i güncelliyor, drift detection ile doğruluğu koruyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Neden AI Çözümlerimiz?
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Yapay zeka projelerinizde güvenilir çözüm ortağınız
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Kanıtlanmış Başarı</h4>
                    <p className="text-slate-400 text-sm">50+ başarılı AI projesi ile sektörde kanıtlanmış deneyim ve uzmanlık</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Hızlı Deployment</h4>
                    <p className="text-slate-400 text-sm">Agile metodoloji ile hızlı prototipleme ve kısa sürede üretime alma</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Ölçeklenebilir Çözümler</h4>
                    <p className="text-slate-400 text-sm">Büyüyen ihtiyaçlarınıza uyum sağlayan, esnek ve ölçeklenebilir AI sistemleri</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Sürekli Destek</h4>
                    <p className="text-slate-400 text-sm">Model monitoring, güncelleme ve optimizasyon ile sürekli destek</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Projeniz İçin Hazır mısınız?
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Detaylı teklif almak için hemen iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button 
                  onClick={() => setShowWhatsAppModal(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:from-cyan-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp ile İletişim</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            <div className="border-t border-slate-700/30 pt-10 mt-20 max-w-7xl mx-auto">
              <div className="text-center">
                <p className="text-slate-400 text-sm">
                  © 2025 Özden Solutions bir Özden Grup A.Ş. markasıdır. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </main>

        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="WhatsApp ile iletişime geçin"
        >
          <Image 
            src="/whatsapp-logo.svg" 
            alt="WhatsApp" 
            width={32}
            height={32}
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
          />
        </button>

        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-slate-900/90 via-purple-900/60 to-blue-900/80 rounded-2xl p-6 max-w-sm w-full mx-4 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Image 
                      src="/whatsapp-logo.svg" 
                      alt="WhatsApp" 
                      width={24}
                      height={24}
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp İletişim</h3>
                </div>
                <button
                  onClick={() => setShowWhatsAppModal(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-slate-300 mb-6 text-center">
                Hangi numaradan iletişime geçmek istiyorsunuz?
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/905398884561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-xl hover:from-cyan-600/30 hover:to-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
                  onClick={() => setShowWhatsAppModal(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">0(539) 888 45 61</span>
                  </div>
                  <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/905510670094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-xl hover:from-cyan-600/30 hover:to-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
                  onClick={() => setShowWhatsAppModal(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">0(551) 067 00 94</span>
                  </div>
                  <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
