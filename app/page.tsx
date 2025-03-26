import Link from "next/link";
import {
  Bot,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-center">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
            <span className="text-xl font-bold">IA para Criativos</span>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center space-y-6">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white transition-all duration-200 ease-in-out hover:shadow-md"
          asChild
        >
          <Link href="/ebook">
            QUERO MEU E-BOOK AGORA <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 ease-in-out hover:shadow-md"
          asChild
        >
          <Link href="https://www.instagram.com" target="_blank">
            <Instagram className="mr-2 h-5 w-5" /> Instagram
          </Link>
        </Button>
        <Button
          size="lg"
          className="bg-blue-400 hover:bg-blue-500 text-white transition-all duration-200 ease-in-out hover:shadow-md"
          asChild
        >
          <Link href="https://www.twitter.com" target="_blank">
            <Twitter className="mr-2 h-5 w-5" /> Twitter
          </Link>
        </Button>
        <Button
          size="lg"
          className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-200 ease-in-out hover:shadow-md"
          asChild
        >
          <Link href="https://www.facebook.com" target="_blank">
            <Facebook className="mr-2 h-5 w-5" /> Facebook
          </Link>
        </Button>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 ease-in-out hover:shadow-md"
          asChild
        >
          <Link href="https://www.linkedin.com" target="_blank">
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Link>
        </Button>
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
