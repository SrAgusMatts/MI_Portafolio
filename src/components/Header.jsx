import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll"; 
import { useLanguage } from './LanguageContext';

export default function Header() {
  useSmoothScroll('.nav-list a[href^="#"]'); 
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <nav className="container nav">
        <div className="text-green" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
          {"< SYSTEM />"}
        </div>
        <ul className="nav-list">
          <li><a href="#beginning">{t.nav.home}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
          <li><a href="#skills">{t.nav.stack}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
      </nav>
    </header>
  );
}