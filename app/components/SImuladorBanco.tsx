"use client";
import { useState } from "react";
type Lang = "pt" | "fr";
export default function SimuladorBanco({ lang = "pt" }: { lang?: Lang }) {
  const [tipo, setTipo] = useState("Prêt personnel");
  const [valor, setValor] = useState(10000);
  const [meses, setMeses] = useState(360);

  const [open, setOpen] = useState(false);

  // dados do cliente
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [renda, setRenda] = useState("");

  const taxa = 0.13;
  const mensalidade = ((valor * (1 + taxa)) / meses).toFixed(2);
  const total = (Number(mensalidade) * meses).toFixed(2);

  const enviarLead = async () => {
    const data = {
      nome,
      telefone,
      email,
      cidade,
      renda,
      tipo,
      valor,
      meses,
      mensalidade,
      total,
    };

    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    window.location.href = "/obrigado";
  };

  return (
    <>
      <div className="backdrop-blur-xl bg-white/80 p-8 rounded-2xl shadow-2xl border border-white/40">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900">
          Simule seu crédito de €30 mil a € 2 milhões.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow">
            <p className="font-semibold mb-4 text-gray-700">
              1 Choisissez votre crédit
            </p>

            <div className="space-y-3">
              {[
                "Prêt personnel",
                "Regroupement de crédits",
                "Crédit auto",
                "Prêt Travaux",
                "Crédit Energie",
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
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow">
            <p className="font-semibold mb-4 text-gray-700">
              2 Personnalisez votre crédit
            </p>

            <label className="text-sm text-gray-600">Votre montant</label>
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="border w-full p-2 rounded mb-4 mt-1 text-[#001391] "
            />

            <label className="text-sm text-gray-600">
              Choisissez votre durée
            </label>

            <div className="grid grid-cols-2 gap-2 mt-2">
              {[24, 30, 36, 42, 48, 60, 300, 360].map((m) => (
                <button
                  key={m}
                  onClick={() => setMeses(m)}
                  className={`p-2 rounded border transition text-[#001391] ${
                    meses === m
                      ? "border-[#0c4dff] bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {m} mois
                </button>
              ))}
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow">
            <p className="font-semibold mb-4 text-gray-700">
              3 Résultat de votre simulation
            </p>

            <div className="text-sm text-gray-600 space-y-1">
              <p>Montant emprunté: {valor} €</p>
              <p>Durée du crédit: {meses} mois</p>
              <p>Taux débiteur FIXE: 1.3% ao ano</p>
              <p>Total à payer: {total} €</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-600">Votre mensualité</p>
              <p className="text-3xl font-bold text-[#0c4dff]">
                {mensalidade} €
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full bg-[#0c4dff] hover:bg-[#001391] text-white p-3 rounded-lg transition"
            >
              Démarrez votre demande
            </button>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Finaliser votre demande
            </h3>

            <input
              placeholder="Nom"
              className="border p-2 w-full mb-2"
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              placeholder="Téléphone"
              className="border p-2 w-full mb-2"
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              placeholder="Email"
              className="border p-2 w-full mb-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Ville"
              className="border p-2 w-full mb-2"
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              placeholder="Revenu mensuel"
              className="border p-2 w-full mb-4"
              onChange={(e) => setRenda(e.target.value)}
            />

            <button
              onClick={enviarLead}
              className="w-full bg-red-600 text-white p-3 rounded-lg"
            >
              Envoyer la demande
            </button>
          </div>
        </div>
      )}
    </>
  );
}
