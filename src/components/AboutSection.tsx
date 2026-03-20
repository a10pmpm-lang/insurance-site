import { Shield, Heart, Users, FileText } from "lucide-react";

const milestones = [
  { year: "2008年", label: "東京都にて創業。生命保険・医療保険の取り扱いを開始" },
  { year: "2012年", label: "自動車保険・火災保険の取り扱い開始。全国展開へ" },
  { year: "2018年", label: "ご契約者数100万件を突破。デジタル手続きサービス開始" },
  { year: "2023年", label: "保険金累計お支払い額500億円を達成" },
];

const values = [
  {
    icon: Shield,
    title: "誠実さと透明性",
    desc: "わかりにくい保険用語をかみ砕いてご説明します。隠れた条件や免責事項は一切ありません。",
  },
  {
    icon: Heart,
    title: "お客さま第一",
    desc: "ご加入後もお客さまに寄り添い、ライフステージの変化に合わせた保障をご提案します。",
  },
  {
    icon: Users,
    title: "専門家チームによるサポート",
    desc: "ファイナンシャルプランナーを含む1,200名超の専門スタッフが、丁寧にご対応します。",
  },
  {
    icon: FileText,
    title: "迅速な保険金お支払い",
    desc: "書類受領後、原則5営業日以内にお支払いします。オンライン請求にも対応しています。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="jp-label">会社案内</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A2B42] leading-snug">
            信頼と実績で、15年間<br className="hidden sm:block" />
            <span className="accent-text">お客さまを支え続けています。</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — text + timeline */}
          <div>
            <p className="text-slate-500 text-sm sm:text-base leading-[1.9] mb-4 md:mb-5">
              XXXXは、「保険をもっと身近に、もっとわかりやすく」というミッションのもと、
              2008年に創業しました。創業以来、お客さまの声に真摯に向き合い、
              使いやすい商品設計と誠実なサービス提供を続けてまいりました。
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-[1.9] mb-10">
              現在は全国50万件以上のご契約者さまにご利用いただいており、
              保険金のお支払い率は業界最高水準の98.7%を維持しています。
              これからも、皆さまの安心・安全を支えるパートナーであり続けます。
            </p>

            {/* Timeline */}
            <div className="relative pl-5 border-l-2 border-[#C8DCEF] space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[22px] w-3 h-3 rounded-full bg-[#1B5EA8] border-2 border-white shadow-sm" />
                  <p className="text-xs font-medium text-[#1B5EA8] mb-0.5">{m.year}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — value cards */}
          <div className="space-y-4">
            {/* 2-col grid for value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="jp-card rounded-2xl p-5 sm:p-6 group">
                  <div className="w-10 h-10 rounded-xl jp-icon flex items-center justify-center mb-3 md:mb-4 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#1A2B42] font-medium text-sm mb-2">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Satisfaction stat — full width, no fixed inner widths */}
            <div className="rounded-2xl bg-[#1B5EA8] p-5 sm:p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-blue-200 text-xs mb-1">総合顧客満足度（2024年度調査）</p>
                  <p className="text-4xl font-semibold">97.4<span className="text-xl">%</span></p>
                  <p className="text-blue-200 text-xs mt-1">12万件以上のアンケートに基づく</p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { v: "創業15年", l: "の信頼" },
                    { v: "50万件",   l: "のご契約" },
                    { v: "全国対応", l: "どこでも安心" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/10 rounded-xl px-2 sm:px-3 py-3 text-center">
                      <p className="text-xs sm:text-sm font-semibold leading-tight">{s.v}</p>
                      <p className="text-blue-200 text-[10px] mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
