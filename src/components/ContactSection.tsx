"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "お電話でのご相談",
    detail: "0120-XXX-XXX",
    sub: "平日 9:00〜17:00（土日祝除く）",
  },
  {
    icon: Mail,
    title: "メールでのお問い合わせ",
    detail: "info@shieldguard.co.jp",
    sub: "受信後2営業日以内にご返信します",
  },
  {
    icon: MapPin,
    title: "本社所在地",
    detail: "東京都千代田区丸の内1-1-1",
    sub: "シールドガードビル 3F",
  },
  {
    icon: Clock,
    title: "チャットサポート",
    detail: "24時間対応",
    sub: "平均応答時間 90秒以内",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", plan: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#F4F8FC] border border-[#D8E8F5] rounded-lg px-4 py-3 text-[#1A2B42] placeholder:text-slate-300 text-sm focus:outline-none focus:border-[#1B5EA8] focus:bg-white transition-all min-h-[48px]";

  return (
    <section id="contact" className="section-blue py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="jp-label">お問い合わせ</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A2B42] leading-snug">
            保険のことなら、<br className="hidden sm:block" />
            <span className="accent-text">何でもお気軽にご相談ください。</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            専門スタッフが丁寧にご対応します。資料請求・お見積りはすべて無料です。
            しつこい営業は一切行いません。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            {/* 2-col on mobile, 1-col on lg */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map(({ icon: Icon, title, detail, sub }) => (
                <div key={title} className="jp-card rounded-xl p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg jp-icon flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 mb-0.5">{title}</p>
                    <p className="text-[#1A2B42] font-medium text-sm truncate">{detail}</p>
                    <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Promise card */}
            <div className="rounded-xl bg-[#1B5EA8] p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-blue-200 shrink-0" />
                <p className="text-white text-sm font-medium">ご相談の安心ポイント</p>
              </div>
              <ul className="space-y-2">
                {[
                  "相談・資料請求はすべて無料",
                  "加入を強要することはありません",
                  "個人情報は厳重に管理します",
                  "回答は営業日2日以内にご連絡",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-200 mt-0.5 shrink-0" />
                    <span className="text-blue-100 text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 jp-card rounded-2xl p-5 sm:p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EBF4FD] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-[#1B5EA8]" />
                </div>
                <h3 className="text-[#1A2B42] text-lg sm:text-xl font-semibold mb-3">
                  お問い合わせを受け付けました
                </h3>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                  担当スタッフより2営業日以内にご連絡いたします。
                  しばらくお待ちくださいませ。
                </p>
                <button
                  className="mt-8 jp-btn px-7 py-3.5 rounded-lg text-sm font-medium min-h-[48px]"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", plan: "", message: "" });
                  }}
                >
                  別のお問い合わせをする
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h3 className="text-[#1A2B42] font-semibold text-base sm:text-lg mb-5">
                  無料相談フォーム
                </h3>

                {/* Name + Email: stack on xs, side-by-side on sm */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-500 text-xs mb-1.5 block">
                      お名前 <span className="text-rose-500">※</span>
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="例：山田 太郎"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs mb-1.5 block">
                      メールアドレス <span className="text-rose-500">※</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="例：yamada@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Plan */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-500 text-xs mb-1.5 block">電話番号（任意）</label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="例：090-1234-5678"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs mb-1.5 block">ご関心の保険商品</label>
                    <select
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      className={inputClass + " text-slate-500 appearance-none"}
                    >
                      <option value="">選択してください</option>
                      <option value="life">生命保険</option>
                      <option value="health">医療保険</option>
                      <option value="auto">自動車保険</option>
                      <option value="fire">火災・住宅保険</option>
                      <option value="bundle">複数の保険をまとめたい</option>
                      <option value="other">その他・わからない</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-slate-500 text-xs mb-1.5 block">
                    ご相談内容・ご質問（任意）
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="例：現在の保険を見直したい、家族構成に合った保険を知りたい、など"
                    className="w-full bg-[#F4F8FC] border border-[#D8E8F5] rounded-lg px-4 py-3 text-[#1A2B42] placeholder:text-slate-300 text-sm focus:outline-none focus:border-[#1B5EA8] focus:bg-white transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Submit — full width, min 48px */}
                <button
                  type="submit"
                  className="w-full jp-btn py-3.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 group min-h-[48px]"
                >
                  無料で相談内容を送信する
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-slate-300 text-[11px] text-center leading-relaxed">
                  送信いただいた個人情報は、お問い合わせへの回答にのみ使用します。
                  <a href="#" className="underline ml-1">プライバシーポリシーはこちら</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
