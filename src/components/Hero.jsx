import React from "react";
import { PROFILE } from "../data";

const PUBLIC_BASE =
  (typeof import.meta !== "undefined" && import.meta.env && typeof import.meta.env.BASE_URL === "string")
    ? import.meta.env.BASE_URL
    : (typeof process !== "undefined" && process.env && process.env.PUBLIC_URL) || "/";

export default function Hero() {

  const photoPath = PROFILE.photoPath
    ? `${PUBLIC_BASE}${PROFILE.photoPath}`
    : `${PUBLIC_BASE}foto-perfil.jpg`;

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-avatar" aria-hidden="true">
          <img
            src={photoPath}
            alt={`Foto de ${PROFILE.name}`}
            className="avatar-img"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width={200}
            height={200}
            sizes="(min-width: 768px) 200px, 160px"
          />
        </div>

        <h1 className="hero-title">{PROFILE.name}</h1>
        <p className="hero-subtitle">{PROFILE.role}</p>
        <p className="hero-text">{PROFILE.summary}</p>

        <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
      </div>
    </section>
  );
}
