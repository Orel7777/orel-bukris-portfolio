import Approach from "@/components/Approach";
import { Card3D } from "@/components/Card3D";
import { ComparePic } from "@/components/ComparePic";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <ComparePic />
        <Card3D />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
