import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configuração das fontes
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// Metadados
export const metadata: Metadata = {
  title: {
    default: "Carvalho & Associados",
    template: "%s | Carvalho & Associados",
  },
  description:
    "Escritório de advocacia com atuação em Direito Trabalhista e Direito do Consumidor.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

// Body / Estrutura principal
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}