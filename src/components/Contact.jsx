import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { contactInfoData, socialMediaData } from '../constants/data';

const iconComponents = {
  FaEnvelope: FaEnvelope,
  FaPhone: FaPhone,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[var(--color-orange)] font-semibold uppercase text-sm mb-2">Contact</h3>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Restons en Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à me contacter pour discuter de vos projets, collaborations ou simplement pour échanger sur le développement web.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Informations de contact */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-[var(--color-orange)] rounded-lg flex items-center justify-center mr-3">
                <FaEnvelope className="w-4 h-4 text-white" />
              </div>
              Informations de Contact
            </h3>
            
            <div className="space-y-6 flex-1">
              {contactInfoData.map((item, index) => {
                const Icon = iconComponents[item.iconName];
                return (
                  <div key={index} className="group">
                    <a 
                      href={item.link}
                      className="flex items-start p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[var(--color-orange)] dark:hover:border-[var(--color-orange)] hover:shadow-md transition-all duration-300 hover:-translate-y-1 block"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${item.color} bg-gray-50 dark:bg-gray-800 group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 mt-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.label}</p>
                        <p className="text-gray-900 dark:text-white font-semibold break-all leading-tight">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-[var(--color-orange)] rounded-lg flex items-center justify-center mr-3">
                <FaGithub className="w-4 h-4 text-white" />
              </div>
              Réseaux Sociaux
            </h3>
            
            <div className="grid grid-cols-2 gap-4 flex-1">
              {socialMediaData.map((social, index) => {
                const Icon = iconComponents[social.iconName];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[var(--color-orange)] dark:hover:border-[var(--color-orange)] transition-all duration-300 hover:-translate-y-1 ${social.bg} group`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Email CTA */}
          <div className="bg-gradient-to-r from-[var(--color-orange)] to-orange-500 rounded-xl p-8 text-white text-center shadow-lg hover:shadow-orange-500/20 transition-all hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3">Collaborons ensemble !</h4>
            <p className="text-orange-50 text-sm mb-6 max-w-xs mx-auto">
              Toujours ouvert aux nouvelles opportunités et projets intéressants.
            </p>
            <a 
              href="mailto:gueyemouhamadoumoustapha@gmail.com"
              className="inline-flex items-center bg-white text-[var(--color-orange)] hover:bg-gray-50 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm"
            >
              <FaEnvelope className="w-4 h-4 mr-2" />
              M'envoyer un email
            </a>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-8 text-white text-center shadow-lg hover:shadow-green-500/20 transition-all hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3">Discussion rapide ?</h4>
            <p className="text-green-50 text-sm mb-6 max-w-xs mx-auto">
              Contactez-moi directement sur WhatsApp pour une réponse plus rapide.
            </p>
            <a 
              href="https://wa.me/221781522330?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Message WhatsApp
            </a>
          </div>
        </div>

        {/* Section disponibilité */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-800 transition-colors">
          <div className="flex items-center justify-center mb-4">
            <div className="relative flex h-4 w-4 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </div>
            <span className="text-green-600 dark:text-green-400 font-bold text-lg">Disponible pour de nouveaux projets</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Je suis actuellement disponible pour des missions de développement web, des collaborations ou des projets freelance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">Développement Frontend</span>
            <span className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">Développement Backend</span>
            <span className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">Consulting</span>
            <span className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">Formation</span>
          </div>
        </div>
      </div>
    </section>
  );
}