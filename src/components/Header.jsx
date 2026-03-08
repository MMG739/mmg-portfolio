'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useTheme } from 'next-themes';
import { useLanguage } from '../context/LanguageContext';
import { navLinks } from '../constants/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef(null)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isOpen ? "bg-white dark:bg-[#0a0812]" : "bg-white/80 dark:bg-[#0a0812]/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"}`}>
      <div className="max-w-8xl mx-auto flex justify-between items-center px-16 h-[60px] ">
        <Link href="/" aria-label="Accueil" className="flex items-center gap-3">
          <Image src="/logo-1.png" alt="MMG logo" width={100} height={100} className="object-contain" />
          <div className="flex items-center gap-2 font-semibold text-[var(--foreground)]">
            <span className="hidden text-slate-900 dark:text-white sm:block tracking-wide">Mouhamadou Moustapha Gueye</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300 font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group py-2"
            >
              <span className="hover:text-[var(--color-orange)] dark:hover:text-[var(--color-orange)] transition-colors">
                {t(link.labelKey)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-orange)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 border-[var(--color-orange)] text-[var(--color-orange)] border-2 px-6 py-2 rounded-xl font-bold transition-all hover:bg-[var(--color-orange)] hover:text-white shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5 active:translate-y-0"
          >
            {t('nav.cv')}
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          )}
          {mounted && (
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 ml-1 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors font-bold text-xs tracking-wider border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <FaGlobe size={14} />
              {language.toUpperCase()}
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-orange)] hover:text-[var(--color-orange)] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <FaTimes size={28} aria-hidden="true" />
          ) : (
            <FaBars size={28} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        ref={dropdownRef}
        tabIndex={isOpen ? 0 : -1}
        className={`md:hidden absolute top-[60px] left-0 w-full bg-white dark:bg-[#0a0812] border-b border-gray-200 dark:border-gray-800 p-6 space-y-4 text-base text-slate-700 dark:text-slate-300 font-medium shadow-xl transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
        aria-hidden={!isOpen}
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-[var(--color-orange)] dark:hover:text-[var(--color-orange)] transition-colors border-b border-gray-100 dark:border-gray-800"
          >
            {t(link.labelKey)}
          </Link>
        ))}
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-[var(--color-orange)] text-white text-center px-4 py-3 rounded-xl font-bold uppercase tracking-wide shadow-lg shadow-orange-500/30"
          onClick={() => setIsOpen(false)}
        >
          {t('nav.cv')}
        </Link>
        <div className="flex justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
           {mounted && (
             <button
               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
               className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700"
               aria-label="Toggle Theme"
             >
               {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
             </button>
           )}
           {mounted && (
             <button
               onClick={toggleLanguage}
               className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-bold text-sm tracking-widest border border-slate-200 dark:border-slate-700"
             >
               <FaGlobe size={18} />
               {language.toUpperCase()}
             </button>
           )}
        </div>
      </div>
    </header>
  )
}