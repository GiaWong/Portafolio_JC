import Layout from "@/components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <section className="bg-[#A7A7A7] text-black min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-green-900">Sobre Mí</h1>
          <p className="mt-4 text-lg">
            Soy una desarrolladora apasionada por la tecnología y la creación de soluciones innovadoras.  
            Con experiencia en desarrollo web, seguridad informática y gestión de proyectos, busco transformar  
            ideas en productos funcionales y atractivos.
          </p>
        </div>
      </section>
    </Layout>
  );
}
