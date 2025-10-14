'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function GraphicDesign() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full">
                <span className="text-pink-400 font-semibold text-sm tracking-wide uppercase">Grafik Tasarım & UI/UX</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Markanıza Görsel Kimlik<br/>Kazandırın
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                Logo tasarımından kullanıcı arayüzüne, marka kimliğinden sosyal medya tasarımlarına profesyonel grafik çözümleri
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-slate-400 text-sm">Tasarım Projesi</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-slate-400 text-sm">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent mb-2">48h</div>
                  <div className="text-slate-400 text-sm">Hızlı Teslimat</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">∞</div>
                  <div className="text-slate-400 text-sm">Revizyon</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tasarım Hizmetlerimiz
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Logo & Marka Kimliği", desc: "Benzersiz ve akılda kalıcı logo tasarımları, marka renk paleti ve tipografi çalışmaları", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", color: "pink" },
                { title: "UI/UX Design", desc: "Kullanıcı dostu arayüz tasarımları, wireframe, prototipleme ve kullanılabilirlik testleri", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "purple" },
                { title: "Sosyal Medya Tasarımı", desc: "Instagram, Facebook, LinkedIn için göz alıcı görsel içerikler ve story tasarımları", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", color: "fuchsia" },
                { title: "Katalog & Broşür", desc: "Kurumsal kataloglar, ürün broşürleri ve tanıtım materyalleri tasarımı", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "rose" },
                { title: "Ambalaj Tasarımı", desc: "Ürün ambalajı, etiket ve kutu tasarımları ile raf görünürlüğünü artırın", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", color: "violet" },
                { title: "İllüstrasyon & İkonlar", desc: "Özel çizimler, karakter tasarımı ve ikon setleri oluşturuyoruz", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", color: "pink" }
              ].map((item, i) => (
                <div key={i} className={`group relative p-8 bg-gradient-to-br from-slate-900/60 via-${item.color}-900/20 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-${item.color}-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl mb-6 flex items-center justify-center shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-${item.color}-300 transition-colors`}>{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tasarım Projenize Başlayın
            </h2>
            <button 
              onClick={() => setShowWhatsAppModal(true)}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:from-pink-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
            >
              <span className="relative z-10">WhatsApp ile İletişim</span>
            </button>
          </div>

          <div className="border-t border-slate-700/30 pt-10 mt-20 max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                © 2025 Özden Solutions bir Özden Grup A.Ş. markasıdır. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </main>

        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <Image 
            src="/whatsapp-logo.svg" 
            alt="WhatsApp" 
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </button>

        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-slate-900/90 via-purple-900/60 to-blue-900/80 rounded-2xl p-6 max-w-sm w-full mx-4 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Image 
                      src="/whatsapp-logo.svg" 
                      alt="WhatsApp" 
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp İletişim</h3>
                </div>
                <button onClick={() => setShowWhatsAppModal(false)} className="text-slate-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-slate-300 mb-6 text-center">Hangi numaradan iletişime geçmek istiyorsunuz?</p>
              <div className="space-y-3">
                <a href="https://wa.me/905398884561" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl hover:from-green-600/30 hover:to-green-500/30 transition-all" onClick={() => setShowWhatsAppModal(false)}>
                  <span className="text-white font-medium">0(539) 888 45 61</span>
                </a>
                <a href="https://wa.me/905510670094" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl hover:from-green-600/30 hover:to-green-500/30 transition-all" onClick={() => setShowWhatsAppModal(false)}>
                  <span className="text-white font-medium">0(551) 067 00 94</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
