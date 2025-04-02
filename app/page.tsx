import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/home/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import PaolaGatti from "@/public/images/paola_01.webp";

import Ninho from "@/public/images/ninho.webp";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import { BarChart3, Globe, Layout, Paintbrush } from "lucide-react";

const feedbacks = [
  {
    text: "Eu amei todo o conceito, o formato dos elementos que escolheu, a paleta!!! Ta perfeito. Eu nem sei o que dizer, conseguiu me tirar um sorriso imenso junto com aquele silêncio de satisfação sabe. Fiquei apaixonada, pra dizer o mínimo",
    author: "Paola Gatti",
    handle: "@paolagatti.tattoo",
  },
  {
    text: "Preciso agradecer imensamente vcs por esse trampo perfeito! Vcs conseguiram traduzir perfeitamente tudo que eu queria pra minha bebê.",

    author: "Mirella Mota",
    handle: "@oquefazerem.jf",
  },
  {
    text: "Ficou SENSACIONAL! E eu to amando aplicar aos pouquinhos! Só tenho a agradecer por esse trabalho maravilhoso e tãaaaaaao minha cara! Sucesso puro",
    author: "Isabela Gatti",
    handle: "@ninhoestudio",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <HeroSection />

      <section className="px-6 py-8 bg-gray-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Projetos Selecionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              image={OqueFazerEmJF}
              title="O que Fazer em JF?"
              delay="400"
              slug="oque-fazer-em-jf"
              square
            />

            <ProjectCard
              image={PaolaGatti}
              title="Paola Gatti"
              delay="400"
              slug="paola-gatti"
              square
            />

            <ProjectCard
              image={Ninho}
              title="Ninho Tattoo Studio"
              fullWidth={true}
              delay="400"
              slug="ninho"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            O que dizem depois de virar a chave
          </h2>
          <div>
            <Carousel className="w-ful">
              {feedbacks.map((feedback, index) => (
                <CarouselItem key={index} className="p-6">
                  <div className="bg-black/50 p-12 rounded-lg">
                    <p className="text-lg leading-relaxed mb-6">
                      {feedback.text}
                    </p>
                    <div className="flex flex-col">
                      <span className="font-bold">{feedback.author}</span>
                      <span className="text-pale-pink">{feedback.handle}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            O que fazemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Paintbrush,
                title: "Branding",
                description:
                  "Desenvolvimento estratégico da sua marca, desde o posicionamento até a comunicação com seu público.",
              },
              {
                icon: BarChart3,
                title: "Estratégia",
                description:
                  "Planejamento detalhado para alcançar seus objetivos de negócio através da comunicação efetiva.",
              },
              {
                icon: Layout,
                title: "Identidade Visual",
                description:
                  "Criação de elementos visuais únicos que traduzem a essência da sua marca e conectam com seu público.",
              },
              {
                icon: Globe,
                title: "Desenvolvimento Web",
                description:
                  "Criação de sites e landing pages modernos e responsivos que transmitem a essência da sua marca.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="true"
              >
                <div className="flex flex-col h-full">
                  <service.icon className="w-8 h-8 mb-4 text-pale-pink" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Como fazemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Entrevista Individual",
                description:
                  "Começamos com uma conversa profunda para entender a história da sua marca, seus objetivos, personalidade e o que você deseja transmitir ao seu público.",
              },
              {
                step: "02",
                title: "Estratégia & Pesquisa",
                description:
                  "Desenvolvemos um documento estratégico e analisamos o mercado para entender como destacar sua marca da concorrência.",
              },
              {
                step: "03",
                title: "Desenvolvimento Visual",
                description:
                  "Criamos moodboards e desenvolvemos sua identidade visual completa, incluindo logotipo, paleta de cores e tipografia.",
              },
              {
                step: "04",
                title: "Refinamento & Entrega",
                description:
                  "Apresentamos o projeto, realizamos ajustes necessários e entregamos todos os arquivos e materiais para uso imediato.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-xl transition-all duration-500 ease-out bg-black/40 scale-[1.02] cursor-pointer backdrop-blur-sm border border-pale-pink/20"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-pale-pink/5 to-transparent opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-pale-pink font-bold text-4xl opacity-100 transition-opacity duration-300">
                      {item.step}
                    </span>
                    <div className="h-[1px] flex-grow bg-pale-pink/20 transform origin-left scale-x-100 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-pale-pink transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Perguntas Frequentes
          </h2>
          <div className="w-100">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Quanto tempo leva o processo completo?",
                  answer:
                    "O processo completo geralmente leva de 4 a 6 semanas, dependendo da complexidade do projeto e da rapidez do feedback do cliente.",
                },
                {
                  question: "Como funciona o processo de pagamento?",
                  answer:
                    "Trabalhamos com um sistema de 50% de entrada para iniciar o projeto e 50% na entrega final. Também oferecemos opções de parcelamento.",
                },
                {
                  question: "O que está incluído no pacote de branding?",
                  answer:
                    "O pacote inclui estratégia de marca, identidade visual completa (logo, cores, tipografia), manual de marca e arquivos em todos os formatos necessários.",
                },
                {
                  question: "Vocês fazem alterações após a entrega?",
                  answer:
                    "Sim, incluímos duas rodadas de alterações no pacote padrão para garantir que você esteja completamente satisfeito com o resultado.",
                },
                {
                  question: "Trabalham com projetos internacionais?",
                  answer:
                    "Sim, trabalhamos remotamente com clientes de qualquer lugar do mundo através de reuniões online e ferramentas colaborativas.",
                },
                {
                  question: "Como começar um projeto?",
                  answer:
                    "Entre em contato através do formulário ou WhatsApp. Faremos uma reunião inicial gratuita para entender suas necessidades e apresentar nossa proposta.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-800 rounded-lg px-6 data-[state=open]:border-pale-pink transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline group">
                    <span className="text-xl font-medium text-left group-hover:text-pale-pink transition-colors duration-300">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos trabalhar juntos na sua marca?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Transformamos marcas com estratégia, design e narrativas potentes
            que conectam seu negócio ao público certo.
          </p>
          <Button size="lg">
            <a href="https://form.respondi.app/NwPH9MZX">Solicitar Orçamento</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
