"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="main-header" style={{ height: 'auto' }}>
      {/* 1. Logo + Nombre */}
      <div className="logo">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="MARINA TAROT Logo" 
            className="logo-image"
            style={{ height: '80px', width: 'auto', display: 'block' }} // Forzamos el tamaño grande
          />
          {/* 'hidden' lo oculta en móvil, 'md:block' lo muestra en pantallas medianas/grandes */}
          <span className="hidden md:block text-2xl md:text-4xl font-bold text-[#A855F7] uppercase font-heading tracking-widest">
          </span>
        </Link>
      </div>

      <button
        className="hamburger-menu-button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-icon">{isMenuOpen ? "✕" : "☰"}</span>
      </button>

      <div className={`nav-right-container ${isMenuOpen ? "menu-open" : ""}`}>
        <nav className="main-nav">
          <ul className="nav-list">
            <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link href="/sobre-mi" onClick={closeMenu}>Sobre mi</Link></li>
            <li><Link href="/servicios" onClick={closeMenu}>Servicios</Link></li>
            <li>
              {/* ELIMINADA la clase "active" para que la barra solo salga en hover */}
              <Link href="/contacto" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-right-group">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
          </div>

          {/* 'hidden' quita el botón en el menú móvil, 'md:flex' lo activa en PC */}
          <Link href="/contacto" className="cta-button hidden md:flex" onClick={closeMenu}>
            ¡¿HABLAMOS?!
          </Link>
        </div>
      </div>
    </header>
  )
}