import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* As demais secoes serao adicionadas na Etapa 2 */}
      </main>
      <Footer />
    </>
  );
}
