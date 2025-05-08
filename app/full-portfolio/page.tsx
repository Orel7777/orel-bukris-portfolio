"use client";
import { HeroSection } from "@/components/ui/FullPortfolioHeroSection";
import { useLanguage } from "@/app/providers/language-provider";
import FullPortfolioProjects from "@/components/FullPortfolioProjects";
import { PortfolioTitle } from "@/components/ui/demo";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// טעינה דינמית של רכיב הטעינה כדי למנוע בעיות עם framer-motion
const Loader = dynamic(() => import('@/components/ui/Loader'), { ssr: false });
const CircleLoader = dynamic(() => import('@/components/ui/CircleLoader'), { ssr: false });

export default function FullPortfolioPage() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  // לוודא שהרינדור מתרחש רק בצד הלקוח
  useEffect(() => {
    setIsContentReady(true);
    
    // שימוש בפרק זמן ארוך יותר לטעינה למניעת בעיות עם אנימציות
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // אם התוכן לא מוכן עדיין (למניעת רינדור בצד השרת), נציג דף ריק
  if (!isContentReady) {
    return null;
  }

  // שלב הטעינה
  if (isLoading) {
    return <div className="w-screen h-screen flex items-center justify-center">
      <Loader />
    </div>;
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <PortfolioTitle />
        <div className="relative h-[300px] w-full mt-16">
          <CircleLoader />
        </div>
      </div>
      <div className="mt-8">
        <HeroSection
          title={t("projects.portfolioFull")}
          subtitle={{
            regular: t("projects.title"),
            gradient: t("projects.viewProject"),
          }}
          description={t("projects.descriptionFull")}
          ctaText={t("footer.contact")}
          ctaHref="/contact"
          bottomImage={{
            light: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            dark: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </div>
      <FullPortfolioProjects />
    </>
  );
}
