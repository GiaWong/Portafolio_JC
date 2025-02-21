import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#151515] text-white py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-green-400 transition">Inicio</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition">Sobre mí</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-green-400 transition">Proyectos</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
