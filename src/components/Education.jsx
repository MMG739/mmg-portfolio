'use client'
import React, { useState } from 'react';
import { FiBook, FiAward, FiCalendar, FiMapPin, FiExternalLink, FiStar, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { diplomesData, certificationsData } from '../constants/data';

const Education = () => {
  const [activeTab, setActiveTab] = useState('diplomes');
  const diplomes = diplomesData;
  const certifications = certificationsData;

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">Formation</h3>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Diplômes & Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Mon parcours académique et mes certifications professionnelles qui attestent de mes compétences techniques.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex space-x-1">
          <button
            onClick={() => setActiveTab('diplomes')}
            className={`px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
              activeTab === 'diplomes'
                ? 'bg-white dark:bg-gray-700 text-[var(--color-orange)] shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <FiBook className="w-5 h-5 mr-2" />
            Diplômes
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
              activeTab === 'certifications'
                ? 'bg-white dark:bg-gray-700 text-[var(--color-orange)] shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <FiAward className="w-5 h-5 mr-2" />
            Certifications
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'diplomes' && (
          <div className="space-y-8">
            {diplomes.map((diplome) => (
              <div key={diplome.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 hover:shadow-lg transition-all duration-300 ring-1 ring-transparent hover:ring-[var(--color-orange)]/50">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-md">
                      <FiBook className="w-8 h-8 text-[var(--color-orange)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{diplome.title}</h3>
                        <p className="text-[var(--color-orange)] font-semibold text-lg mb-2">{diplome.institution}</p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
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
                      <div className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0">
                        {diplome.grade}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{diplome.description}</p>

                    {/* Skills & Projects */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                          <FiBookOpen className="w-4 h-4 mr-2 text-[var(--color-orange)]" />
                          Compétences acquises
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {diplome.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm border dark:border-gray-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                          <FiStar className="w-4 h-4 mr-2 text-[var(--color-orange)]" />
                          Projets notables
                        </h4>
                        <ul className="space-y-1">
                          {diplome.projects.map((project, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
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
              <div key={cert.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-orange)]/50">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <FiAward className="w-6 h-6 text-[var(--color-orange)]" />
                    </div>
                    <div className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                      {cert.level}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Obtenue en</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{cert.date}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-[var(--color-orange)] font-semibold mb-4">{cert.issuer}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
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
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-xl p-8 max-w-2xl mx-auto border border-orange-100 dark:border-gray-800 shadow-sm">
          <FiTrendingUp className="w-12 h-12 mx-auto mb-4 text-[var(--color-orange)]" />
          <h3 className="text-2xl font-bold mb-3 dark:text-white">Formation Continue</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Je continue à me former régulièrement pour rester à jour avec les dernières technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm px-4 py-2 rounded-full">Veille technologique</span>
            <span className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm px-4 py-2 rounded-full">Formations en ligne</span>
            <span className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm px-4 py-2 rounded-full">Conférences tech</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;