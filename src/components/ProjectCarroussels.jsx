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
      status: "Terminé",
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
    <section id="projects-carousel" className="py-20 px-4 bg-gray-50">
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
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
        {isClient && projects.map((project, idx) => {
          // Logique d'affichage modifiée: 2 projets sur desktop au lieu de 3
          let isVisible = false;
          if (isMobile) {
            // Mobile : seulement le projet actif
            isVisible = activeProject === project.id;
          } else {
            // Desktop : 2 projets visibles avec le projet actif
            const firstIdx = Math.max(0, Math.min(projects.length - 2, activeProject - 1));
            const lastIdx = firstIdx + 1;
            isVisible = idx >= firstIdx && idx <= lastIdx;
          }
          
          if (!isVisible) return null;
          
          const isActive = activeProject === project.id;
          
          return (
            <article
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-500 min-w-[360px] max-w-[480px] flex-1 group hover:shadow-xl
                ${isActive ? 'ring-2 ring-[var(--color-orange)] shadow-xl scale-105 z-10' : 'opacity-70 hover:opacity-90 shadow-lg'}
              `}
              aria-current={isActive ? "step" : undefined}
              tabIndex={isActive ? 0 : -1}
            >
              {/* Image container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Terminé' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-[var(--color-orange)] bg-opacity-10 text-[var(--color-orange)]'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Quick actions overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button 
                      className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="Voir démo"
                    >
                      <FiEye className="w-4 h-4 text-gray-700" />
                    </button>
                    <button 
                      className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="Voir code"
                    >
                      <FiGithub className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-[var(--color-orange)] bg-opacity-10 text-[var(--color-orange)] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {project.id}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCode className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-[var(--color-orange)] font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Points forts</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIdx) => (
                      <li key={highlightIdx} className="flex items-center text-sm text-gray-600">
                        <FiStar className="w-3 h-3 mr-2 text-[var(--color-orange)] flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-[var(--color-orange)] text-white py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center hover:shadow-lg">
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Voir démo
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                    <FiGithub className="w-4 h-4 mr-2" />
                    Code
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