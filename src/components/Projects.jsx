'use client'


import { FaSeedling, FaHeartbeat, FaGraduationCap } from "react-icons/fa";
import Carrousel from "./Tools/Carrousel";
import { use } from "react";

export default function Projects() {
  const projects = [
    {
      title: 'AgriTech Sénégal',
      description: 'Outil IA pour aider les agriculteurs avec prévisions météo et conseils intelligents.',
      stack: 'React Native – Python – IA',
      icon: <FaSeedling className="text-3xl text-[var(--color-orange)]" />
    },
    {
      title: 'HealthAI Dakar',
      description: 'Plateforme de diagnostic assisté par IA pour les centres de santé.',
      stack: 'TensorFlow – FastAPI – Docker',
      icon: <FaHeartbeat className="text-3xl text-[var(--color-orange)]" />
    },
    {
      title: 'EduConnect Africa',
      description: 'Plateforme e-learning intelligente avec parcours personnalisés.',
      stack: 'Next.js – PostgreSQL – NLP',
      icon: <FaGraduationCap className="text-3xl text-[var(--color-orange)]" />
    }
  ];

  return (
    <section id="projects" className="py-18 bg-gray-50">
      <div className="text-center mb-10">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm">Projets</h3>
        <h2 className="text-2xl font-bold">Quelques réalisations</h2>
      </div>
      {/* <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="mb-4">{proj.icon}</div>
            <h4 className="text-lg font-bold text-[var(--color-orange)] text-center">{proj.title}</h4>
            <p className="mt-2 text-gray-700 text-center">{proj.description}</p>
            <p className="mt-3 text-xs italic text-gray-500 text-center">{proj.stack}</p>
          </div>
        ))}
      </div> */}
      <Carrousel />
    </section>
  );
}