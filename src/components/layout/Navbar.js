'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const links = [
  { label: 'Inicio', to: 'inicioSection' },
  { label: 'Quién soy', to: 'aboutSection' },
  { label: 'Experiencia', to: 'experience' },
  { label: 'Servicios', to: 'serviciosSection' },
  { label: 'Contacto', to: 'contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Barra de navegación */}
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="text-lg md:text-2xl font-bold text-purple-300">
            Portfolio Personal
          </h1>
          {/* Botón hamburguesa visible en todas las pantallas */}
          <button
            onClick={() => setMenuOpen(true)}
            className="navbar-toggle"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Menú lateral para todas las pantallas */}
      {menuOpen && (
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="text-white focus:outline-none hover:text-purple-300 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          <ul className="nav-links-list">
            {links.map(({ label, to }, index) => (
              <li key={index}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}