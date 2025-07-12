import Logo from "@/public/primitiva_logo.svg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Início", href: "/" },
    // { name: "Ebooks", href: "/ebooks/1" },
    { name: "Sobre", href: "/about" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="px-6 fixed w-full flex justify-between items-center top-0 z-10 backdrop-blur-sm bg-black/80 h-16">
      <div className="flex justify-center text-xl font-bold hover:text-pale-pink transition-colors duration-300">
        <span className="py-4 font-black text-off-white transition-transform duration-300 hover:scale-105">
          <Link href="/">
            <img
              src={Logo.src}
              alt="Primitiva Studio"
              className="w-16 invert brightness-0 filter"
            />
          </Link>
        </span>
      </div>

      {/* Mobile Contact Button */}
      <div className="flex items-center gap-2 md:hidden">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="link">
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent className="bg-black/95">
            <SheetClose asChild className="absolute right-4 top-4">
              <Button variant="link" size="icon">
                <X className="text-white" />

                <span className="sr-only">Close</span>
              </Button>
            </SheetClose>

            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <SheetClose key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="text-white text-lg py-2 hover:text-pale-pink transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white">
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
    </header>
  );
}
