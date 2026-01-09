import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import FloatingMailButton from "@/components/FloatingMailButton";
import FloatingAIButton from "@/components/FloatingAIButton";

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
  openGraph: {
    title: "Özden Solutions - İnovatif Teknoloji Çözümleri",
    description: "Mobil uygulama, web geliştirme, yapay zeka, RPA ve daha fazlası için profesyonel teknoloji çözümleri",
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
        <Sidebar />
        {children}
        <FloatingAIButton />
        <FloatingMailButton />
      </body>
    </html>
  );
}
