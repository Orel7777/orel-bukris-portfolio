import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אוראל בוקריס | תיק עבודות מלא",
  description: "צפייה בכל הפרויקטים של אוראל בוקריס - מומחה בפיתוח אתרים מודרניים, תלת-מימדיים ואינטראקטיביים",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 