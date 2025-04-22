"use client";
// import { projects } from "@/data";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { useLanguage } from "@/app/providers/language-provider";

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: t("projects.nameProject8"),
      des: t("projects.description8"),
      img: "/dikla_maduela_1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://dikla-massage.co.il/",
      requireFemaleVerification: true
    },
    {
      id: 2,
      title: t("projects.nameProject7"),
      des: t("projects.description7"),
      img: "/lihen_biton.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://www.lihen.co.il/",
    },
    {
      id: 3,
      title: t("projects.nameProject"),
      des: t("projects.description1"),
      img: "/fitness.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://empower-your-fitness-nvlf.vercel.app/",
    },
    {
      id: 4,
      title: t("projects.nameProject2"),
      des: t("projects.description2"),
      img: "/outdoors.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://outdoor-exploration-ten.vercel.app/",
    },
    {
      id: 5,
      title: t("projects.nameProject3"),
      des: t("projects.description3"),
      img: "/island.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://island-portfolio-mwv4.vercel.app/",
    },
    {
      id: 6,
      title: t("projects.nameProject4"),
      des: t("projects.description4"),
      img: "/3Dex.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://3-d-example1-orel-bukris.vercel.app/",
    },
    {
      id: 7,
      title: t("projects.nameProject5"),
      des: t("projects.description5"),
      img: "/iphone.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://apple-website-example-beryl.vercel.app/",
    },
    {
      id: 8,
      title: t("projects.nameProject6"),
      des: t("projects.description6"),
      img: "/T-shirt.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://shirt-craft-3-d.vercel.app/",
    },
  ];

  const handleProjectClick = (e, project) => {
    if (project.requireFemaleVerification) {
      e.preventDefault();
      const isWoman = window.confirm(t("projects.femaleVerification1"));
      if (isWoman) {
        const confirmAgain = window.confirm(t("projects.femaleVerification2"));
        if (confirmAgain) {
          window.open(project.link, '_blank');
        }
      }
    }
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {t("projects.title")}{" "}
        <span className="text-purple">{t("projects.viewProject")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {isClient &&
          projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}>
              <PinContainer 
                title={item.title} 
                href={item.link}
                onClick={(e) => item.requireFemaleVerification ? handleProjectClick(e, item) : null}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}>
                    <img
                      src="/bg.png"
                      alt="bgimg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt={`${item.title} cover`}
                    className="z-10 w-auto h-auto object-cover rounded-lg rounded md:rounded-lg sm:rounded-xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}>
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}>
                        <img
                          src={icon}
                          alt={`technology-${index + 1}`}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {item.requireFemaleVerification ? t("projects.checkFemale") : t("projects.check")}
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentProjects;
