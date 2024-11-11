/* eslint-disable @typescript-eslint/no-require-imports */
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dictionary: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en'); 
  const dictionary = require(`@/app/i18n/dictionaries/${language}.json`);

  useEffect(() => {
    const detectLocationAndSetLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'IL') {
          setLanguage('he');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.error('Error detecting location:', error);
      }
    };

    detectLocationAndSetLanguage();
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'he' ? 'en' : 'he';
    setLanguage(newLanguage);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = dictionary;
    for (const key of keys) {
      current = current?.[key];
    }
    return current || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dictionary }}>
      <div dir={language === 'he' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};


export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  if (language === 'en') {
    return null; 
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all z-50 dark:bg-black/10 dark:text-white dark:hover:bg-black/20"
    >
      English
    </button>
  );
};
