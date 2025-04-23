import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "./providers/language-provider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "אוראל בוקריס | מפתח אתרים מומחה בפיתוח תלת-מימד",
  description: "אוראל בוקריס - מפתח אתרים מומחה בפיתוח אתרים תלת-מימדיים, חוויות אינטראקטיביות ופתרונות דיגיטליים מתקדמים. מומחה ב-React, Next.js, Three.js וטכנולוגיות web מודרניות.",
  keywords: "מפתח אתרים, בונה אתרים, פיתוח אתרים, פיתוח תלת-מימד, React, Next.js, Three.js, פיתוח frontend, פיתוח fullstack, חוויות אינטראקטיביות, אתרים מודרניים",
  authors: [{ name: "Orel Bukris" }],
  creator: "Orel Bukris",
  publisher: "Orel Bukris",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.orelweb.co.il",
    title: "אוראל בוקריס | מפתח אתרים מומחה בפיתוח תלת-מימד",
    description: "אוראל בוקריס - מפתח אתרים מומחה בפיתוח אתרים תלת-מימדיים, חוויות אינטראקטיביות ופתרונות דיגיטליים מתקדמים.",
    siteName: "Orel Bukris Portfolio",
    images: [
      {
        url: "https://www.orelweb.co.il/orel_linkedin.png",
        width: 1200,
        height: 630,
        alt: "Orel Bukris - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "אוראל בוקריס | מפתח אתרים מומחה בפיתוח תלת-מימד",
    description: "אוראל בוקריס - מפתח אתרים מומחה בפיתוח אתרים תלת-מימדיים, חוויות אינטראקטיביות ופתרונות דיגיטליים מתקדמים.",
    images: ["https://www.orelweb.co.il/orel_linkedin.png"],
  },
  alternates: {
    canonical: "https://www.orelweb.co.il",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/OB_logo.jpg" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <LanguageToggle />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}