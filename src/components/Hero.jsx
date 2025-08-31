// src/components/Hero.jsx
import React from "react";
import { PROFILE } from "../data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1 className="hero-title">{PROFILE.name}</h1>
        <p className="hero-subtitle">{PROFILE.role}</p>
        <p className="hero-text">{PROFILE.summary}</p>
        <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
      </div>
    </section>
  );
}
