'use client'
import React, { useState } from 'react';
import { FiBook, FiAward, FiCalendar, FiMapPin, FiExternalLink, FiStar, FiBookOpen, FiTrendingUp } from 'react-icons/fi';

const Education = () => {
  const [activeTab, setActiveTab] = useState('diplomes');

  const diplomes = [
    {
      id: 1,
      title: "Master en Data Science et Intelligence Artificielle",
      institution: "Ecole d'Ingénieurs ISM et ESG Paris",
      location: "Dakar, Sénégal",
      period: "2024 - 2026",
      grade: "Mention Très Bien",
      description: "Spécialisation en data science, intelligence artificielle",
      skills: ["Développement Full-Stack", "Machine Learning", "Gestion de projet"],
      projects: ["Projet de fin d'études sur l'IA", "Application mobile collaborative"]
    },
    {
      id: 2,
      title: "Licence Informatique en Genie Logiciel",
      institution: "Digital Campus de L'ISM",
      location: "Dakar, Sénégal",
      period: "2021 - 2024",
      grade: "Mention Bien",
      description: "Fondamentaux de l'informatique, programmation, bases de données",
      skills: ["Programmation", "Bases de données", "Algorithmique"],
      projects: ["Système de gestion de bibliothèque", "Site web e-commerce"]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Associate",
      credentialId: "AWS-ASA-123456",
      verifyUrl: "#",
      skills: ["Cloud Computing", "Architecture", "Sécurité"],
      validUntil: "2026"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      level: "Professional",
      credentialId: "META-RD-789012",
      verifyUrl: "#",
      skills: ["React", "JavaScript", "Frontend"],
      validUntil: "2025"
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      level: "Professional",
      credentialId: "GCP-PRO-345678",
      verifyUrl: "#",
      skills: ["GCP", "DevOps", "Kubernetes"],
      validUntil: "2025"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">Formation</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Diplômes & Certifications
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Mon parcours académique et mes certifications professionnelles qui attestent de mes compétences techniques.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('diplomes')}
            className={`px-3 py-3 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'diplomes'
                ? 'bg-white text-[var(--color-orange)] shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiBook className="w-5 h-5 inline mr-2" />
            Diplômes
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-3 py-3 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-white text-[var(--color-orange)] shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FiAward className="w-5 h-5 inline mr-2" />
            Certifications
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'diplomes' && (
          <div className="space-y-8">
            {diplomes.map((diplome) => (
              <div key={diplome.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <FiBook className="w-8 h-8 text-[var(--color-orange)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{diplome.title}</h3>
                        <p className="text-[var(--color-orange)] font-semibold text-lg mb-2">{diplome.institution}</p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                          <div className="flex items-center">
                            <FiCalendar className="w-4 h-4 mr-1" />
                            {diplome.period}
                          </div>
                          <div className="flex items-center">
                            <FiMapPin className="w-4 h-4 mr-1" />
                            {diplome.location}
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {diplome.grade}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{diplome.description}</p>

                    {/* Skills & Projects */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                          <FiBookOpen className="w-4 h-4 mr-2 text-[var(--color-orange)]" />
                          Compétences acquises
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {diplome.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm border">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                          <FiStar className="w-4 h-4 mr-2 text-[var(--color-orange)]" />
                          Projets notables
                        </h4>
                        <ul className="space-y-1">
                          {diplome.projects.map((project, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--color-orange)] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <FiAward className="w-6 h-6 text-[var(--color-orange)]" />
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {cert.level}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Obtenue en</p>
                    <p className="font-semibold text-gray-900">{cert.date}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-[var(--color-orange)] font-semibold mb-4">{cert.issuer}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-br from-white via-orange-50 to-white rounded-xl p-8 max-w-2xl mx-auto">
          <FiTrendingUp className="w-12 h-12 mx-auto mb-4 text-[var(--color-orange)]" />
          <h3 className="text-2xl font-bold mb-3">Formation Continue</h3>
          <p className="mb-6 opacity-90">
            Je continue à me former régulièrement pour rester à jour avec les dernières technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Veille technologique</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Formations en ligne</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Conférences tech</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;