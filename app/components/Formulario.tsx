"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";
export default function SimuladorCredito({ lang = "pt" }: { lang?: Lang }) {
  const router = useRouter();
  const t = messages[lang];

  const [tipoCredito, setTipoCredito] = useState(t.credit_options[0]);
  const [valor, setValor] = useState(10000);
  const [prazo, setPrazo] = useState(60);
  const [mensalidade, setMensalidade] = useState(0);

  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    email: "",
    renda: "",
    cidade: "",
  });

  const [aceito, setAceito] = useState(false);

  // cálculo da mensalidade
  useEffect(() => {
    const taxa = 0.06 / 12;
    const n = prazo;
    const p = valor;

    const m = (p * taxa * Math.pow(1 + taxa, n)) / (Math.pow(1 + taxa, n) - 1);

    setMensalidade(m);
  }, [valor, prazo]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!aceito) {
      alert(t.alert_privacidade);
      return;
    }

    await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tipoCredito,
        valor,
        prazo,
        mensalidade,
        ...dados,
      }),
    });

    router.push(`/${lang}/obrigado`);
  };

  return (
    <section id="simulacao" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">{t.simule_credito}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo crédito */}
          <select
            className="w-full p-3 rounded-lg text-black"
            onChange={(e) => setTipoCredito(e.target.value)}
          >
            {t.credit_options.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </select>

          {/* Slider Valor */}
          <div>
            <label>
              {t.montante}: € {valor}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="500"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Slider Prazo */}
          <div>
            <label>
              {t.prazo}: {prazo} {t.meses}
            </label>
            <input
              type="range"
              min="12"
              max="120"
              step="6"
              value={prazo}
              onChange={(e) => setPrazo(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Resultado */}
          <div className="bg-blue-800 p-4 rounded-lg">
            <p className="text-lg">
              {t.mensalidade}:
              <span className="font-bold ml-2">€ {mensalidade.toFixed(2)}</span>
            </p>
          </div>

          {/* Dados pessoais */}
          <input
            placeholder={t.nome}
            className="w-full p-3 rounded-lg text-black"
            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
          />

          <input
            placeholder={t.telefone}
            className="w-full p-3 rounded-lg text-black"
            onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
          />

          <input
            placeholder={t.email}
            className="w-full p-3 rounded-lg text-black"
            onChange={(e) => setDados({ ...dados, email: e.target.value })}
          />

          <input
            placeholder={t.renda}
            className="w-full p-3 rounded-lg text-black"
            onChange={(e) => setDados({ ...dados, renda: e.target.value })}
          />

          <input
            placeholder={t.cidade}
            className="w-full p-3 rounded-lg text-black"
            onChange={(e) => setDados({ ...dados, cidade: e.target.value })}
          />

          {/* Privacidade */}
          <div className="flex gap-2 text-sm">
            <input
              type="checkbox"
              onChange={(e) => setAceito(e.target.checked)}
            />
            <p>{t.privacidade}</p>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg font-semibold">
            {t.botao_credito}
          </button>
        </form>
      </div>
    </section>
  );
}
