import "@/app/globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const GA_ID = "G-H6KMLPJ87C";

export const metadata = {
  metadataBase: new URL("https://mmgueye.xyz"),
  title: {
    default: "MMG Portfolio",
    template: "%s | MMG Portfolio",
  },
  description: "Portfolio de Mouhamadou Moustapha Gueye - Tech, Afrique, IA. Développeur FullStack, Odoo, IA & Data.",
  keywords: [
    "Mouhamadou Moustapha Gueye",
    "MMG",
    "Odoo",
    "FullStack",
    "IA",
    "Data",
    "Développeur",
    "Portfolio",
    "Afrique",
  ],
  authors: [{ name: "Mouhamadou Moustapha Gueye", url: "https://mmgueye.xyz" }],
  openGraph: {
    title: "MMG Portfolio",
    description: "Portfolio de Mouhamadou Moustapha Gueye — Développeur FullStack, Odoo, IA & Data.",
    url: "https://mmgueye.xyz",
    siteName: "MMG Portfolio",
    images: [
      {
        url: "https://mmgueye.xyz/logo-1.png",
        width: 1200,
        height: 630,
        alt: "MMG Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMG Portfolio",
    description: "Portfolio de Mouhamadou Moustapha Gueye — Développeur FullStack, Odoo, IA & Data.",
    site: "@mmgueye",
    creator: "@mmgueye",
  },
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-32x32.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZXV3VT2');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());

gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZXV3VT2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
