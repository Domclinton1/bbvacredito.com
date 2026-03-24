"use client";

import { useState } from "react";
import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";

export default function FAQ({ lang = "pt" }: { lang?: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  const t = messages[lang];

  const faqs = [
    {
      pergunta: t.faq1_q,
      resposta: t.faq1_a,
    },
    {
      pergunta: t.faq2_q,
      resposta: t.faq2_a,
    },
    {
      pergunta: t.faq3_q,
      resposta: t.faq3_a,
    },
    {
      pergunta: t.faq4_q,
      resposta: t.faq4_a,
    },
    {
      pergunta: t.faq5_q,
      resposta: t.faq5_a,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">{t.faq_title}</h2>
          <p className="text-gray-600">{t.faq_subtitle}</p>
        </div>

        {/* Perguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border">
              <button
                className="w-full text-left p-5 font-medium flex justify-between items-center"
                onClick={() => setOpen(open === index ? null : index)}
              >
                {faq.pergunta}
                <span>{open === index ? "-" : "+"}</span>
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-gray-600">{faq.resposta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
