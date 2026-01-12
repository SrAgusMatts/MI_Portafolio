import React, { useState, useEffect } from "react";
import { PROFILE } from "../data";

const PUBLIC_BASE = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = PROFILE.role;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  const photoPath = PROFILE.photoPath ? `${PUBLIC_BASE}${PROFILE.photoPath}` : `${PUBLIC_BASE}foto-perfil.jpg`;

  return (
    <section id="beginning" className="hero">
      <div className="container hero-inner">
        <div className="hero-avatar">
          <img src={photoPath} alt={PROFILE.name} />
        </div>

        <h1 className="hero-title glitch-text">{PROFILE.name.toUpperCase()}</h1>
        <p className="hero-subtitle">
          {">"} {text}<span className="blink">_</span>
        </p>
        <p className="hero-text text-green">{PROFILE.summary}</p>

        <a href="#projects" className="btn">
          [ EJECUTAR PROYECTOS ]
        </a>
      </div>
    </section>
  );
}