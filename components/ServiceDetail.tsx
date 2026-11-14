"use client";

import Link from "next/link";
import PhraseText from "./PhraseText";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceIllustration from "./ServiceIllustration";
import StoryIllustration from "./StoryIllustration";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { siteConfig } from "@/config/site";

export type ServiceKind = "website" | "digitalization" | "cost-reduction" | "consultation";
const services = ["website", "digitalization", "cost-reduction", "consultation"] as const;
const kinds = ["web", "digital", "automation", "consultation"] as const;
const labels = ["WEB DESIGN", "DIGITAL WORKFLOW", "AUTOMATION", "CONSULTATION"];

function WebsiteStory({ ja }: { ja: boolean }) {
  const steps = ja ? [
    { title: "まずは|誰に何を伝えたいか", desc: "お店や会社の強み、届けたいお客様、サイトで実現したいことを伺います。「問い合わせを増やしたい」「店舗を知ってほしい」など、目的から一緒に整理します。", result: "決めること：目的・ターゲット・必要なページ", scene: "brief" as const },
    { title: "作る内容と|費用を明確に", desc: "会社紹介、サービス紹介、お問い合わせなど、必要なページを整理。ご予算に合わせた構成・制作範囲・スケジュール・見積もりを提案し、合意してから制作を始めます。", result: "確認すること：ページ構成・見積もり・制作期間", scene: "brief" as const },
    { title: "魅力が伝わる|デザインに", desc: "写真や文章を整理し、トップページの見た目を作ります。色や雰囲気だけでなく、「どこを見て、次に何をしてもらうか」まで確認しながら形にします。", result: "確認すること：デザイン・掲載文章・写真", scene: "design" as const },
    { title: "スマートフォンでも|使いやすく", desc: "デザインをWebサイトとして実装。スマートフォン・パソコンでの表示や、リンク・お問い合わせの動作を確認します。公開前に実際のページを見ていただき、調整します。", result: "確認すること：表示・操作・掲載内容", scene: "form" as const },
    { title: "公開してからも|一緒に育てる", desc: "ドメインやサーバーの設定を進め、サイトを公開します。更新の仕方をお伝えし、公開後の修正や運用もご相談に応じてサポート。支援の範囲・費用は事前に取り決めます。", result: "公開後：更新方法の共有・運用サポート", scene: "launch" as const },
  ] : [
    { title: "Who do you want to reach?", desc: "We start with your strengths, audience and goals, whether that means more inquiries or helping people discover your shop.", result: "Define: goals, audience and required pages", scene: "brief" as const },
    { title: "Agree on scope and budget.", desc: "We map out the pages you need and propose a scope, estimate and schedule that fit your budget. Work begins after we agree on the plan.", result: "Review: structure, estimate and timeline", scene: "brief" as const },
    { title: "Give your business a clear visual voice.", desc: "We organize photos and copy, then create the design. Together we review both the look and the path visitors will take to get in touch.", result: "Review: design, copy and photography", scene: "design" as const },
    { title: "Make it work across devices.", desc: "We build the site and check layouts, links and inquiries on mobile and desktop. You review the actual pages before launch.", result: "Check: display, interactions and content", scene: "form" as const },
    { title: "Launch, then keep improving.", desc: "We set up the domain and hosting, publish the site and show you how to update it. Ongoing support and its cost are agreed in advance.", result: "After launch: handover and agreed support", scene: "launch" as const },
  ];
  return <section className="mx-auto max-w-5xl px-6 py-20">
    <p className="service-eyebrow">FROM IDEA TO LAUNCH</p>
    <h2 className="detail-heading mb-12"><PhraseText>{ja ? "ご相談から公開まで|ひとつずつ" : "From first conversation to launch."}</PhraseText></h2>
    <ol className="space-y-6">{steps.map((step,i) => <li key={step.title} className={`grid items-center gap-6 rounded-3xl p-6 md:grid-cols-[1fr_0.8fr] md:gap-12 md:p-10 ${i%2 ? "bg-[#F6F3EC]" : "bg-[#EDF5EF]"}`}>
      <div><p className="service-eyebrow">STEP {String(i+1).padStart(2,"0")}</p><h3 className="mb-4 text-xl font-bold leading-relaxed text-[#234E40]"><PhraseText>{step.title}</PhraseText></h3><p className="detail-body text-sm">{step.desc}</p><p className="mt-6 border-t border-[#C9D9CC] pt-4 text-xs font-medium leading-relaxed text-[#416856]">{step.result}</p></div>
      <StoryIllustration scene={step.scene} />
    </li>)}</ol>
  </section>;
}

