'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 pb-20">
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Özden Solutions
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 font-light">
                İnovatif çözümlerle geleceği şekillendiriyoruz.              </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Modern teknolojilerle sektöre özel yazılım, tasarım ve otomasyon çözümleri sunuyoruz.
                Kullanıcı dostu arayüzler ve 3D görsel deneyimlerle dijital etkileşimi yeniden tanımlıyoruz.

                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <span className="relative z-10">Hizmetlerimizi Keşfediniz</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 border-2 border-purple-500/50 rounded-full text-slate-300 font-semibold text-lg transition-all duration-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 hover:scale-105">
                  İletişime Geçin
                </button>
              </div>
            </div>

            <div className="text-center space-y-4 max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hizmetlerimiz
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
               Dijital dönüşüm yolculuğunuzda ihtiyaç duyduğunuz tüm çözümleri tek çatı altında sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Link href="/mobile-app-development" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Mobil Uygulama Geliştirme</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">iOS ve Android platformları için native ve cross-platform mobil uygulama çözümleri</p>
              </Link>

              <Link href="/web-development" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Web Uygulaması & Web Sitesi</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Modern, responsive ve kullanıcı dostu web tasarım ve yazılım çözümleri</p>
              </Link>

              <Link href="/rpa" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">RPA (Robotic Process Automation)</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">İş süreçlerini otomatikleştiren akıllı robot çözümleri</p>
              </Link>

              <Link href="/graphic-design" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Grafik Tasarım & UI/UX</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Marka kimliği, logo tasarımı ve kullanıcı deneyimi (UX) odaklı arayüz tasarımları</p>
              </Link>

              <Link href="/ai-solutions" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Yapay Zeka Çözümleri</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Makine öğrenmesi, derin öğrenme ve yapay zeka entegrasyon çözümleri</p>
              </Link>

              <Link href="/pcb-design" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Elektronik Kart Tasarım</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Özel elektronik devre ve PCB tasarım hizmetleri</p>
              </Link>

              <Link href="/automation-systems" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">Otomasyon Sistemleri</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Endüstriyel ve ev otomasyonu için özel sistem çözümleri</p>
              </Link>

              <Link href="/social-media-management" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-300 transition-colors">Sosyal Medya Yönetimi</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Dijital pazarlama ve sosyal medya strateji geliştirme hizmetleri</p>
              </Link>

              <Link href="/microcontroller-programming" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">Mikroişlemci Programlama</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Arduino, Raspberry Pi ve diğer mikrodenetleyiciler için özel programlama çözümleri</p>
              </Link>

              <Link href="/3d-printing" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">3D Baskı Hizmetleri</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Prototipleme ve özel ihtiyaçlara yönelik 3D baskı çözümleri</p>
              </Link>

              <Link href="/cybersecurity" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">Siber Güvenlik & Veri Koruması</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Kurumsal siber güvenlik çözümleri, penetrasyon testleri ve veri koruma danışmanlığı</p>
              </Link>

              <Link href="/cloud-devops" className="group relative p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">Bulut Çözümleri & DevOps</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">AWS, Azure ve Google Cloud altyapılarıyla bulut sistem kurulumu ve DevOps süreç yönetimi</p>
              </Link>
            </div>
            
            <div className="text-center space-y-4 mb-16 max-w-7xl mx-auto pt-20">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hemen İletişime Geçin!
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Projelerinizi hayata geçirmek ve size en uygun çözümü sunmak için buradayız
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Sosyal Medya Hesaplarımız</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.facebook.com/ozdensolutionstr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="Facebook sayfamızı ziyaret edin"
                  >
                    <Image 
                      src="/Facebook_Logo_(2019).png" 
                      alt="Facebook" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">Facebook</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/ozdensolutionstr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="Instagram sayfamızı ziyaret edin"
                  >
                    <Image 
                      src="/instagram-logo.svg?v=2" 
                      alt="Instagram" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">Instagram</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/@ozdensolutionstr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="YouTube kanalımızı ziyaret edin"
                  >
                    <Image 
                      src="/youtube-logo.svg" 
                      alt="YouTube" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">YouTube</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.tiktok.com/@ozdensolutionstr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="TikTok hesabımızı ziyaret edin"
                  >
                    <Image 
                      src="/tiktok-svgrepo-com-2.svg" 
                      alt="TikTok" 
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">TikTok</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>

                  <a 
                    href="https://sosyal.teknofest.app/@ozdensolutionstr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-700/90 via-purple-600/80 to-blue-600/70 hover:from-slate-600 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 w-full border border-blue-500/40 hover:border-blue-400 cursor-pointer"
                    title="Teknofest sosyal platformumuzu ziyaret edin"
                  >
                    <Image 
                      src="/t3-logo-TR-01.png" 
                      alt="Teknofest" 
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">Teknofest</span>
                      <span className="text-blue-100 text-sm group-hover:text-white transition-colors">@ozdensolutionstr</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Konum</h3>
                  <div className="rounded-xl overflow-hidden border border-slate-700/30 shadow-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4958!2d28.8866497!3d41.0549524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb59b7d7a0e1%3A0x56dc6e8a35ef1e5a!2z%C3%96zden%20FMCG!5e0!3m2!1str!2str!4v1640995200000!5m2!1str!2str"
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                    <div className="mt-4 text-center">
                      <a
                        href="https://www.google.com/maps/place/Özden+FMCG/@41.0549524,28.8866497,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb59b7d7a0e1:0x56dc6e8a35ef1e5a!8m2!3d41.0549525!4d28.8915206!16s%2Fg%2F11vqsz3302"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>Google Maps&apos;te Aç</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">E-posta İletişim</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm rounded-xl border border-slate-700/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Mail Gönder</h4>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-slate-300 font-medium">ibrahimunalofficial@gmail.com</span>
                      <a 
                        href="mailto:ibrahimunalofficial@gmail.com"
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Mail gönderin
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="relative z-10">Teklif Alın</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Floating WhatsApp Button */}
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

      {/* WhatsApp Phone Selection Modal */}
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
