'use client';

export default function MobileAppDevelopment() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>

        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full">
                  <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">Mobil Çözümler</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  iOS & Android<br />Mobil Uygulama Geliştirme
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Milyonlarca kullanıcıya ulaşan, modern tasarım ve güçlü performans sunan native ve cross-platform mobil uygulamalar
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-slate-400 text-sm">Yayınlanan Uygulama</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">500K+</div>
                  <div className="text-slate-400 text-sm">Aktif Kullanıcı</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">4.8★</div>
                  <div className="text-slate-400 text-sm">Ortalama Puan</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-slate-400 text-sm">Yıllık Deneyim</div>
                </div>
              </div>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mobil Uygulama Çözümlerimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  iOS ve Android platformları için kullanıcı deneyimini ön planda tutan, performans odaklı mobil uygulamalar geliştiriyoruz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">iOS Uygulama Geliştirme</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Swift ve SwiftUI ile native iOS uygulamaları. App Store optimizasyonu, Apple standartlarına uygunluk ve performans odaklı kodlama.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Swift</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">SwiftUI</span>
                    <span className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400">UIKit</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-indigo-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Android Uygulama Geliştirme</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Kotlin ve Jetpack Compose ile modern Android uygulamaları. Material Design 3, Google Play optimizasyonu ve geniş cihaz uyumluluğu.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Kotlin</span>
                    <span className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400">Jetpack</span>
                    <span className="text-xs px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400">Compose</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-indigo-900/20 to-violet-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">Cross-Platform Geliştirme</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    React Native ve Flutter ile tek kod tabanından iOS ve Android uygulamaları. Hızlı geliştirme süreci ve maliyet avantajı.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400">React Native</span>
                    <span className="text-xs px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400">Flutter</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-violet-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">Backend & API Entegrasyonu</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    RESTful API, GraphQL, Firebase ve AWS entegrasyonu. Real-time database, push notification ve cloud storage çözümleri.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400">REST API</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Firebase</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">AWS</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-fuchsia-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fuchsia-300 transition-colors">UI/UX Tasarım</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Kullanıcı odaklı arayüz tasarımı, wireframe, prototip ve kullanıcı testleri. Modern tasarım trendleri ve platform guideline&apos;larına uyum.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-400">Figma</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">Sketch</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Adobe XD</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-rose-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-rose-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-rose-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-300 transition-colors">Test & Kalite Güvence</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Unit test, UI test, integration test ve performans testleri. Beta test yönetimi ve App Store/Google Play yayınlama süreci.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400">XCTest</span>
                    <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">Espresso</span>
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">Jest</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Geliştirme Sürecimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Fikir aşamasından App Store/Google Play yayınına kadar profesyonel süreç
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 hidden lg:block"></div>

                <div className="space-y-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">Keşif & Planlama</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Uygulama fikrinizi detaylı şekilde analiz ediyor, hedef kitleyi belirliyoruz. Rekabetçi analiz ve feature roadmap oluşturuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/50 border-4 border-slate-900">
                        1
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/50 border-4 border-slate-900">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-indigo-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3">UI/UX Tasarım</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Kullanıcı akışları, wireframe ve high-fidelity tasarımlar hazırlıyoruz. İnteraktif prototip ile kullanıcı testleri yapıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-indigo-900/20 to-violet-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-3">Agile Geliştirme</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Sprint&apos;ler halinde iteratif geliştirme yapıyoruz. Düzenli demo ve geri bildirim toplantıları ile süreci yönetiyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-500/50 border-4 border-slate-900">
                        3
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-violet-500/50 border-4 border-slate-900">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-violet-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-3">Test & QA</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Kapsamlı test süreçleri ile hata tespiti ve düzeltme yapıyoruz. Beta test programı ile gerçek kullanıcı geri bildirimi alıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-fuchsia-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-3">Yayınlama & Launch</h3>
                        <p className="text-slate-300 leading-relaxed">
                          App Store ve Google Play optimizasyonu yaparak uygulamanızı yayınlıyoruz. Launch stratejisi ve pazarlama desteği sunuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-fuchsia-500/50 border-4 border-slate-900">
                        5
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-rose-500/50 border-4 border-slate-900">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-rose-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-rose-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent mb-3">Destek & Güncelleme</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Sürekli destek, performans izleme ve düzenli güncellemeler ile uygulamanızın başarısını garanti ediyoruz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Neden Özden Solutions?
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Mobil uygulama projelerinizde güvenilir çözüm ortağınız
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">20+ Yayınlanan Uygulama</h4>
                    <p className="text-slate-400 text-sm">Kanıtlanmış başarı hikayesi ile iOS ve Android platformlarında geniş portföy</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Hızlı ve Esnek</h4>
                    <p className="text-slate-400 text-sm">Agile metodoloji ile hızlı geliştirme ve değişen ihtiyaçlara adaptasyon</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Zamanında Teslimat</h4>
                    <p className="text-slate-400 text-sm">Sprint planlaması ve düzenli takip ile belirlenen sürede proje teslimi</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Güvenlik & Gizlilik</h4>
                    <p className="text-slate-400 text-sm">NDA, veri şifreleme ve güvenli kodlama standartları ile tam koruma</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Uygun Fiyat</h4>
                    <p className="text-slate-400 text-sm">Şeffaf fiyatlandırma ve maliyet optimizasyonu ile bütçe dostu çözümler</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">7/24 Destek</h4>
                    <p className="text-slate-400 text-sm">Launch sonrası sürekli teknik destek ve güncellemeler</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mobil Uygulamanızı Hayata Geçirin
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Uygulama fikriniz için detaylı görüşme ve teklif almak üzere hemen iletişime geçin.
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
