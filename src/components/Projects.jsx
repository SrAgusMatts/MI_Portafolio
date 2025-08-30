function Projects() {
  const projects = [
    {
      title: "Gestor de Tareas",
      description: "Aplicación web para administrar tareas y eventos.",
      tech: ["React", ".NET", "SQLite"],
      link: "#",
    },
    {
      title: "E-commerce de Velas",
      description: "Sitio minimalista de venta de velas aromáticas.",
      tech: ["React", "PHP", "SQLite"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 text-sm rounded-full text-indigo-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              className="text-indigo-500 hover:underline"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
