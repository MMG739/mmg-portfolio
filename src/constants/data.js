export const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

export const skillsList = [
  {
    category: "Intelligence Artificielle",
    iconName: "FaBrain",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
  },
  {
    category: "Développement",
    iconName: "FaCode",
    items: ["Python", "React/Next.js", "Node.js", "API REST"],
  },
  {
    category: "Cloud & DevOps",
    iconName: "FaCloud",
    items: ["AWS", "Docker", "CI/CD", "Linux"],
  },
  {
    category: "Data & Outils",
    iconName: "FaDatabase",
    items: ["PostgreSQL", "TensorFlow", "PyTorch", "Git"],
  },
];

export const techIconsList = [
  { name: "PostgreSQL", iconName: "SiPostgresql" },
  { name: "Docker", iconName: "FaDocker" },
  { name: "Git", iconName: "FaGitAlt" },
  { name: "TensorFlow", iconName: "SiTensorflow" },
  { name: "PyTorch", iconName: "SiPytorch" },
];

export const projectsData = [
  {
    id: 1,
    title: "First Aid App",
    subtitle: "Application mobile de premiers secours",
    description: "Une application mobile moderne pour apprendre les gestes de premiers secours avec des tutoriels interactifs et des simulations en réalité augmentée.",
    technologies: ["React Native", "TypeScript", "Firebase", "AR Kit"],
    image: "/First-aid.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "En développement",
    duration: "3 mois",
    highlights: ["Interface intuitive", "Mode hors-ligne", "Certifications"]
  },
  {
    id: 2,
    title: "Yros Platform",
    subtitle: "Plateforme de gestion RH",
    description: "Solution complète de gestion des ressources humaines avec tableau de bord analytics, gestion des paies et suivi des performances.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    image: "/Yros.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "En production",
    duration: "6 mois",
    highlights: ["Dashboard temps réel", "API REST", "Sécurité avancée"]
  },
  {
    id: 3,
    title: "Resto-ISM",
    subtitle: "Application de gestion de restaurant",
    description: "Système de point de vente moderne avec gestion des commandes, inventaire intelligent et analytics pour restaurants.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
    image: "/Resto-ism.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "Terminé",
    duration: "4 mois",
    highlights: ["POS intégré", "Temps réel", "Multi-device"]
  },
  {
    id: 4,
    title: "Yros Platform",
    subtitle: "Plateforme de gestion RH",
    description: "Solution complète de gestion des ressources humaines avec tableau de bord analytics, gestion des paies et suivi des performances.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    image: "/Yros.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "En production",
    duration: "6 mois",
    highlights: ["Dashboard temps réel", "API REST", "Sécurité avancée"]
  },
  {
    id: 5,
    title: "Resto-ISM",
    subtitle: "Application de gestion de restaurant",
    description: "Système de point de vente moderne avec gestion des commandes, inventaire intelligent et analytics pour restaurants.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
    image: "/Resto-ism.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "Terminé",
    duration: "4 mois",
    highlights: ["POS intégré", "Temps réel", "Multi-device"]
  }
];

export const diplomesData = [
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

export const certificationsData = [
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

export const contactInfoData = [
  {
    iconName: "FaEnvelope",
    label: "Email",
    value: "gueyemouhamadoumoustapha@gmail.com",
    link: "mailto:gueyemouhamadoumoustapha@gmail.com",
    color: "text-red-500"
  },
  {
    iconName: "FaPhone",
    label: "Téléphone",
    value: "+221 78 152 23 30",
    link: "tel:+221781522330",
    color: "text-green-500"
  },
  {
    iconName: "FaMapMarkerAlt",
    label: "Localisation",
    value: "Dakar, Sénégal",
    link: "#",
    color: "text-blue-500"
  }
];

export const socialMediaData = [
  {
    iconName: "FaGithub",
    name: "GitHub",
    url: "https://github.com/votre-username",
    color: "hover:text-gray-900 dark:hover:text-white",
    bg: "hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  {
    iconName: "FaLinkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/votre-profile",
    color: "hover:text-blue-600",
    bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
  },
  {
    iconName: "FaTwitter",
    name: "Twitter",
    url: "https://twitter.com/votre-username",
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
  },
  {
    iconName: "FaInstagram",
    name: "Instagram",
    url: "https://instagram.com/votre-username",
    color: "hover:text-pink-500",
    bg: "hover:bg-pink-50 dark:hover:bg-pink-900/30"
  }
];
