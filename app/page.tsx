import Beneficios from "./components/Beneficios";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Seguranca from "./components/Seguranca";
import AboutSection from "./components/AboutSection";
import CreditSection from "./components/CreditSection";
import SimuladorBanco from "./components/SImuladorBanco";

export default function Home() {
  return (
    <main className="flex flex-col" lang="pt">
      <Hero />
      <SimuladorBanco />
      <AboutSection />

      <Beneficios />
      <CreditSection />
      <Seguranca />
      <FAQ />
    </main>
  );
}
