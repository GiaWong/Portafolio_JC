import Navbar from "@/components/layout/Navbar"; 
import ParticlesBackground from "./ParticlesBackground";

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Mi Portafolio - Todos los derechos reservados
  </footer>
);

export default function Layout({ children }) {
  return (
    <div>
      <Navbar /> 
      <ParticlesBackground />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
