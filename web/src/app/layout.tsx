import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-sans-arabic",
  display: "swap",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "ملخص القوانين الأساسية للآلات الحرارية",
  description:
    "عرض منظم وشامل لأهم القوانين والمعادلات الخاصة بالآلات الحرارية ودوراتها المختلفة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
