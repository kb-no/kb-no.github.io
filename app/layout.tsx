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
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    type: "website",
    url: siteConfig.url,
    images: [{ url: "/icon.png" }],
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
