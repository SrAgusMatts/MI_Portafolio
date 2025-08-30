function Experience() {
  const experiences = [
    { year: "2024", role: "Técnico en Programación", place: "Escuela PROA" },
    { year: "2025", role: "Estudiante Ingeniería en Sistemas", place: "UTN San Francisco" },
    { year: "2024", role: "Prácticas laborales", place: "Trizap - Mantenimiento de webs" },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Experiencia & Educación</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-indigo-500 pl-4">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-400">{exp.place} — {exp.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
