'use client';

export default function AutomationSystems() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>

        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 font-semibold text-sm tracking-wide uppercase">Otomasyon Çözümleri</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                  Akıllı Otomasyon<br />Sistemleri
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Endüstriyel otomasyondan ev otomasyonuna, iş süreçlerinizi optimize eden akıllı ve güvenilir otomasyon çözümleri
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">100+</div>
                  <div className="text-slate-400 text-sm">Kurulum Projesi</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">97%</div>
                  <div className="text-slate-400 text-sm">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">12+</div>
                  <div className="text-slate-400 text-sm">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">7/24</div>
                  <div className="text-slate-400 text-sm">Canlı Destek</div>
                </div>
              </div>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Otomasyon Çözümlerimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  Üretimden günlük yaşama, her alanda verimliliği artıran, enerji tasarrufu sağlayan ve konforunuzu yükselten otomasyon sistemleri sunuyoruz.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-emerald-900/20 to-green-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">Endüstriyel Otomasyon</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    PLC programlama, SCADA sistemleri, üretim hattı otomasyonu ve endüstriyel robot entegrasyonu ile üretim süreçlerinizi optimize ediyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">PLC</span>
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">SCADA</span>
                    <span className="text-xs px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400">HMI</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-teal-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Akıllı Ev Sistemleri</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Aydınlatma, ısıtma, güvenlik ve eğlence sistemlerini tek bir platformdan kontrol edin. Sesli asistan entegrasyonu ve uzaktan erişim.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">IoT</span>
                    <span className="text-xs px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400">Smart Home</span>
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">Voice Control</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-teal-900/20 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">Güvenlik Sistemleri</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Kamera sistemleri, alarm, erişim kontrolü ve yangın algılama sistemleri. 7/24 izleme ve acil durum bildirimleri ile güvenliğinizi sağlıyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400">CCTV</span>
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">Access Control</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Alarm</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Enerji Yönetimi</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Akıllı sayaçlar, enerji izleme sistemleri ve otomatik optimizasyon ile enerji tüketiminizi %40&apos;a kadar azaltın ve maliyetlerinizi düşürün.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">Smart Meter</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Monitoring</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Optimization</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-lime-900/20 to-green-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-lime-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-lime-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-lime-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-300 transition-colors">HVAC Otomasyonu</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Isıtma, havalandırma ve klima sistemlerinin otomasyonu. Akıllı termostatlar ve bölgesel kontrol ile maksimum konfor ve verimlilik.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-400">Smart HVAC</span>
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">Climate Control</span>
                    <span className="text-xs px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">Zone Control</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-sky-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-sky-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">Uzaktan İzleme & Kontrol</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Mobil uygulama ve web paneli ile dünyanın her yerinden sistemlerinizi izleyin ve kontrol edin. Gerçek zamanlı bildirimler ve raporlama.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400">Mobile App</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Web Panel</span>
                    <span className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400">Real-time</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Uygulama Sürecimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Profesyonel kurulum ve devreye alma ile sorunsuz geçiş
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 hidden lg:block"></div>

                <div className="space-y-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-emerald-900/20 to-green-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-3">İhtiyaç Analizi & Keşif</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Mekanınızı inceliyor, ihtiyaçlarınızı dinliyor ve size özel otomasyon çözümü planlıyoruz. Detaylı teknik rapor ve fiyat teklifi sunuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/50 border-4 border-slate-900">
                        1
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-500/50 border-4 border-slate-900">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-teal-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-3">Sistem Tasarımı & Planlama</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Sistem mimarisi, ekipman seçimi ve kurulum planı hazırlıyoruz. 3D görselleştirme ve detaylı teknik çizimlerle onayınızı alıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-teal-900/20 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">Montaj & Kurulum</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Profesyonel ekibimiz tüm ekipmanları kurarak kablolama ve network altyapısını tamamlıyor. Temiz ve düzenli kurulum garantisi veriyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-teal-500/50 border-4 border-slate-900">
                        3
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/50 border-4 border-slate-900">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">Programlama & Konfigürasyon</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Sistemleri programlayarak sizin tercihlerinize göre özelleştiriyoruz. Senaryolar oluşturuyor ve tüm cihazları entegre ediyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-lime-900/20 to-green-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-lime-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-3">Test & Devreye Alma</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Tüm sistemleri test ederek sorunsuz çalıştığından emin oluyoruz. Simülasyon ve gerçek senaryolarla kalite kontrolü yapıyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-lime-500/50 border-4 border-slate-900">
                        5
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-sky-500/50 border-4 border-slate-900">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-sky-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-3">Eğitim & Teslim</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Sistemlerin nasıl kullanılacağını anlatıyor, kullanım kılavuzu veriyoruz. 7/24 teknik destek ve bakım hizmetleri sunuyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Neden Özden Solutions?
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Otomasyon projelerinizde güvenilir çözüm ortağınız
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Uzman Ekip</h4>
                    <p className="text-slate-400 text-sm">12+ yıllık deneyime sahip otomasyon mühendisleri ve teknisyenlerden oluşan profesyonel ekip</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Uygun Maliyetli</h4>
                    <p className="text-slate-400 text-sm">Rekabetçi fiyatlarla kaliteli hizmet ve yatırım geri dönüş garantisi</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Güvenlik Öncelikli</h4>
                    <p className="text-slate-400 text-sm">Şifreli iletişim, güvenli protokoller ve veri gizliliği standartlarına tam uyum</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Enerji Tasarrufu</h4>
                    <p className="text-slate-400 text-sm">Akıllı optimizasyon ile %40&apos;a varan enerji tasarrufu ve maliyet düşürme</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Sürekli Güncelleme</h4>
                    <p className="text-slate-400 text-sm">Yazılım güncellemeleri, yeni özellikler ve iyileştirmelerle sürekli gelişim</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">7/24 Destek</h4>
                    <p className="text-slate-400 text-sm">Kesintisiz teknik destek, acil müdahale ve uzaktan bakım hizmetleri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Projenizi Konuşalım
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Otomasyon sistemi kurmak veya mevcut sisteminizi yenilemek için hemen iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
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
