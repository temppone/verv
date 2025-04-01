import Link from "next/link";
import Logo from "@/public/verv_logo.svg";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { name: "Início", href: "#" },
  { name: "Portfólio", href: "#" },
  { name: "Sobre", href: "#" },
  { name: "Contato", href: "#" },
];

export default function Header() {
  return (
    <header className="px-6 fixed w-full flex justify-between items-center top-0 z-10 backdrop-blur-sm bg-black/80">
      <div className="flex justify-center text-xl font-bold hover:text-pale-pink transition-colors duration-300">
        <Link
          href="/"
          className="text-xl py-4 md:text-2xl font-black text-off-white transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={Logo}
            alt="Verv Studio"
            className="w-16 invert brightness-0 filter"
            width={64}
            height={64}
          />
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 border-gray-800">
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-white hover:text-pale-pink transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-pale-pink text-black hover:bg-white mt-4"
              >
                <Link href="#contact">Fale conosco</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-pale-pink transition-colors duration-300 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden md:block animate-slideUp animation-delay-500">
        <Button
          asChild
          className="bg-pale-pink text-black hover:bg-white hover:scale-105"
        >
          <Link href="#contact">Fale conosco</Link>
        </Button>
      </div>
    </header>
  );
}
