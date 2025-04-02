import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Verv - Branding para criativos",
  description:
    "Estratégias profissionais de branding para designers, artistas e freelancers. Desenvolva sua identidade visual, atraia clientes ideais e destaque-se no mercado criativo com métodos eficientes e práticos.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();

  const pathname = headersList.get("x-pathname");
  const isEbookPage = pathname?.startsWith("/ebook");

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {isEbookPage ? null : <Header />}

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
