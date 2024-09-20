import type { Metadata } from "next";
import "../styles/globals.scss";


export const metadata: Metadata = {
  title: "Kohta Stock Blog | こうたの株ブログ",
  description: "kohtaの株などの資産関連のブログです。日々の勉強内容のアウトプット場所として、ポートフォリオなどを公開する場所として活用しております。初心者の内容ですが継続して運営をしていきますのでよろしくお願いします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
