import React from "react";
import { Compare } from "@/components/ui/Compare";


export function ComparePic() {
  return (
    <div className="flex justify-center p-4 rounded-3xl bg-transparent"> 
      <Compare
        firstImage="/OB_logo.jpg"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[300px] w-[380px] sm:h-[400px] sm:w-[400px]"
        slideMode="hover"
      />
    </div>
  );
}
