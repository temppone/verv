import Link from "next/link";
import Logo from "@/public/verv_logo.svg";

export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center top-0 z-10 backdrop-blur-sm bg-black/80">
      <div className="flex justify-center text-xl font-bold hover:text-pale-pink transition-colors duration-300">
        <Link href="/">
          <span className="text-xl md:text-2xl font-black text-off-white transition-transform duration-300 hover:scale-105">
            <img
              src={Logo.src}
              alt="Verv Studio"
              className="w-20 invert brightness-0 filter"
            />
          </span>
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="hover:text-pale-pink transition-colors duration-300 hover:underline"
            >
              Início
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-pale-pink transition-colors duration-300 hover:underline"
            >
              Portfólio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-pale-pink transition-colors duration-300 hover:underline"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-pale-pink transition-colors duration-300 hover:underline"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
