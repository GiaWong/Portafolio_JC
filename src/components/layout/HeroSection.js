import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#0C0C0C] text-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          We Are <span className="text-green-400">Creative</span> Design Agency
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Transformamos ideas en experiencias digitales únicas.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition">
          Conócenos
        </button>
      </div>
    </section>
  );
}
