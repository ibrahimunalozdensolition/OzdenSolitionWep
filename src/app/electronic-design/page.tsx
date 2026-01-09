'use client';

export default function ElectronicDesign() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
                  <span className="text-yellow-400 font-semibold text-sm tracking-wide uppercase">Elektronik Çözümleri</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                  Profesyonel Elektronik<br/>Kart Tasarım Hizmetleri
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                  PCB tasarımından prototip üretimine, endüstriyel uygulamalardan özel projelere kadar kapsamlı elektronik tasarım çözümleri
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-slate-400 text-sm">Tasarlanan PCB</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">99%</div>
                  <div className="text-slate-400 text-sm">Başarı Oranı</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-slate-400 text-sm">Yıllık Tecrübe</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">7/24</div>
                  <div className="text-slate-400 text-sm">Teknik Destek</div>
                </div>
              </div>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Elektronik Tasarım Çözümlerimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  En son teknoloji ve endüstri standartlarıyla, fikrinizi gerçeğe dönüştürüyoruz. Şematik tasarımdan PCB üretimine kadar her aşamada yanınızdayız.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-yellow-900/20 to-orange-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">PCB Tasarım</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Tek katmanlıdan çok katmanlı PCB tasarımlarına kadar profesyonel devre kartı çözümleri. Altium Designer, KiCAD ve Eagle ile üretim hazır dosyalar.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400">Multilayer</span>
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">HDI</span>
                    <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">Flex PCB</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-orange-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Şematik Tasarım</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Detaylı elektronik devre şemaları ve sistem mimarisi tasarımı. Analog, dijital ve güç elektroniği devre tasarımları ile teknik dokümantasyon.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">Analog</span>
                    <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">Digital</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">Power</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-red-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-red-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">Prototip Üretim</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Hızlı prototip üretimi ve test hizmetleri. SMD ve THT montaj, programlama ve kalite kontrol süreçleriyle teslim ediyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">SMD Montaj</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">Test</span>
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">QC</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-amber-900/20 to-yellow-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">Gömülü Sistem Tasarımı</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Mikrodenetleyici ve mikro işlemci tabanlı sistem tasarımları. ARM, AVR, PIC, ESP32 ve STM32 platformları için donanım ve yazılım geliştirme.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400">ARM</span>
                    <span className="text-xs px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400">ESP32</span>
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">STM32</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-lime-900/20 to-green-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-lime-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-lime-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-lime-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-300 transition-colors">Güç Elektroniği</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    AC/DC ve DC/DC dönüştürücü tasarımları, güç kaynağı sistemleri, batarya yönetimi ve enerji verimliliği çözümleri.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-400">PSU</span>
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">BMS</span>
                    <span className="text-xs px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400">SMPS</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-teal-900/20 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">Teknik Dokümantasyon</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Detaylı BOM listesi, montaj çizimleri, test prosedürleri ve kullanım kılavuzları. Üretim için gerekli tüm teknik dökümanlar.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400">BOM</span>
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">Assembly</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Gerber</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Tasarım Sürecimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Profesyonel tasarım aşamalarıyla projelerinizi hayata geçiriyoruz
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 hidden lg:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-yellow-900/20 to-orange-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">Konsept & Gereksinim Analizi</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Projenizin teknik gereksinimlerini, performans kriterlerini ve maliyet hedeflerini belirleyerek kapsamlı bir tasarım planı oluşturuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-yellow-500/50 border-4 border-slate-900">
                        1
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/50 border-4 border-slate-900">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-orange-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3">Şematik Tasarım</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Detaylı elektronik devre şeması oluşturuyor, komponent seçimi yapıyor ve devrenin simülasyonunu gerçekleştiriyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-red-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-3">PCB Layout Tasarım</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Optimum performans için PCB yerleşimi, routing, EMI/EMC uyumluluğu ve üretim kurallarına uygun tasarım yapıyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-red-500/50 border-4 border-slate-900">
                        3
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-amber-500/50 border-4 border-slate-900">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-amber-900/20 to-yellow-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-3">DRC & Doğrulama</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Design Rule Check, elektriksel test, termal analiz ve sinyal bütünlüğü kontrolü ile tasarımı doğruluyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-lime-900/20 to-green-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-lime-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-3">Prototip Üretim</h3>
                        <p className="text-slate-300 leading-relaxed">
                          PCB üretimi, komponent montajı ve programlama ile çalışır prototip hazırlıyor, gerekli testleri yapıyoruz.
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
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-teal-500/50 border-4 border-slate-900">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-teal-900/20 to-cyan-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">Teslim & Destek</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Tüm üretim dosyaları, teknik dokümantasyon ve gereken eğitimlerle birlikte teslim ediyor, sürekli destek sağlıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Neden Özden Solutions?
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Elektronik tasarım projelerinizde güvenilir çözüm ortağınız
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Uzman Mühendis Kadrosu</h4>
                    <p className="text-slate-400 text-sm">15+ yıllık tecrübeye sahip elektronik tasarım mühendisleri ile profesyonel hizmet</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Hızlı Prototip Üretim</h4>
                    <p className="text-slate-400 text-sm">Kısa sürede çalışır prototip teslimi ve hızlı revizyon olanağı</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Kalite Güvencesi</h4>
                    <p className="text-slate-400 text-sm">Endüstri standartlarına uygun tasarım ve üretim kalite kontrol süreçleri</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Uygun Maliyetli Çözümler</h4>
                    <p className="text-slate-400 text-sm">Rekabetçi fiyatlarla yüksek kaliteli elektronik tasarım hizmetleri</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Kapsamlı Simülasyon</h4>
                    <p className="text-slate-400 text-sm">SPICE, termal ve EMI/EMC simülasyonları ile risk minimizasyonu</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Sürekli Destek</h4>
                    <p className="text-slate-400 text-sm">Proje sonrası revizyon, teknik destek ve danışmanlık hizmetleri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Projenizi Görüşelim
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Elektronik tasarım projeniz için detaylı teklif almak üzere hemen iletişime geçin. Uzman mühendislerimiz en uygun çözümü sunmak için hazır.
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
