import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import dynamic from "next/dynamic";

const DynamicPinPerspective = dynamic(() => import("./DynamicPinPerspective"), {
  ssr: false,
});

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer flex justify-center items-center",
        containerClassName
      )}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="relative flex justify-center items-center"
      >
        <div
          className="p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <DynamicPinPerspective title={title} href={href} />
    </Link>
  );
};
