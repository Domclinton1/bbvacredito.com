"use client";
import { useState } from "react";

export default function SimuladorBanco() {
  const [tipo, setTipo] = useState("Crédito pessoal");
  const [valor, setValor] = useState(30000);
  const [meses, setMeses] = useState(120);
  const [open, setOpen] = useState(false);

  // dados do cliente
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    renda: "",
  });

  const taxa = 0.013; // 1.3% ao ano
  const mensalidade =
    valor === 0
      ? 0
      : (
          (valor * (taxa / 12) * Math.pow(1 + taxa / 12, meses)) /
          (Math.pow(1 + taxa / 12, meses) - 1)
        ).toFixed(2);

  const total = (Number(mensalidade) * meses).toFixed(2);

  const enviarLead = async () => {
    await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dados,
        tipoCredito: tipo,
        valor,
        prazo: meses,
        mensalidade,
        total,
      }),
    });

    window.location.href = "/obrigado";
  };

  return (
    <>
      <div className="backdrop-blur-xl bg-white/80 p-6 md:p-8 rounded-2xl shadow-2xl border border-white/40">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#001391] text-center">
          Simule seu crédito de €30.000 a €2.000.000
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white/70 p-5 rounded-xl shadow">
            <p className="font-semibold mb-4 text-gray-700">
              1. Escolha seu crédito
            </p>

            <div className="space-y-3">
              {[
                "Crédito pessoal",
                "Crédito consolidado",
                "Crédito automóvel",
                "Crédito obras",
                "Crédito energia",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setTipo(item)}
                  className={`w-full text-left text-[#001391] p-3 rounded-lg border transition ${
                    tipo === item
                      ? "border-[#0c4dff] bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/70 p-5 rounded-xl shadow">
            <p className="font-semibold mb-4 text-gray-700">
              2. Personalize seu crédito
            </p>

            {/* VALOR */}
            <label className="text-sm text-gray-600">Valor desejado</label>
            <input
              type="range"
              min="30000"
              max="2000000"
              step="10000"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="w-full accent-blue-600 mt-2"
            />

            <p className="text-[#001391] font-semibold mt-2 mb-4">
              € {valor.toLocaleString("pt-BR")}
            </p>

            {/* PRAZO */}
            <label className="text-sm text-gray-600">
              Prazo do financiamento
            </label>

            <div className="grid grid-cols-2 gap-2 mt-2">
              {[60, 120, 180, 240, 300, 360].map((m) => (
                <button
                  key={m}
                  onClick={() => setMeses(m)}
                  className={`p-2 rounded border text-[#001391] ${
                    meses === m
                      ? "border-[#0c4dff] bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {m} meses
                </button>
              ))}
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/80 p-5 rounded-xl shadow">
            <p className="font-semibold mb-4 text-gray-700">
              3. Resultado da simulação
            </p>

            <div className="text-sm text-gray-600 space-y-1">
              <p>Valor solicitado: € {valor.toLocaleString("pt-BR")}</p>
              <p>Prazo: {meses} meses</p>
              <p>Taxa: 1,30% ao ano</p>
              <p>Total a pagar: € {Number(total).toLocaleString("pt-BR")}</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-600">Parcela mensal</p>
              <p className="text-3xl font-bold text-[#0c4dff]">
                € {mensalidade}
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full bg-[#0c4dff] hover:bg-[#001391] text-white p-3 rounded-lg transition"
            >
              Solicitar crédito
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-[#001391]">
              Finalizar solicitação
            </h3>

            <input
              placeholder="Nome completo"
              className="border p-3 w-full mb-3 rounded-lg"
              onChange={(e) => setDados({ ...dados, nome: e.target.value })}
            />

            <input
              placeholder="Telefone"
              className="border p-3 w-full mb-3 rounded-lg"
              onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
            />

            <input
              placeholder="Email"
              className="border p-3 w-full mb-3 rounded-lg"
              onChange={(e) => setDados({ ...dados, email: e.target.value })}
            />

            <input
              placeholder="Cidade"
              className="border p-3 w-full mb-3 rounded-lg"
              onChange={(e) => setDados({ ...dados, cidade: e.target.value })}
            />

            <input
              placeholder="Renda mensal"
              className="border p-3 w-full mb-4 rounded-lg"
              onChange={(e) => setDados({ ...dados, renda: e.target.value })}
            />

            <button
              onClick={enviarLead}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold"
            >
              Enviar solicitação
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-full mt-2 text-gray-500 text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
