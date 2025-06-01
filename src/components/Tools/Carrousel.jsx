import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio React',
    description: 'Site personnel moderne pour présenter mon profil, mes projets et mon parcours.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://github.com/mananrg/React-Portfolio-Website/raw/main/screenshots/home-screen.png', // Capture d'écran du portfolio React
    link: 'https://mmg739.github.io/',
  },
  {
    title: 'API Budget Manager',
    description: 'API Spring sécurisée pour gérer les dépenses, générer des rapports et exporter les données.',
    tech: ['Spring Boot', 'JWT', 'PostgreSQL', 'Lombok'],
    image: 'Resto-ism.png', // Interface Swagger UI pour l'API
    link: '#',
  },
  {
    title: 'Smart RH Dashboard',
    description: 'Module Odoo avec API REST et frontend React pour piloter les ressources humaines.',
    tech: ['Odoo 17', 'Python', 'Flask', 'React', 'Docker'],
    image: 'Yros.png', 
    link: 'https://yros.io/',
  },
  {
    title: 'Data Santé Sénégal',
    description: 'Analyse des données hospitalières pour identifier les besoins en personnel et équipements médicaux.',
    tech: ['Python', 'Pandas', 'Plotly', 'Scikit-learn'],
    image: 'First-aid.png', // Exemple de dashboard Streamlit pour la santé
    link: '#',
  },
  {
    title: 'HealthCare Predictor',
    description: 'Modèle IA prédisant le risque de maladies chroniques à partir de données anonymisées.',
    tech: ['Python', 'Pandas', 'XGBoost', 'Streamlit'],
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eH3iKk9q3xv5e7Vw5fM1xA.png', // Interface Streamlit pour la prédiction santé
    link: '#',
  },
  {
    title: 'Analyse Ventes Vins',
    description: 'Dashboard interactif pour détecter les anomalies, visualiser les KPIs et croiser les sources ERP.',
    tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eH3iKk9q3xv5e7Vw5fM1xA.png', // Dashboard Streamlit pour l'analyse des ventes
    link: '#',
  },
];



export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 1;

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

 return (
    <section className="relative w-full max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden ">
            <div
            className="relative flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            >
            {projects.map((project, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4 py-8 md:py-12">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg md:w-3/4 mx-auto  items-center hover:shadow-2xl duration-300 border border-[var(--color-orange)]">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
                    style={{ borderBottom: "4px solid var(--color-orange)" }}
                    />
                    <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-semibold">
                        {project.title}
                    </h3>
                    <p className="text-[#222] text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                            background: "var(--color-orange)",
                            color: "#fff",
                            fontWeight: 600,
                            letterSpacing: "0.03em",
                            }}
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    <a
                        href={project.link}
                        className="inline-block mt-4 text-[var(--color-orange)] hover:underline text-sm font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Voir le projet →
                    </a>
                    </div>
                </div>
            </div>
            ))}
            </div>

            {/* Navigation arrows */}
            <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--color-orange)] hover:bg-white hover:text-[var(--color-orange)] text-white p-3 rounded-full z-10 shadow-lg border-2 border-[var(--color-orange)] transition"
            aria-label="Précédent"
            >
            <FaChevronLeft />
            </button>
            <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--color-orange)] hover:bg-white hover:text-[var(--color-orange)] text-white p-3 rounded-full z-10 shadow-lg border-2 border-[var(--color-orange)] transition"
            aria-label="Suivant"
            >
            <FaChevronRight />
            </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {projects.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer border-2 border-[var(--color-orange)] transition-all duration-300 ${
              i === index
                ? "bg-[var(--color-orange)] scale-125 shadow-md"
                : "bg-white opacity-60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
