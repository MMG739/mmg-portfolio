'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-transparent text-center py-20 mt-6 px-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-6">
        </div>
        <h1 className="text-sm text-gray-500 dark:text-gray-400 tracking-wider">
          FULLSTACK DEVELOPER | DATA SCIENTIST | ODOO DEVELOPER | AI ENGINEER
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 dark:text-white leading-tight">
          Construire l'avenir de l'Afrique <br className="hidden md:block"/>
          avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400">l'Intelligence Artificielle</span>
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Je développe des solutions IA et logicielles innovantes, et je crée également des
          modules et intégrations Odoo pour la gestion d'entreprise. Je réponds aux défis
          sociaux et économiques africains en proposant une tech utile, éthique et accessible.
        </p>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <a href="#projects" className="bg-[var(--color-orange)] hover:bg-orange-600 shadow-lg shadow-orange-500/30 btn-effect-11 text-white px-8 py-3 rounded-md font-semibold transition-all">
            Voir mes projets
          </a>
          <a href="#contact" className="border-2 btn-effect-11 border-[var(--color-orange)] text-[var(--color-orange)] dark:text-[var(--color-orange)] hover:bg-orange-50 dark:hover:bg-gray-800 px-8 py-3 rounded-md font-semibold transition-all">
            Me contacter
          </a>
        </div>
      </motion.div>
    </section>
  );
}