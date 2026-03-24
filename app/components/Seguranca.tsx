import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";

export default function Seguranca({ lang = "pt" }: { lang?: Lang }) {
  const t = messages[lang];

  return (
    <section className="py-20 bg-gray-50" id="seguranca">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.seguranca_title}</h2>
          <p className="text-gray-600">{t.seguranca_subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow text-center border border-gray-100">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">{t.seg1_title}</h3>
            <p className="text-sm text-gray-600">{t.seg1_desc}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow text-center border border-gray-100">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold mb-2">{t.seg2_title}</h3>
            <p className="text-sm text-gray-600">{t.seg2_desc}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow text-center border border-gray-100">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-semibold mb-2">{t.seg3_title}</h3>
            <p className="text-sm text-gray-600">{t.seg3_desc}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow text-center border border-gray-100">
            <div className="text-3xl mb-3">🏦</div>
            <h3 className="font-semibold mb-2">{t.seg4_title}</h3>
            <p className="text-sm text-gray-600">{t.seg4_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
