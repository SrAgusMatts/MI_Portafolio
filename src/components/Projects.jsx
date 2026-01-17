import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Projects({ onViewAll }) {
  const { t, data } = useLanguage();
  const projectsList = data.projects;

  const VISIBLE_LIMIT = 3;
  const visibleProjects = projectsList.slice(0, VISIBLE_LIMIT);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        
        <div className="projects-grid">
          {visibleProjects.map((proj, index) => (
            <article key={index} className="project-card">
              <div style={{borderBottom: '1px dashed #003300', marginBottom: '10px', fontSize:'0.8rem', color: '#0f0'}}>
                ID: PRJ_00{index + 1} // RECENT
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.95rem'}}>{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((techItem, i) => (
                  <span key={i} className="tech-badge">{techItem}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {t.projects.access}
              </a>
            </article>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <button onClick={onViewAll} className="btn">
            {t.projects.view_all}
          </button>
        </div>

      </div>
    </section>
  );
}