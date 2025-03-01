import Navbar from "@/components/layout/Navbar"; 

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
