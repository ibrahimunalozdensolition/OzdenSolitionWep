'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
    role: string;
    content: string;
    options?: string[];
}

export default function AIChatPage() {
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
        if (messages.length === 0) {
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
    }, [messages.length]);

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

    const handleOptionClick = async (option: string) => {
        if (isLoading) return;

        const userMessage = option;
        const newMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
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
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.'
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
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Hizmetlerimiz şu anda aktif değil. Lütfen daha sonra tekrar deneyin.'
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

    const clearChat = () => {
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
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
            <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>

                <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8 pt-8">
                            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-4">
                                <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">AI Proje Danışmanı</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                Projenizi Birlikte Planlayalım
                            </h1>
                            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                                Yapay zeka destekli danışmanımız ile projenizin detaylarını belirleyin ve size özel çözüm önerileri alın.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-4 space-y-4">
                                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                                    <h4 className="text-white font-bold mb-4 flex items-center">
                                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Nasıl Çalışır?
                                    </h4>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-start text-slate-300">
                                            <span className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                            <span>Proje türünüzü seçin veya ihtiyacınızı yazın</span>
                                        </li>
                                        <li className="flex items-start text-slate-300">
                                            <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                            <span>AI size özelleştirilmiş sorular soracak</span>
                                        </li>
                                        <li className="flex items-start text-slate-300">
                                            <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                            <span>Proje detaylarınız WhatsApp&apos;a aktarılır</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-orange-900/20 to-amber-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                                    <h4 className="text-white font-bold mb-3 flex items-center">
                                        <svg className="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Hizmetlerimiz
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">Web Geliştirme</span>
                                        <span className="text-xs px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">Mobil Uygulama</span>
                                        <span className="text-xs px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">Yapay Zeka</span>
                                        <span className="text-xs px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">RPA</span>
                                        <span className="text-xs px-2 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">UI/UX</span>
                                        <span className="text-xs px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300">IoT</span>
                                    </div>
                                </div>

                                {messages.length > 1 && (
                                    <button
                                        onClick={clearChat}
                                        className="w-full py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center space-x-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <span>Yeni Sohbet Başlat</span>
                                    </button>
                                )}
                            </div>

                            <div className="lg:col-span-8">
                                <div className="bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-blue-900/50 backdrop-blur-md rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl flex flex-col h-[600px] lg:h-[700px]">
                                    <div className="relative bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-purple-500/30 shrink-0">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                                                    <Image
                                                        src="/amblem-beyaz.png"
                                                        alt="Özden Solutions"
                                                        width={32}
                                                        height={32}
                                                        className="w-8 h-8 object-contain"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-purple-600"></div>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg">Özden AI Danışman</h3>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                    <p className="text-purple-100 text-xs">Aktif • Size yardımcı olmaya hazır</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4" ref={chatContainerRef} style={{ scrollbarWidth: 'thin', scrollbarColor: '#9333ea transparent' }}>
                                        {messages.map((message, index) => (
                                            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-3`}>
                                                {message.role === 'assistant' && (
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex flex-shrink-0 items-center justify-center shadow-lg">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                                                    : 'bg-slate-800/90 text-slate-100 border border-purple-500/20 shadow-lg'
                                                    }`}>
                                                    <div className="whitespace-pre-wrap leading-relaxed text-sm">
                                                        {message.content.split('\n').map((line, i) => (
                                                            <p key={i} className="mb-1 last:mb-0">{line}</p>
                                                        ))}
                                                    </div>
                                                    {message.options && message.options.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-4">
                                                            {message.options.map((option, optIndex) => (
                                                                <button
                                                                    key={optIndex}
                                                                    onClick={() => handleOptionClick(option)}
                                                                    disabled={isLoading}
                                                                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 border border-purple-500/40 hover:border-purple-400 text-purple-200 hover:text-white rounded-xl text-xs font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                                                >
                                                                    {option}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {message.role === 'user' && (
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex flex-shrink-0 items-center justify-center shadow-lg">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        {isLoading && (
                                            <div className="flex justify-start items-end space-x-3">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex flex-shrink-0 items-center justify-center">
                                                    <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                    </svg>
                                                </div>
                                                <div className="bg-slate-800/90 rounded-2xl px-5 py-4 border border-purple-500/20">
                                                    <div className="flex space-x-2">
                                                        <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce"></div>
                                                        <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                                                        <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    <div className="p-4 lg:p-6 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-md border-t border-purple-500/30 space-y-3 shrink-0">
                                        {messages.length > 1 && (
                                            <button
                                                onClick={summarizeAndSendToWhatsApp}
                                                disabled={isSummarizing}
                                                className="w-full py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                                            >
                                                {isSummarizing ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        <span>Proje Özeti Hazırlanıyor...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                        </svg>
                                                        <span>WhatsApp ile Teklif Al</span>
                                                    </>
                                                )}
                                            </button>
                                        )}

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
                                                placeholder="Projeniz hakkında bir şeyler yazın..."
                                                className="flex-1 bg-slate-800/80 border border-purple-500/30 rounded-xl px-5 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                disabled={isLoading}
                                            />
                                            <button
                                                onClick={sendMessage}
                                                disabled={isLoading || !inputMessage.trim()}
                                                className="px-5 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl transition-all disabled:opacity-50 shadow-lg hover:shadow-purple-500/30 hover:scale-105 disabled:scale-100"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-700/30 pt-10 mt-16">
                            <div className="text-center">
                                <p className="text-slate-400 text-sm">
                                    © 2025 Özden Solutions bir Özden Grup A.Ş. markasıdır. Tüm hakları saklıdır.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
