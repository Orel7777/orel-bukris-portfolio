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
  const [language, setLanguage] = useState('he'); 
  const dictionary = require(`@/app/i18n/dictionaries/${language}.json`);

  // Always use Hebrew as the default language to match the provided screenshots
  useEffect(() => {
    // Force Hebrew language
    setLanguage('he');
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'he' ? 'en' : 'he';
    setLanguage(newLanguage);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: unknown = dictionary;
    for (const key of keys) {
      if (current && typeof current === 'object') {
        current = (current as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }
    return typeof current === 'string' ? current : path;
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
