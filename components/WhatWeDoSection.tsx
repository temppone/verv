"use client";

import { Paintbrush, BarChart3, Layout, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
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
];

export default function WhatWeDoSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section className="px-6 py-12 bg-black">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className={`text-4xl font-bold mb-16 tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink transition-all duration-1000 delay-200 ${
            sectionVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Como podemos te guiar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 border border-white-900 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-1000 ${
                sectionVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
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
  );
}
