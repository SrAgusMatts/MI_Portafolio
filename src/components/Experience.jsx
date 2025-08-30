function Experience() {
    const experiences = [
        { year: "2024", role: "Técnico en Programación", place: "Escuela PROA" },
        { year: "2025", role: "Estudiante Ingeniería en Sistemas", place: "UTN San Francisco" },
        { year: "2024", role: "Prácticas laborales", place: "Trizap - Mantenimiento de webs" },
    ];

    return (
        <section id="experience" className="section">
            <h2 className="section-title">Experiencia & Educación</h2>
            <div className="experience-list">
                {experiences.map((exp, i) => (
                    <div key={i} className="experience-item">
                        <h3 className="experience-role">{exp.role}</h3>
                        <p className="experience-place">{exp.place} — {exp.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
