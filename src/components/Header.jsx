// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <div className="brand">agustinmattos.dev</div>
        <ul className="nav-list">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary btn-sm">Contacto</a>
      </nav>
    </header>
  );
}
