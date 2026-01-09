'use client';

export default function ThreeDPrinting() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full">
              <span className="text-teal-400 font-semibold text-sm tracking-wide uppercase">3D Baskı Hizmetleri</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
              Fikirlerinizi<br/>3 Boyutta Hayata Geçirin
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
              Prototiplemeden seri üretime, 3D modelleme ve baskı hizmetleriyle projelerinize hız kazandırın
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 w-full max-w-6xl">
              {[
                { title: "3D Modelleme", desc: "CAD yazılımları ile profesyonel 3D model tasarımı ve optimizasyon" },
                { title: "Prototip Üretim", desc: "Hızlı prototipleme ile fikir testleri ve geliştirme süreçleri" },
                { title: "Seri Üretim", desc: "Küçük ve orta ölçekli üretim için ekonomik 3D baskı çözümleri" },
                { title: "Özel Parça İmalatı", desc: "Yedek parça, özel tasarım ve tek seferlik üretimler" },
                { title: "Malzeme Çeşitliliği", desc: "PLA, ABS, PETG, TPU ve diğer filament seçenekleri" },
                { title: "Son İşlem Hizmetleri", desc: "Boyama, cilalama ve yüzey düzeltme işlemleri" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gradient-to-br from-slate-900/60 via-teal-900/20 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
