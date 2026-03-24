import Beneficios from "./components/Beneficios";
import ComoFunciona from "./components/ComoFunciona";
import CTA from "./components/CTA";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import Formulario from "./components/Formulario";
import Hero from "./components/Hero";
import Seguranca from "./components/Seguranca";

export default function Home() {
  return (
    <main className="flex flex-col" lang="pt">
      <Hero />
      <Beneficios />
      <ComoFunciona />
      <Formulario />
      <Seguranca />
      <Depoimentos />
      <FAQ />
      <CTA />
    </main>
  );
}
