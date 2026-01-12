import React from "react";
import { PROFILE } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{padding: '2rem', textAlign: 'center', borderTop: '2px solid var(--terminal-dim)', marginTop: '2rem'}}>
      <div className="container">
        <span className="text-green">© {year} SYSTEM: {PROFILE.name.toUpperCase()}. TODOS LOS DERECHOS RESERVADOS.</span>
        <div style={{marginTop: '10px', fontSize: '0.8rem', color: '#555'}}>SESSION ID: {Math.floor(Math.random() * 999999)}</div>
      </div>
    </footer>
  );
}