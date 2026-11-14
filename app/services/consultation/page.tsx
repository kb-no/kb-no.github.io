import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "IT・DX 相談窓口 | 小林 直樹 DX Partner",
  description: "ツール選び、導入後の活用、日々のITのお困りごと。課題の整理から一緒に考えます。",
  alternates: { canonical: "/services/consultation/" },
  openGraph: {
    title: "IT・DX 相談窓口 | 小林 直樹 DX Partner",
    description: "ツール選び、導入後の活用、日々のITのお困りごと。課題の整理から一緒に考えます。",
    url: "/services/consultation/",
  },
};

export default function Page() {
  return <ServiceDetail service="consultation" />;
}
