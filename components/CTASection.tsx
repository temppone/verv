"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section id="contato" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Removed gradient overlay div */}
      <div
        ref={sectionRef}
        className={`max-w-4xl mx-auto px-6 text-gray-950 text-center relative transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            sectionVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Vamos descobrir juntos <br /> sua essência?
        </h2>
        <p
          className={`text-xl text-gray-950 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            sectionVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Se você se identificou e sente que é o momento de despertar o poder da
          sua marca, vamos conversar.
        </p>
        <div
          className={`transition-all duration-1000 delay-600 ${
            sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          <Button size="lg" className="bg-black text-white">
            <a href="https://form.respondi.app/9NqpobzW">
              Agendar uma conversa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
