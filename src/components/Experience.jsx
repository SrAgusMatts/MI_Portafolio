// src/components/Experience.jsx
import React from "react";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia & Educación</h2>
        <div className="experience-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={`${exp.year}-${i}`} className="experience-item">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-place">{exp.place} — {exp.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
