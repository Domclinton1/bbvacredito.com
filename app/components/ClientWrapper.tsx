"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { messages } from "../lib/i18n";
import { ReactNode } from "react";

type Lang = "pt" | "fr";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = messages[lang];

  return (
    <>
      <Header lang={lang} setLang={setLang} />

      <main className="pt-16">{children}</main>

      <div className="bg-yellow-300 text-center text-[#001391] text-sm uppercase py-2">
        {t.aviso_plataforma}
      </div>

      <Footer lang={lang} />
    </>
  );
}
