import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Verv Studio - Automatize tarefas com IA",
  description:
    "Pare de perder horas com tarefas chatas. Aprenda a usar IA para automatizar processos operacionais e foque no que realmente importa no seu trabalho criativo - por apenas R$19!",
};

export default function EbookRoot({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "@/app/globals.css";
