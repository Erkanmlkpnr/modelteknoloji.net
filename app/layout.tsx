import type { Metadata } from "next";
import "./globals.css";
import "@/styles/layout.css";
import "@/styles/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.modelteknoloji.net"),
  title: {
    default: "Model Teknoloji | Siemens Solid Edge Satış, Eğitim ve Destek",
    template: "%s | Model Teknoloji",
  },
  description:
    "Model Teknoloji — Siemens Solid Edge ürün ailesinin Türkiye'deki satış, eğitim ve destek çözüm ortağı. Değerlendirmeden kurumsal yaygınlaştırmaya kadar mühendislik ekiplerinizin yanındayız.",
  keywords: ["Solid Edge", "Solid Edge satış", "CAD/CAM", "mühendislik yazılım", "Solid Edge kurulum"],
  authors: [{ name: "Model Teknoloji" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.modelteknoloji.net",
    siteName: "Model Teknoloji",
    title: "Model Teknoloji | Siemens Solid Edge Çözüm Ortağı",
    description: "Siemens Solid Edge ürün ailesinin Türkiye'deki satış, eğitim ve destek çözüm ortağı.",
    images: [{ url: "/img/model-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Model Teknoloji | Siemens Solid Edge Çözüm Ortağı",
    description: "Siemens Solid Edge ürün ailesinin Türkiye'deki satış, eğitim ve destek çözüm ortağı.",
    images: ["/img/model-logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.modelteknoloji.net" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/favicon.svg" type="image/svg+xml" />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PM9CJBMT');
        `}</Script>

        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Model Teknoloji",
              url: "https://www.modelteknoloji.net",
              inLanguage: "tr-TR",
              publisher: { "@id": "https://www.modelteknoloji.net/#organization" },
            }),
          }}
        />

        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.modelteknoloji.net/#organization",
              name: "Model Teknoloji",
              url: "https://www.modelteknoloji.net",
              logo: "https://www.modelteknoloji.net/img/model-logo.png",
              description: "Siemens Solid Edge ürün ailesinin Türkiye'deki satış, eğitim ve destek çözüm ortağı.",
              foundingDate: "2024-08-20",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-507-710-78-47",
                contactType: "customer service",
                email: "erkan@modelteknoloji.net",
                areaServed: "TR",
                availableLanguage: "Turkish",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Değirmiçem Mahallesi 16051 Nolu Sokak Milenyum İş Merkezi No:19 Kat:1 İç Kapı No:37",
                addressLocality: "Şehitkamil",
                addressRegion: "Gaziantep",
                postalCode: "27000",
                addressCountry: "TR",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PM9CJBMT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a className="visually-hidden" href="#main">İçeriğe atla</a>
        <Header />
        <main id="main" style={{ paddingTop: "76px" }}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
