import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InovArt Pinturas | Acabamento Residencial e Comercial Premium",
  description: "Especialistas em pintura de alto padrão, texturas e acabamentos. Transformamos seu ambiente com inovação, limpeza e precisão.",
  keywords: ["pintura residencial", "pintura comercial", "acabamento premium", "pintor são paulo", "inovart pinturas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
