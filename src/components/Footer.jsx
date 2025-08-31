// src/components/Footer.jsx
import React from "react";
import { PROFILE } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <span>© {year} {PROFILE.name}. Todos los derechos reservados.</span>
        <span className="made-with">Hecho con React</span>
      </div>
    </footer>
  );
}
