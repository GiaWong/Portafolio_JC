import "@/styles/theme.css";
import "@/styles/components.css";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <h2>Mi Portafolio</h2>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      
      <main className="container">
        {children}
      </main>
      
      <footer className="footer">
        © 2025 Mi Portafolio - Todos los derechos reservados
      </footer>
    </div>
  );
}
