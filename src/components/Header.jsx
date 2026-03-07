'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from '../constants/data';

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
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 z-50 transition-colors duration-300">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-16 h-[60px] ">
        <Link href="/" aria-label="Accueil" className="flex items-center gap-3">
          <Image src="/logo-1.png" alt="MMG logo" width={40} height={40} className="object-contain" />
          <div className="flex items-center gap-2 font-semibold text-[var(--foreground)]">
            <span className="hidden text-black dark:text-white sm:block">Mouhamadou Moustapha Gueye</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300 font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-orange)] dark:hover:text-[var(--color-orange)] transition-colors"
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
        className={`md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium shadow transition-all duration-300 ease-in-out
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