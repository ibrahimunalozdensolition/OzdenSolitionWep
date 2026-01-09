'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SocialMediaManagement() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-full">
              <span className="text-rose-400 font-semibold text-sm tracking-wide uppercase">Sosyal Medya Yönetimi</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent leading-tight">
              Dijital Varlığınızı<br/>Güçlendirin
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
              İçerik üretiminden topluluk yönetimine, reklam kampanyalarından analitiğe profesyonel sosyal medya hizmetleri
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">1M+</div>
                <div className="text-slate-400 text-sm">Erişim</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-slate-400 text-sm">İçerik</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-2">%300</div>
                <div className="text-slate-400 text-sm">Engagement Artışı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-slate-400 text-sm">Marka Yönetimi</div>
              </div>
            </div>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "İçerik Üretimi", desc: "Profesyonel görseller, videolar ve metinlerle markanıza özgü içerikler", color: "rose" },
                { title: "Topluluk Yönetimi", desc: "Yorumları yönetme, takipçilerle etkileşim ve marka sadakati oluşturma", color: "pink" },
                { title: "Reklam Kampanyaları", desc: "Facebook, Instagram, LinkedIn ve TikTok reklam yönetimi", color: "fuchsia" },
                { title: "İnfluencer İşbirlikleri", desc: "Doğru influencer&apos;larla iş birlikleri kurma ve yönetme", color: "purple" },
                { title: "Analiz & Raporlama", desc: "Detaylı metrik analizi ve stratejik öneriler", color: "violet" },
                { title: "Strateji Geliştirme", desc: "Hedef kitleye özel sosyal medya stratejileri", color: "rose" }
              ].map((item, i) => (
                <div key={i} className={`p-8 bg-gradient-to-br from-slate-900/60 via-${item.color}-900/20 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-${item.color}-500/50 transition-all duration-500`}>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Sosyal Medya Yönetimine Başlayın
            </h2>
            <button 
              onClick={() => setShowWhatsAppModal(true)}
              className="px-10 py-5 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:from-rose-700 hover:to-pink-700 hover:scale-105"
            >
              WhatsApp ile İletişim
            </button>
          </div>
        </main>

        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-slate-900/90 via-purple-900/60 to-blue-900/80 rounded-2xl p-6 max-w-sm w-full mx-4 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">WhatsApp İletişim</h3>
                <button onClick={() => setShowWhatsAppModal(false)} className="text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-3">
                <a href="https://wa.me/905398884561" target="_blank" rel="noopener noreferrer" className="block p-4 bg-green-600/20 border border-green-500/30 rounded-xl text-white text-center" onClick={() => setShowWhatsAppModal(false)}>0(539) 888 45 61</a>
                <a href="https://wa.me/905510670094" target="_blank" rel="noopener noreferrer" className="block p-4 bg-green-600/20 border border-green-500/30 rounded-xl text-white text-center" onClick={() => setShowWhatsAppModal(false)}>0(551) 067 00 94</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
