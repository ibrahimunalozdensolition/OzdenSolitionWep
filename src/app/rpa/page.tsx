'use client';

export default function RPA() {

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
      </div>
    </div>
  );
}
