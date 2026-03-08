'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiCode, FiStar } from 'react-icons/fi';
import { useLanguage } from '../context';
import { projectsData } from '../constants/data';

const ProjectCarousel = () => {
  const { language, t } = useLanguage();
  const [activeProject, setActiveProject] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const projects = projectsData;

  const nextProject = () => {
    setActiveProject(prev => (prev < projects.length ? prev + 1 : 1));
  };
  
  const prevProject = () => {
    setActiveProject(prev => (prev > 1 ? prev - 1 : projects.length));
  };

  useEffect(() => {
    setIsClient(true);
    
    // Key navigation
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevProject();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextProject();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [projects.length]);

  // Framer Motion Variants for Staggered Content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  if (!isClient) return null;

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[var(--color-orange)] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[var(--color-orange)] uppercase bg-orange-100 dark:bg-orange-900/20 rounded-full">
              {t('projects.title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t('projects.subtitle')}
            </h2>
            <div className="w-20 h-1.5 bg-[var(--color-orange)] mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
              {language === 'fr' 
                ? "Une immersion dans mes réalisations techniques, alliant innovation, performance et design centré sur l'utilisateur."
                : "An immersion into my technical achievements, combining innovation, performance, and user-centered design."}
            </p>
          </motion.div>
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[600px] lg:min-h-[500px]">
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              activeProject === project.id && (
                <motion.div 
                  key={project.id} 
                  className="grid lg:grid-cols-12 gap-12 items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Visual Side */}
                  <div className="lg:col-span-7 relative group">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 800px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xl ${
                          project.statusKey === 'projects.status.done' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : 'bg-[var(--color-orange)]/20 text-[var(--color-orange)] border-[var(--color-orange)]/30'
                        }`}>
                          {t(project.statusKey)}
                        </div>
                      </div>
                    </div>

                    {/* Preload adjacent project images */}
                    <div className="hidden">
                      {projects.map(p => (
                        <Image key={p.id} src={p.image} width={1} height={1} alt="preload" />
                      ))}
                    </div>
                  </div>

                  {/* Content Side */}
                  <motion.div 
                    className="lg:col-span-5 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="space-y-4">
                      <motion.div variants={itemVariants} className="flex items-center space-x-4">
                        <span className="text-5xl font-black text-[var(--color-orange)] opacity-20">0{project.id}</span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                          <FiCode className="mr-2" /> {project.duration[language]}
                        </span>
                      </motion.div>
                      
                      <motion.h3 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </motion.h3>
                      <motion.p variants={itemVariants} className="text-[var(--color-orange)] font-medium text-xl leading-snug">
                        {project.subtitle[language]}
                      </motion.p>
                      <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {project.description[language]}
                      </motion.p>
                    </div>

                    {/* Tech Stack */}
                    <motion.div variants={itemVariants} className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider flex items-center">
                        Stack Technique
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:border-[var(--color-orange)] transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div variants={itemVariants} className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Points Clés
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {project.highlights[language].map((h, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 group">
                            <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-[var(--color-orange)] flex-shrink-0 group-hover:scale-150 transition-transform" />
                            <span className="text-sm">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Actions */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[160px] bg-[var(--color-orange)] text-white py-4 pr-6 pl-8 rounded-xl font-bold hover:shadow-[0_10px_20px_-10px_rgba(249,115,22,0.5)] transition-all flex items-center justify-between group active:scale-95"
                      >
                        <span>{t('projects.viewProject')}</span>
                        <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95 flex items-center space-x-3 group"
                      >
                        <FiGithub className="text-xl group-hover:rotate-12 transition-transform" />
                        <span className="font-bold sm:hidden lg:inline">{t('projects.github')}</span>
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 gap-8">
          <div className="flex items-center space-x-6">
            <button
              onClick={prevProject}
              className="group flex items-center space-x-3 text-gray-500 hover:text-[var(--color-orange)] transition-colors"
            >
              <div className="p-3 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-[var(--color-orange)] transition-all">
                <FiChevronLeft className="text-xl" />
              </div>
              <span className="font-bold uppercase tracking-widest text-xs hidden sm:inline">Précédent</span>
            </button>
            
            <div className="flex items-center space-x-3">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p.id)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeProject === p.id ? 'w-12 bg-[var(--color-orange)]' : 'w-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="group flex items-center space-x-3 text-gray-500 hover:text-[var(--color-orange)] transition-colors"
            >
              <span className="font-bold uppercase tracking-widest text-xs hidden sm:inline text-right">Suivant</span>
              <div className="p-3 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-[var(--color-orange)] transition-all">
                <FiChevronRight className="text-xl" />
              </div>
            </button>
          </div>

          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Projet <span className="text-[var(--color-orange)]">{activeProject}</span> sur {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;