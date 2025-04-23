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
        // שימוש בשיטות מקומיות שלא דורשות API חיצוני

        // בדיקה באמצעות אזור זמן
        const detectIsraelByTimeZone = () => {
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          return timeZone === 'Asia/Jerusalem' || 
                 timeZone.includes('Israel') || 
                 timeZone.includes('Tel_Aviv');
        };
        
        // בדיקה באמצעות שפת הדפדפן
        const detectIsraelByLanguage = () => {
          const userLanguages = navigator.languages || 
                               [navigator.language || 
                               (navigator as { userLanguage?: string }).userLanguage];
          
          return userLanguages.some(lang => 
            lang.toLowerCase().includes('he') || 
            lang.toLowerCase().includes('iw')
          );
        };
        
        // בדיקה באמצעות מיקום (אם המשתמש מאשר)
        const detectIsraelByGeolocation = (): Promise<boolean> => {
          return new Promise((resolve) => {
            // קביעת טיימאאוט כדי לא לתקוע את הטעינה
            const timeoutId = setTimeout(() => resolve(false), 3000);
            
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  clearTimeout(timeoutId);
                  
                  // קואורדינטות ישראל בקירוב
                  const lat = position.coords.latitude;
                  const lng = position.coords.longitude;
                  
                  // בדיקה כללית אם המיקום קרוב לישראל
                  const isNearIsrael = 
                    lat > 29.0 && lat < 34.0 && 
                    lng > 33.0 && lng < 36.0;
                  
                  resolve(isNearIsrael);
                },
                () => {
                  clearTimeout(timeoutId);
                  resolve(false); // במקרה של שגיאה או סירוב
                },
                { timeout: 3000, maximumAge: 86400000 } // 24 שעות בזיכרון מטמון
              );
            } else {
              clearTimeout(timeoutId);
              resolve(false);
            }
          });
        };
        
        // בדיקת מותאמת עבור דומיין עברי
        const isHebrewDomain = () => {
          return window.location.hostname.includes('orelweb.co.il') ||
                 document.referrer.includes('orelweb.co.il');
        };
        
        // ניסיון לזהות מיקום עם API שתומך ב-CORS
        const detectWithApi = async (): Promise<boolean> => {
          try {
            // שימוש ב-API שתומך ב-CORS
            const response = await fetch('https://api.country.is/');
            
            if (response.ok) {
              const data = await response.json();
              return data.country === 'IL';
            }
            return false;
          } catch {
            console.log('Country API detection failed, using fallback methods');
            return false;
          }
        };
        
        // הרצת כל השיטות והגדרת השפה לעברית אם אחת מהן חיובית
        if (
          detectIsraelByTimeZone() || 
          detectIsraelByLanguage() || 
          isHebrewDomain() || 
          await detectIsraelByGeolocation() || 
          await detectWithApi()
        ) {
          setLanguage('he');
        }
      } catch (err) {
        console.error('Error detecting location:', err);
        // במקרה של שגיאה, השתמש בשפת הדפדפן כדי להחליט
        try {
          const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
          if (browserLang && (browserLang.startsWith('he') || browserLang.startsWith('iw'))) {
            setLanguage('he');
          }
        } catch (langError) {
          console.error('Error detecting browser language:', langError);
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
