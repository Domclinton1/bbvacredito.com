import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";

export default function Beneficios({ lang = "pt" }: { lang?: Lang }) {
  const t = messages[lang];

  return (
    <section className="bg-gray-50 py-20" id="beneficios">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">{t.beneficios_title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{t.beneficio1_title}</h3>
            <p className="text-gray-600">{t.beneficio1_desc}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{t.beneficio2_title}</h3>
            <p className="text-gray-600">{t.beneficio2_desc}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{t.beneficio3_title}</h3>
            <p className="text-gray-600">{t.beneficio3_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
