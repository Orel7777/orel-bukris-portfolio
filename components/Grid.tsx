'use client';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { useLanguage } from '@/app/providers/language-provider';

const Grid = () => {
  const { t } = useLanguage();
  
  const gridItems = [
    {
      id: 1,
      title: t('grid.picture'),
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:h-[65vh] ",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end text-start",
      img: "/computer_purple.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: t('grid.world'),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t('grid.language'),
      description: t('grid.language2'),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      textAlign: "left" as const,
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t('grid.tech'),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      textAlign: "left" as const, 
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: t('grid.tech2'),
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      textAlign: "left" as const, 
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: t('grid.email'),
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 flex justify-center items-center h-full",
      imgClassName: "",
      titleClassName: "text-center",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, imgClassName, titleClassName, textAlign, img, spareImg }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            textAlign={textAlign}
            img={img}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;