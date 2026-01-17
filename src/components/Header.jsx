import React, { useState } from "react";
import useSmoothScroll from "../hooks/useSmoothScroll"; 
import { useLanguage } from './LanguageContext';

export default function Header({ toggleMode, currentMode }) {
  useSmoothScroll('.nav-list a[href^="#"], .mobile-menu-overlay a[href^="#"]'); 
  const { t, switchLanguage, language } = useLanguage(); 
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="container nav">
        <div className="text-green" style={{fontSize: '1.5rem', fontWeight: 'bold', zIndex: 102}}>
          {"< SYSTEM />"}
        </div>

        <ul className="nav-list">
          <li><a href="#beginning">{t.nav.home}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
          <li><a href="#skills">{t.nav.stack}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? "[ X ]" : "[ MENU ]"}
        </button>

        {isOpen && (
          <div className="mobile-menu-overlay">
            <a href="#beginning" onClick={handleLinkClick} style={{color: '#fff', fontSize: '1.5rem', textDecoration: 'none'}}>{t.nav.home}</a>
            <a href="#projects" onClick={handleLinkClick} style={{color: '#fff', fontSize: '1.5rem', textDecoration: 'none'}}>{t.nav.projects}</a>
            <a href="#skills" onClick={handleLinkClick} style={{color: '#fff', fontSize: '1.5rem', textDecoration: 'none'}}>{t.nav.stack}</a>
            <a href="#contact" onClick={handleLinkClick} style={{color: '#fff', fontSize: '1.5rem', textDecoration: 'none'}}>{t.nav.contact}</a>

            <hr style={{width: '50%', borderColor: '#003300', margin: '1rem 0'}} />

            <div style={{textAlign: 'center'}}>
              <p className="text-green" style={{marginBottom: '10px'}}>{">"} SELECT_LANG:</p>
              <div style={{display: 'flex', gap: '10px'}}>
                {['ES', 'EN', 'PT'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    style={{
                      background: language === lang ? '#0f0' : 'transparent',
                      color: language === lang ? '#000' : '#0f0',
                      border: '1px solid #0f0',
                      padding: '5px 10px',
                      fontFamily: 'var(--font-retro)',
                      fontSize: '1.2rem'
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <hr style={{width: '50%', borderColor: '#003300', margin: '1rem 0'}} />

            <button 
              onClick={() => { toggleMode('TERMINAL'); setIsOpen(false); }}
              style={{
                background: 'transparent',
                border: '1px solid #bd00ff',
                color: '#bd00ff',
                padding: '10px 20px',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-retro)',
                marginTop: '10px'
              }}
            >
              [ SWITCH_TO_DEV_CLI ]
            </button>

          </div>
        )}
      </nav>
    </header>
  );
}