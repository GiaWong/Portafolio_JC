import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0C0C0C] text-white">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido dinámico */}
      <main className="flex-grow">{children}</main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
