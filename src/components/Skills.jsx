import { skillsList, techIconsList } from '../constants/data';
import { FaBrain, FaCode, FaDatabase, FaCloud, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiPostgresql } from "react-icons/si";

const iconMap = {
  FaBrain: <FaBrain className="text-3xl text-[var(--color-orange)] mb-2" />,
  FaCode: <FaCode className="text-3xl text-[var(--color-orange)] mb-2" />,
  FaCloud: <FaCloud className="text-3xl text-[var(--color-orange)] mb-2" />,
  FaDatabase: <FaDatabase className="text-3xl text-[var(--color-orange)] mb-2" />,
  SiPostgresql: <SiPostgresql className="text-xl" />,
  FaDocker: <FaDocker className="text-xl" />,
  FaGitAlt: <FaGitAlt className="text-xl" />,
  SiTensorflow: <SiTensorflow className="text-xl" />,
  SiPytorch: <SiPytorch className="text-xl" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="text-center mb-10">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm">Compétences</h3>
        <h2 className="text-2xl font-bold dark:text-white">Mon expertise technique</h2>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsList.map((skill) => (
          <div key={skill.category} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {iconMap[skill.iconName]}
            <h4 className="text-[var(--color-orange)] font-bold mb-2 text-center">{skill.category}</h4>
            <ul className="space-y-1 text-center">
              {skill.items.map((item) => (
                <li key={item} className="text-gray-700 dark:text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {techIconsList.map(({ name, iconName }) => (
          <div
            key={name}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded shadow text-sm text-gray-700 dark:text-gray-300 transition-colors"
          >
            {iconMap[iconName]}
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
