import React from "react";
import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-text">¡Hablemos! Podés escribirme por mail o conectar en mis redes.</p>
        <div className="contact-links">
          <a href={`mailto:${PROFILE.email}`} className="link">Email</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
