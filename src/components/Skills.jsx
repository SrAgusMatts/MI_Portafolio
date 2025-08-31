// src/components/Skills.jsx
import React from "react";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-container">
          {SKILLS.map((s, i) => (
            <span key={i} className="skill-badge">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
