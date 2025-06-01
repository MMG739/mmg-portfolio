import { FaUserMd, FaBrain, FaGlobeAfrica, FaLaptopCode } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white via-orange-50 to-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Portrait & Intro */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/mmg.webp" // Remplace par le chemin de ta photo
            alt="Mouhamadou Moustapha Gueye"
            className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-[var(--color-orange)]"
          />
          <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">À propos</h3>
          <h2 className="text-2xl font-bold mb-4">Qui suis-je ?</h2>
          <p className="text-gray-700 mb-2 text-center md:text-left">
            Je suis Mouhamadou Moustapha Gueye, passionné par l’innovation technologique au service de l’humain.
          </p>
          <p className="text-gray-700 mb-4 text-center md:text-left">
            Ancien étudiant en médecine reconverti en ingénieur logiciel et spécialisé en IA/Data, je combine science, tech et terrain pour créer des solutions à fort impact.
          </p>
        </div>
        {/* Timeline & Stats */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Timeline */}
          <div className="relative pl-6 border-l-2 border-[var(--color-orange)] space-y-6">
            <div>
              <span className="absolute -left-4 top-1 w-6 h-6 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white">
                <FaUserMd />
              </span>
              <p className="font-semibold">Études de Médecine (jusqu'en 3éme Années)</p>
              <p className="text-sm text-gray-600">Formation scientifique & humaine</p>
            </div>
            <div>
              <span className="absolute -left-4 top-20 w-6 h-6 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white">
                <FaBrain />
              </span>
              <p className="font-semibold">Ingénierie & IA</p>
              <p className="text-sm text-gray-600">Spécialisation en IA/Data & développement logiciel</p>
            </div>
            <div>
              <span className="absolute -left-4 top-40 w-6 h-6 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white">
                <FaGlobeAfrica />
              </span>
              <p className="font-semibold">Impact Afrique</p>
              <p className="text-sm text-gray-600">Solutions tech pour la santé, l’agriculture, l’éducation</p>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
              <FaLaptopCode className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">5+</span>
              <span className="text-xs text-gray-600">Années d’expérience</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
              <FaLaptopCode className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">20+</span>
              <span className="text-xs text-gray-600">Projets réalisés</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
              <FaGlobeAfrica className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">3</span>
              <span className="text-xs text-gray-600">Pays d’intervention</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
              <FaBrain className="text-2xl text-[var(--color-orange)] mb-1" />
              <span className="text-xl font-bold text-[var(--color-orange)]">15+</span>
              <span className="text-xs text-gray-600">Technologies maîtrisées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}