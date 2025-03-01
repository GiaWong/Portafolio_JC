import { useState } from "react";
import { Link } from "react-scroll";

const links = [
  { label: "Inicio", to: "inicioSection" },
  { label: "Quién soy", to: "aboutSection" },
  { label: "Experiencia", to: "experience" },
  { label: "Proyectos", to: "projectsSection" },
  { label: "Contacto", to: "contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Mi Portafolio</h2>

        {/* Botón menú hamburguesa (solo en móviles) */}
        <button 
          className="navbar-toggle md:hidden" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Lista de enlaces con scroll suave */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map(({ label, to }, index) => (
            <li key={index}>
              <Link 
                to={to} 
                smooth={true} 
                duration={500} 
                offset={-70} // Ajuste para la navbar fija
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Mi Portafolio - Todos los derechos reservados
  </footer>
);

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
