import React from "react";
import { useLanguage } from './LanguageContext';

export default function About() {
  const { t, data } = useLanguage();
  
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div style={{border: '1px solid var(--terminal-green)', padding: '20px', background: 'rgba(0,20,0,0.4)'}}>
          <p style={{fontFamily: 'sans-serif', lineHeight: '1.8', fontSize: '1.1rem'}}>
            <span className="text-green">{">"}</span> {data.profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
}