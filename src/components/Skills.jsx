function Skills() {
  const skills = ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite", "PHP"];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-900 rounded-lg text-indigo-400 font-medium shadow"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
