import { Smartphone, Clock, UserCheck, Lock, Wallet, Medal } from "lucide-react";

const reasons = [
  {
    icon: Smartphone,
    title: "スマホで完結する手続き",
    desc: "加入申込・保険料の変更・保険金請求まで、すべてスマートフォンから行えます。来店不要です。",
    stat: "平均3分",
    statLabel: "請求手続き時間",
  },
  {
    icon: Clock,
    title: "24時間サポート体制",
    desc: "深夜・休日を問わず、電話・チャット・ビデオ通話でご相談に対応します。",
    stat: "24時間",
    statLabel: "いつでも対応",
  },
  {
    icon: UserCheck,
    title: "専任担当者によるサポート",
    desc: "ご加入後は専任のサポートスタッフが担当します。ご家族の状況変化もお気軽にご相談ください。",
    stat: "1対1",
    statLabel: "専任担当制",
  },
  {
    icon: Lock,
    title: "個人情報の厳重な管理",
    desc: "お客さまの個人情報は256ビット暗号化で保護。第三者への提供は一切行いません。",
    stat: "256bit",
    statLabel: "SSL暗号化",
  },
  {
    icon: Wallet,
    title: "無駄のない保険料設計",
    desc: "不要な特約を省いたシンプルな商品設計で、適正な保険料を実現。業界最安水準を目指しています。",
    stat: "最大30%",
    statLabel: "保険料節約実績",
  },
  {
    icon: Medal,
    title: "受賞歴のある顧客対応",
    desc: "日本サービス大賞・保険窓口満足度調査で5年連続1位を獲得。真摯なサービスを続けています。",
    stat: "5年連続",
    statLabel: "満足度1位",
  },
];

const testimonials = [
  {
    initial: "山",
    name: "山田 様（50代・会社員）",
    plan: "生命保険・医療保険 ご加入",
    color: "#EBF4FD",
    textColor: "#1B5EA8",
    text: "父が入院したとき、担当の方がすぐに連絡をくださり、書類の記入方法まで丁寧に教えていただきました。保険金も予想より早くお支払いいただけて、大変助かりました。",
  },
  {
    initial: "佐",
    name: "佐藤 様（30代・主婦）",
    plan: "医療保険 ご加入",
    color: "#ECFDF5",
    textColor: "#047857",
    text: "出産前に医療保険を見直したいと思い相談しました。ライフプランに合わせた提案をしていただき、家計の負担を増やさずに充実した保障を得られました。",
  },
  {
    initial: "鈴",
    name: "鈴木 様（40代・自営業）",
    plan: "火災・自動車保険 ご加入",
    color: "#FFFBEB",
    textColor: "#B45309",
    text: "事故の際、深夜でも担当者がすぐに対応してくださいました。相手方との連絡もすべて代行していただき、精神的に非常に楽でした。",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="jp-label">選ばれる理由</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A2B42] leading-snug">
            シールドガードが選ばれる、<br className="hidden sm:block" />
            <span className="accent-text">6つの安心ポイント</span>
          </h2>
        </div>

        {/* Feature grid: 1 → 2 (sm) → 3 (lg) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 md:mb-20">
          {reasons.map(({ icon: Icon, title, desc, stat, statLabel }) => (
            <div key={title} className="jp-card rounded-2xl p-5 sm:p-6 group">
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl jp-icon flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <p className="text-base sm:text-lg font-semibold text-[#1B5EA8] leading-none">{stat}</p>
                  <p className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5">{statLabel}</p>
                </div>
              </div>
              <h3 className="text-[#1A2B42] font-medium text-sm mb-2">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="jp-divider mb-14 md:mb-20" />

        {/* Testimonials */}
        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B42] mb-1.5">
            お客さまの声
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">12万件以上のアンケート　総合満足度 4.9／5.0</p>
        </div>

        {/* Testimonial cards: 1 → 2 (sm) → 3 (md) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="jp-card rounded-2xl p-5 sm:p-6">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-500 text-xs sm:text-sm leading-[1.85] mb-4 sm:mb-5">
                「{t.text}」
              </p>

              <div className="flex items-center gap-2.5 pt-4 border-t border-[#EBF4FD]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                  style={{ backgroundColor: t.color, color: t.textColor }}
                >
                  {t.initial}
                </div>
                <div className="min-w-0">
                  <p className="text-slate-700 text-xs font-medium truncate">{t.name}</p>
                  <p className="text-slate-400 text-[11px] truncate">{t.plan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
