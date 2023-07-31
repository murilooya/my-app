import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </main>
  )
}
