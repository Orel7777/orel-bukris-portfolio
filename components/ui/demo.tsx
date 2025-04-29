'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/Spotlight"
import { useLanguage } from '@/app/providers/language-provider';
import { GradientText } from "@/components/ui/gradient-text";

export function SplineSceneBasic() {
  const { t, language } = useLanguage();
  const isHebrew = language === 'he';
  
  return (
    <Card className="w-full h-[500px] bg-[#04071d] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col sm:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 sm:p-8 relative z-10 flex flex-col justify-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ${isHebrew ? 'text-right' : 'text-left'}`}>
            {t('spline_scene.title')}
          </h1>
          <p className={`mt-2 sm:mt-4 text-sm sm:text-base text-neutral-300 max-w-xs sm:max-w-sm md:max-w-lg ${isHebrew ? 'text-right' : 'text-left'}`}>
            {t('spline_scene.description')}
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[250px] sm:h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

export function GradientTextDemo() {
  const { t } = useLanguage();
  
  return (
    <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      <GradientText>{t('projects.portfolioFull')}</GradientText>
    </h1>
  );
}

export function PortfolioTitle() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        <GradientText>{t('projects.portfolioFull')}</GradientText>
      </h1>
    </div>
  );
} 