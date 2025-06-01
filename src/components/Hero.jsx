export default function Hero() {
  return (
    <section className="bg-white text-center py-20 mt-6 px-4 ">
      <div className="flex justify-center mb-6">
        {/* <div className="rounded-full bg-[var(--color-orange)] w-20 h-20 flex items-center justify-center text-white text-xl font-bold">
          MMG
        </div> */}
      </div>
      <h1 className="text-sm text-gray-500">
        FullStack Développeur | IA Développeur | Data Scientist | Ingénieur Logiciel
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold mt-3">
        Construire l'avenir de l'Afrique <br />
        avec l'Intelligence Artificielle
      </h2>
      <p className="mt-5 text-gray-600 max-w-xl mx-auto">
        Je développe des solutions IA et logicielles innovantes pour répondre aux défis
        sociaux et économiques africains. De la santé à l’éducation en passant par la
        finance, mon objectif est de démocratiser la tech utile, éthique et accessible.
      </p>
      <div className="mt-6 flex justify-center gap-8">
        <button className="bg-[var(--color-orange)] btn-effect-11 text-white px-6 py-2 rounded-md font-medium">
          Voir mes projets
        </button>
        <button className="border-2 btn-effect-11 border-[var(--color-orange)] text-[var(--color-orange)] px-6 py-2 rounded-md font-medium ">
          Me contacter
        </button>
      </div>
    </section>
  );
}