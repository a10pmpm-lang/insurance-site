import { Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const links = {
  会社情報:           ["会社案内", "経営理念", "採用情報", "プレスリリース", "IR情報"],
  保険商品:           ["生命保険", "医療保険", "自動車保険", "火災・住宅保険", "法人向け保険"],
  お客さまサポート:   ["よくある質問", "保険金のご請求", "契約内容の確認", "各種変更手続き", "代理店を探す"],
  法的情報:           ["プライバシーポリシー", "利用規約", "クッキーポリシー", "免責事項"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A2B42] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-10 md:mb-12">

          {/* Brand — full width on mobile, 2 cols on lg */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563AA] flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white font-semibold text-base tracking-tight">
                  みなと
                </span>
                <span className="block text-[10px] text-slate-400 tracking-wide">少額短期保険</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-5 max-w-xs">
              「保険をもっと身近に、もっとわかりやすく」を理念に、
              2008年の創業以来、50万件以上のお客さまに保険サービスをご提供しています。
            </p>

            {/* Certifications — flex wrap, never overflow */}
            <div className="flex flex-wrap gap-2">
              {["金融庁登録", "格付A+", "個人情報保護認定"].map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] text-slate-400 border border-slate-600 rounded px-2 py-1 whitespace-nowrap"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns — 2 cols on mobile, 4 individual cols on lg */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-slate-200 text-xs font-medium mb-3 md:mb-4">{category}</h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-slate-200 text-xs leading-relaxed transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-white/10 mb-6 md:mb-8" />

        {/* Bottom — stack on mobile, row on md */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © 2025 短期保険株式会社 All Rights Reserved.
          </p>
          {/* Legal info — wrap gracefully, no overflow */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1">
            <span>金融庁登録番号：第○○号</span>
            <span className="hidden md:inline">|</span>
            <span>少額短期保険業者第○号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
