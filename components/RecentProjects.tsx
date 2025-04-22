"use client";
// import { projects } from "@/data";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { useLanguage } from "@/app/providers/language-provider";
import Image from "next/image";
import VerificationDialog from "./ui/VerificationDialog";

interface ProjectItem {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  requireFemaleVerification?: boolean;
}

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects: ProjectItem[] = [
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

  const handleProjectClick = (e: React.MouseEvent, project: ProjectItem) => {
    if (project.requireFemaleVerification) {
      e.preventDefault();
      setSelectedProject(project);
      setDialogOpen(true);
    }
  };

  const handleConfirmDialog = () => {
    if (selectedProject && selectedProject.link) {
      window.open(selectedProject.link, '_blank');
    }
    setDialogOpen(false);
  };

  const handleCancelDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {t("projects.title")}{" "}
        <span className="text-purple">{t("projects.viewProject")}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4 mt-10 justify-items-center max-w-[1400px] mx-auto">
        {isClient &&
          projects.map((item) => {
            if (item.requireFemaleVerification) {
              return (
                <div
                  className="h-[25rem] lg:h-[32.5rem] w-full max-w-[400px]"
                  key={item.id}>
                  <a 
                    href="#" 
                    onClick={(e) => handleProjectClick(e, item)}
                    className="relative group/pin z-50 cursor-pointer block w-full h-full"
                  >
                    <PinContainer title={item.title}>
                      <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                          className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl"
                          style={{ backgroundColor: "#13162D" }}>
                          <Image
                            src="/bg.png"
                            alt="bgimg"
                            className="w-full h-full object-cover"
                            width={400}
                            height={300}
                          />
                        </div>
                        <Image
                          src={item.img}
                          alt={`${item.title} cover`}
                          className="z-10 w-auto h-auto object-cover rounded-lg rounded md:rounded-lg sm:rounded-xl"
                          width={400}
                          height={300}
                        />
                      </div>

                      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
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
                              <Image
                                src={icon}
                                alt={`technology-${index + 1}`}
                                className="p-2"
                                width={40}
                                height={40}
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center items-center">
                          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            {t("projects.checkFemale")}
                          </p>
                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                      </div>
                    </PinContainer>
                  </a>
                </div>
              );
            }
            
            return (
              <div
                className="h-[25rem] lg:h-[32.5rem] w-full max-w-[400px]"
                key={item.id}>
                <PinContainer title={item.title} href={item.link}>
                  <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}>
                      <Image
                        src="/bg.png"
                        alt="bgimg"
                        className="w-full h-full object-cover"
                        width={400}
                        height={300}
                      />
                    </div>
                    <Image
                      src={item.img}
                      alt={`${item.title} cover`}
                      className="z-10 w-auto h-auto object-cover rounded-lg rounded md:rounded-lg sm:rounded-xl"
                      width={400}
                      height={300}
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
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
                          <Image
                            src={icon}
                            alt={`technology-${index + 1}`}
                            className="p-2"
                            width={40}
                            height={40}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        {t("projects.check")}
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            );
          })}
      </div>

      {isClient && (
        <VerificationDialog
          isOpen={dialogOpen}
          onConfirm={handleConfirmDialog}
          onCancel={handleCancelDialog}
        />
      )}
    </div>
  );
};

export default RecentProjects;
