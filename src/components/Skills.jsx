function Skills() {
    const skills = ["React", "JavaScript", "TypeScript", "C#", ".NET", "SQLite", "PHP"];

    return (
        <section id="skills" className="section">
            <h2 className="section-title">Habilidades</h2>
            <div className="skills-container">
                {skills.map((s, i) => (
                    <span key={i} className="skill-badge">{s}</span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
