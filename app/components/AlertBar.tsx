"use client";

import { useState } from "react";

export default function AlertBar({ lang = "pt" }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const message =
    lang === "pt"
      ? "ATENÇÃO: TODO O PROCESSO É FEITO EM LÍNGUA PORTUGUESA. CRÉDITO PARA TODAS AS NACIONALIDADES."
      : "ATTENTION: THE ENTIRE PROCESS IS DONE IN PORTUGUESE. CREDIT AVAILABLE FOR ALL NATIONALITIES.";

  return (
    <div className="w-full bg-red-600 text-white text-center py-2 text-sm font-semibold animate-pulse fixed top-0 z-[999]">
      <div className="max-w-7xl mx-auto flex justify-center items-center relative px-6">
        <span>{message}</span>

        <button
          className="absolute right-6 text-white"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
