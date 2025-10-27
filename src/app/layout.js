import "@/app/globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const GA_ID = "G-G1RH2ZVW9X";

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
        {children}
      </body>
    </html>
  );
}
