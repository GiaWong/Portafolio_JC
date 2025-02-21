import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/layout/HeroSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mi Portafolio - Inicio</title>
        <meta name="description" content="Portafolio profesional con diseño moderno" />
      </Head>
      
      {/* Sección Hero */}
      <HeroSection />
    </Layout>
  );
}
