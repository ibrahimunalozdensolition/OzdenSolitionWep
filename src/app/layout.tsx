import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ClientProviders from "@/components/ClientProviders";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ozdensolutions.com'),
  title: "Özden Solutions - İnovatif Teknoloji Çözümleri",
  description: "Mobil uygulama, web geliştirme, yapay zeka, RPA ve daha fazlası için profesyonel teknoloji çözümleri",
  keywords: [
    "mobil uygulama geliştirme",
    "web geliştirme",
    "yapay zeka çözümleri",
    "RPA",
    "robotik süreç otomasyonu",
    "grafik tasarım",
    "UI/UX tasarım",
    "elektronik kart tasarım",
    "PCB tasarım",
    "3D baskı",
    "otomasyon sistemleri",
    "mikroişlemci programlama",
    "siber güvenlik",
    "bulut çözümleri",
    "DevOps",
    "sosyal medya yönetimi",
    "yazılım geliştirme Türkiye"
  ],
  authors: [{ name: "Özden Solutions" }],
  creator: "Özden Solutions",
  publisher: "Özden Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ozdensolutions.com',
  },
  openGraph: {
    title: "Özden Solutions - İnovatif Teknoloji Çözümleri",
    description: "Mobil uygulama, web geliştirme, yapay zeka, RPA ve daha fazlası için profesyonel teknoloji çözümleri",
    url: 'https://ozdensolutions.com',
    siteName: 'Özden Solutions',
    locale: 'tr_TR',
    images: [
      {
        url: '/amblem-beyaz.png',
        width: 1200,
        height: 630,
        alt: 'Özden Solutions Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Özden Solutions - İnovatif Teknoloji Çözümleri",
    description: "Mobil uygulama, web geliştirme, yapay zeka, RPA ve daha fazlası için profesyonel teknoloji çözümleri",
    images: ['/amblem-beyaz.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Özden Solutions",
    "url": "https://ozdensolutions.com",
    "logo": "https://ozdensolutions.com/amblem-beyaz.png",
    "description": "Mobil uygulama, web geliştirme, yapay zeka, RPA ve daha fazlası için profesyonel teknoloji çözümleri",
    "sameAs": [
      "https://www.facebook.com/ozdensolutionstr",
      "https://www.instagram.com/ozdensolutionstr/",
      "https://www.youtube.com/@ozdensolutionstr",
      "https://www.tiktok.com/@ozdensolutionstr"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-539-888-45-61",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    }
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <Sidebar />
        {children}
        <ClientProviders />
      </body>
    </html>
  );
}
