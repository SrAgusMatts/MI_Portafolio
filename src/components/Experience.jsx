import React from "react";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">REGISTRO_ACTIVIDAD</h2>
        <div style={{borderLeft: '1px solid #003300', paddingLeft: '20px'}}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="experience-item">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-place">
                {">"} UBICACION: {exp.place} // AÑO: {exp.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}