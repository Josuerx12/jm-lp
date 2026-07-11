import type { Metadata } from "next";
import { Bai_Jamjuree, Bakbak_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bakbaOne = Bakbak_One({
  variable: "--title-font",
  weight: "400",
});

const baiJamjuree = Bai_Jamjuree({
  variable: "--general-font",
  weight: ["600", "500", "400"],
});

export const metadata: Metadata = {
  title: "Jonatas Manhães",
  description:
    "Pagina pessoal de Jonatas Manhães, marketing estrategico politico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bakbaOne.variable} ${baiJamjuree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
