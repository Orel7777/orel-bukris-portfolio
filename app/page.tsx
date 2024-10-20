import { Card3D } from "@/components/Card3D";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex-justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Card3D/>
      </div>
    </main>
  );
}
