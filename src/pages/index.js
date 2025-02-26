import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/layout/HeroSection";
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mi Portafolio - Inicio</title>
        <meta name="description" content="Portafolio profesional con diseño moderno" />
      </Head>
      
      {/* Sección Hero */}
      <Header />
      <HeroSection />
    </Layout>
  );
}
