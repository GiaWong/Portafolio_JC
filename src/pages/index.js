import Head from "next/head";
import Layout from "@/components/layout/Layout";
import AboutSection from "@/components/layout/AboutSection";
import Header from "@/components/layout/Header";
import ProjectsSection from "@/components/layout/ProjectsSection";
import ContactSection from "@/components/layout/ContactSection";
import Experience from "@/components/layout/Experience";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mi Portafolio - Inicio</title>
        <meta name="description" content="Portafolio profesional con diseño moderno" />
      </Head>

      {/* Sección Hero */}
      <section className="h-screen flex items-center justify-center bg-[#0C0C0C]">
        <Header />
      </section>

      {/* Sección Sobre Mí */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Sección Experiencia */}
      <section id="experience">
        <Experience />
      </section>

      {/* Sección Proyectos */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Sección Contacto */}
      <section id="contacto">
        <ContactSection />
      </section>
    </Layout>
  );
}
