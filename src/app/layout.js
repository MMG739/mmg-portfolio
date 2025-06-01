import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MMG Portfolio",
  description: "Portfolio de Mouhamadou Moustapha Gueye - Tech, Afrique, IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
