import Navbar from "@/components/layout/Navbar"; 
import BackgroundAnimation from "./BackgroundAnimation";

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Mi Portafolio - Todos los derechos reservados
  </footer>
);

export default function Layout({ children }) {
  return (
    <div>
      <Navbar /> 
      <BackgroundAnimation />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
