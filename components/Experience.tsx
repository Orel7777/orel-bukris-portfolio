"use client";
import React from "react";
// import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { useLanguage } from "@/app/providers/language-provider";


const Experience = () => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const {t} = useLanguage();

   const workExperience = [
    {
      id: 1,
      title: t('experience.title'),
      desc: t('experience.description'),
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: t('experience.title1'),
      desc: t('experience.description1'),
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: t('experience.title2'),
      desc: t('experience.description2'),
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: t('experience.title3'),
      desc: t('experience.description3'),
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
      {t("experience.headerTitle")} <span className="text-purple">{t("experience.headerTitle1")}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
           
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
