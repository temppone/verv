import Link from "next/link";
import { Bot, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/public/primitiva_logo.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-off-white-500">
      <header className="w-full border-b border-dark-teal-200 bg-off-white-100 backdrop-blur supports-[backdrop-filter]:bg-off-white-100/90">
        <div className="container flex h-16 items-center justify-center">
          <div className="flex items-center gap-2">
            <img src={Logo.src} alt="logo" className="w-20" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center space-y-8 py-10">
        <div className="container flex flex-col items-center justify-center space-y-8 max-w-3xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-dark-teal-600">
              Branding & Identidade Criativa
            </h1>
            <p className="text-dark-teal-400 mt-3 text-lg">
              Não é só sobre ser visto, é sobre ser lembrado. Branding que fala
              a sua língua. ✨
            </p>
          </div>

          <Button
            size="lg"
            className="bg-sage-green-500 hover:bg-sage-green-600 text-off-white-100 transition-all duration-200 ease-in-out hover:shadow-md w-full max-w-sm py-6 text-base font-medium"
            asChild
          >
            <Link href="/ebook/ia-para-criativos">
              QUERO MEU E-BOOK AGORA <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            className="bg-pale-pink-500 hover:bg-pale-pink-600 text-off-white-100 transition-all duration-200 ease-in-out hover:shadow-md w-full max-w-sm py-6 text-base font-medium"
            asChild
          >
            <Link href="https://www.instagram.com" target="_blank">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
          </Button>

          <Button
            size="lg"
            className="bg-dark-teal-500 hover:bg-dark-teal-600 text-off-white-100 transition-all duration-200 ease-in-out hover:shadow-md w-full max-w-sm py-6 text-base font-medium"
            asChild
          >
            <Link href="https://form.respondi.app/9NqpobzW" target="_blank">
              Fazer um orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      <footer className="w-full border-t border-dark-teal-200 py-6 bg-off-white-200">
        <div className="container flex flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-dark-teal-500" />
            <p className="text-sm text-dark-teal-400">
              © 2024 IA para Criativos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
