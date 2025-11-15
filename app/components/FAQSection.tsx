"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    question: "Por que o nome Primitiva?",
    answer: `Porque acreditamos que toda marca nasce de algo essencial: uma verdade, uma emoção, uma intenção bruta. Nosso papel é voltar a essa origem, despir o excesso e revelar o que realmente faz sua marca ser o que é. Primitiva é sobre instinto, autenticidade e propósito antes da estética.`,
  },
  {
    question: "Que tipo de marcas vocês fazem?",
    answer: `Marcas vivas. Autênticas. Que não querem parecer com ninguém.

Trabalhamos principalmente com pessoas criativas, que querem um posicionamento claro, uma identidade com propósito e uma presença digital que sustente isso.`,
  },
  {
    question: "Quanto tempo demora um projeto?",
    answer: `Depende da complexidade, mas em média:

- Branding: entre 4 e 8 semanas.
- Site: entre 3 e 5 semanas.

Acreditamos em processos estratégicos, não em correria.`,
  },
  {
    question: "Quanto custa um projeto?",
    answer: `Cada marca tem um tamanho, uma história e uma necessidade diferente, por isso não trabalhamos com tabelas fixas. O investimento depende do escopo e da profundidade do trabalho, sempre com foco em retorno e consistência, não só em estética.`,
  },
  {
    question: "Vocês são flexíveis com preços?",
    answer: `Somos flexíveis com escopos, não com valores.

A gente acredita em construir algo que caiba na sua realidade sem desvalorizar o que entregamos. Então, se o orçamento for um desafio, ajustamos as etapas, nunca a qualidade.`,
  },
];

export default function FAQSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section className="bg-pale-pink text-black">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-20 transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <p
          className={`font-libre block md:hidden text-sm w-full md:text-base mb-10 md:mb-14 opacity-70 ${
            sectionVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Perguntas Frequentes
        </p>

        <div
          className={`transition-all duration-1000 delay-300 ${
            sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex">
            <p
              className={`font-libre hidden md:block text-sm w-[30%] md:text-base mb-10 md:mb-14 opacity-70 ${
                sectionVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Perguntas Frequentes
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`relative py-4 first:pt-0 last:pb-4 last:border-b-0 transition-all duration-300 border-b-transparent ${
                    sectionVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between py-2 text-left hover:no-underline">
                    <span className="text-base md:text-lg font-medium pr-6">
                      {item.question}
                    </span>
                    <span className="ml-auto inline-flex items-center justify-center w-6 md:w-7">
                      <span className="text-2xl leading-none group-data-[state=open]:hidden">
                        +
                      </span>
                      <span className="hidden text-2xl leading-none group-data-[state=open]:block">
                        −
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-black/70 text-base md:text-lg pr-8">
                    {item.answer}
                  </AccordionContent>
                  <span
                    className="absolute bottom-0 left-0 h-px w-full bg-black/20 origin-left transition-transform ease-out"
                    style={{
                      transform: sectionVisible ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: `${1200 + index * 200}ms`,
                      transitionDuration: `${2000 + index * 200}ms`,
                    }}
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
