"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => pathname === path ? 'active-link' : '';

  return (
    <header className="main-header">
      {/* 1. Lado Izquierdo: Logo */}
      <div className="header-left">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo.webp"
            alt="MARINA TAROT Logo"
            width={120}
            height={120}
            className="logo-image"
            priority
          />
        </Link>
      </div>

      {/* 2. Centro: Navegación */}
      <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul className="nav-list">
          <li><Link href="/" className={isActive('/')} onClick={closeMenu}>Inicio</Link></li>
          <li><Link href="/sobre-mi" className={isActive('/sobre-mi')} onClick={closeMenu}>Sobre mi</Link></li>
          <li><Link href="/servicios" className={isActive('/servicios')} onClick={closeMenu}>Servicios</Link></li>
          <li><Link href="/contacto" className={isActive('/contacto')} onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </nav>

      {/* 3. Lado Derecho: Social + Botón */}
      <div className="header-right">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
        </div>
        
        <Link href="/contacto" className="cta-button" onClick={closeMenu}>
          ¡¿HABLAMOS?!
        </Link>

        {/* Botón hamburguesa solo para móvil */}
        <button className="hamburger-menu-button" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </button>
      </div>
    </header>
  );
}