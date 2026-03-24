import { messages } from "../lib/i18n";

export default function ComoFunciona({ lang = "pt" }) {
  const t = messages[lang];

  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold mb-4">{t.como_title}</h2>
          <p className="text-gray-600">{t.como_subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Passo 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">
              {t.como_passo1_title}
            </h3>
            <p className="text-gray-600">{t.como_passo1_desc}</p>
          </div>

          {/* Passo 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">
              {t.como_passo2_title}
            </h3>
            <p className="text-gray-600">{t.como_passo2_desc}</p>
          </div>

          {/* Passo 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">
              {t.como_passo3_title}
            </h3>
            <p className="text-gray-600">{t.como_passo3_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
