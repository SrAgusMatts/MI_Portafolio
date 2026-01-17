import React from "react";
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t, data } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer style={{padding: '2rem', textAlign: 'center', borderTop: '2px solid var(--terminal-dim)', marginTop: '2rem'}}>
      <div className="container">
        <span className="text-green">© {year} SYSTEM: {data.profile.name.toUpperCase()}. {t.footer.rights}</span>
        <div style={{marginTop: '10px', fontSize: '0.8rem', color: '#555'}}>SESSION ID: {Math.floor(Math.random() * 999999)}</div>
      </div>
    </footer>
  );
}