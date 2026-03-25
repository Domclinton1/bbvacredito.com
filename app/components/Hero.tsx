import SimuladorBanco from "./SImuladorBanco";
import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";

export default function Hero({ lang = "pt" }: { lang?: Lang }) {
  const t = messages[lang];

  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Imagem de fundo */}
      <img
        src="/banner.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-10 items-center text-center text-white">
        {/* Texto */}
        <div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            {t.hero_title}
          </h1>

          <p className="text-3xl mb-6">{t.hero_subtitle}</p>

          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-base md:text-xl">
            <li>✓ {t.hero_item1}</li>
            <li>✓ {t.hero_item2}</li>
            <li>✓ {t.hero_item3}</li>
          </ul>
        </div>

        {/* Simulador */}
        <div className="w-full bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-black">
          <SimuladorBanco lang={lang} />
        </div>
      </div>
    </section>
  );
}
