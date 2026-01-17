import React from 'react';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  const langs = ['ES', 'EN', 'PT'];

  return (
    <div style={{
      marginTop: '10px',
      borderTop: '1px solid #003300',
      paddingTop: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }}>
      <div style={{ fontSize: '0.8rem', color: '#0f0', textAlign: 'center', marginBottom: '2px' }}>
        LOCALE_SET
      </div>
      
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
        {langs.map((lang) => (
          <button
            key={lang}
            onClick={() => switchLanguage(lang)}
            style={{
              background: language === lang ? '#0f0' : 'transparent',
              color: language === lang ? '#000' : '#0f0',
              border: '1px solid #0f0',
              padding: '5px 8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-retro)',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}