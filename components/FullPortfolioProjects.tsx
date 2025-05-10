0"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/providers/language-provider";
import VerificationDialog from "./ui/VerificationDialog";

interface ProjectItem {
  id: number;
  titleKey?: string;
  descKey?: string;
  title?: string;
  des?: string;
  img: string;
  iconLists: string[];
  link: string;
  requireFemaleVerification?: boolean;
}

// הפרויקטים שכבר קיימים בעמוד תיק העבודות
const existingProjects: ProjectItem[] = [
  {
    id: 1,
    titleKey: "projects.nameProject6",
    descKey: "projects.description6",
    img: "/T-shirt.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://shirt-craft-3-d.vercel.app/",
  },
  {
    id: 2,
    titleKey: "projects.nameProject5",
    descKey: "projects.description5",
    img: "/iphone.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://apple-website-example-beryl.vercel.app/",
  },
  {
    id: 3,
    titleKey: "projects.nameProject",
    descKey: "projects.description1",
    img: "/fitness.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://empower-your-fitness-nvlf.vercel.app/",
  },
];

export default function FullPortfolioProjects() {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // פרויקטים מהדף הראשי שנרצה להוסיף לעמוד תיק העבודות
  const additionalProjects: ProjectItem[] = [
    {
      id: 4,
      title: t("projects.nameProject8"),
      des: t("projects.description8"),
      img: "/dikla_maduela_1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://dikla-massage.co.il/",
      requireFemaleVerification: true
    },
    {
      id: 5,
      title: t("projects.nameProject7"),
      des: t("projects.description7"),
      img: "/lihen_biton.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://www.lihen.co.il/",
    },
    {
      id: 6,
      title: t("projects.nameProject9"),
      des: t("projects.description9"),
      img: "/limor_mimon.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://limor-mimon-4h3u.vercel.app/"
    },
    {
      id: 7,
      title: t("projects.nameProject3"),
      des: t("projects.description3"),
      img: "/island.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://island-portfolio-mwv4.vercel.app/",
    },
    {
      id: 8,
      title: t("projects.nameProject4"),
      des: t("projects.description4"),
      img: "/3Dex.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://3-d-example1-orel-bukris.vercel.app/",
    }
  ];

  // איחוד כל הפרויקטים
  const allProjects = [...existingProjects, ...additionalProjects];

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
    <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-950/90 to-black/90">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-center gap-12">
          {allProjects.map((item) => (
            <div
              key={item.id}
              className="project-card w-full md:w-[420px] lg:w-[480px] h-[540px] bg-[#181A2D] rounded-3xl shadow-2xl border border-purple-900/30 overflow-hidden flex flex-col hover:scale-105 transition-transform duration-500"
            >
              <div className="relative w-full h-[180px] md:h-[250px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.titleKey ? t(item.titleKey) : item.title || ""}
                  fill
                  className="object-cover md:object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                  style={{ zIndex: 1 }}
                />
                <div className="absolute inset-0 w-full h-full object-cover opacity-30 bg-gradient-to-t from-purple-900/80 to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-white mb-2 text-2xl text-center">
                  {item.titleKey ? t(item.titleKey) : item.title}
                </h3>
                <p className="text-[#BEC1DD] font-light mb-auto text-lg text-center">
                  {item.descKey ? t(item.descKey) : item.des}
                </p>
                <div className="flex items-center justify-center mt-8 gap-2">
                  {item.iconLists.map((icon, idx) => (
                    <span key={idx} className="border border-white/20 rounded-full bg-black/40 backdrop-blur-sm w-10 h-10 flex justify-center items-center">
                      <Image src={icon} alt={`technology-${idx + 1}`} width={40} height={40} className="p-2" />
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a
                    href={item.requireFemaleVerification ? "#" : item.link}
                    onClick={item.requireFemaleVerification ? (e) => handleProjectClick(e, item) : undefined}
                    target={item.requireFemaleVerification ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center bg-purple-700/80 hover:bg-purple-600 transition-all px-6 py-2 rounded-full text-white font-medium shadow-lg gap-2"
                  >
                    {item.requireFemaleVerification ? t("projects.checkFemale") : t("projects.check")}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l8-8z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VerificationDialog
        isOpen={dialogOpen}
        onConfirm={handleConfirmDialog}
        onCancel={handleCancelDialog}
      />
    </section>
  );
}
