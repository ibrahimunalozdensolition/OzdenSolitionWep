'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ElectronicDesign() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

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
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button 
                  onClick={() => setShowWhatsAppModal(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:from-yellow-700 hover:to-orange-700 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp ile İletişim</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
