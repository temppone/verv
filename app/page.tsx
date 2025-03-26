import Link from "next/link";
import { Bot, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Verv</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="container flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Branding & Identidade Criativa
            </h1>
            <p className="text-gray-600 mt-2">
              Não é só sobre ser visto, é sobre ser lembrado. Branding que fala
              a sua língua. ✨
            </p>
          </div>

          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white transition-all duration-200 ease-in-out hover:shadow-md"
            asChild
          >
            <Link href="/ebook/ia-para-criativos">
              QUERO MEU E-BOOK AGORA <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            className="bg-[#E1306C] hover:bg-[#C13584] text-white transition-all duration-200 ease-in-out hover:shadow-md"
            asChild
          >
            <Link href="https://www.instagram.com" target="_blank">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
          </Button>

          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 ease-in-out hover:shadow-md"
            asChild
          >
            <Link href="https://form.respondi.app/NwPH9MZX" target="_blank">
              Fazer um orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-black" />
            <p className="text-sm text-muted-foreground">
              © 2024 IA para Criativos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
