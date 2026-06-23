import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://crhr.instyle.group/ig-goal-sheet-sample";
const ASSETS = "https://crhr.instyle.group/_shared/static";
const TITLE = "目標設定シート 見本 — INSTYLE GROUP";
const DESCRIPTION = "INSTYLE GROUP が社員の目標設定と評価に用いている実物シートの見本です。グループ → 会社 → 部署 → 個人 と段階的に目標を分解し、ギャランティ／ボーナス／昇格採点まで一気通貫で扱います。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: `${ASSETS}/favicon.png`,
    apple: `${ASSETS}/favicon.png`,
  },
  openGraph: {
    type: "website",
    siteName: "INSTYLE GROUP",
    locale: "ja_JP",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${ASSETS}/ogp.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${ASSETS}/ogp.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/gen-interface-jp@0.5.0/all.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
