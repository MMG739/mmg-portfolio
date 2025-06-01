import { FaEnvelope, FaUser, FaRegCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-2 text-center text-[var(--color-orange)]">Contact</h3>
        <p className="mb-6 text-center text-gray-700">
          Vous souhaitez collaborer ou discuter d’un projet ? Envoyez-moi un message.
        </p>
        <form className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Nom"
              className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:border-[var(--color-orange)]"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:border-[var(--color-orange)]"
            />
          </div>
          <div className="relative">
            <FaRegCommentDots className="absolute left-3 top-4 text-gray-400" />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:border-[var(--color-orange)]"
            ></textarea>
          </div>
          <button className="w-full bg-[var(--color-orange)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}