"use client";

import { useState, useEffect } from "react";
import { messages } from "../lib/i18n";
type Lang = "pt" | "fr";

type HeaderProps = {
  lang?: Lang;
  setLang: (lang: Lang) => void;
};

export default function Header({ lang = "pt", setLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = messages[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t.menu_beneficios, link: "#beneficios" },
    { name: t.menu_simulacao, link: "#simulacao" },
    { name: t.menu_quemsomos, link: "https://www.bbva.es/personas.html" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f7f8f8] shadow-lg" : "bg-[#f7f8f8]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
          <div className="text-[#001391] font-semibold text-xl">
            Banco Bilbao Vizcaya Argentaria, S.A
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex gap-8 text-[#001391] font-medium">
            {menuItems.map((item, index) => (
              <a className="hover:underline" key={index} href={item.link}>
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Switch */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => setLang("pt")} className="text-sm">
              PT
            </button>
            <button onClick={() => setLang("fr")} className="text-sm">
              FR
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#001391] text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b flex justify-between">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col p-5 gap-4">
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} onClick={() => setMenuOpen(false)}>
              {item.name}
            </a>
          ))}

          <div className="flex gap-3 mt-4">
            <button onClick={() => setLang("pt")}>PT</button>
            <button onClick={() => setLang("fr")}>FR</button>
          </div>
        </div>
      </div>
    </>
  );
}
