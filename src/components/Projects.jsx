import React from "react";
import { PROJECTS } from "../data";

export default function Projects({ onViewAll }) {
  
  const VISIBLE_LIMIT = 3;
  const visibleProjects = PROJECTS.slice(0, VISIBLE_LIMIT);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">LOGS_RECIENTES</h2>
        
        <div className="projects-grid">
          {visibleProjects.map((proj, index) => (
            <article key={index} className="project-card">
              <div style={{borderBottom: '1px dashed #003300', marginBottom: '10px', fontSize:'0.8rem', color: '#0f0'}}>
                ID: PRJ_00{index + 1} // RECENT
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.95rem'}}>{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {">"} ACCEDER_SISTEMA
              </a>
            </article>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <button 
            onClick={onViewAll} 
            className="btn"
          >
            [ + ABRIR_DIRECTORIO_PROYECTOS ]
          </button>
        </div>

      </div>
    </section>
  );
}