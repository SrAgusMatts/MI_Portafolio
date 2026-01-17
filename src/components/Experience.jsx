import React from "react";
import { useLanguage } from './LanguageContext';

export default function Experience() {
  const { t, data } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <div style={{borderLeft: '1px solid #003300', paddingLeft: '20px'}}>
          {data.experience.map((exp, i) => (
            <div key={i} className="experience-item">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-place">
                {">"} {t.experience.location}: {exp.place} // {t.experience.year}: {exp.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}