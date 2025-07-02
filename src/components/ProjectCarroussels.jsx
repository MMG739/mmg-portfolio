'use client'
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiCode, FiStar, FiEye } from 'react-icons/fi';
const Project_Carroussels = () => {
  const [activeProject, setActiveProject] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

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
  }, [activeProject]);

  const projects = [
    {
      id: 1,
      title: "First Aid App",
      subtitle: "Application mobile de premiers secours",
      description: "Une application mobile moderne pour apprendre les gestes de premiers secours avec des tutoriels interactifs et des simulations en réalité augmentée.",
      technologies: ["React Native", "TypeScript", "Firebase", "AR Kit"],
      image: "First-aid.png",
      demoUrl: "#",
      githubUrl: "#",
      status: "En développement",
      duration: "3 mois",
      highlights: ["Interface intuitive", "Mode hors-ligne", "Certifications"]
    },
    {
      id: 2,
      title: "Yros Platform",
      subtitle: "Plateforme de gestion RH",
      description: "Solution complète de gestion des ressources humaines avec tableau de bord analytics, gestion des paies et suivi des performances.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      image: "Yros.png",
      demoUrl: "#",
      githubUrl: "#",
      status: "En production",
      duration: "6 mois",
      highlights: ["Dashboard temps réel", "API REST", "Sécurité avancée"]
    },
    {
      id: 3,
      title: "Resto-ISM",
      subtitle: "Application de gestion de restaurant",
      description: "Système de point de vente moderne avec gestion des commandes, inventaire intelligent et analytics pour restaurants.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      image: "Resto-ism.png",
      demoUrl: "#",
      githubUrl: "#",
      status: "Terminé",
      duration: "4 mois",
      highlights: ["POS intégré", "Temps réel", "Multi-device"]
    },
    {
      id: 4,
      title: "Yros Platform",
      subtitle: "Plateforme de gestion RH",
      description: "Solution complète de gestion des ressources humaines avec tableau de bord analytics, gestion des paies et suivi des performances.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      image: "Yros.png",
      demoUrl: "#",
      githubUrl: "#",
      status: "En production",
      duration: "6 mois",
      highlights: ["Dashboard temps réel", "API REST", "Sécurité avancée"]
    },
    {
      id: 5,
      title: "Resto-ISM",
      subtitle: "Application de gestion de restaurant",
      description: "Système de point de vente moderne avec gestion des commandes, inventaire intelligent et analytics pour restaurants.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      image: "Resto-ism.png",
      demoUrl: "#",
      githubUrl: "#",
      status: "Terminé",
      duration: "4 mois",
      highlights: ["POS intégré", "Temps réel", "Multi-device"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">Portfolio</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Mes Projets
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Découvrez une sélection de projets sur lesquels j'ai travaillé, chacun reflétant ma passion pour le développement et l'innovation technologique.
        </p>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center items-center mb-12" aria-label="Navigation projets">
        <button
          onClick={prevProject}
          disabled={activeProject === 1}
          aria-label="Projet précédent"
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 focus:ring-2 focus:ring-[var(--color-orange)] mr-8 hover:scale-110"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-700" aria-hidden="true" />
        </button>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="font-medium">{activeProject}</span>
          <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
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
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 focus:ring-2 focus:ring-[var(--color-orange)] ml-8 hover:scale-110"
        >
          <FiChevronRight className="w-6 h-6 text-gray-700" aria-hidden="true" />
        </button>
      </div>

      {/* Projects container */}
      <div className="flex justify-center items-center max-w-2xl mx-auto">
        {isClient && projects.map((project, idx) => {
          // Affichage d'un seul projet à la fois
          const isVisible = activeProject === project.id;
          
          if (!isVisible) return null;
          
          const isActive = true; // Toujours actif puisqu'on affiche qu'un projet
          
          return (
            <article
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-500 w-full max-w-4xl mx-auto group hover:shadow-2xl shadow-xl ring-2 ring-[var(--color-orange)]`}
              aria-current="step"
              tabIndex={0}
            >
              {/* Image container */}
              <div className="relative overflow-hidden h-80 lg:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                    project.status === 'Terminé' 
                      ? 'bg-green-100/90 text-green-800' 
                      : 'bg-[var(--color-orange)] text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Quick actions overlay */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button 
                      className="flex items-center justify-center px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg hover:bg-white transition-all hover:scale-105 font-medium"
                      aria-label="Voir démo"
                    >
                      <FiEye className="w-4 h-4 mr-2 text-gray-700" />
                      Démo
                    </button>
                    <button 
                      className="flex items-center justify-center px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg hover:bg-white transition-all hover:scale-105 font-medium"
                      aria-label="Voir code"
                    >
                      <FiGithub className="w-4 h-4 mr-2 text-gray-700" />
                      Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[var(--color-orange)] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
                    {project.id}
                  </div>
                  <div className="flex items-center text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    <FiCode className="w-4 h-4 mr-2" />
                    {project.duration}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-[var(--color-orange)] font-semibold text-lg mb-4">{project.subtitle}</p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.description}</p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                      <FiCode className="w-5 h-5 mr-2 text-[var(--color-orange)]" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-all hover:scale-105 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                      <FiStar className="w-5 h-5 mr-2 text-[var(--color-orange)]" />
                      Points forts
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, highlightIdx) => (
                        <li key={highlightIdx} className="flex items-center text-gray-600">
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
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:border-[var(--color-orange)] hover:bg-gray-50 transition-all duration-200 flex items-center justify-center hover:scale-105 text-lg">
                    <FiGithub className="w-5 h-5 mr-3" />
                    Voir le code
                  </button>
                </div>
              </div>
            </article>
          );
        })}
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
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
            }`}
          />
        ))}
      </nav>

      {/* Keyboard navigation hint */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          Utilisez les flèches ← → ou cliquez sur les indicateurs pour naviguer
        </p>
      </div>
    </section>
  );
};

export default Project_Carroussels;