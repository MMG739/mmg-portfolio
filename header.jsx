'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import { navLinks } from '../constants/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef(null)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  // Avoid hydration mismatch
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

  if (!mounted) return null;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 transition-all duration-300">
      <div className="glass-card rounded-[2rem] mx-auto flex justify-between items-center px-6 lg:px-10 h-[80px] shadow-2xl">
        <Link href="/" aria-label="Accueil" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-[40px] h-[40px] md:w-[45px] md:h-[45px] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
             <Image src="/logo-1.png" alt="MMG logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col justify-center font-display">
            <span className="hidden md:block font-extrabold text-sm text-slate-900 dark:text-white tracking-widest uppercase leading-tight">M. Moustapha</span>
            <span className="hidden md:block font-extrabold text-[10px] text-purple-500 tracking-[0.3em] uppercase leading-tight">Gueye</span>
            <span className="block md:hidden font-extrabold text-lg text-slate-900 dark:text-white tracking-tighter">MMG</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-purple-400 hover:scale-110 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-purple-400 font-mono text-[10px] font-bold hover:scale-105 transition-all"
          >
            <FaGlobe size={12} />
            {language.toUpperCase()}
          </button>

          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-purple-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20"
          >
            {t('nav.cv')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-purple-600 dark:text-purple-400 hover:scale-110 transition-transform p-2.5 rounded-xl bg-purple-500/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        ref={dropdownRef}
        className={`lg:hidden absolute top-[100px] left-4 right-4 glass-card rounded-[2rem] px-8 py-10 space-y-6 shadow-2xl transition-all duration-500 border border-purple-500/10
          ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'}
        `}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-purple-500 transition-colors"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-purple-600 text-white text-center py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-purple-500/40"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.cv')}
          </Link>
        </div>
      </div>
    </header>
  )
}
