import Image from "next/image";
import { FaUserMd, FaBrain, FaGlobeAfrica, FaLaptopCode } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white via-orange-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Portrait & Intro */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-[var(--color-orange)]">
            <Image
              src="/mmg.webp"
              alt="Mouhamadou Moustapha Gueye"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">À propos</h3>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Qui suis-je ?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-center md:text-left">
            Je suis Mouhamadou Moustapha Gueye, passionné par l’innovation technologique au service de l’humain.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center md:text-left">
            Ancien étudiant en médecine reconverti en ingénieur logiciel et spécialisé en IA/Data, je combine science, tech et terrain pour créer des solutions à fort impact.
          </p>
        </div>
        {/* Timeline & Stats */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Timeline */}
          <div className="relative pl-6 border-l-2 border-[var(--color-orange)] space-y-6">
            <div>
              <span className="absolute -left-4 top-1 w-6 h-6 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white">
                <FaUserMd className="text-sm" />
              </span>
              <p className="font-semibold dark:text-white">Études de Médecine (jusqu'en 3ème Année)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Formation scientifique & humaine</p>
            </div>
            <div>
              <span className="absolute -left-4 top-20 w-6 h-6 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white">
                <FaBrain className="text-sm" />
              </span>
              <p className="font-semibold dark:text-white">Ingénierie & IA</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Spécialisation en IA/Data & développement logiciel</p>
            </div>
            <div>
              <span className="absolute -left-4 top-40 w-6 h-6 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white">
                <FaGlobeAfrica className="text-sm" />
              </span>
              <p className="font-semibold dark:text-white">Impact Afrique</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Solutions tech pour la santé, l’agriculture, l’éducation</p>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors">
              <FaLaptopCode className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">3+</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Années d’expérience</span>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors">
              <FaLaptopCode className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">20+</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Projets réalisés</span>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors">
              <FaGlobeAfrica className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">3</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Pays d’intervention</span>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors">
              <FaBrain className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">15+</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Technologies maîtrisées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}