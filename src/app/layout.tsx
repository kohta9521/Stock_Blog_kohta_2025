import type { Metadata } from "next";

// Import global styles
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Kohta Blog",
  description:
    "kohtaのブログサイトです。技術関連の内容から日々のキャッチアップしている投資関連の内容まで幅広いジャンルをご覧いただけます。是非楽しんでいってください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
