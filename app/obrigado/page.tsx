"use client";

import { useEffect, useState } from "react";

export default function Obrigado() {
  const [contador, setContador] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      window.location.href = "https://www.bbva.es";
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Solicitação enviada com sucesso!
        </h1>

        <p className="text-gray-600 mb-6">
          Você será redirecionado em {contador} segundos.
        </p>

        <a
          href="https://www.bbva.es"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800"
        >
          Continuar agora
        </a>
      </div>
    </div>
  );
}
