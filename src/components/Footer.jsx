"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="relative py-12 mt-20 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0812] overflow-hidden">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-orange)] to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 opacity-80">
          <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
          <span className="text-xl font-bold tracking-widest text-[#0a0812] dark:text-white uppercase">MMG</span>
          <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
        </div>
        
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
          © {new Date().getFullYear()} Mouhamadou Moustapha Gueye. 
          {language === 'fr' ? " Tous droits réservés." : " All rights reserved."}
        </p>
        <p className="text-xs font-bold tracking-widest uppercase text-[var(--color-orange)]">
          {language === 'fr' 
            ? "Fier d'innover pour l’Afrique depuis Dakar 🇸🇳" 
            : "Proud to innovate for Africa from Dakar 🇸🇳"}
        </p>
      </div>
    </footer>
  )
}
