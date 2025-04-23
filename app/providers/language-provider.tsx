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
        // שימוש בשירות חלופי שתומך ב-CORS ובודק אם המשתמש מישראל
        const detectIsraelByTimeZone = () => {
          // בדיקה באמצעות אזור זמן
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          return timeZone === 'Asia/Jerusalem' || 
                 timeZone.includes('Israel') || 
                 timeZone.includes('Tel_Aviv');
        };
        
        const detectIsraelByLanguage = () => {
          // בדיקה באמצעות שפת הדפדפן
          const userLanguages = navigator.languages || 
                               [navigator.language || 
                               (navigator as any).userLanguage];
          
          return userLanguages.some(lang => 
            lang.toLowerCase().includes('he') || 
            lang.toLowerCase().includes('iw')
          );
        };
        
        if (detectIsraelByTimeZone() || detectIsraelByLanguage()) {
          setLanguage('he');
        } else {
          // נסה להשתמש בשירות אחר שתומך ב-CORS
          try {
            const response = await fetch('https://api.country.is', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            });
            
            if (response.ok) {
              const data = await response.json();
              if (data.country === 'IL') {
                setLanguage('he');
              }
            }
          } catch (apiError) {
            console.log('Using browser settings for language detection');
            // במקרה של כישלון, השאר את ברירת המחדל או השתמש בהגדרות הדפדפן
          }
        }
      } catch (error) {
        console.error('Error detecting location:', error);
        // במקרה של שגיאה, השתמש בשפת הדפדפן כדי להחליט
        const browserLang = navigator.language || (navigator as any).userLanguage;
        if (browserLang.startsWith('he') || browserLang.startsWith('iw')) {
          setLanguage('he');
        }
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
