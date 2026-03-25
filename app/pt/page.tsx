import Beneficios from "../components/Beneficios";
import CTA from "../components/CTA";
import Depoimentos from "../components/Depoimentos";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Seguranca from "../components/Seguranca";

export default function HomePT() {
  return (
    <main className="flex flex-col" lang="pt">
      <Hero lang="pt" />
      <Beneficios lang="pt" />
      <Seguranca lang="pt" />
      <Depoimentos lang="pt" />
      <FAQ lang="pt" />
      <CTA lang="pt" />
    </main>
  );
}
