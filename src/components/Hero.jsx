'use client'
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="bg-transparent text-center py-20 mt-6 px-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-6">
        </div>
        <h1 className="text-sm text-gray-500 dark:text-gray-400 tracking-wider uppercase">
          {t('hero.stack')}
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 dark:text-white leading-tight">
          {t('hero.title')} {t('hero.titleAccent')} <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">{t('hero.titleEnd')}</span>
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          {t('hero.description')}
        </p>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <a href="#projects" className="bg-[var(--color-orange)] hover:bg-orange-600 shadow-lg shadow-orange-500/30 btn-effect-11 text-white px-8 py-3 rounded-md font-semibold transition-all">
            {t('hero.cta')}
          </a>
          <a href="#contact" className="border-2 btn-effect-11 border-[var(--color-orange)] text-[var(--color-orange)] dark:text-[var(--color-orange)] hover:bg-orange-50 dark:hover:bg-gray-800 px-8 py-3 rounded-md font-semibold transition-all">
            {t('nav.contact')}
          </a>
        </div>
      </motion.div>
    </section>
  );
}