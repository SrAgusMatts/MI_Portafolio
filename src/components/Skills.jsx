import React from "react";
import { KnowSkills, InProccess, TryStartKnow, SkillIconsMap, ColumnIconsMap } from "../data"; 

export default function Skills() {
  const skillSections = [
    { title: "ESTABLECIDO", icon: ColumnIconsMap.established, skills: KnowSkills },
    { title: "CARGANDO...", icon: ColumnIconsMap.learning, skills: InProccess },
    { title: "FUTURO", icon: ColumnIconsMap.future, skills: TryStartKnow },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">SYSTEM_DIAGNOSTICS</h2>
        <div className="skills-grid">
          {skillSections.map((section, index) => {
            const ColumnIcon = section.icon;
            return (
              <div key={index} className="skill-column">
                <h3 className="column-title text-purple">
                  <ColumnIcon size={20} /> {section.title}
                </h3>
                <div className="skills-list">
                  {section.skills.map((s, i) => {
                    const SkillLogo = SkillIconsMap[s]; 
                    return (
                      <span key={i} className="skill-badge">
                        {SkillLogo && <SkillLogo size={14} />} {s}
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