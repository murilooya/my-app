import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <Intro />
      <div className="flex flex-col items-center gap-8 py-8">
        <span className="text-4xl font-bold">
          Projects
        </span>
        <div className="grid grid-cols-3 gap-4 justify-center">
          <Card image="/images/album.png" name="The Dark Side of the Moon" skills={["HTML", "CSS", "C#", "C/C++"]} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
        </div>
      </div>
      <Footer />
    </main>
  )
}
