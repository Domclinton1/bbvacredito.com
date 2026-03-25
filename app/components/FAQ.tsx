"use client";

import { useState } from "react";
import { messages } from "../lib/i18n";

type Lang = "pt" | "fr";

export default function FAQ({ lang = "pt" }: { lang?: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  const t = messages[lang];

  const faqs = [
    { pergunta: t.faq1_q, resposta: t.faq1_a },
    { pergunta: t.faq2_q, resposta: t.faq2_a },
    { pergunta: t.faq3_q, resposta: t.faq3_a },
    { pergunta: t.faq4_q, resposta: t.faq4_a },
    { pergunta: t.faq5_q, resposta: t.faq5_a },
  ];

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-10">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004481]">
            {t.faq_title}
          </h2>
          <p className="text-gray-600 mt-2">{t.faq_subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-[#004481]">
                  {faq.pergunta}
                </span>

                <span
                  className={`text-xl font-bold transition-transform duration-300 ${
                    open === index ? "rotate-45 text-cyan-400" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-5 transition-all duration-300 ease-in-out ${
                  open === index
                    ? "max-h-[300px] opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
