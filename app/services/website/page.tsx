import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Webサイトの構築 | 小林 直樹 DX Partner",
  description: "Webサイト制作のご相談から構成・見積もり、デザイン、実装、公開・運用までをイラスト付きでご紹介します。",
  alternates: { canonical: "/services/website/" },
  openGraph: {
    title: "Webサイトの構築 | 小林 直樹 DX Partner",
    description: "Webサイト制作のご相談から構成・見積もり、デザイン、実装、公開・運用までをイラスト付きでご紹介します。",
    url: "/services/website/",
  },
};

export default function Page() {
  return <ServiceDetail service="website" />;
}
