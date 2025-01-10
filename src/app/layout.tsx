import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { TypeSquareLoader } from "@/components/TypeSquareLoader";
import { css, cx } from "../../styled-system/css";
import Script from "next/script";

//BasicallyASansSerif
const basicallyASansSerif = localFont({
  variable: "--font-basically-a-sans-serif",
  src: [
    {
      path: "./fonts/BasicallyASansSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BasicallyASansSerif-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/BasicallyASansSerif-SemiBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "武蔵野美術大学 CI・CL卒業・修了展 2024",
  description:
    "武蔵野美術大学造形構想学部クリエイティブイノベーション学科 造形構想研究科造形構想専攻クリエイティブリーダーシップコース 卒業制作展 2024",
  openGraph: {
    type: "website",
    images: [{ url: "https://ciclgs24.musabi.ac.jp/ogp.png" }],
    description:
      "武蔵野美術大学造形構想学部クリエイティブイノベーション学科 造形構想研究科造形構想専攻クリエイティブリーダーシップコース 卒業制作展 2024",
    url: "https://ciclgs24.musabi.ac.jp/",
    siteName: "武蔵野美術大学 Institute of Innovation 卒業・修了展2024",
    locale: "ja",
  },
  twitter: {
    card: "summary_large_image",
    site: "@musabi_koho",
    images: {
      url: "https://ciclgs24.musabi.ac.jp/ogp.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cx(
          css({
            background: "background",
          }),
          `${basicallyASansSerif.variable} ${notoSansJP.variable}`
        )}
      >
        {children}
        <TypeSquareLoader />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "4ebe9d15b03a418c947b403cc07d2503"}'
        />
        <GoogleAnalytics gaId="G-RC05NDW2XJ" />
      </body>
    </html>
  );
}
