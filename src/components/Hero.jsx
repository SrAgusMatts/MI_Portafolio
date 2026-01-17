import React, { useState, useEffect } from "react";
import { useLanguage } from './LanguageContext';

const PUBLIC_BASE = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/";

export default function Hero() {
  const { t, data } = useLanguage();
  const { profile } = data;

  const [text, setText] = useState("");
  const fullText = profile.role;

  useEffect(() => {
    setText("");
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  const photoPath = profile.photoPath ? `${PUBLIC_BASE}${profile.photoPath}` : `${PUBLIC_BASE}foto-perfil.jpg`;

  return (
    <section id="beginning" className="hero">
      <div className="container hero-inner">
        <div className="hero-avatar">
          <img src={photoPath} alt={profile.name} />
        </div>

        <h1 className="hero-title glitch-text">{profile.name.toUpperCase()}</h1>
        <p className="hero-subtitle">
          {t.hero.role_prefix} {text}<span className="blink">_</span>
        </p>
        <p className="hero-text text-green">{profile.summary}</p>

        <a href="#projects" className="btn">
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}