import Layout from "@/components/layout/Layout";

export default function Projects() {
  return (
    <Layout>
      <section className="bg-[#1A2F2A] text-white min-h-screen flex items-center justify-center p-8">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold text-green-400 text-center">Mis Proyectos</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#002410] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-300">Proyecto 1</h2>
              <p className="mt-2 text-gray-300">Descripción breve del proyecto.</p>
            </div>
            <div className="bg-[#002410] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-300">Proyecto 2</h2>
              <p className="mt-2 text-gray-300">Descripción breve del proyecto.</p>
            </div>
            <div className="bg-[#002410] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-300">Proyecto 3</h2>
              <p className="mt-2 text-gray-300">Descripción breve del proyecto.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
