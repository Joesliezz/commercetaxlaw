import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "商税法研究 Commerce Tax Law | 朱海峰税务律师",
  description:
    "商税法研究 Commerce Tax Law 是税务律师朱海峰创立的税法研究与涉税争议服务网站，关注税务稽查、涉税争议、平台经济、虚开风险、股权交易税务与数智化税收征管。",
  keywords: [
    "商税法研究",
    "Commerce Tax Law",
    "朱海峰律师",
    "税务律师",
    "涉税争议",
    "税务稽查",
    "虚开增值税专用发票",
    "平台经济税务合规",
    "股权交易税务"
  ],
  openGraph: {
    title: "商税法研究 Commerce Tax Law",
    description: "朱海峰律师创立的税法研究与涉税争议解决平台。",
    type: "website",
    locale: "zh_CN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
