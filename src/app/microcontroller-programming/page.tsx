'use client';

export default function MicrocontrollerProgramming() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 via-blue-900 to-purple-900">
      <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 animate-pulse"></div>
        
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 max-w-5xl mx-auto pt-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full">
              <span className="text-indigo-400 font-semibold text-sm tracking-wide uppercase">Mikroişlemci Programlama</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Gömülü Sistemler<br/>& Mikrodenetleyici Çözümleri
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
              Arduino, Raspberry Pi, ESP32, STM32 ve PIC mikrodenetleyiciler için özel programlama ve IoT çözümleri
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 w-full max-w-6xl">
              {[
                { title: "Arduino Programlama", desc: "Arduino Uno, Mega, Nano ile prototipleme ve özel projeler", color: "indigo" },
                { title: "Raspberry Pi Projeleri", desc: "Python ve C++ ile Raspberry Pi uygulamaları ve IoT sistemleri", color: "purple" },
                { title: "ESP32 & ESP8266", desc: "WiFi ve Bluetooth destekli IoT projeleri ve web sunucular", color: "violet" },
                { title: "STM32 Geliştirme", desc: "ARM Cortex-M mikrodenetleyiciler ile endüstriyel uygulamalar", color: "fuchsia" },
                { title: "Sensör Entegrasyonu", desc: "Sıcaklık, nem, hareket, mesafe sensörleri entegrasyonu", color: "pink" },
                { title: "IoT & Bulut Bağlantısı", desc: "MQTT, HTTP protokolleri ile cloud platform entegrasyonu", color: "indigo" }
              ].map((item, i) => (
                <div key={i} className={`p-8 bg-gradient-to-br from-slate-900/60 via-${item.color}-900/20 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-${item.color}-500/50 transition-all duration-500`}>
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
