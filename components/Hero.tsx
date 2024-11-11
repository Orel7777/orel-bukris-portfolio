"use client";

import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useLanguage } from "@/app/providers/language-provider";
import { useState, useEffect } from "react";
import { LampDemo } from "./ui/lamp";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, dictionary } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (dictionary && Object.keys(dictionary).length > 0) {
      setIsLoaded(true);
    }
  }, [dictionary]);

  if (!isLoaded) {
    return (
      <section className="relative dark:bg-black-100 bg-white py-20 px-8 md:px-16 flex items-center justify-center">
       <LampDemo />
      </section>
    );
  }

  return (
    <section className="relative pb-20 pt-36">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
        <h2 className="tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
          {t("hero.subtitle")}
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl mb-4"
          words={t("hero.title")}
        />

        <a href="#about">
          <MagicButton
            title={t("hero.button")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <p className="text-center md:tracking-wider mt-4 text-sm md:text-lg lg:text-2xl">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
