"use client";

import CTASection from "@/components/CTASection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Globe, Layout, Paintbrush } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: philosophyRef, isVisible: philosophyVisible } =
    useScrollAnimation({
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="px-6 py-20 md:py-32">
        <div
          ref={heroRef}
          className={`max-w-5xl mx-auto md:text-center transition-all duration-1000 ${
            heroVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className={`text-6xl md:text-8xl tracking-tight mb-6 font-libre transition-all duration-1000 delay-200 ${
              heroVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-white">Não criamos marcas.</span>
            <br />
            <span className="text-white">Despertamos</span>{" "}
            <span className="text-white italic">essências.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-1000">
        <div
          ref={storyRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            storyVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1">
            <p
              className={`text-xl text-gray-300 leading-relaxed text-left pb-4 md:text-center transition-all duration-1000 delay-200 ${
                storyVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Sua marca já existe. Ela está na sua história, nas suas
              cicatrizes, na sua visão de mundo, naquilo que só você sabe fazer.
              Ela só precisa ser descoberta e traduzida para o mundo.
            </p>

            <p
              className={`text-xl text-gray-300 leading-relaxed text-left pb-4 md:text-center transition-all duration-1000 delay-400 ${
                storyVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              A Primitiva nasceu de uma inquietação. O que começou como um
              estúdio de design amadureceu e encontrou sua verdadeira vocação:
              ser o despertar de uma nova forma de fazer branding. Cansamos de
              ver o mercado saturado de fórmulas prontas , soluções superficiais
              e design que é só estética.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-1000">
        <div
          ref={philosophyRef}
          className={`max-w-6xl mx-auto md:flex md:flex-col md:items-center transition-all duration-1000 ${
            philosophyVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-16 tracking-tight font-libre relative before:content-[''] md:text-center transition-all duration-1000 delay-200 ${
              philosophyVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
            }`}
          >
            Nossa Filosofia
          </h2>
          <p
            className={`text-xl text-gray-300 mb-10 max-w-4xl md:text-center transition-all duration-1000 delay-400 ${
              philosophyVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Nós acreditamos que as marcas mais poderosas não são inventadas, mas
            sim despertadas. Por isso, nosso trabalho não é criar algo do zero,
            mas guiar você em uma jornada de autodescoberta para revelar a marca
            que já existe aí dentro.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
