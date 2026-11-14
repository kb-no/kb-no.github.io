import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "コスト削減 | 小林 直樹 DX Partner",
  description: "事務処理の自動化と、月30万円から月10万円に置き換えられた場合の月20万円・年240万円の削減試算をご紹介します。",
  alternates: { canonical: "/services/cost-reduction/" },
  openGraph: {
    title: "コスト削減 | 小林 直樹 DX Partner",
    description: "事務処理の自動化と、月30万円から月10万円に置き換えられた場合の月20万円・年240万円の削減試算をご紹介します。",
    url: "/services/cost-reduction/",
  },
};

export default function Page() {
  return <ServiceDetail service="cost-reduction" />;
}
