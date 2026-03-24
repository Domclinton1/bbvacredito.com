import { messages } from "../lib/i18n";

export default function Depoimentos({ lang = "pt" }) {
  const t = messages[lang];

  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold mb-4">{t.depoimentos_title}</h2>
          <p className="text-gray-600">{t.depoimentos_subtitle}</p>
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 mb-4">{t.dep1_text}</p>
            <h4 className="font-semibold">{t.dep1_nome}</h4>
            <span className="text-sm text-gray-500">{t.dep1_cidade}</span>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 mb-4">{t.dep2_text}</p>
            <h4 className="font-semibold">{t.dep2_nome}</h4>
            <span className="text-sm text-gray-500">{t.dep2_cidade}</span>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 mb-4">{t.dep3_text}</p>
            <h4 className="font-semibold">{t.dep3_nome}</h4>
            <span className="text-sm text-gray-500">{t.dep3_cidade}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
