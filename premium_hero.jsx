"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const PremiumHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden font-display pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 neural-bg pointer-events-none opacity-30 dark:opacity-50"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-start">
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-purple-500/5 backdrop-blur-xl px-4 py-2 rounded-full border border-purple-500/20 mb-10 group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
            {t('hero.badge')}
          </span>
        </motion.div>

        <div className="max-w-6xl w-full">
          {/* Massive Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-extrabold leading-[0.9] tracking-tighter mb-10 text-slate-900 dark:text-white"
          >
            <span className="block mb-2">{t('hero.title')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 mb-2">
              {t('hero.titleAccent')}
            </span>
            <span className="flex items-center gap-6 flex-wrap">
              <span>{t('hero.titleEnd')}</span>
              <span className="hidden lg:block h-[2px] grow bg-gradient-to-r from-orange-500 to-transparent mt-8 opacity-30"></span>
            </span>
          </motion.h1>

          <div className="flex flex-col lg:flex-row lg:items-end gap-12">
            {/* Subtext */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl"
            >
              <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-4">
                {t('hero.description')}
              </p>
              <p className="text-sm font-bold text-purple-500 uppercase tracking-widest flex items-center gap-2">
                <FaCode /> {t('hero.stack')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="#projects" 
                className="group relative px-10 py-5 bg-purple-600 rounded-2xl font-bold text-white uppercase tracking-widest overflow-hidden shadow-[0_20px_40px_-10px_rgba(137,90,246,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t('hero.cta')}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              {/* <a 
                href="#contact" 
                className="group relative px-10 py-5 bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest border border-slate-200 dark:border-white/10 transition-all hover:bg-white/10 active:scale-95 shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Me Contacter
                  <FaEnvelope className="opacity-50" />
                </span>
              </a> */}
            </motion.div>
          </div>
        </div>

        {/* Floating Code Snippets (Decorative) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-30 select-none pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [3, 4, 3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-slate-100 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 dark:border-white/10 translate-x-12"
          >
            <code className="text-xs text-purple-400 font-mono block mb-2">class NeuralAgent &#123;</code>
            <code className="text-xs text-slate-500 dark:text-slate-300 font-mono pl-4 block">constructor() &#123;</code>
            <code className="text-xs text-slate-600 dark:text-slate-400 font-mono pl-8 block">this.region = "Africa";</code>
            <code className="text-xs text-slate-500 dark:text-slate-300 font-mono pl-4 block">&#125;</code>
            <code className="text-xs text-purple-400 font-mono block">&#125;</code>
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              rotate: [-2, -3, -2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="bg-slate-100 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 dark:border-white/10"
          >
            <code className="text-xs text-orange-400 font-mono block mb-2">deployment.yaml</code>
            <code className="text-xs text-slate-500 dark:text-slate-300 font-mono block">replicas: 5</code>
            <code className="text-xs text-slate-500 dark:text-slate-300 font-mono block">strategy: RollingUpdate</code>
            <code className="text-xs text-slate-600 dark:text-slate-400 font-mono block">region: africa-south-1</code>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .neural-bg {
          background-image: radial-gradient(circle at 2px 2px, rgba(137, 90, 246, 0.15) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default PremiumHero;
