import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "gueyemouhamadoumoustapha@gmail.com", // Email complet
      link: "mailto:gueyemouhamadoumoustapha@gmail.com",
      color: "text-red-500"
    },
    {
      icon: FaPhone,
      label: "Téléphone",
      value: "+221 78 152 23 30",
      link: "tel:+22178152233",
      color: "text-green-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Localisation",
      value: "Dakar, Sénégal",
      link: "#",
      color: "text-blue-500"
    }
  ];

  const socialMedia = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/votre-username",
      color: "hover:text-gray-900",
      bg: "hover:bg-gray-100"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/votre-profile",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/votre-username",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-50"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com/votre-username",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-50"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">Contact</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Restons en Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à me contacter pour discuter de vos projets, collaborations ou simplement pour échanger sur le développement web.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch"> {/* items-stretch pour égaliser les hauteurs */}
          {/* Informations de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-[var(--color-orange)] rounded-lg flex items-center justify-center mr-3">
                <FaEnvelope className="w-4 h-4 text-white" />
              </div>
              Informations de Contact
            </h3>
            
            <div className="space-y-6 flex-1"> {/* flex-1 pour occuper l'espace restant */}
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  <a 
                    href={item.link}
                    className="flex items-start p-4 rounded-xl border border-gray-200 hover:border-[var(--color-orange)] hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${item.color} bg-gray-50 group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors flex-shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                      <p className="text-gray-900 font-semibold break-all leading-tight">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-[var(--color-orange)] rounded-lg flex items-center justify-center mr-3">
                <FaGithub className="w-4 h-4 text-white" />
              </div>
              Réseaux Sociaux
            </h3>
            
            <div className="grid grid-cols-2 gap-4 flex-1"> {/* flex-1 pour occuper l'espace restant */}
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-6 rounded-xl border border-gray-200 hover:border-[var(--color-orange)] transition-all duration-300 hover:scale-105 ${social.bg} group`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-gray-600 ${social.color} transition-colors`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action - Séparé des réseaux sociaux */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Email CTA */}
          <div className="bg-gradient-to-r from-[var(--color-orange)] to-orange-500 rounded-xl p-6 text-white text-center">
            <h4 className="text-lg font-bold mb-2">Collaborons ensemble !</h4>
            <p className="text-orange-100 text-sm mb-4">
              Toujours ouvert aux nouvelles opportunités et projets intéressants.
            </p>
            <a 
              href="mailto:gueyemouhamadoumoustapha@gmail.com"
              className="inline-flex items-center bg-white text-[var(--color-orange)] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <FaEnvelope className="w-4 h-4 mr-2" />
              M'envoyer un email
            </a>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <h4 className="text-lg font-bold mb-2">Discussion rapide ?</h4>
            <p className="text-green-100 text-sm mb-4">
              Contactez-moi directement sur WhatsApp pour une réponse plus rapide.
            </p>
            <a 
              href="https://wa.me/22178152233?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Message WhatsApp
            </a>
          </div>
        </div>

        {/* Section disponibilité */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-600 font-semibold">Disponible pour de nouveaux projets</span>
          </div>
          <p className="text-gray-600 mb-6">
            Je suis actuellement disponible pour des missions de développement web, des collaborations ou des projets freelance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Développement Frontend</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Développement Backend</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Consulting</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Formation</span>
          </div>
        </div>
      </div>
    </section>
  );
}