import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll"; 

export default function Header() {
  useSmoothScroll('.nav-list a[href^="#"]'); 

  return (
    <header className="site-header">
      <nav className="container nav">
        <div className="text-green" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
          {"< SYSTEM />"}
        </div>
        <ul className="nav-list">
          <li><a href="#beginning">/INICIO</a></li>
          <li><a href="#projects">/PROYECTOS</a></li>
          <li><a href="#skills">/STACK</a></li>
          <li><a href="#contact">/CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
}