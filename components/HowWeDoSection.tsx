"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HowWeDoSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const [activeTab, setActiveTab] = useState("branding");

  const brandingSteps = [
    {
      step: "01",
      title: "Imersão & Entrevista",
      description:
        "Conversamos a fundo para entender a história, objetivos e personalidade da marca.",
    },
    {
      step: "02",
      title: "Estratégia & Pesquisa",
      description:
        "Mapeamos o mercado e definimos posicionamento, territórios criativos e diretrizes.",
    },
    {
      step: "03",
      title: "Identidade Visual",
      description:
        "Moodboards, logo, paleta, tipografia e sistemas visuais que dão vida à marca.",
    },
    {
      step: "04",
      title: "Refino & Entrega",
      description:
        "Ajustes finais e entrega organizada de todos os arquivos prontos para uso.",
    },
  ];

  const webSteps = [
    {
      step: "01",
      title: "Descoberta & Arquitetura",
      description:
        "Entendemos objetivos, definimos sitemap, jornadas e estrutura de conteúdo.",
    },
    {
      step: "02",
      title: "UX/UI & Protótipos",
      description:
        "Wireframes e interfaces alinhadas à identidade, com foco em clareza e conversão.",
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description:
        "Implementação responsiva e otimizada em Next.js, animações e integrações.",
    },
    {
      step: "04",
      title: "Lançamento & Evolução",
      description:
        "Deploy, monitoramento e melhorias contínuas baseadas em dados e feedback.",
    },
  ];

  const steps = activeTab === "branding" ? brandingSteps : webSteps;

  return (
    <section className="px-6 py-20 bg-gray-1000 text-white overflow-hidden">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2
              className={`text-4xl md:text-5xl font-libre font-bold mb-10 tracking-tight transition-all duration-1000 delay-200 text-left ${
                sectionVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Nosso ritual
            </h2>
            <div
              className={`flex flex-col items-start gap-4 transition-all duration-1000 delay-300 ${
                sectionVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <button
                onClick={() => setActiveTab("branding")}
                className={`font-libre text-2xl relative group ${
                  activeTab === "branding" ? "text-pale-pink" : "text-white/50"
                } transition-colors duration-300`}
              >
                <span>Branding</span>
                <span
                  className={`absolute bottom-[-2px] left-0 h-[1px] bg-pale-pink origin-left transition-transform duration-500 ease-out ${
                    activeTab === "branding" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                />
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`font-libre text-2xl relative group ${
                  activeTab === "web" ? "text-pale-pink" : "text-white/50"
                } transition-colors duration-300`}
              >
                <span>Web</span>
                <span
                  className={`absolute bottom-[-2px] left-0 h-[1px] bg-pale-pink origin-left transition-transform duration-500 ease-out ${
                    activeTab === "web" ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                />
              </button>
            </div>
          </div>

          <div className="md:col-span-8 mt-10 md:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {steps.map((item, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={`${activeTab}-${index}`}
                  className={`relative transition-all duration-700 ease-in-out border-b-transparent ${
                    sectionVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <AccordionTrigger className="font-libre text-2xl md:text-3xl text-left hover:no-underline group py-8">
                    <div className="flex items-center gap-6">
                      <span className="text-pale-pink/50 group-hover:text-pale-pink transition-colors duration-300">
                        {item.step}
                      </span>
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pl-16">
                    <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </AccordionContent>
                  <span
                    className="absolute bottom-0 left-0 h-px w-full bg-white/10 origin-left transition-transform ease-out"
                    style={{
                      transform: sectionVisible ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: `${800 + index * 200}ms`,
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
