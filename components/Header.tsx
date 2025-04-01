import ProjectCard from "@/components/ProjectCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Biancovilli from "@/public/images/biancovilli.webp";
import Ninho from "@/public/images/ninho.webp";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import Logo from "@/public/verv_logo.svg";
import { BarChart3, Globe, Layout, Paintbrush } from "lucide-react";

const feedbacks = [
  {
    text: "Eu amei todo o conceito, o formato dos elementos que escolheu, a paleta!!! Ta perfeito. Eu nem sei o que dizer, conseguiu me tirar um sorriso imenso junto com aquele silêncio de satisfação sabe. Fiquei apaixonada, pra dizer o mínimo",
    author: "Paola Gatti",
    handle: "@paolagatti.tattoo",
  },
  {
    text: "Durante o processo de criação da identidade visual, ele não apenas entregou uma nova cara para minha marca, mas trouxe autenticidade e alinhamento com o estilo que sempre sonhei.",
    author: "Mirella Mota",
    handle: "@oquefazerem.jf",
  },
  {
    text: "Ficou SENSACIONAL! E eu to amando aplicar aos pouquinhos! Só tenho a agradecer por esse trabalho maravilhoso e tãaaaaaao minha cara! Sucesso puro",
    author: "Isabela Gatti",
    handle: "@ninhoestudio",
  },
  {
    text: "Hoje não só nos sentimos parte de um grupo de grandes empresas, como também conseguimos reposicionar nossos produtos e aumentar a confiança dos clientes.",
    author: "Gustavo Biancovilli",
    handle: "@biancovillibrigaderia",
  },
];

export default function Home() {
  return (
    <header className="px-6 fixed w-full flex justify-between items-center top-0 z-10 backdrop-blur-sm bg-black/80">
      <div className="flex justify-center text-xl font-bold hover:text-pale-pink transition-colors duration-300">
        <span className="text-xl py-4 md:text-2xl font-black text-off-white transition-transform duration-300 hover:scale-105">
          <img
            src={Logo.src}
            alt="Verv Studio"
            className="w-16 invert brightness-0 filter"
          />
        </span>
      </div>

      <div className="block md:hidden animate-slideUp animation-delay-500">
        <a
          href="#contact"
          className="bg-pale-pink text-black px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-white hover:scale-105 transform"
        >
          Fale conosco
        </a>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white">
          <li>
            <a
              href="#"
              className="hover:text-pale-pink transition-colors duration-300 hover:underline"
            >
              Início
            </a>
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
              href="/about"
              className="hover:text-pale-pink transition-colors duration-300 hover:underline"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/contact"
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
