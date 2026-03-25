import Beneficios from "./components/Beneficios";

import CTA from "./components/CTA";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import Formulario from "./components/Formulario";
import Hero from "./components/Hero";
import Seguranca from "./components/Seguranca";
import AboutSection from "./components/AboutSection";
import CreditSection from "./components/CreditSection";

export default function Home() {
  return (
    <main className="flex flex-col" lang="pt">
      <Hero />
      <AboutSection />
      <Beneficios />
      <CreditSection />
      <Formulario />
      <Seguranca />
      <FAQ />
    </main>
  );
}
