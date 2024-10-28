import React from "react";
import { Compare } from "@/components/ui/Compare";


export function ComparePic() {
  return (
    <div className="flex justify-center p-4 rounded-3xl bg-transparent"> 
      <Compare
        firstImage="/OB_logo.jpg"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[300px] w-[250px] md:h-[350px] md:w-[350px]"
        slideMode="hover"
      />
    </div>
  );
}
