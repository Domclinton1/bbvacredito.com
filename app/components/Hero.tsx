import { messages } from "../lib/i18n";
import AlertBar from "./AlertBar";
import Formulario from "./Formulario";

type Lang = "pt" | "fr";

export default function Hero({ lang = "pt" }: { lang?: Lang }) {
  const t = messages[lang];

  return (
    <>
      <AlertBar lang={lang} />

      <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
        {/* Background */}
        <img
          src="/banner.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70" />

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center text-white gap-10">
          {/* TEXTO */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t.hero_title}
            </h1>

            <p className="text-base sm:text-lg md:text-2xl mb-6 text-blue-100">
              {t.hero_subtitle}
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg">
              <li>✓ {t.hero_item1}</li>
              <li>✓ {t.hero_item2}</li>
              <li>✓ {t.hero_item3}</li>
            </ul>
          </div>

          {/* FORMULÁRIO */}
          <div className="w-full max-w-md backdrop-blur-md p-6 rounded-2xl shadow-2xl">
            <Formulario lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
