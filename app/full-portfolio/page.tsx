"use client";
import { HeroSection } from "@/components/ui/FullPortfolioHeroSection";
import { useLanguage } from "@/app/providers/language-provider";
import FullPortfolioProjects from "@/components/FullPortfolioProjects";
import { PortfolioTitle } from "@/components/ui/demo";

export default function FullPortfolioPage() {
  const { t } = useLanguage();
  return (
    <>
      <div className="w-full">
        <PortfolioTitle />
      </div>
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
      <FullPortfolioProjects />
    </>
  );
}
