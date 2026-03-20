import { ArrowRight, ShieldCheck, Award, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "50万件以上", label: "ご契約件数" },
  { value: "98.7%",     label: "保険金お支払い率" },
  { value: "創業15年",  label: "信頼と実績" },
  { value: "顧客満足度 No.1", label: "5年連続" },
];

const trustBadges = [
  { icon: ShieldCheck,  text: "金融庁登録済み" },
  { icon: Award,        text: "格付けA+取得" },
  { icon: Clock,        text: "24時間サポート" },
  { icon: CheckCircle2, text: "わかりやすい保険料" },
];

export default function HeroSection() {
  return (
    <section className="hero-jp pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── Left copy ── */}
          <div>
            {/* Label */}
            <div className="animate-fade-in-up mb-4 md:mb-5">
              <span className="jp-label text-[11px] sm:text-xs">
                2025年度 顧客満足度第1位受賞
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animate-delay-100 text-3xl sm:text-4xl md:text-5xl text-[#1A2B42] font-semibold leading-snug tracking-tight mb-4 md:mb-5">
              大切な家族と未来を、
              <br />
              <span className="accent-text">しっかりとお守りします。</span>
            </h1>

            {/* Body */}
            <p className="animate-fade-in-up animate-delay-200 text-slate-500 text-sm sm:text-base leading-[1.85] mb-7 md:mb-8">
              シールドガードは、生命・医療・自動車・火災の各分野において、
              お客さまの大切な毎日を支える保険サービスをご提供しています。
              わかりやすい保険料と迅速なお支払いで、安心をお届けします。
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
              <a
                href="#contact"
                className="jp-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium group min-h-[48px]"
              >
                無料で保険相談する
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                className="jp-btn-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium min-h-[48px]"
              >
                商品一覧を見る
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-in-up animate-delay-400">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2.5">
                {trustBadges.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B5EA8] shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="animate-fade-in-up animate-delay-200 hidden lg:block">
            {/* Main info card */}
            <div className="jp-card rounded-2xl p-6 xl:p-8 mb-4">
              <div className="flex items-start gap-4 mb-5 pb-5 border-b border-[#EBF4FD]">
                <div className="w-11 h-11 rounded-xl jp-icon flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">保険金お支払い実績（2024年度）</p>
                  <p className="text-3xl font-semibold text-[#1B5EA8]">98.7<span className="text-lg">%</span></p>
                  <p className="text-xs text-emerald-600 mt-0.5">✓ 迅速・確実なお支払いに取り組んでいます</p>
                </div>
              </div>

              {/* Stat row — 3 cols inside card only, full width available */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: "50万件+", l: "ご契約者数" },
                  { v: "120万件", l: "ご加入件数" },
                  { v: "15年",   l: "営業実績" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#F4F8FC] rounded-xl p-3 text-center">
                    <p className="text-[#1B5EA8] font-semibold text-sm xl:text-base">{s.v}</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Voice card */}
            <div className="jp-card rounded-2xl p-5">
              <p className="text-[11px] text-[#1B5EA8] font-medium mb-2">お客さまの声</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                「担当の方がとても親身になって相談に乗ってくださいました。
                はじめての保険選びでしたが、わかりやすく説明していただき、
                安心して加入することができました。」
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EBF4FD] flex items-center justify-center text-[#1B5EA8] text-xs font-semibold shrink-0">
                  田
                </div>
                <div>
                  <p className="text-slate-700 text-xs font-medium">田中 様（40代・会社員）</p>
                  <p className="text-slate-400 text-[11px]">総合医療保険 ご加入</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="animate-fade-in-up animate-delay-500 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#D8E8F5]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1B5EA8] mb-1 leading-tight">{s.value}</p>
                <p className="text-slate-400 text-[11px] sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
