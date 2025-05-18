'use client'

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/Spotlight"
import { useLanguage } from '@/app/providers/language-provider';
import { GradientText } from "@/components/ui/gradient-text";

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