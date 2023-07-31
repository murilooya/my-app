import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
