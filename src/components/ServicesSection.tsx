import { Heart, Activity, Car, Home, ArrowRight, Check, Phone } from "lucide-react";

const services = [
  {
    icon: Heart,
    tag: "人気No.1",
    tagColor: "bg-rose-50 text-rose-600 border-rose-200",
    iconBg: "#FEF2F2",
    iconColor: "#C0392B",
    borderTop: "border-t-[3px] border-rose-300",
    title: "生命保険",
    subtitle: "ご家族の将来を確かな保障で",
    desc: "万一の際にも、ご家族が安心して生活できるよう、定期・終身・養老の各タイプをご用意しています。",
    features: [
      "最高5,000万円の死亡保障",
      "保険料払込期間が選べる",
      "三大疾病特約を付加可能",
      "非課税の死亡保険金",
    ],
    from: "月々1,800円〜",
  },
  {
    icon: Activity,
    tag: "充実の保障",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "#ECFDF5",
    iconColor: "#047857",
    borderTop: "border-t-[3px] border-emerald-300",
    title: "医療保険",
    subtitle: "入院・手術をしっかりカバー",
    desc: "入院・手術・通院まで幅広く保障。先進医療特約や女性疾病特約など、生活に合わせてカスタマイズできます。",
    features: [
      "全国8,000院以上の提携病院",
      "処方箋・薬代も保障対象",
      "精神疾患・心療内科に対応",
      "年1回の健康診断補助",
    ],
    from: "月々6,800円〜",
  },
  {
    icon: Car,
    tag: "業界最安水準",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "#EBF4FD",
    iconColor: "#1B5EA8",
    borderTop: "border-t-[3px] border-blue-300",
    title: "自動車保険",
    subtitle: "安心のドライブをサポート",
    desc: "対人・対物・車両保険を網羅。24時間ロードサービスと代車費用補償で、もしもの時も安心です。",
    features: [
      "対人・対物 無制限補償",
      "24時間ロードサービス",
      "代車費用・レッカー対応",
      "事故後の等級据え置き",
    ],
    from: "月々4,200円〜",
  },
  {
    icon: Home,
    tag: "手厚い補償",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "#FFFBEB",
    iconColor: "#B45309",
    borderTop: "border-t-[3px] border-amber-300",
    title: "火災・住宅保険",
    subtitle: "大切なご自宅を守るために",
    desc: "火災・風水害・地震など様々なリスクに対応した住まいの保険。賃貸・持ち家どちらもご用意しています。",
    features: [
      "火災・自然災害・水濡れに対応",
      "家財・家具の補償も充実",
      "個人賠償責任最大1億円",
      "地震保険付加オプションあり",
    ],
    from: "月々3,200円〜",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-light py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="jp-label">保険商品</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A2B42] leading-snug">
            ライフステージに合わせた、<br className="hidden sm:block" />
            <span className="accent-text">4つの保険プラン</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
            ご結婚・お子さまの誕生・住宅購入など、人生の節目ごとに必要な保障はかわります。
            それぞれの状況に合わせた最適なプランをご提案します。
          </p>
        </div>

        {/* Cards: 1 col → 2 col (sm) → 4 col (lg) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`jp-card rounded-2xl p-5 sm:p-6 flex flex-col ${s.borderTop}`}
              >
                {/* Tag */}
                <span className={`self-start text-[10px] font-medium px-2.5 py-1 rounded-full border mb-4 ${s.tagColor}`}>
                  {s.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: s.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                </div>

                <h3 className="text-[#1A2B42] font-semibold text-base sm:text-lg mb-0.5">{s.title}</h3>
                <p className="text-slate-400 text-xs mb-3">{s.subtitle}</p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">{s.desc}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                      <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: s.iconColor }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#EBF4FD] pt-4">
                  <p className="text-xs text-slate-400 mb-3">{s.from}</p>
                  {/* Touch target: min 44px height */}
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-lg text-sm font-medium transition-colors group min-h-[44px]"
                    style={{ backgroundColor: s.iconBg, color: s.iconColor }}
                  >
                    詳しく見る
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12 pt-8 md:pt-10 border-t border-[#D8E8F5]">
          <p className="text-slate-400 text-sm mb-4">
            どのプランが合っているかわからない方も、お気軽にご相談ください。
          </p>
          <a
            href="#contact"
            className="jp-btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium min-h-[48px]"
          >
            <Phone className="w-4 h-4" />
            専門スタッフに相談する（無料）
          </a>
        </div>
      </div>
    </section>
  );
}
