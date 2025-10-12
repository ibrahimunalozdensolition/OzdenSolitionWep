'use client';

import Link from 'next/link';

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ana Sayfaya Dön
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bu hizmetimizin sayfası yapım aşamasındadır
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}
