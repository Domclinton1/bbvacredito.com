import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";

export default function Footer({ lang = "pt" }: { lang?: Lang }) {
  const t = messages[lang];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            {t.footer_empresa_titulo}
          </h3>
          <p className="text-sm text-gray-300">{t.footer_empresa_desc}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{t.footer_links}</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#inicio">{t.menu_inicio}</a>
            </li>
            <li>
              <a href="#simulacao">{t.menu_simulacao}</a>
            </li>
            <li>
              <a href="#beneficios">{t.menu_beneficios}</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{t.footer_legal}</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/privacidade">{t.footer_privacidade}</a>
            </li>
            <li>
              <a href="/termos">{t.footer_termos}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{t.footer_atendimento}</h4>
          <ul className="space-y-2 text-gray-300">
            <li>{t.footer_online}</li>
            <li>{t.footer_dias}</li>
            <li>{t.footer_horario}</li>
            <li>contato@seudominio.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center text-xs text-gray-400 max-w-5xl mx-auto">
        <p className="mb-2">{t.footer_legal1}</p>
        <p className="mb-2">{t.footer_legal2}</p>
        <p>{t.footer_legal3}</p>

        <p className="mt-4">
          © {new Date().getFullYear()} Plataforma de Crédito
        </p>
      </div>
    </footer>
  );
}
