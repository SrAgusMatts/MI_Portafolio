// src/components/Projects.jsx
import React from "react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {PROJECTS.map((proj, index) => (
            <article key={index} className="project-card">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver proyecto →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
