import React, { useState } from 'react';
import { useLanguage } from '@/app/providers/language-provider';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';

interface PortfolioFullButtonProps {
  className?: string;
}

const PortfolioFullButton: React.FC<PortfolioFullButtonProps> = ({ className }) => {
  const { t } = useLanguage();
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (isNavigating) return; // מניעת לחיצות כפולות
    
    setIsNavigating(true);

    // השתמש במעבר עם דף חדש במקום להציג את ה-Loader
    // זה מונע את הבעיה עם framer-motion
    router.push('/full-portfolio');
  };

  return (
    <div className="flex justify-center items-center w-full">
      <button 
        onClick={handleClick} 
        disabled={isNavigating}
        className={cn(
          "relative group border-none w-[13em] h-[4.2em] rounded-[3em] flex justify-center items-center gap-3",
          "bg-[#0f0f10] cursor-pointer transition-all duration-450 ease-in-out",
          "hover:bg-gradient-to-t hover:from-[#A47CF3] hover:to-[#683FEA]",
          "hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-4px_0px_0px_rgba(0,0,0,0.2),0px_0px_0px_4px_rgba(255,255,255,0.2),0px_0px_180px_0px_#9917FF]",
          "hover:translate-y-[-2px]",
          className
        )}
      >
        <svg height={24} width={24} viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" 
          className="fill-white transition-all duration-800 ease-in group-hover:fill-white group-hover:scale-[1.2]">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="font-semibold text-white text-medium group-hover:text-white">{t('projects.portfolioFull')}</span>
      </button>
    </div>
  );
}

export default PortfolioFullButton;
