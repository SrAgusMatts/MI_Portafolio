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
    <section id="projects" className="section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
            <div className="project-tech">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
