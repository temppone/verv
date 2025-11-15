"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    title: "Transformação",
    description:
      "Reoriente o seu negócio em direção a uma nova oportunidade de mercado em que você tenha vantagem competitiva.",
  },
  {
    title: "Reposicionamento",
    description:
      "Crie uma posição defensável no mercado para que seus clientes vejam com clareza o que você faz de melhor.",
  },
  {
    title: "Estratégia de marca",
    description:
      "Estabeleça um framework de marca que alinhe cultura e comportamento internos com as ações e a comunicação externa.",
  },
  {
    title: "Identidade visual & verbal",
    description:
      "Crie ativos únicos, modernos e memoráveis que levem à vida o seu posicionamento e a sua estratégia.",
  },
  {
    title: "Implementação da marca",
    description:
      "Aplique sua identidade em cada ponto de contato para que todos se conectem com ela em segundos.",
  },
];

export default function WhatWeDoSection() {
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
          (O que fazemos)
        </p>

        <div className="flex">
          <p
            className={`font-libre hidden md:block text-sm w-[50%] md:text-base mb-10 md:mb-14 opacity-70 ${
              sectionVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            (O que fazemos)
          </p>

          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className="pb-10 mb-10"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <h3 className="font-libre text-3xl md:text-3xl leading-tight mb-4 cursor-pointer overflow-hidden relative group pb-4 last:border-b-0 last:mb-0">
                  <span className="inline-block transition-all duration-100 ease-in-out group-hover:-translate-y-full group-hover:italic">
                    {item.title}
                  </span>

                  <span className="inline-block absolute top-full left-0 transition-all duration-100 ease-in-out pb-4 group-hover:-translate-y-full italic opacity-0 group-hover:opacity-100">
                    {item.title}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 h-px w-full bg-black/20 origin-left transition-transform ease-out"
                    style={{
                      transform: sectionVisible ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: `${800 + index * 200}ms`,
                      transitionDuration: `${2000 + index * 200}ms`,
                    }}
                  />
                </h3>
                <p className="text-base md:text-lg opacity-80 max-w-3xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
