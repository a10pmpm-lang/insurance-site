"use client";

import { useState, useEffect } from "react";
import { Shield, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "会社案内",     href: "#about" },
    { label: "保険商品",     href: "#services" },
    { label: "選ばれる理由", href: "#why-us" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#D8E8F5] shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Top utility bar — desktop only */}
      <div className="hidden lg:block bg-[#1B5EA8] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <span className="text-blue-100">XXX保険株式会社</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-blue-200" />
              <span className="text-blue-100">0120-XXX-XXX（平日9:00〜17:00）</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg jp-primary-bg flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="leading-tight">
            <span className="text-[#1B5EA8] font-semibold text-base sm:text-lg tracking-tight">
              XXX保険会社
            </span>
            <span className="hidden sm:block text-[10px] text-slate-400 tracking-wide -mt-0.5">
              少額短期保険
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-600 hover:text-[#1B5EA8] text-sm px-3 lg:px-4 py-2 rounded-md hover:bg-[#EBF4FD] transition-all duration-200 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile: phone + toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:0120XXXXXX"
            className="flex items-center gap-1 bg-[#EBF4FD] text-[#1B5EA8] px-3 py-2 rounded-lg text-xs font-medium min-h-[40px]"
            aria-label="電話する"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">電話相談</span>
          </a>
          <button
            className="text-slate-600 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#D8E8F5] px-4 py-4 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-600 hover:text-[#1B5EA8] hover:bg-[#EBF4FD] text-sm py-3.5 px-3 rounded-md transition-colors min-h-[48px] flex items-center"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-[#D8E8F5]">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="jp-btn text-sm px-5 py-3.5 rounded-lg font-medium text-center block min-h-[48px] flex items-center justify-center"
            >
              無料で相談する
            </a>
          </div>
          {/* Mobile utility links */}
          <div className="pt-3 flex justify-center gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-[#1B5EA8] transition-colors py-1">マイページ</a>
            <a href="#" className="hover:text-[#1B5EA8] transition-colors py-1">保険金請求</a>
            <a href="#" className="hover:text-[#1B5EA8] transition-colors py-1">FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
}
