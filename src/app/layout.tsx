import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
// metadados
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

// body / estrutura principal
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
