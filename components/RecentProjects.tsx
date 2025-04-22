"use client";
// import { projects } from "@/data";
import React, { useEffect, useState } from "react";
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
    <div className="py-20 px-4 md:px-8 lg:px-16" id="projects">
      <h1 className="heading text-center mb-14">
        {t("projects.title")}{" "}
        <span className="text-purple">{t("projects.viewProject")}</span>
      </h1>
      
      <div className="flex flex-wrap justify-center gap-24 md:gap-20 lg:gap-24 max-w-[1600px] mx-auto">
        {isClient &&
          projects.map((item) => {
            if (item.requireFemaleVerification) {
              return (
                <div
                  className="project-card w-full md:w-[450px] lg:w-[500px] h-[540px] perspective"
                  key={item.id}
                >
                  <a 
                    href="#" 
                    onClick={(e) => handleProjectClick(e, item)}
                    className="relative group block w-full h-full transform-gpu transition-all duration-700 preserve-3d hover:rotate-y-12"
                  >
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-[#13162D] shadow-custom overflow-hidden border border-purple/20 z-10">
                      <div className="flex flex-col h-full">
                        <div className="relative w-full h-[250px] overflow-hidden">
                          <Image
                            src="/bg.png"
                            alt="background"
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                            width={500}
                            height={250}
                          />
                          {item.id === 1 ? (
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                              <Image
                                src={item.img}
                                alt={`${item.title} cover`}
                                className="object-contain max-h-[90%] max-w-[90%] group-hover:scale-105 transition-transform duration-700"
                                width={400}
                                height={225}
                                priority
                              />
                            </div>
                          ) : (
                            <Image
                              src={item.img}
                              alt={`${item.title} cover`}
                              className="absolute inset-0 w-full h-full object-cover md:object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                              width={500}
                              height={250}
                            />
                          )}
                        </div>
                        
                        <div className="p-6 flex-grow flex flex-col">
                          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple transition-colors duration-300">
                            {item.title}
                          </h2>
                          
                          <p className="text-[#BEC1DD] text-lg font-light mb-auto">
                            {item.des}
                          </p>
                          
                          <div className="flex items-center justify-between mt-8">
                            <div className="flex items-center">
                              {item.iconLists.map((icon, index) => (
                                <div
                                  key={index}
                                  className="border border-white/20 rounded-full bg-black/40 backdrop-blur-sm w-10 h-10 flex justify-center items-center -mr-2 group-hover:translate-y-[-5px] transition-transform duration-300"
                                  style={{
                                    transitionDelay: `${index * 50}ms`,
                                  }}
                                >
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
                            
                            <div className="flex items-center bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full group-hover:bg-purple/20 transition-all duration-300">
                              <p className="text-white mr-2 text-sm font-medium">
                                {t("projects.checkFemale")}
                              </p>
                              <FaLocationArrow 
                                className="group-hover:translate-x-1 transition-transform duration-300" 
                                color="#CBACF9" 
                                size={14}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-b from-purple/10 to-[#13162D] rotate-y-180 border border-purple/30 flex items-center justify-center p-8">
                      <div className="text-center">
                        <h3 className="text-xl text-white font-bold mb-4">{item.title}</h3>
                        <p className="text-[#BEC1DD] mb-6">{item.des}</p>
                        <div className="inline-block bg-purple/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
                          {t("projects.checkFemale")}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            }
            
            return (
              <div
                className="project-card w-full md:w-[450px] lg:w-[500px] h-[540px] perspective"
                key={item.id}
              >
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block w-full h-full transform-gpu transition-all duration-700 preserve-3d hover:rotate-y-12"
                >
                  <div className="absolute inset-0 backface-hidden rounded-2xl bg-[#13162D] shadow-custom overflow-hidden border border-purple/20 z-10">
                    <div className="flex flex-col h-full">
                      <div className="relative w-full h-[250px] overflow-hidden">
                        <Image
                          src="/bg.png"
                          alt="background"
                          className="absolute inset-0 w-full h-full object-cover opacity-40"
                          width={500}
                          height={250}
                        />
                        {item.id === 1 ? (
                          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            <Image
                              src={item.img}
                              alt={`${item.title} cover`}
                              className="object-contain max-h-[90%] max-w-[90%] group-hover:scale-105 transition-transform duration-700"
                              width={400}
                              height={225}
                              priority
                            />
                          </div>
                        ) : (
                          <Image
                            src={item.img}
                            alt={`${item.title} cover`}
                            className="absolute inset-0 w-full h-full object-cover md:object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                            width={500}
                            height={250}
                          />
                        )}
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple transition-colors duration-300">
                          {item.title}
                        </h2>
                        
                        <p className="text-[#BEC1DD] text-lg font-light mb-auto">
                          {item.des}
                        </p>
                        
                        <div className="flex items-center justify-between mt-8">
                          <div className="flex items-center">
                            {item.iconLists.map((icon, index) => (
                              <div
                                key={index}
                                className="border border-white/20 rounded-full bg-black/40 backdrop-blur-sm w-10 h-10 flex justify-center items-center -mr-2 group-hover:translate-y-[-5px] transition-transform duration-300"
                                style={{
                                  transitionDelay: `${index * 50}ms`,
                                }}
                              >
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
                          
                          <div className="flex items-center bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full group-hover:bg-purple/20 transition-all duration-300">
                            <p className="text-white mr-2 text-sm font-medium">
                              {t("projects.check")}
                            </p>
                            <FaLocationArrow 
                              className="group-hover:translate-x-1 transition-transform duration-300" 
                              color="#CBACF9" 
                              size={14}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-b from-purple/10 to-[#13162D] rotate-y-180 border border-purple/30 flex items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-xl text-white font-bold mb-4">{item.title}</h3>
                      <p className="text-[#BEC1DD] mb-6">{item.des}</p>
                      <div className="inline-block bg-purple/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
                        {t("projects.check")}
                      </div>
                    </div>
                  </div>
                </a>
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