function DigitalStory({ ja }: { ja: boolean }) {
  return <>
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="service-eyebrow">DOES THIS SOUND FAMILIAR?</p>
      <h2 className="detail-heading mb-10"><PhraseText>{ja ? "こんなこと|ありませんか？" : "Does any of this sound familiar?"}</PhraseText></h2>
      <div className="grid gap-6 md:grid-cols-2">{[
        {scene: "paper" as const, title: ja ? "毎回、|紙で処理している|業務がある" : "Still processing the same paperwork every day?", text: ja ? "作業日報を紙に書く。事務所でExcelに打ち直す。月末には、何枚もの紙を見ながら集計する。" : "Write a report on paper, type it into a spreadsheet at the office, then gather the sheets again at month-end."},
        {scene: "fax" as const, title: ja ? "FAXで|やり取りしている|業務がある" : "Still exchanging orders by fax?", text: ja ? "FAXで注文を受けて、内容を手入力。文字が読みにくくて電話で確認。担当者がいないと、進み具合も分からない。" : "Receive a fax, enter the order by hand, and call to check unclear handwriting. When the person in charge is away, nobody knows the status."},
      ].map(item => <article key={item.scene} className="rounded-3xl bg-[#F5F1E9] p-6 md:p-8"><StoryIllustration scene={item.scene} /><h3 className="mb-4 text-xl font-bold leading-relaxed text-[#65543C]"><PhraseText>{item.title}</PhraseText></h3><p className="detail-body text-sm">{item.text}</p></article>)}</div>
    </section>
    <section className="bg-[#ECF4F6] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="service-eyebrow text-[#466E7A]!">LET’S CHANGE THE WORKFLOW</p>
        <h2 className="detail-heading mb-4"><PhraseText>{ja ? "「書く・打ち直す」を|一度の入力に" : "Enter once. Stop copying it over."}</PhraseText></h2>
        <p className="detail-body mb-12 max-w-2xl">{ja ? "いきなり全部を変える必要はありません。まずは、毎日繰り返している業務をひとつ選んで、小さく始めます。" : "There’s no need to change everything at once. Start with one recurring task and improve it step by step."}</p>
        <div className="space-y-8">{[
          {scene:"form" as const, title:ja ? "日報はその場で|スマートフォンから" : "Daily reports, entered on the spot.", text:ja ? "紙の日報を入力フォームに置き換えます。日付・作業内容・数量などを現場で入力すると、共有の一覧に記録。事務所で同じ内容を打ち直す手間を減らせます。" : "Replace paper reports with a mobile form. Enter the date, work and quantities at the job site, and save them to a shared list without typing them again at the office.", outcome:ja ? "紙 → 転記 → 集計 から、入力 → 共有へ" : "Paper → Re-entry → Totals becomes Enter → Share"},
          {scene:"team" as const, title:ja ? "注文は見える場所に|ひとまとめ" : "Bring orders into one shared view.", text:ja ? "オンライン注文フォームを用意し、注文内容と対応状況を一覧に。「受付済み」「対応中」「完了」が分かれば、担当者への確認も減らせます。FAXが必要なお取引先には残しながら、段階的に移行します。" : "Use an online order form and a shared list with received, in-progress and completed statuses. Keep fax available for customers who need it while gradually moving suitable work online.", outcome:ja ? "担当者に聞く から、みんなで確認できるへ" : "From asking one person to shared visibility"},
        ].map((item,i) => <article key={item.scene} className="grid items-center gap-8 rounded-3xl bg-white p-6 md:grid-cols-2 md:p-10"><div className={i === 1 ? "md:order-2" : ""}><p className="service-eyebrow">SOLUTION 0{i+1}</p><h3 className="mb-4 text-xl font-bold leading-relaxed text-[#284E5A]"><PhraseText>{item.title}</PhraseText></h3><p className="detail-body text-sm">{item.text}</p><p className="mt-6 rounded-xl bg-[#ECF4F6] p-4 text-sm font-medium leading-relaxed text-[#466E7A]">{item.outcome}</p></div><StoryIllustration scene={item.scene} /></article>)}</div>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="detail-heading mb-8"><PhraseText>{ja ? "使い続けられる形まで|伴走します" : "Make it work for your team."}</PhraseText></h2>
      <ol className="grid gap-6 md:grid-cols-3">{(ja ? [ ["今の仕事を見せてください", "紙の帳票やFAX、Excelを見ながら、困っている作業と二度手間になっている部分を整理します。"], ["ひとつの業務で試します", "既存のツールも活用し、小さな仕組みを作って現場で試します。使いにくい点は調整します。"], ["使い方を共有して定着へ", "スタッフの方に使い方をお伝えし、運用を確認。効果を見て、次に広げる業務を決めます。"] ] : [ ["Show us today’s workflow", "We review your forms, faxes and spreadsheets to find repeated work and friction."], ["Try one small change", "We use existing tools where appropriate and try the solution with your team, adjusting it along the way."], ["Train, review and expand", "We help staff learn the process, review its effect and decide what to improve next."] ]).map(([title,text],i) => <li key={title} className="border-t-2 border-[#8BAEA3] pt-5"><p className="service-eyebrow">0{i+1}</p><h3 className="mb-3 text-lg font-bold text-[#234E40]"><PhraseText>{title}</PhraseText></h3><p className="detail-body text-sm">{text}</p></li>)}</ol>
    </section>
  </>;
}

function CostStory({ ja }: { ja: boolean }) {
  return <>
    <section className="mx-auto grid max-w-5xl items-center gap-8 px-6 py-20 md:grid-cols-2">
      <div><p className="service-eyebrow">A FAMILIAR BACK-OFFICE TASK</p><h2 className="detail-heading mb-6"><PhraseText>{ja ? "その事務作業に|毎月いくら|かかっていますか？" : "What does routine admin cost each month?"}</PhraseText></h2><p className="detail-body">{ja ? "請求書の転記、売上データの集計、定型レポートの作成。派遣社員さんや契約社員さんに同じ事務処理を毎月お願いしていませんか？" : "Copying invoices, totaling sales and preparing recurring reports. Are temporary or contract staff spending each month repeating the same administrative work?"}</p><p className="detail-body mt-4">{ja ? "例えば、対象の事務作業に1人当たり月30万円かかっているとしたら。入力や集計を自動化し、確認が必要な部分だけ人が対応する形に変えると、どうなるでしょう。" : "Suppose the work costs ¥300,000 per person each month. What if a system handled entry and aggregation, with a person reviewing exceptions?"}</p></div>
      <div className="rounded-3xl bg-[#F5F1E9] p-4"><StoryIllustration scene="paper" /></div>
    </section>
    <section className="bg-[#203F35] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="service-eyebrow text-[#B7D6C4]!">AN ILLUSTRATIVE COST SCENARIO</p>
        <h2 className="detail-heading mb-4 text-white!"><PhraseText>{ja ? "月30万円の業務を|月10万円で|回せたら" : "What if ¥300,000 of work could run for ¥100,000?"}</PhraseText></h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#D2E1D8]">{ja ? "自動化によって対象業務を処理でき、導入前の月額費用を置き換えられた場合の試算です。実績や確定見積もりではなく、仕組みをイメージするための仮定です。" : "An illustrative scenario assuming automation can handle the work and replace its previous monthly cost. These are assumptions, not actual results or a confirmed quote."}</p>
        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-white/20 p-6 md:p-8"><p className="mb-4 text-sm text-[#D2E1D8]">{ja ? "導入前：対象業務の人件費など" : "Before: staffing cost for the work"}</p><p className="text-4xl font-bold md:text-5xl">{ja ? "30万円" : "¥300,000"}<span className="text-base font-normal">{ja ? " / 月" : " / mo"}</span></p><p className="mt-5 text-sm text-[#D2E1D8]">{ja ? "転記・集計・定型書類作成を人が処理" : "Manual entry, aggregation and routine documents"}</p></div>
          <span aria-hidden="true" className="self-center text-center text-3xl text-[#EBC58C]"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span>
          <div className="rounded-2xl bg-[#EFF5E9] p-6 text-[#234E40] md:p-8"><p className="mb-4 text-sm">{ja ? "導入後：対象業務の月額運用費合計" : "After: total monthly operating cost"}</p><p className="text-4xl font-bold md:text-5xl">{ja ? "10万円" : "¥100,000"}<span className="text-base font-normal">{ja ? " / 月" : " / mo"}</span></p><p className="mt-5 text-sm leading-relaxed">{ja ? "ツール・保守・人による確認作業を含む想定" : "Assumed total for tools, maintenance and human review"}</p></div>
        </div>
        <div className="mt-8 grid gap-6 rounded-2xl bg-[#30584D] p-6 md:grid-cols-2 md:p-10">
          <div><p className="mb-3 text-sm text-[#D2E1D8]">{ja ? "毎月20万円の削減余地" : "Potential monthly savings"}</p><p className="text-5xl font-bold text-[#EBC58C]">{ja ? "20万円" : "¥200,000"}</p><p className="mt-4 text-sm text-[#D2E1D8]">{ja ? "30万円 − 10万円 = 月20万円" : "¥300,000 − ¥100,000 = ¥200,000 / month"}</p></div>
          <div className="border-t border-white/20 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8"><p className="mb-3 text-sm text-[#D2E1D8]">{ja ? "12か月続けば年間では" : "Over 12 months"}</p><p className="text-5xl font-bold text-[#EBC58C]">{ja ? "240万円" : "¥2,400,000"}</p><p className="mt-4 text-sm text-[#D2E1D8]">{ja ? "20万円 × 12か月 = 年240万円" : "¥200,000 × 12 = ¥2,400,000 / year"}</p></div>
        </div>
        <p className="mt-6 text-xs leading-[1.9] text-[#D2E1D8]">{ja ? "試算条件：導入後12か月、同じ業務量・月額費用が続くと仮定。初期開発・導入費用は含みません。初年度の実質削減額は240万円から初期費用等を差し引いた額です。現在の人件費がそのまま残る場合、現金支出の削減ではなく、作業時間の削減・他業務への再配分となります。実際の削減額と費用は業務調査後に見積もります。" : "Assumptions: constant workload and monthly costs over 12 months after implementation. Initial development and setup costs are excluded; subtract these and any other additional costs from ¥2.4m for first-year net savings. If existing staffing costs remain, the benefit is time freed for other work rather than reduced cash spending. Actual costs and savings are estimated after reviewing the workflow."}</p>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="service-eyebrow">HOW IT COULD WORK</p><h2 className="detail-heading mb-10"><PhraseText>{ja ? "例えば|毎月の請求処理なら" : "For example: monthly invoice processing."}</PhraseText></h2>
      <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]"><div className="rounded-3xl bg-[#EDF5EF] p-5"><ServiceIllustration kind="automation" /></div><ol className="space-y-7">{(ja ? [ ["必要なデータをまとめて取り込む", "毎回の転記を減らし、決まった形式のデータを取り込む仕組みにします。"], ["集計・書類作成を自動処理する", "決めたルールで集計し、請求書やレポートの下書きを作ります。"], ["人は内容の確認・例外対応に集中", "金額の確認やイレギュラーな処理は人が判断。確認後に確定・送付する運用にします。"] ] : [ ["Import the source data", "Reduce re-entry by importing data in an agreed format."], ["Automate totals and draft documents", "Apply agreed rules to calculate totals and prepare draft invoices or reports."], ["People review and handle exceptions", "A person checks amounts and unusual cases before approving and sending documents."] ]).map(([title,text],i) => <li key={title} className="flex gap-4"><span className="text-xl font-bold text-[#7EA790]">0{i+1}</span><div><h3 className="mb-2 text-lg font-bold text-[#234E40]"><PhraseText>{title}</PhraseText></h3><p className="detail-body text-sm">{text}</p></div></li>)}</ol></div>
      <div className="mt-12 rounded-2xl border border-[#DCE7DF] p-6 md:p-8"><h3 className="mb-3 text-lg font-bold text-[#234E40]"><PhraseText>{ja ? "まずは|「どの業務なら|いくら変わるか」を確認" : "Start by checking what can change, and at what cost."}</PhraseText></h3><p className="detail-body text-sm">{ja ? "業務量・現在の費用・例外処理の多さを確認し、自動化できる範囲を整理します。初期費用と月額費用を含めて比較し、効果が見込める部分から導入をご提案します。" : "We review workload, current costs and exceptions, then assess what can be automated. We compare initial and recurring costs and propose changes where there is a clear potential benefit."}</p></div>
    </section>
  </>;
}

function ConsultationStory({ ja }: { ja: boolean }) {
  return <section className="mx-auto max-w-5xl px-6 py-20">
    <p className="service-eyebrow">START WITH A CONVERSATION</p><h2 className="detail-heading mb-10"><PhraseText>{ja ? "「何から始める？」から|ご一緒します" : "Start with “where do we begin?”"}</PhraseText></h2>
    <div className="grid gap-6 md:grid-cols-3">{(ja ? [ ["ツール選びで迷っている", "候補はあるけれど、何が違うか分からない。今の業務・人数・予算を伺い、必要な機能から選択肢を整理します。"], ["導入したのに使えていない", "使い方が難しい、運用が決まっていない。つまずいているところを確認し、設定や業務の流れを見直します。"], ["ITの相談相手がほしい", "社内に詳しい人がいない。日々の小さな困りごとから、今後のデジタル化の優先順位まで一緒に考えます。"] ] : [ ["Unsure which tool to choose?", "We clarify the features you need based on your workflow, team size and budget, then organize the options."], ["Tools installed but unused?", "We identify where people get stuck and review the setup and workflow so the tool can become useful."], ["Need someone to ask?", "From everyday questions to choosing what to digitize next, we help you work through the decisions."] ]).map(([title,text]) => <article key={title} className="rounded-2xl bg-[#FBF5EB] p-6"><h3 className="mb-4 text-lg font-bold text-[#735D40]"><PhraseText>{title}</PhraseText></h3><p className="detail-body text-sm">{text}</p></article>)}</div>
    <div className="mt-12 grid items-center gap-10 md:grid-cols-2"><StoryIllustration scene="brief" /><div><h3 className="mb-5 text-2xl font-bold leading-relaxed text-[#234E40]"><PhraseText>{ja ? "専門用語も|きれいな資料も|いりません" : "No jargon or polished brief required."}</PhraseText></h3><p className="detail-body">{ja ? "「この作業に時間がかかる」「この紙をなくしたい」。そんなお話からで大丈夫です。今の状況を伺い、課題と選択肢を整理して、必要な支援の範囲・費用をご提案します。" : "“This takes too long” or “we want to stop using this form” is enough to start. We listen, clarify the options and propose a suitable scope and cost for support."}</p><p className="detail-body mt-4">{ja ? "ご連絡には業種・困っていること・ご希望の時期を分かる範囲でお書きください。" : "When getting in touch, share your industry, challenge and preferred timing if you can."}</p></div></div>
  </section>;
}

export default function ServiceDetail({ service }: { service: ServiceKind }) {
  const { t, lang } = useLanguage();
  const ja = lang === "ja";
  const index = services.indexOf(service);
  const item = t.services.items[index];
  const headlines = ja ? ["伝えたい魅力を、\nWebサイトという形に", "紙とFAXのその先に、\nもっと働きやすい|毎日を", "繰り返す事務作業を|利益につながる|余白へ", "ITの困りごとは|話すところから"] : ["Turn your business’s strengths into a website.", "Beyond paper and fax. A simpler working day.", "Turn repetitive admin into room to grow.", "Talk through your IT questions."];
  const colors = ["bg-[#EDF5EF]", "bg-[#ECF4F6]", "bg-[#EFF3EB]", "bg-[#FBF5EB]"];
  return <>
    <Navigation />
    <main>
      <section className={`${colors[index]} px-6 pt-28 pb-14 md:pb-20`}>
        <div className="mx-auto max-w-5xl">
          <nav aria-label={ja ? "パンくずリスト" : "Breadcrumb"} className="mb-10 flex flex-wrap items-center gap-3 text-xs text-[#53675D]"><Link href="/" className="underline underline-offset-4">{ja ? "ホーム" : "Home"}</Link><span aria-hidden="true">/</span><Link href="/#services" className="underline underline-offset-4">{t.services.heading}</Link><span aria-hidden="true">/</span><span aria-current="page">{item.title}</span></nav>
          <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]"><div><p className="service-eyebrow">0{index+1} / {labels[index]}</p><p className="mb-4 text-sm font-bold text-[#31745A]">{item.title}</p><h1 className="detail-heading mb-6"><PhraseText>{headlines[index]}</PhraseText></h1><p className="detail-body text-sm"><PhraseText>{item.desc}</PhraseText></p></div><ServiceIllustration kind={kinds[index]} /></div>
        </div>
      </section>
      {service === "website" && <WebsiteStory ja={ja} />}
      {service === "digitalization" && <DigitalStory ja={ja} />}
      {service === "cost-reduction" && <CostStory ja={ja} />}
      {service === "consultation" && <ConsultationStory ja={ja} />}
      <section id="contact" className="bg-[#EDF5EF] px-6 py-16 text-center">
        <div className="mx-auto max-w-xl"><p className="service-eyebrow">LET’S TALK</p><p className="detail-body mb-8 text-sm">{ja ? "今のお困りごとを聞かせてください。業務やご予算に合う進め方を、一緒に考えます。" : "Tell us about your challenges. We’ll explore an approach that fits your work and budget."}</p><a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(ja ? `${item.title}のご相談` : `Inquiry: ${item.title}`)}`} className="inline-flex rounded-full bg-[#284E40] px-7 py-4 text-sm font-bold text-white hover:bg-[#31745A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#284E40]">{ja ? "このサービスについて相談する" : "Ask about this service"} <span aria-hidden="true" className="ml-4">↗</span></a><p className="mt-5 break-all text-xs text-[#53675D]">{siteConfig.email}</p></div>
      </section>
      <nav aria-label={ja ? "その他のサービス" : "Other services"} className="mx-auto max-w-5xl px-6 py-14"><Link href="/#services" className="text-sm font-bold text-[#31745A]">← {ja ? "サービス一覧に戻る" : "Back to services"}</Link><div className="mt-6 grid gap-3 md:grid-cols-3">{services.filter(slug => slug !== service).map(slug => <Link key={slug} href={`/services/${slug}/`} className="flex items-center justify-between gap-3 rounded-xl border border-[#DCE7DF] p-5 text-sm text-[#234E40] transition-colors hover:bg-[#EDF5EF]">{t.services.items[services.indexOf(slug)].title}<span aria-hidden="true">→</span></Link>)}</div></nav>
    </main>
    <Footer />
  </>;
}
