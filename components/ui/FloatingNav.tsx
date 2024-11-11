"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/app/providers/language-provider";
import { cn } from "@/utils/cn";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  const navItems: NavItem[] = [
    {
      name: t('navigation.home'),
      link: "#about",
    },
    {
      name: t('navigation.projects'),
      link: "#projects",
    },
    {
      name: t('navigation.experience'),
      link: "#experience",
    },
    {
      name: t('navigation.contact'),
      link: "#contact",
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-2.5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center rtl gap-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}>
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}>
            {navItem.icon && <span className="block sm:hidden ml-2">{navItem.icon}</span>}
            <span className="text-sm !cursor-pointer">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;