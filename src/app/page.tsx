'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: string;
  content: string;
  options?: string[];
}

export default function Home() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
    if (showWhatsAppModal && messages.length === 0) {
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
    }
  }, [showWhatsAppModal]);

  const callAIWithRetry = async (conversationHistory: Array<{role: string; parts: Array<{text: string}>}>, systemPrompt: string, maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=AIzaSyCy2EQb6VhP8jiNQmItrlJfBEfXKP9zuW4', {
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
          if (errorMsg.includes('overloaded') || errorMsg.includes('quota') || errorMsg.includes('limit') || errorMsg.includes('RESOURCE_EXHAUSTED')) {
            if (attempt < maxRetries) {
              await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
              continue;
            }
            throw new Error('SERVICE_UNAVAILABLE');
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
      
      let userFriendlyMessage = 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.';
      if (errorMessage === 'SERVICE_UNAVAILABLE' || errorMessage.includes('quota') || errorMessage.includes('limit')) {
        userFriendlyMessage = 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.';
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
      
      let userFriendlyMessage = 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.';
      if (errorMessage === 'SERVICE_UNAVAILABLE' || errorMessage.includes('quota') || errorMessage.includes('limit')) {
        userFriendlyMessage = 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.';
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: userFriendlyMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Özden Solutions
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 font-light">
                İnovatif çözümlerle geleceği şekillendiriyoruz.              </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Modern teknolojilerle sektöre özel yazılım, tasarım ve otomasyon çözümleri sunuyoruz.
                Kullanıcı dostu arayüzler ve 3D görsel deneyimlerle dijital etkileşimi yeniden tanımlıyoruz.

                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button 
                  onClick={scrollToServices}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Hizmetlerimizi Keşfediniz</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={() => setShowWhatsAppModal(true)}
                  className="px-8 py-4 border-2 border-purple-500/50 rounded-full text-slate-300 font-semibold text-lg transition-all duration-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 hover:scale-105"
                >
                  İletişime Geçin
                </button>
              </div>
            </div>

            <div ref={servicesRef} className="text-center space-y-4 max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hizmetlerimiz
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
               Dijital dönüşüm yolculuğunuzda ihtiyaç duyduğunuz tüm çözümleri tek çatı altında sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Link href="/mobile-app-development" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Mobil Uygulama Geliştirme</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">iOS ve Android platformları için native ve cross-platform mobil uygulama çözümleri</p>
              </Link>

              <Link href="/web-development" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Web Uygulaması & Web Sitesi</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Modern, responsive ve kullanıcı dostu web tasarım ve yazılım çözümleri</p>
              </Link>

               <Link href="/rpa" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Robotik Süreç Otomasyonu</h3>
                 <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">İş süreçlerini otomatikleştiren akıllı robot çözümleri</p>
               </Link>

              <Link href="/graphic-design" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Grafik Tasarım & UI/UX</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Marka kimliği, logo tasarımı ve kullanıcı deneyimi (UX) odaklı arayüz tasarımları</p>
              </Link>

              <Link href="/ai-solutions" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Yapay Zeka Çözümleri</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Makine öğrenmesi, derin öğrenme ve yapay zeka entegrasyon çözümleri</p>
              </Link>

              <Link href="/pcb-design" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Elektronik Kart Tasarım</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Özel elektronik devre ve PCB tasarım hizmetleri</p>
              </Link>

              <Link href="/automation-systems" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">Otomasyon Sistemleri</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Endüstriyel ve ev otomasyonu için özel sistem çözümleri</p>
              </Link>

              <Link href="/social-media-management" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-300 transition-colors">Sosyal Medya Yönetimi</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Dijital pazarlama ve sosyal medya strateji geliştirme hizmetleri</p>
              </Link>

              <Link href="/microcontroller-programming" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">Mikroişlemci Programlama</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Arduino, Raspberry Pi ve diğer mikrodenetleyiciler için özel programlama çözümleri</p>
              </Link>

              <Link href="/3d-printing" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">3D Baskı Hizmetleri</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Prototipleme ve özel ihtiyaçlara yönelik 3D baskı çözümleri</p>
              </Link>

              <Link href="/cybersecurity" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">Siber Güvenlik & Veri Koruması</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Kurumsal siber güvenlik çözümleri, penetrasyon testleri ve veri koruma danışmanlığı</p>
              </Link>

              <Link href="/cloud-devops" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">Bulut Çözümleri & DevOps</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">AWS, Azure ve Google Cloud altyapılarıyla bulut sistem kurulumu ve DevOps süreç yönetimi</p>
              </Link>
            </div>

            <div className="text-center space-y-4 max-w-7xl mx-auto pt-20">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Tamamladığımız Projeler
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Müşterilerimiz için geliştirdiğimiz yenilikçi çözümlerden örnekler
              </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-8">
              <div 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-teal-900/30 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-teal-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                            Sağlık Teknolojisi
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
                            IoT Sistemleri
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                            Gömülü Sistemler
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          XStock İlaç Dolabı Sistemleri
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Hastaneler için akıllı ilaç ve malzeme yönetim çözümü
                        </p>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed">
                        XStock, hastanelerde ilaç ve tıbbi malzeme yönetimini optimize eden, hasta güvenliği ve maliyet kontrolü odaklı bir süreç yönetim sistemidir. Özden Solutions olarak bu projenin kritik donanım bileşenlerini geliştirdik.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">İç Işıklandırma Sistemi</h4>
                            <p className="text-slate-400 text-xs mt-1">Dolap içi aydınlatma ile ilaçların kolay görünürlüğü ve erişimi</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">Buton Kontrol Sistemi</h4>
                            <p className="text-slate-400 text-xs mt-1">Kullanıcı dostu buton arayüzü ile hızlı ve kolay işlem yapma</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">Sıcaklık & Nem Takibi</h4>
                            <p className="text-slate-400 text-xs mt-1">İlaç saklama koşullarının gerçek zamanlı izlenmesi ve uyarı sistemi</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-rose-500/30">
                            <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">Parmak İzi Giriş Sistemi</h4>
                            <p className="text-slate-400 text-xs mt-1">Biyometrik kimlik doğrulama ile güvenli erişim kontrolü</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">Gömülü Sistemler</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">Sensör Entegrasyonu</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">Biyometrik Güvenlik</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">LED Aydınlatma</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">IoT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://github.com/ibrahimunalozdensolition/spektroskopi-analiz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/60 via-emerald-900/20 to-cyan-900/30 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-cyan-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                            Masaüstü Uygulama
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                            PyQt5
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                            Bilimsel Araştırma
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          Spektroskopi Analiz Sistemi
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Prof. Dr. Uğur Aksu için özel geliştirilmiş
                        </p>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed">
                        Modern analitik kimya ve spektroskopik araştırma gereksinimlerini karşılamak için geliştirilmiş kapsamlı bir veri toplama, gerçek zamanlı analiz ve kalibrasyon sistemi. Çok dalga boylu spektroskopik ölçümler için profesyonel çözüm sunar.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/30">
                            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">4 Farklı Sensör</h4>
                            <p className="text-slate-400 text-xs mt-1">UV 360nm, Blue 450nm, IR 850nm, IR 940nm dalga boylarında eşzamanlı veri toplama</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">Gerçek Zamanlı Analiz</h4>
                            <p className="text-slate-400 text-xs mt-1">Canlı veri görselleştirme ve özelleştirilebilir formüllerle işleme</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">5 Noktalı Kalibrasyon</h4>
                            <p className="text-slate-400 text-xs mt-1">Hassas kalibrasyon eğrileri ile yüksek doğrulukta ölçüm</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm">Özel Formül Motoru</h4>
                            <p className="text-slate-400 text-xs mt-1">Sensör verileriyle karmaşık matematiksel formüller oluşturma</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">Python</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">PyQt5</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">Gerçek Zamanlı Grafik</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">CSV Export</span>
                        <span className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50">Auto Update</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="text-center space-y-4 mb-16 max-w-7xl mx-auto pt-20">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hemen İletişime Geçin!
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Projelerinizi hayata geçirmek ve size en uygun çözümü sunmak için buradayız
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Sosyal Medya Hesaplarımız</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.facebook.com/ozdensolutionstr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="Facebook sayfamızı ziyaret edin"
                  >
                    <Image 
                      src="/Facebook_Logo_(2019).png" 
                      alt="Facebook" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">Facebook</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/ozdensolutionstr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="Instagram sayfamızı ziyaret edin"
                  >
                    <Image 
                      src="/instagram-logo.svg?v=2" 
                      alt="Instagram" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">Instagram</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/@ozdensolutionstr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="YouTube kanalımızı ziyaret edin"
                  >
                    <Image 
                      src="/youtube-logo.svg" 
                      alt="YouTube" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">YouTube</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.tiktok.com/@ozdensolutionstr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="TikTok hesabımızı ziyaret edin"
                  >
                    <Image 
                      src="/tiktok-svgrepo-com-2.svg" 
                      alt="TikTok" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">TikTok</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a 
                    href="https://sosyal.teknofest.app/@ozdensolutionstr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="Teknofest sosyal platformumuzu ziyaret edin"
                  >
                    <Image 
                      src="/t3-logo-TR-01.png" 
                      alt="Teknofest" 
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">Teknofest</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Konum</h3>
                  <div className="rounded-xl overflow-hidden border border-slate-700/30 shadow-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4958!2d28.8866497!3d41.0549524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb59b7d7a0e1%3A0x56dc6e8a35ef1e5a!2z%C3%96zden%20FMCG!5e0!3m2!1str!2str!4v1640995200000!5m2!1str!2str"
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                    <div className="mt-4 text-center">
                      <a
                        href="https://www.google.com/maps/place/Özden+FMCG/@41.0549524,28.8866497,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb59b7d7a0e1:0x56dc6e8a35ef1e5a!8m2!3d41.0549525!4d28.8915206!16s%2Fg%2F11vqsz3302"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>Google Maps&apos;te Aç</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">E-posta İletişim</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Mail Gönder</h4>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-slate-300 font-medium">ibrahimunalofficial@gmail.com</span>
                      <a 
                        href="mailto:ibrahimunalofficial@gmail.com"
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Mail gönderin
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="relative z-10">Teklif Alın</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Floating AI Chat Button */}
      <button
        onClick={() => setShowWhatsAppModal(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        title="AI Danışmanı ile konuşun"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </button>

      {/* AI Chat Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-slate-900/95 via-purple-900/60 to-blue-900/80 rounded-2xl border border-slate-700/50 shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center justify-between border-b border-purple-500/30 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Proje Danışmanı</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-purple-100 text-xs">Aktif • Projenizi birlikte geliştirelim</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowWhatsAppModal(false);
                  setMessages([]);
                }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth" style={{scrollbarWidth: 'thin', scrollbarColor: '#9333ea transparent'}}>
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-3`}>
                  {message.role === 'assistant' && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  )}
                  <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' 
                      : 'bg-slate-800/80 text-slate-100 border border-purple-500/20'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    {message.options && message.options.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.options.map((option, optIndex) => (
                          <button
                            key={optIndex}
                            onClick={() => handleOptionClick(option)}
                            disabled={isLoading}
                            className="px-3 py-1.5 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-white rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start items-end space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="bg-slate-800/80 border border-purple-500/20 rounded-2xl px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-gradient-to-r from-slate-900/80 via-purple-900/20 to-slate-900/80 border-t border-purple-500/30 rounded-b-2xl">
              <div className="flex space-x-3">
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
                  className="flex-1 bg-slate-800/80 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-700 disabled:to-slate-800 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
