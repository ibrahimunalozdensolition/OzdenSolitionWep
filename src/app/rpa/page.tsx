'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function RPA() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full">
                  <span className="text-orange-400 font-semibold text-sm tracking-wide uppercase">Robotik Süreç Otomasyonu</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                  İş Süreçlerinizi<br/>Otomatikleştirin
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Tekrarlayan görevleri robotlarla otomatikleştirerek verimliliği %80&apos;e kadar artırın, maliyetleri düşürün ve hata oranını sıfırlayın
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">80%</div>
                  <div className="text-slate-400 text-sm">Verimlilik Artışı</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-2">100+</div>
                  <div className="text-slate-400 text-sm">Otomasyon Projesi</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-slate-400 text-sm">Kesintisiz Çalışma</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">%0</div>
                  <div className="text-slate-400 text-sm">Hata Oranı</div>
                </div>
              </div>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Robotik Süreç Otomasyonu Çözümlerimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  UiPath, Automation Anywhere ve Blue Prism ile kurumsal düzeyde robotik süreç otomasyonu çözümleri
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Veri Girişi Otomasyonu", desc: "Form doldurma, veri aktarımı ve kayıt işlemlerini otomatik hale getirin. İnsan hatalarını ortadan kaldırın.", color: "orange", tags: ["Data Entry", "Web Scraping", "OCR"] },
                  { title: "Finans & Muhasebe RPA", desc: "Fatura işleme, ödeme onayları, raporlama ve mutabakat süreçlerini otomatikleştirin.", color: "red", tags: ["Invoice Processing", "Reporting", "Reconciliation"] },
                  { title: "İK Süreçleri Otomasyonu", desc: "Bordro hesaplama, işe alım süreçleri ve çalışan yönetimi görevlerini robotlarla yapın.", color: "rose", tags: ["Payroll", "Onboarding", "Time Tracking"] },
                  { title: "Müşteri Hizmetleri RPA", desc: "Müşteri taleplerini otomatik yanıtlama, ticket yönetimi ve CRM entegrasyonu.", color: "pink", tags: ["Ticket System", "Auto Response", "CRM"] },
                  { title: "E-ticaret Otomasyonu", desc: "Sipariş işleme, stok güncellemeleri, fiyat takibi ve sevkiyat süreçlerini otomatikleştirin.", color: "amber", tags: ["Order Processing", "Inventory", "Pricing"] },
                  { title: "Raporlama & Analiz", desc: "Otomatik veri toplama, rapor oluşturma ve dashboard güncellemeleri.", color: "yellow", tags: ["Dashboard", "Analytics", "Reporting"] }
                ].map((item, i) => (
                  <div key={i} className={`group relative p-8 bg-gradient-to-br from-slate-900/60 via-${item.color}-900/20 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-${item.color}-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${item.color}-500/20`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${item.color}-500/10 to-transparent rounded-bl-full`}></div>
                    <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-${item.color}-500/30`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-${item.color}-300 transition-colors`}>{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className={`text-xs px-3 py-1 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-full text-${item.color}-400`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Robotik Süreç Otomasyonu Yolculuğunuza Başlayın
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  İş süreçlerinizi analiz ederek size özel robotik süreç otomasyonu çözümü oluşturalım
                </p>
              </div>
              
              <button 
                onClick={() => setShowWhatsAppModal(true)}
                className="group relative px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:from-orange-700 hover:to-red-700 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
                  <span>WhatsApp ile İletişim</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
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
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
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
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
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
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl hover:from-green-600/30 hover:to-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
                  onClick={() => setShowWhatsAppModal(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">0(539) 888 45 61</span>
                  </div>
                  <svg className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/905510670094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl hover:from-green-600/30 hover:to-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
                  onClick={() => setShowWhatsAppModal(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">0(551) 067 00 94</span>
                  </div>
                  <svg className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
