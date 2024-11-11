"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/CardContainer";
import { useLanguage } from "@/app/providers/language-provider";
import orelImg from "../public/orel_linkedin.png";

export function Card3D() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t} = useLanguage();

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <CardContainer className="inter-var">
        <CardBody className="relative group/card bg-transparent dark:bg-transparent border-none w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-lg dark:shadow-none shadow-none flex flex-col items-center justify-center">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white text-center group-hover/card:text-amber-100 mb-2"
          >
            {t("card.title")}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src={orelImg}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-none"
              alt="Orel Bukris LinkedIn Profile"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-sm mt-5 text-center group-hover/card:text-amber-100"
          >
           {t("card.subtitle")}
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
