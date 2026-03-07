'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiCode, FiStar, FiEye } from 'react-icons/fi';
import { projectsData } from '../constants/data';

const ProjectCarousel = () => {
  const [activeProject, setActiveProject] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const projects = projectsData;

  const nextProject = () => {
    if (activeProject < projects.length) setActiveProject(activeProject + 1);
  };
  
  const prevProject = () => {
    if (activeProject > 1) setActiveProject(activeProject - 1);
  };

  useEffect(() => {
    setIsClient(true);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Navigation au clavier
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
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [activeProject, projects.length]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">Portfolio</h3>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Mes Projets
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Découvrez une sélection de projets sur lesquels j'ai travaillé, chacun reflétant ma passion pour le développement et l'innovation technologique.
        </p>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center items-center mb-12" aria-label="Navigation projets">
        <button
          onClick={prevProject}
          disabled={activeProject === 1}
          aria-label="Projet précédent"
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 focus:ring-2 focus:ring-[var(--color-orange)] mr-8 hover:scale-110"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" aria-hidden="true" />
        </button>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">{activeProject}</span>
          <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[var(--color-orange)] transition-all duration-300 rounded-full"
              style={{ width: `${(activeProject / projects.length) * 100}%` }}
            />
          </div>
          <span className="font-medium">{projects.length}</span>
        </div>

        <button
          onClick={nextProject}
          disabled={activeProject === projects.length}
          aria-label="Projet suivant"
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 focus:ring-2 focus:ring-[var(--color-orange)] ml-8 hover:scale-110"
        >
          <FiChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" aria-hidden="true" />
        </button>
      </div>

      {/* Projects container */}
      <div className="flex justify-center items-center max-w-2xl mx-auto relative min-h-[600px]">
        {isClient && (
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              activeProject === project.id && (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-4xl mx-auto group hover:shadow-2xl shadow-xl ring-2 ring-[var(--color-orange)]"
                  aria-current="step"
                  tabIndex={0}
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden h-80 lg:h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={project.id === 1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                        project.status === 'Terminé' 
                          ? 'bg-green-100/90 text-green-800 dark:bg-green-900/80 dark:text-green-100' 
                          : 'bg-[var(--color-orange)] text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Quick actions overlay */}
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a 
                          href={project.demoUrl}
                          className="flex items-center justify-center px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-all hover:scale-105 font-medium dark:text-white"
                          aria-label="Voir démo"
                        >
                          <FiEye className="w-4 h-4 mr-2 text-gray-700 dark:text-gray-300" />
                          Démo
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="flex items-center justify-center px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-all hover:scale-105 font-medium dark:text-white"
                          aria-label="Voir code"
                        >
                          <FiGithub className="w-4 h-4 mr-2 text-gray-700 dark:text-gray-300" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[var(--color-orange)] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
                        {project.id}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <FiCode className="w-4 h-4 mr-2" />
                        {project.duration}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-[var(--color-orange)] font-semibold text-lg mb-4">{project.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">{project.description}</p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
                          <FiCode className="w-5 h-5 mr-2 text-[var(--color-orange)]" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:shadow-md transition-all hover:scale-105 border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
                          <FiStar className="w-5 h-5 mr-2 text-[var(--color-orange)]" />
                          Points forts
                        </h4>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight, highlightIdx) => (
                            <li key={highlightIdx} className="flex items-center text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-[var(--color-orange)] rounded-full mr-3 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-[var(--color-orange)] text-white py-4 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:scale-105 text-lg">
                        <FiExternalLink className="w-5 h-5 mr-3" />
                        Voir la démo
                      </button>
                      <button className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-4 px-6 rounded-lg font-semibold hover:border-[var(--color-orange)] dark:hover:border-[var(--color-orange)] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center hover:scale-105 text-lg">
                        <FiGithub className="w-5 h-5 mr-3" />
                        Voir le code
                      </button>
                    </div>
                  </div>
                </motion.article>
              )
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Progress indicator */}
      <nav className="flex justify-center mt-12 space-x-3" aria-label="Navigation projets">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project.id)}
            aria-label={`Aller au projet ${project.id} : ${project.title}`}
            aria-current={activeProject === project.id ? "step" : undefined}
            className={`transition-all duration-300 focus:ring-2 focus:ring-[var(--color-orange)] focus:outline-none ${
              activeProject === project.id
                ? 'w-8 h-3 bg-[var(--color-orange)] rounded-full'
                : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-full hover:scale-125'
            }`}
          />
        ))}
      </nav>

      {/* Keyboard navigation hint */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Utilisez les flèches ← → ou cliquez sur les indicateurs pour naviguer
        </p>
      </div>
    </section>
  );
};

export default ProjectCarousel;