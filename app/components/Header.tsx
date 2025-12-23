// app/components/Header.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">

      {/* 1. Logo (Izquierda) - CÓDIGO RESTAURADO */}
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo.webp"
            alt="MARINA TAROT Logo"
            width={120} // Un poco más pequeño suele quedar mejor
            height={120}
            style={{ objectFit: 'contain' }}
            className="logo-image"
            priority
          />
        </Link>
      </div>

      {/* 2. Botón de Hamburguesa */}
      <button
        className="hamburger-menu-button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </button>

      {/* 3. Contenedor Responsivo para todo el contenido de la derecha */}
      <div className={`nav-right-container ${isMenuOpen ? 'menu-open' : ''}`}>

        {/* 3a. Navegación (Centro) */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link href="/sobre-mi" onClick={closeMenu}>Sobre mi</Link></li>
            <li><Link href="/servicios" onClick={closeMenu}>Servicios</Link></li>
            <li><Link href="/contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </nav>

        {/* 3b. Íconos y CTA (Derecha) */}
        <div className="header-right-group">

          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>

          <Link href="/contacto" className="cta-button" onClick={closeMenu}>
            ¡¿HABLAMOS?!
          </Link>
        </div>

      </div>

    </header>
  );
}