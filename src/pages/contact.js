import Layout from "@/components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-[#606060] text-white min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-green-400">Contacto</h1>
          <p className="mt-4 text-lg">Si quieres colaborar o tienes alguna pregunta, no dudes en escribirme.</p>
          <form className="mt-6">
            <input type="text" placeholder="Tu Nombre" className="w-full p-3 mb-4 rounded-lg bg-[#151515] text-white" />
            <input type="email" placeholder="Tu Correo" className="w-full p-3 mb-4 rounded-lg bg-[#151515] text-white" />
            <textarea placeholder="Tu Mensaje" className="w-full p-3 mb-4 rounded-lg bg-[#151515] text-white"></textarea>
            <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
