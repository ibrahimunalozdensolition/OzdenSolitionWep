export default function ElectronicDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Elektronik Kart Tasarım
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Özel elektronik devre ve PCB tasarım hizmetleri
            </p>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-400">
                Profesyonel elektronik kart ve PCB tasarım çözümleri sunuyoruz.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

