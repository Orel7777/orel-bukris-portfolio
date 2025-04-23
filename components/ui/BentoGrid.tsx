"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import animationData from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useLanguage } from '@/app/providers/language-provider';

type SupportedLanguage = 'he' | 'en';

const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false 
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, currentLanguage } = useLanguage() as unknown as {
    t: (key: string) => string;
    currentLanguage: SupportedLanguage;
  };
  const isRTL = currentLanguage === 'he';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  textAlign,
  customContent,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  textAlign?: 'left' | 'right' | 'center';
  customContent?: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t, currentLanguage } = useLanguage() as unknown as {
    t: (key: string) => string;
    currentLanguage: SupportedLanguage;
  };
  const isRTL = currentLanguage === 'he';
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("orelbukris7777@gmail.com");
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div 
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 cursor-pointer transform-gpu group hover:scale-105 hover:-translate-y-1 hover:rotate-1 active:scale-105 active:-translate-y-1 active:rotate-1",
        className
      )} 
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {customContent ? (
          customContent
        ) : (
          <>
            <div className="w-full h-full absolute">
              {img && (
                <Image
                  src={img}
                  alt={img}
                  className={cn(imgClassName, "object-cover object-center")}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <div
              className={cn(
                `absolute ${isRTL ? 'left-0' : 'right-0'} -bottom-5`,
                id === 5 && "w-full opacity-80"
              )}>
              {spareImg && (
                <Image
                  src={spareImg}
                  alt={spareImg}
                  className="object-cover object-center w-full h-full"
                  width={300}
                  height={300}
                />
              )}
            </div>
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>
            )}
            <div
              className={cn(
                titleClassName,
                `group-hover/bento:translate-x-${isRTL ? '-2' : '2'} transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
              )}>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                {description}
              </div>
              <div
                className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${
                  textAlign ? `text-${textAlign}` : isRTL ? 'text-right' : 'text-center'
                }`}>
                {title}
              </div>

              {id === 2 && <GlobeDemo />}
              {id === 3 && (
                <div className={`flex gap-1 lg:gap-5 w-fit absolute ${isRTL ? '-left-3 lg:-left-2' : '-right-3 lg:-right-2'}`}>
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 ">
                    {["React.js", "Next.js", "TypeScript"].map((item) => (
                      <span
                        key={item}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 ">
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                    {["MongoDB", "Express", "Node"].map((item) => (
                      <span
                        key={item}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {id === 6 && (
                <div className="mt-5 relative">
                  <div className={`absolute -bottom-5 ${isRTL ? 'left-0' : 'right-0'}`}>
                    {isMounted && copied && (
                      <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 150, height: 150 }}
                      />
                    )}
                  </div>
                  <MagicButton
                    title={copied ? t('grid.email3') : t('grid.email2')}
                    icon={<IoCopyOutline />}
                    position={isRTL ? "right" : "left"}
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161a31]"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};