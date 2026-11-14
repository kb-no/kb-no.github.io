"use client";

import Link from "next/link";
import PhraseText from "./PhraseText";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceIllustration from "./ServiceIllustration";

export default function Services() {
  const { t, lang } = useLanguage();
  const ja = lang === "ja";
  const [web, digital, automation, consultation] = t.services.items;
  const copy = ja ? {
    intro: "伝えることも|日々の仕事も\n事業に合うITを|一緒に",
    web: "あなたの魅力が|届く場所を", webTags: ["店舗・企業サイト", "スマートフォン対応", "検索を意識した設計"],
    digital: "紙の仕事を|つながる仕事へ", before: "いまの業務", after: "デジタル化した業務", beforeText: "紙に記入 → 転記 → 手作業で集計", afterText: "その場で入力 → 共有 → 集計を効率化", example: "たとえば日々の記録や報告なら",
    automation: "繰り返す作業は|仕組みに任せる", steps: ["定型作業を見つける", "AI・ツールで自動化", "人は大切な仕事へ"],
    consultation: "まだ|まとまっていなくても", questions: ["何から始めたらいい？", "うちに合うツールは？", "導入後の使い方も相談したい"], cta: "困っていることを相談する", note: "課題の整理から|一緒に考えます"
  } : {
    intro: "From your online presence to everyday work. Technology that fits your business.",
    web: "A place for your business to shine.", webTags: ["Business & shop websites", "Mobile-friendly", "Search-conscious design"],
    digital: "From paperwork to connected work.", before: "Today", after: "With digital tools", beforeText: "Paper records → Re-entry → Manual totals", afterText: "Enter once → Share → Easier reporting", example: "An example: daily records and reports",
    automation: "Let systems handle the repetition.", steps: ["Identify routine work", "Automate with AI & tools", "Focus on what matters"],
    consultation: "You don’t need all the answers yet.", questions: ["Where should we start?", "Which tools fit our business?", "Can you help us learn to use them?"], cta: "Let’s talk about your challenges", note: "We’ll work through your questions together."
  };

  return (
    <section id="services" className="services-section px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#31745A]">WHAT I DO</p>
          <h2 className="mb-5 text-3xl font-bold text-[#1A2E1A]"><PhraseText>{t.services.heading}</PhraseText></h2>
          <p className="text-lg leading-relaxed text-[#53675D]"><PhraseText>{copy.intro}</PhraseText></p>
        </div>

        <Link href="/services/website/" aria-labelledby="service-website-title" className="service-card service-web grid items-center gap-6 rounded-3xl bg-[#EDF5EF] p-6 md:grid-cols-2 md:gap-10 md:p-12">
          <div>
            <p className="service-eyebrow">01 / WEB DESIGN</p>
            <h3 id="service-website-title" className="service-title"><PhraseText>{web.title}</PhraseText></h3>
            <p className="mb-5 text-xl font-medium leading-relaxed text-[#31745A]"><PhraseText>{copy.web}</PhraseText></p>
            <p className="service-description"><PhraseText>{web.desc}</PhraseText></p>
            <ul className="mt-6 flex flex-wrap gap-2">{copy.webTags.map(tag => <li key={tag} className="rounded-full border border-[#CADDD0] bg-white/70 px-3 py-2 text-xs text-[#395B48]">{tag}</li>)}</ul>
          </div>
          <div><ServiceIllustration kind="web" /><p className="service-card-cta">{ja ? "制作の流れを見る" : "Explore the process"} <span aria-hidden="true">↗</span></p></div>
        </Link>

        <Link href="/services/digitalization/" aria-labelledby="service-digitalization-title" className="service-card block my-6 rounded-3xl border border-[#DCE7EA] bg-white p-6 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
            <div className="order-2 md:order-1"><ServiceIllustration kind="digital" /></div>
            <div className="order-1 md:order-2">
              <p className="service-eyebrow text-[#466E7A]!">02 / DIGITAL WORKFLOW</p>
              <h3 id="service-digitalization-title" className="service-title"><PhraseText>{digital.title}</PhraseText></h3>
              <p className="mb-5 text-xl font-medium text-[#466E7A]"><PhraseText>{copy.digital}</PhraseText></p>
              <p className="service-description">{digital.desc}</p>
            </div>
          </div>
          <div className="mt-6 border-t border-[#DCE7EA] pt-6">
            <p className="mb-4 text-xs text-[#607780]">{copy.example}</p>
            <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="rounded-xl bg-[#F5F4F0] p-5"><p className="mb-2 text-xs font-bold text-[#767165]">{copy.before}</p><p className="text-sm leading-relaxed text-[#585D59]">{copy.beforeText}</p></div>
              <span aria-hidden="true" className="text-center text-xl text-[#62858C]"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span>
              <div className="rounded-xl bg-[#ECF4F6] p-5"><p className="mb-2 text-xs font-bold text-[#466E7A]">{copy.after}</p><p className="text-sm leading-relaxed text-[#284E5A]">{copy.afterText}</p></div>
            </div>
          </div>
          <p className="service-card-cta">{ja ? "紙・FAX業務の改善例を見る" : "See workflow examples"} <span aria-hidden="true">↗</span></p>
        </Link>

        <Link href="/services/cost-reduction/" aria-labelledby="service-cost-reduction-title" className="service-card block overflow-hidden rounded-3xl bg-[#203F35] p-6 text-white md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <p className="service-eyebrow text-[#B7D6C4]!">03 / AUTOMATION</p>
              <h3 id="service-cost-reduction-title" className="service-title text-white!"><PhraseText>{automation.title}</PhraseText></h3>
              <p className="mb-5 text-xl font-medium leading-relaxed text-[#EBC58C]"><PhraseText>{copy.automation}</PhraseText></p>
              <p className="text-sm leading-[1.9] text-[#D2E1D8]">{automation.desc}</p>
            </div>
            <ServiceIllustration kind="automation" />
          </div>
          <ol className="mt-8 grid gap-5 border-t border-white/20 pt-7 md:grid-cols-3">{copy.steps.map((step, i) => <li key={step} className="flex items-center gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#78988A] text-xs text-[#EBC58C]">{i + 1}</span><span className="text-sm leading-relaxed">{step}</span></li>)}</ol>
          <p className="service-card-cta text-[#EBC58C]!">{ja ? "コスト削減の試算を見る" : "Explore potential savings"} <span aria-hidden="true">↗</span></p>
        </Link>

        <Link href="/services/consultation/" aria-labelledby="service-consultation-title" className="service-card mt-6 grid items-center gap-8 rounded-3xl bg-[#FBF5EB] p-6 md:grid-cols-2 md:p-12">
          <div>
            <p className="service-eyebrow text-[#916B3F]!">04 / CONSULTATION</p>
            <h3 id="service-consultation-title" className="service-title"><PhraseText>{consultation.title}</PhraseText></h3>
            <p className="mb-5 text-xl font-medium leading-relaxed text-[#916B3F]"><PhraseText>{copy.consultation}</PhraseText></p>
            <p className="service-description">{consultation.desc}</p>
            <p className="service-card-cta">{ja ? "相談できることを見る" : "Explore consultation support"} <span aria-hidden="true">↗</span></p>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center gap-2">{copy.questions.map(question => <li key={question} className="rounded-2xl rounded-bl-sm border border-[#E6D7BD] bg-white px-4 py-2 text-xs leading-relaxed text-[#735D40]">{question}</li>)}</ul>
            <ServiceIllustration kind="consultation" />
            <p className="text-center text-xs text-[#826C50]"><PhraseText>{copy.note}</PhraseText></p>
          </div>
        </Link>
      </div>
    </section>
  );
}
