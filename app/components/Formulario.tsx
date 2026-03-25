"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";
export default function SimuladorCredito({ lang = "pt" }: { lang?: Lang }) {
  const router = useRouter();
  const t = messages[lang];

  const [tipoCredito, setTipoCredito] = useState(t.credit_options[0]);
  const [valor, setValor] = useState(0);
  const [prazo, setPrazo] = useState(360);
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
    const taxa = 0.013 / 12;
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
    <section id="simulacao">
      <div className=" max-w-2xl mx-auto bg-[#004481] text-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">{t.simule_credito}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo crédito */}
          <select
            className="w-full p-3 rounded-lg text-white bg-blue-800"
            onChange={(e) => setTipoCredito(e.target.value)}
          >
            {t.credit_options.map((op) => (
              <option key={op} className="text-white">
                {op}
              </option>
            ))}
          </select>

          {/* Slider Valor */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              {t.montante}:
              <span className="ml-2 text-cyan-300 font-bold">
                € {valor.toLocaleString("pt-BR")}
              </span>
            </label>

            <input
              type="range"
              min="30000"
              max="2000000"
              step="10000"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          {/* Slider Prazo */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">
              {t.prazo}:
              <span className="ml-2 text-cyan-300 font-bold">
                {prazo} {t.meses}
              </span>
            </label>

            <input
              type="range"
              min="12"
              max="360"
              step="12"
              value={prazo}
              onChange={(e) => setPrazo(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div className="bg-blue-800 p-6 rounded-xl text-center">
            <p className="text-sm text-gray-300">Parcela estimada</p>

            <p className="text-3xl font-bold text-cyan-300 mt-2">
              €{" "}
              {mensalidade.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Taxa a partir de 1,30% ao ano (simulação)
            </p>
          </div>

          {/* Dados pessoais */}
          <input
            placeholder={t.nome}
            className="w-full p-3 rounded-lg text-black bg-white"
            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
          />

          <input
            placeholder={t.telefone}
            className="w-full p-3 rounded-lg text-black bg-white"
            onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
          />

          <input
            placeholder={t.email}
            className="w-full p-3 rounded-lg text-black bg-white"
            onChange={(e) => setDados({ ...dados, email: e.target.value })}
          />

          <input
            placeholder={t.renda}
            className="w-full p-3 rounded-lg text-black bg-white"
            onChange={(e) => setDados({ ...dados, renda: e.target.value })}
          />

          <input
            placeholder={t.cidade}
            className="w-full p-3 rounded-lg text-black bg-white"
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
