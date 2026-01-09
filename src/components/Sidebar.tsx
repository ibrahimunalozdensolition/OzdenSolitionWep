'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const services = [
    { name: 'Yapay Zeka Çözümleri', href: '/ai-solutions' },
    { name: 'Mobil Uygulama Geliştirme', href: '/mobile-app-development' },
    { name: 'Web Uygulaması & Web Sitesi', href: '/web-development' },
    { name: 'Robotik Süreç Otomasyonu', href: '/rpa' },
    { name: '3D Baskı Hizmetleri', href: '/3d-printing' },
    { name: 'Elektronik Kart Tasarım', href: '/electronic-design' },
    { name: 'Otomasyon Sistemleri', href: '/automation-systems' },
    { name: 'Mikroişlemci Programlama', href: '/microcontroller-programming' },
    { name: 'Sosyal Medya Yönetimi', href: '/social-media' },
    { name: 'Grafik Tasarım & UI/UX', href: '/graphic-design' },
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

      <aside className={`fixed left-0 top-0 h-screen w-72 lg:w-80 bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900 backdrop-blur-xl border-r border-slate-700/50 overflow-y-auto z-50 transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-gradient-to-br from-slate-700/30 via-purple-700/20 to-blue-700/20 backdrop-blur-sm border border-slate-500/20">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <Image
                src="/amblem-beyaz.png"
                alt="Özden Solutions Logo"
                width={150}
                height={150}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Özden Solutions
                </h2>
                <p className="text-xs text-slate-300 mt-1">İnovatif Teknoloji Çözümleri</p>
              </div>
            </Link>
          </div>

          <div className="mb-6">
            <Link
              href="/ai-chat"
              onClick={() => setIsOpen(false)}
              className="w-full group relative px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-purple-500/30 hover:scale-105 overflow-hidden flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Asistan
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  className={`group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${isActive
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

          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <Link
              href="/#iletisim"
              onClick={() => setIsOpen(false)}
              className="w-full group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-green-600/10 hover:to-emerald-600/10 border border-transparent hover:border-green-500/20"
            >
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="flex-1 font-bold">İletişim</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

