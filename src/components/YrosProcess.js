import React, { useState } from 'react';
// Remplace lucide-react par react-icons/fi
import { FiChevronLeft, FiChevronRight, FiPlay, FiCheckCircle, FiCalendar, FiSend } from 'react-icons/fi';
import Register from '../../assets/creation_de_compte.png';
import Tuto from '../../assets/prise_en_main.png';
import Clôture from '../../assets/cloture_de_votre_1ere_paie.png';
const YrosProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Création de votre compte",
      description: "Renseignez les informations demandées, et c'est parti !",
      content: (
        <div className="bg-white rounded-lg p-2 shadow-md">
          <img
            src={Register}
            alt="Création de compte"
            className="w-full h-64  object-cover rounded-lg mb-6"
            />
        </div>
      )
    },
    {
      id: 2,
      title: "Prise en main du logiciel",
      description: "Accédez à nos tutos vidéos pour une prise en main à votre rythme.",
      content: (
        <div className="">
          <img
            src={Tuto}
            alt="Création de compte"
            className="w-full h-80  object-cover rounded-lg mb-6"
            />
        </div>
      )
    },
    {
      id: 3,
      title: "Clôture de votre première paie",
      description: "À la date de votre choix.",
      content: (
        <div className="">
          <img
            src={Clôture}
            alt="Création de compte"
            className="w-full h-80  object-cover rounded-lg mb-6"
            />
        </div>
      )
    },
    {
      id: 4,
      title: "Et c'est tout !",
      description: "Vous êtes prêt à gérer votre paie en toute sérénité.",
      content: (
        <div className="flex flex-col items-center">
          <FiCheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <p className="text-lg text-gray-700">Bienvenue dans l'univers Yros !</p>
        </div>
      )
    }
    
  ];

  const nextStep = () => {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  return (
    <section className="p-6" aria-label="Processus d'onboarding Yros">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Lancez-vous en toute confiance.
        </h1>
        <p className="text-xl text-gray-600">
          La paie, c'est notre affaire ! Vous, concentrez-vous sur l'essentiel.
        </p>
      </div>

      {/* Navigation arrows */}
      <nav className="flex justify-around items-center mb-8" aria-label="Navigation étapes">
        <button
          onClick={prevStep}
          disabled={activeStep === 1}
          aria-label="Étape précédente"
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:ring-2 focus:ring-blue-400"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-600" aria-hidden="true" />
        </button>
        <button
          onClick={nextStep}
          disabled={activeStep === steps.length}
          aria-label="Étape suivante"
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:ring-2 focus:ring-blue-400"
        >
          <FiChevronRight className="w-6 h-6 text-gray-600" aria-hidden="true" />
        </button>
      </nav>

      {/* Steps container */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {steps.map((step, idx) => {
          // Nouvelle logique pour afficher 3 étapes sur desktop
          let isVisible = false;
          if (window.innerWidth < 768) {
            // Mobile : seulement l'étape active
            isVisible = activeStep === step.id;
          } else {
            // Desktop : toujours 3 étapes visibles
            const firstIdx = Math.max(0, Math.min(steps.length - 3, activeStep - 2));
            const lastIdx = firstIdx + 2;
            isVisible = idx >= firstIdx && idx <= lastIdx;
          }
          if (!isVisible) return null;
          const isActive = activeStep === step.id;
          return (
            <article
              key={step.id}
              className={`bg-yellow-50 rounded-2xl p-6 transition-all duration-300 min-w-[280px] max-w-[380px] flex-1
                ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'opacity-70 hover:opacity-90'}
              `}
              aria-current={isActive ? "step" : undefined}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3">
                  {step.id}
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h2>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <div className="transition-all duration-300">
                {/* Ajoute loading="lazy" et alt unique */}
                {React.cloneElement(step.content, {
                  children: React.Children.map(step.content.props.children, child =>
                    React.isValidElement(child)
                      ? React.cloneElement(child, {
                          loading: "lazy",
                          alt: step.title,
                        })
                      : child
                  ),
                })}
              </div>
            </article>
          );
        })}
      </div>

      {/* Progress indicator */}
      <nav className="flex justify-center mt-8 space-x-2" aria-label="Progression des étapes">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            aria-label={`Aller à l'étape ${step.id} : ${step.title}`}
            aria-current={activeStep === step.id ? "step" : undefined}
            className={`w-3 h-3 rounded-full transition-all focus:ring-2 focus:ring-blue-400 ${
              activeStep === step.id
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </nav>
    </section>
  );
};

export default YrosProcess;