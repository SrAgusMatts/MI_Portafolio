import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">INFO_USUARIO</h2>
        <div style={{border: '1px solid var(--terminal-green)', padding: '20px', background: 'rgba(0,20,0,0.4)'}}>
          <p style={{fontFamily: 'sans-serif', lineHeight: '1.8', fontSize: '1.1rem'}}>
            <span className="text-green">{">"}</span> Soy un apasionado por la programación. Actualmente curso 
            <strong className="text-purple"> Ingeniería en Sistemas</strong> y me especializo en
            construir experiencias web modernas. Trabajo con <strong className="text-purple">React</strong> en el frontend y 
            <strong className="text-purple"> .NET/C#</strong> en el backend, priorizando código limpio.
          </p>
        </div>
      </div>
    </section>
  );
}