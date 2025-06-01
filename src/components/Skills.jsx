import { FaBrain, FaCode, FaDatabase, FaCloud, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiPostgresql } from "react-icons/si";

const skills = [
  {
    category: "Intelligence Artificielle",
    icon: <FaBrain className="text-3xl text-[var(--color-orange)] mb-2" />,
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
  },
  {
    category: "Développement",
    icon: <FaCode className="text-3xl text-[var(--color-orange)] mb-2" />,
    items: ["Python", "React/Next.js", "Node.js", "API REST"],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud className="text-3xl text-[var(--color-orange)] mb-2" />,
    items: ["AWS", "Docker", "CI/CD", "Linux"],
  },
  {
    category: "Data & Outils",
    icon: <FaDatabase className="text-3xl text-[var(--color-orange)] mb-2" />,
    items: ["PostgreSQL", "TensorFlow", "PyTorch", "Git"],
  },
];

const techIcons = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-xl" /> },
  { name: "Docker", icon: <FaDocker className="text-xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-xl" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-xl" /> },
];


export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm">Compétences</h3>
        <h2 className="text-2xl font-bold">Mon expertise technique</h2>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
            {skill.icon}
            <h4 className="text-[var(--color-orange)] font-bold mb-2 text-center">{skill.category}</h4>
            <ul className="space-y-1 text-center">
              {skill.items.map((item) => (
                <li key={item} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {techIcons.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow text-sm text-gray-700"
          >
            {icon}
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
