'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    role: string;
    content: string;
    options?: string[];
}

interface AIAssistantModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AIAssistantModal({ isOpen, onClose }: AIAssistantModalProps) {
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
        if (isOpen && messages.length === 0) {
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
    }, [isOpen, messages.length]);

    const callAIWithRetry = async (conversationHistory: Array<{ role: string; parts: Array<{ text: string }> }>, systemPrompt: string, maxRetries = 3) => {
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

                return data.candidates[0]?.content?.parts[0]?.text || 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.';
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

    const summarizeAndSendToWhatsApp = async () => {
        if (messages.length <= 1 || isSummarizing) return;

        setIsSummarizing(true);

        try {
            const conversationText = messages
                .map(msg => `${msg.role === 'user' ? 'Kullanıcı' : 'Asistan'}: ${msg.content}`)
                .join('\n\n');

            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=AIzaSyCy2EQb6VhP8jiNQmItrlJfBEfXKP9zuW4', {
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

            const phoneNumber = '905398884561';
            const message = encodeURIComponent(summary.trim());
            window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        } catch (error) {
            console.error('Error:', error);
            alert('Özet oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsSummarizing(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-blue-900/95 w-full max-w-2xl rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl flex flex-col h-[600px] max-h-[90vh]">

                {/* Header */}
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center justify-between border-b border-purple-500/30 shrink-0">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">Proje Danışmanı</h3>
                            <p className="text-purple-100 text-xs">Size nasıl yardımcı olabilirim?</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatContainerRef} style={{ scrollbarWidth: 'thin', scrollbarColor: '#9333ea transparent' }}>
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-2 animate-fade-in`}>
                            {message.role === 'assistant' && (
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex flex-shrink-0 items-center justify-center shadow-lg">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            )}
                            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${message.role === 'user'
                                ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg'
                                : 'bg-slate-800/90 text-slate-100 border border-purple-500/20 shadow-lg'
                                }`}>
                                <div className="whitespace-pre-wrap leading-relaxed">
                                    {message.content.split('\n').map((line, i) => (
                                        <p key={i} className="mb-1 last:mb-0">{line}</p>
                                    ))}
                                </div>
                                {message.options && message.options.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {message.options.map((option, optIndex) => (
                                            <button
                                                key={optIndex}
                                                onClick={() => handleOptionClick(option)}
                                                disabled={isLoading}
                                                className="px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/40 text-purple-200 hover:text-white rounded-lg text-xs transition-colors text-left"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start items-end space-x-2">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex flex-shrink-0 items-center justify-center">
                                <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div className="bg-slate-800/90 rounded-2xl px-4 py-3 border border-purple-500/20">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Footer */}
                <div className="p-4 bg-slate-900/50 backdrop-blur-md border-t border-purple-500/30 space-y-3 shrink-0">
                    {messages.length > 1 && (
                        <button
                            onClick={summarizeAndSendToWhatsApp}
                            disabled={isSummarizing}
                            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSummarizing ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Özet Hazırlanıyor...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>WhatsApp&apos;a Aktar</span>
                                </>
                            )}
                        </button>
                    )}

                    <div className="flex space-x-2">
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
                            placeholder="Mesajınız..."
                            className="flex-1 bg-slate-800/80 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading || !inputMessage.trim()}
                            className="px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all disabled:opacity-50 shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
