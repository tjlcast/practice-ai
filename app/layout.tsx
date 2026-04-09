import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🎨 AI 你画我猜 - 在线绘画猜谜游戏",
  description: "在画布上作画，让AI猜猜你画的是什么！使用DeepSeek AI进行实时图像识别。",
  keywords: ["AI你画我猜", "绘画游戏", "AI猜图", "在线游戏", "DeepSeek AI"],
  authors: [{ name: "AI你画我猜游戏" }],
  openGraph: {
    title: "🎨 AI 你画我猜",
    description: "在画布上作画，让AI猜猜你画的是什么！",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans min-h-full bg-gray-50">
        {children}
      </body>
    </html>
  );
}
