'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";


const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

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
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-16 py-4">
        <Link href="/" aria-label="Accueil">
          <div className="flex items-center gap-2 font-semibold text-[var(--foreground)]">
            <div className="bg-[var(--color-orange)] text-white rounded px-2 py-2 text-sm font-bold">MMG</div>
            <span className="hidden text-black sm:block">Mouhamadou Moustapha Gueye</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-orange)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 border-[var(--color-orange)] text-[var(--color-orange)] border-2 px-6 py-2 rounded font-semibold btn-effect-11"
          >
            CV
          </Link>
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
        className={`md:hidden bg-white px-4 pb-4 space-y-2 text-sm text-gray-700 font-medium shadow transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
        aria-hidden={!isOpen}
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 bg-[var(--color-orange)] text-white text-center px-4 py-2 rounded"
          onClick={() => setIsOpen(false)}
        >
          CV
        </Link>
      </div>
    </header>
  )
}