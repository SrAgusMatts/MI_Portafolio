import React from "react";
import { useLanguage } from "./LanguageContext";
import { SkillIconsMap, ColumnIconsMap } from "../data";

export default function Skills() {
  const { t, data } = useLanguage();
  
  const skillSections = [
    { title: t.skills.established, icon: ColumnIconsMap.established, skills: data.skills.established },
    { title: t.skills.learning, icon: ColumnIconsMap.learning, skills: data.skills.learning },
    { title: t.skills.future, icon: ColumnIconsMap.future, skills: data.skills.future },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skillSections.map((section, index) => {
            const ColumnIcon = section.icon;
            return (
              <div key={index} className="skill-column">
                <h3 className="column-title text-purple">
                  <ColumnIcon size={20} /> {section.title}
                </h3>
                <div className="skills-list">
                  {section.skills.map((skillName, i) => {
                    const SkillLogo = SkillIconsMap[skillName]; 
                    return (
                      <span key={i} className="skill-badge">
                        {SkillLogo && <SkillLogo size={14} />} {skillName}
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