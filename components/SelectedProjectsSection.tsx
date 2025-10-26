"use client";

import ProjectCard from "@/components/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import PaolaGatti from "@/public/images/paola_01.webp";
import Ninho from "@/public/images/ninho.webp";

export default function SelectedProjectsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section className="px-6 py-8 bg-gray-1000 overflow-hidden">
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
          Transformações que guiamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            image={OqueFazerEmJF}
            title="O que Fazer em JF?"
            slug="oque-fazer-em-jf"
            square
            isVisible={sectionVisible}
          />
          <ProjectCard
            image={PaolaGatti}
            title="Paola Gatti"
            slug="paola-gatti"
            square
            isVisible={sectionVisible}
          />
          <ProjectCard
            image={Ninho}
            title="Ninho Tattoo Studio"
            fullWidth={true}
            slug="ninho"
            isVisible={sectionVisible}
          />
        </div>
      </div>
    </section>
  );
}
