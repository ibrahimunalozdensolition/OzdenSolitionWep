'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WebDevelopment() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
              <div className="space-y-6">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full">
                  <span className="text-green-400 font-semibold text-sm tracking-wide uppercase">Web Çözümleri</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent leading-tight">
                  Profesyonel Web Uygulaması<br/>& Web Sitesi Geliştirme
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Dijital varlığınızı güçlendiren, iş hedeflerinize ulaşmanızı sağlayan kurumsal web çözümleri
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">150+</div>
                  <div className="text-slate-400 text-sm">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">98%</div>
                  <div className="text-slate-400 text-sm">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">7/24</div>
                  <div className="text-slate-400 text-sm">Teknik Destek</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent mb-2">11+</div>
                  <div className="text-slate-400 text-sm">Yıllık Deneyim</div>
                </div>
              </div>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  Kurumsal Web Çözümlerimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  İşletmenizin dijital dönüşümünde yanınızdayız. Modern teknolojiler ve kanıtlanmış metodolojiler ile markanıza değer katan web çözümleri sunuyoruz.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Kurumsal Web Siteleri</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Markanızın dijital yüzü olan, SEO uyumlu, hızlı ve güvenli kurumsal web siteleri geliştiriyoruz. Profesyonel tasarım ve güçlü altyapı ile rakiplerinizden öne çıkın.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">Responsive</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">SEO Ready</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">CMS</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">E-Ticaret Platformları</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Güvenli ödeme sistemleri, stok yönetimi ve müşteri takibi ile entegre, satışlarınızı artıracak profesyonel e-ticaret çözümleri sunuyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Güvenli Ödeme</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Stok Yönetimi</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">CRM</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Özel Web Uygulamaları</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    İş süreçlerinize özel, ölçeklenebilir ve yüksek performanslı web uygulamaları geliştiriyoruz. SaaS, Dashboard, Panel ve özel yazılım çözümleri.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">Özelleştirilebilir</span>
                    <span className="text-xs px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400">Ölçeklenebilir</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Cloud</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-orange-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Responsive Tasarım</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Mobil cihazlardan masaüstü bilgisayarlara kadar tüm ekran boyutlarında kusursuz görüntüleme ve kullanıcı deneyimi sunuyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">Mobile First</span>
                    <span className="text-xs px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400">Cross-Platform</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">SEO & Dijital Pazarlama</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Arama motorlarında üst sıralarda yer almanız için teknik SEO, içerik optimizasyonu ve performans iyileştirme hizmetleri sunuyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">Google SEO</span>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">Analytics</span>
                  </div>
                </div>

                <div className="group relative p-8 bg-gradient-to-br from-slate-900/60 via-yellow-900/20 to-orange-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">Performans Optimizasyonu</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    Hızlı yükleme süreleri, optimize edilmiş kodlama ve CDN entegrasyonu ile maksimum performans ve kullanıcı deneyimi sağlıyoruz.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400">Hızlı</span>
                    <span className="text-xs px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">Optimize</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                   Geliştirme Sürecimiz
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden lg:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-green-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-3">Keşif & İhtiyaç Analizi</h3>
                        <p className="text-slate-300 leading-relaxed">
                          İşletmenizin hedeflerini, kullanıcı ihtiyaçlarını ve teknik gereksinimleri detaylı şekilde analiz ediyoruz. Kapsamlı bir proje yol haritası oluşturuyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-500/50 border-4 border-slate-900">
                        1
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/50 border-4 border-slate-900">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">UX/UI Tasarım</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Kullanıcı deneyimini merkeze alarak modern, estetik ve işlevsel arayüz tasarımları oluşturuyoruz. Wireframe, mockup ve prototip süreçlerini yönetiyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">Yazılım Geliştirme</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Clean code prensipleri ve modern teknolojilerle kodlama yapıyoruz. Agile metodoloji ile iteratif geliştirme ve düzenli sprint toplantıları gerçekleştiriyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/50 border-4 border-slate-900">
                        3
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/50 border-4 border-slate-900">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-orange-900/20 to-red-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-3">Test & Kalite Kontrol</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Unit test, integration test ve kullanıcı kabul testleri ile yazılımın kalitesini garanti altına alıyoruz. Performans ve güvenlik testleri yapıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 lg:text-right">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-3">Deployment & Yayın</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Projenizi güvenli ve sorunsuz bir şekilde canlıya alıyoruz. SSL, CDN, backup ve monitoring sistemlerini kuruyoruz.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/50 border-4 border-slate-900">
                        5
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-yellow-500/50 border-4 border-slate-900">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-slate-900/60 via-yellow-900/20 to-orange-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-3">Destek & Bakım</h3>
                        <p className="text-slate-300 leading-relaxed">
                          7/24 teknik destek, düzenli güncellemeler, güvenlik yamaları ve performans optimizasyonu ile yanınızdayız.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  Neden Özden Solutions?
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Web projelerinizde güvenilir çözüm ortağınız
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Deneyimli Ekip</h4>
                    <p className="text-slate-400 text-sm">11+ yıllık deneyime sahip uzman yazılım geliştiriciler ve tasarımcılardan oluşan ekibimiz</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Zamanında Teslimat</h4>
                    <p className="text-slate-400 text-sm">Belirlenen sürelere uygun, zamanında ve kaliteli proje teslimatı garantisi</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Güvenlik Öncelikli</h4>
                    <p className="text-slate-400 text-sm">SSL sertifikası, güvenli kodlama ve veri koruma standartlarına uygun geliştirme</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-blue-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">7/24 Destek</h4>
                    <p className="text-slate-400 text-sm">Sürekli teknik destek, güncellemeler ve bakım hizmetleri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                  Projenizi Konuşalım
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Detaylı teklif almak için hemen iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button 
                  onClick={() => setShowWhatsAppModal(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:from-green-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp ile İletişim</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="WhatsApp ile iletişime geçin"
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
