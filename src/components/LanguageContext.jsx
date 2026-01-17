import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations';
import { DATA } from '../data'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ES');

  const switchLanguage = (lang) => {
    if (['ES', 'EN', 'PT'].includes(lang)) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    switchLanguage,
    t: translations[language],
    data: DATA[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);