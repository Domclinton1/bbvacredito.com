import Beneficios from "../components/Beneficios";
import ComoFunciona from "../components/ComoFunciona";
import CTA from "../components/CTA";
import Depoimentos from "../components/Depoimentos";
import FAQ from "../components/FAQ";
import Formulario from "../components/Formulario";
import Hero from "../components/Hero";
import Seguranca from "../components/Seguranca";

export default function HomeFR() {
  return (
    <main className="flex flex-col" lang="fr">
      <Hero lang="fr" />
      <Beneficios lang="fr" />
      <ComoFunciona lang="fr" />
      <Formulario lang="fr" />
      <Seguranca lang="fr" />
      <Depoimentos lang="fr" />
      <FAQ lang="fr" />
      <CTA lang="fr" />
    </main>
  );
}
