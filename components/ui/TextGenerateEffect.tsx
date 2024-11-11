import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope, animate, duration, filter, words]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div 
          ref={scope}
          className="dark:text-white text-black leading-snug tracking-wide"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              initial={{ 
                opacity: 0,
                filter: filter ? "blur(8px)" : "none"
              }}
              className={` ${idx > 9 ? "text-purple" : "dark:text-white text-black"
              } opacity-0 inline-block mr-3`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};