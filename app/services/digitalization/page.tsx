import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "既存業務のデジタル化 | 小林 直樹 DX Partner",
  description: "紙の日報やFAX注文の困りごとから、入力フォームと共有一覧で業務を改善する流れをご紹介します。",
  alternates: { canonical: "/services/digitalization/" },
  openGraph: {
    title: "既存業務のデジタル化 | 小林 直樹 DX Partner",
    description: "紙の日報やFAX注文の困りごとから、入力フォームと共有一覧で業務を改善する流れをご紹介します。",
    url: "/services/digitalization/",
  },
};

export default function Page() {
  return <ServiceDetail service="digitalization" />;
}
