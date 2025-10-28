"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section className="px-6 py-20 md:pt-32 pb-10">
      <div
        ref={sectionRef}
        className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className={`text-6xl font-libre md:text-8xl tracking-tight mb-6 text-center transition-all duration-1000 delay-200 ${
            sectionVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
          }`}
          id="hero-heading"
        >
          <span className="text-white">
            Sua marca já existe. Nós só te ajudamos a{" "}
          </span>
          <br />
          <span className="text-pale-pink italic">descobrir!</span>
        </h1>

        <span className="text-white">
          Branding, design e web para marcas vivas, instintivas e fora do
          padrão.
        </span>
      </div>
    </section>
  );
}
