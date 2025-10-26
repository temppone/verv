"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section className="px-6 py-20 md:py-32">
      <div
        ref={sectionRef}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className={`text-6xl md:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${
            sectionVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
          }`}
          id="hero-heading"
        >
          <span className="text-white">
            Sua marca já existe. Nós só te ajudamos a{" "}
          </span>
          <br />
          <span className="text-pale-pink">(re)descobrir!</span>
        </h1>

        <div
          className={`md:block mt-12 transition-all duration-1000 delay-500 ${
            sectionVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <a href="https://form.respondi.app/9NqpobzW" target="_blank">
            <Button size="lg">Descubra</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
