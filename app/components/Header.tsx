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
    <header className="main-header" style={{ height: 'auto', minHeight: '80px' }}>
      {/* 1. Logo + Nombre (Izquierda) */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
        <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          
          {/* LOGO: Aumentado a 100px para que se note el cambio */}
          <img 
            src="/logo.png" 
            alt="MARINA TAROT Logo" 
            style={{ 
              height: '100px', 
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
              transition: 'transform 0.3s ease'
            }} 
            className="hover:scale-105"
          />

          <span style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#A855F7', 
            textTransform: 'uppercase',
            fontFamily: 'Playfair Display, serif'
          }}>
            Marina
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
              {/* SOLUCIÓN: Eliminado className="active" para que no se quede fija la barra */}
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

          <Link href="/contacto" className="cta-button" onClick={closeMenu}>
            ¡¿HABLAMOS?!
          </Link>
        </div>
      </div>
    </header>
  )
}