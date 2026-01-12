import React, { useEffect } from "react";
import { PROJECTS } from "../data";

export default function ProjectArchive({ onBack }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '100vh' }}>
      
      <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--terminal-dim)', paddingBottom: '1rem' }}>
        <button 
          onClick={onBack}
          className="text-green"
          style={{ 
            background: 'transparent', border: 'none', cursor: 'pointer', 
            fontSize: '1.2rem', fontFamily: 'var(--font-retro)', 
            marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'
          }}
        >
          {"< [ VOLVER_AL_MENU_PRINCIPAL ]"}
        </button>
        <h2 className="section-title" style={{margin: 0}}>BASE_DATOS_COMPLETA</h2>
        <p className="text-purple">Total de archivos encontrados: {PROJECTS.length}</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((proj, index) => (
          <article key={index} className="project-card">
            <div style={{borderBottom: '1px dashed #003300', marginBottom: '10px', fontSize:'0.8rem', color: '#0f0'}}>
              ID: DB_PRJ_{index + 1}
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
      
      <div style={{textAlign: 'center', marginTop: '4rem', opacity: 0.5}}>
        END OF FILE LIST.
      </div>
    </div>
  );
}