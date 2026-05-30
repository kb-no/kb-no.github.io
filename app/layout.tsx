import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "小林 直樹 | Full-Stack Engineer / DX支援",
  description:
    "フルスタックエンジニア・DX支援。Ruby on Rails, React, Vue.js, TypeScript, Docker。SES対応・農業DX支援。",
  openGraph: {
    title: "小林 直樹 | Full-Stack Engineer / DX支援",
    description: "業務効率化・コスト削減でビジネスを前進させます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
