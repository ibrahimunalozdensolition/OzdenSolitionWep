'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const pathname = usePathname();
  
  const services = [
    { name: 'Mobil Uygulama Geliştirme', href: '/mobile-app-development' },
    { name: 'Web Uygulaması & Web Sitesi', href: '/web-development' },
    { name: 'RPA', href: '/rpa' },
    { name: 'Grafik Tasarım & UI/UX', href: '/graphic-design' },
    { name: 'Yapay Zeka Çözümleri', href: '/ai-solutions' },
    { name: 'Elektronik Kart Tasarım', href: '/electronic-design' },
    { name: 'Otomasyon Sistemleri', href: '/automation-systems' },
    { name: 'Sosyal Medya Yönetimi', href: '/social-media' },
    { name: 'Mikroişlemci Programlama', href: '/microcontroller-programming' },
    { name: '3D Baskı Hizmetleri', href: '/3d-printing' },
    { name: 'Siber Güvenlik & Veri Koruması', href: '/cybersecurity' },
    { name: 'Bulut Çözümleri & DevOps', href: '/cloud-devops' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 p-3 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-blue-900/90 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/20"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900 backdrop-blur-xl border-r border-slate-700/50 overflow-y-auto z-50 transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="block" onClick={() => setIsOpen(false)}>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Özden Solutions
              </h2>
              <p className="text-xs text-slate-400 mt-1">İnovatif Teknoloji Çözümleri</p>
            </Link>
          </div>

          <nav className="space-y-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hizmetlerimiz</h3>
            </div>
            {services.map((service, index) => {
              const isActive = pathname === service.href;
              return (
                <Link
                  key={index}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white font-bold border border-purple-500/50 shadow-lg shadow-purple-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 border border-transparent hover:border-purple-500/20'
                  }`}
                >
                  <span className="flex-1 font-bold">{service.name}</span>
                  {isActive && (
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <button
              onClick={() => {
                setShowWhatsAppModal(true);
                setIsOpen(false);
              }}
              className="w-full group relative px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-purple-500/30 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                İletişim
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </aside>

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
    </>
  );
}

