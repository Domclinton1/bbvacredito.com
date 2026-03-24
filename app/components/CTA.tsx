import { messages } from "../lib/i18n";

export default function CTA({ lang = "pt" }) {
  const t = messages[lang];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {t.cta_title}
        </h2>

        <p className="text-blue-100 mb-8">{t.cta_subtitle}</p>

        <a
          href="#simulacao"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-medium text-lg inline-block transition"
        >
          {t.cta_button}
        </a>
      </div>
    </section>
  );
}
