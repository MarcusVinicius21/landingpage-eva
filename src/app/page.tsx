import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Protection } from "@/components/sections/Protection";
import { Institutional } from "@/components/sections/Institutional";
import { CtaAndFooter } from "@/components/sections/CtaAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      <Header />
      <div className="flex flex-col gap-y-24 md:gap-y-32 pb-0">
        <Hero />
        <About />
        <HowItWorks />
        <Protection />
        <Institutional />
      </div>
      <CtaAndFooter />
    </main>
  );
}
