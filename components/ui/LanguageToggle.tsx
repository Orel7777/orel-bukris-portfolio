'use client';

import { useLanguage } from '@/app/providers/language-provider';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-2 
      rounded-full text-white hover:bg-white/20 transition-all z-50
      dark:bg-black/10 dark:text-white dark:hover:bg-black/20"
    >
      {language === 'en' ? 'עברית' : 'English'}
    </button>
  );
};