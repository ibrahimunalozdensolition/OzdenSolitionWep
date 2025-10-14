'use client';

import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Sosyal Medya Hizmetleri
            </h1>
            <p className="text-xl text-slate-300">
              Detaylı bilgi için Sosyal Medya Yönetimi sayfamızı ziyaret edin
            </p>
            <Link 
              href="/social-media-management" 
              className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-rose-700 hover:to-pink-700 hover:scale-105"
            >
              Sosyal Medya Yönetimi Sayfasına Git
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
