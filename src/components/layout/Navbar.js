import { useState } from "react";
import { Link } from "react-scroll";

const links = [
  { label: "Inicio", to: "inicioSection" },
  { label: "Quién soy", to: "aboutSection" },
  { label: "Proyectos", to: "projectsSection" },
  { label: "Contacto", to: "contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="text-2xl font-bold text-green-400">Mi Portafolio</h1>

        {/* Botón hamburguesa (solo en móviles) */}
        <button 
          className="navbar-toggle md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navegación */}
        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {links.map(({ label, to }, index) => (
              <li key={index}>
                <Link 
                  to={to} 
                  smooth={true} 
                  duration={500} 
                  offset={-70} // Ajusta para que la navbar no tape la sección
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
