"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaChevronLeft, FaChevronRight, FaClock, FaCheck } from "react-icons/fa";
import { projectsData } from "../constants/data";
import { useLanguage } from "../context/LanguageContext";

const PremiumCarousel = () => {
  const scrollRef = useRef(null);
  const { language, t } = useLanguage();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 w-full relative z-10 font-display overflow-hidden bg-white dark:bg-[#0a0812] transition-colors duration-500">
      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold tracking-[0.3em] text-orange-500 uppercase mb-2"
            >
              {t('projects.title')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white uppercase"
            >
              {t('projects.subtitle')}
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-900 dark:text-white hover:bg-orange-500/20 transition-all active:scale-95"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-orange-500/20 transition-all active:scale-95"
            >
              <FaChevronRight />
            </button>
          </div>
        </header>

        {/* Showcase Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar py-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex min-w-[320px] md:min-w-[450px] flex-col rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 snap-center overflow-hidden group"
            >
              {/* Decorative Number Background */}
              <span className="absolute -top-6 -right-4 text-[140px] font-bold select-none leading-none z-0 opacity-5 pointer-events-none" style={{ WebkitTextStroke: '1px rgba(137, 90, 246, 0.3)', color: 'transparent' }}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Status Indicator */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`flex h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]" : "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"}`}></span>
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${index % 2 === 0 ? "text-orange-500" : "text-emerald-500"}`}>
                      {t(project.statusKey)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold font-mono">
                    <FaClock size={10} />
                    {project.duration[language]}
                  </div>
                </div>

                {/* Image Showcase */}
                <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/90 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {project.subtitle[language]}
                </p>
                <p className="mb-6 text-sm text-slate-400 leading-relaxed font-light line-clamp-2">
                  {project.description[language]}
                </p>

                {/* Highlights */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {project.highlights[language].map((high, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <FaCheck className="text-emerald-400 text-[8px]" />
                      {high}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-[9px] font-bold text-slate-400 border border-white/10 uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {project.demoUrl !== "#" ? (
                    <Link 
                      href={project.demoUrl} 
                      target="_blank"
                      className="flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-600 text-[10px] font-bold text-white shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)] hover:bg-orange-500 transition-all active:scale-95 uppercase tracking-widest"
                    >
                      <FaRocket className="text-xs" />
                      {t('projects.viewProject')}
                    </Link>
                  ) : (
                    <div className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-slate-500 text-[10px] font-bold cursor-not-allowed uppercase tracking-widest">
                      <FaRocket className="text-xs" />
                      {t('projects.viewProject')}
                    </div>
                  )}

                  {project.githubUrl !== "#" ? (
                    <Link 
                      href={project.githubUrl} 
                      target="_blank"
                      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/5 text-[10px] font-bold text-orange-400 hover:bg-orange-500/10 transition-all active:scale-95 uppercase tracking-widest"
                    >
                      <FaCode className="text-xs" />
                      {t('projects.github')}
                    </Link>
                  ) : (
                    <div className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-slate-500 text-[10px] font-bold cursor-not-allowed uppercase tracking-widest">
                      <FaCode className="text-xs" />
                      {t('projects.github')}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PremiumCarousel;
