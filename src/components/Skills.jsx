import React from "react";
import { KnowSkills, InProccess, TryStartKnow, SkillIconsMap, ColumnIconsMap } from "../data"; 

export default function Skills() {
  const skillSections = [
    { 
      title: "Dominio Establecido", 
      icon: ColumnIconsMap.established,
      skills: KnowSkills,
    },
    { 
      title: "En Exploración Activa", 
      icon: ColumnIconsMap.learning,
      skills: InProccess,
    },
    { 
      title: "Próximas Fronteras", 
      icon: ColumnIconsMap.future,
      skills: TryStartKnow,
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades y Stack Tecnológico</h2>
        
        <div className="skills-grid">
          {skillSections.map((section, index) => {
            const ColumnIcon = section.icon;
            
            return (
              <div key={index} className="skill-column">
                <h3 className="column-title">
                  <ColumnIcon className="column-icon" size={24} /> 
                  {section.title}
                </h3>
                
                <div className="skills-list">
                  {section.skills.map((s, i) => {
                    const SkillLogo = SkillIconsMap[s]; 
                    return (
                      <span key={i} className="skill-badge">
                        {SkillLogo && <SkillLogo className="skill-logo" size={16} />} 
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}