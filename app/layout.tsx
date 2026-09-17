import type { Metadata } from "next";
import { Noto_Sans_JP, Yuji_Mai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LangSync from "@/components/LangSync";
import { siteConfig } from "@/config/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

const yujiMai = Yuji_Mai({
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  weight: ["400"],
});

export const metadata: Metadata = {
  // OGP の相対URLはここを基準に絶対URLへ解決される。
  // 未設定だと http://localhost:3000 が焼き込まれ、SNS共有時にサムネイルが出ない。
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    type: "website",
    url: siteConfig.url,
    // og:image は app/opengraph-image.jpg から Next.js が自動生成する
    // （URL・型・width/height まで出力される）。ここで手書きしない。
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${yujiMai.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <LanguageProvider>
          <LangSync />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
