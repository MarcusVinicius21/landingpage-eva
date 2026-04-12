import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { AboutEva } from "@/components/sections/AboutEva";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Protection } from "@/components/sections/Protection";
import { Institutional } from "@/components/sections/Institutional";
import { Download } from "@/components/sections/Download";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutEva />
        <HowItWorks />
        <Protection />
        <Institutional />
        <Download />
      </main>
      <Footer />
    </>
  );
}
