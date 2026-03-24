"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { messages } from "./lib/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [lang, setLang] = useState("pt");
  const t = messages[lang];

  return (
    <html lang={lang}>
      <body className={`${poppins.variable} font-sans`}>
        <Header lang={lang} setLang={setLang} />

        <main className="pt-16">{children}</main>

        <div className="bg-yellow-300 text-center text-[#001391] text-sm uppercase py-2">
          {t.aviso_plataforma}
        </div>

        <Footer lang={lang} />
      </body>
    </html>
  );
}
