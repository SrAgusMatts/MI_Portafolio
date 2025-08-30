function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-950">
      <h1 className="text-5xl font-bold mb-4">Agustín Mattos</h1>
      <p className="text-xl text-gray-300 mb-6">
        Desarrollador Web & Técnico en Programación
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-indigo-600 rounded-full text-lg font-medium hover:bg-indigo-500 transition"
      >
        Ver Proyectos
      </a>
    </section>
  );
}

export default Hero;
