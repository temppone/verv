"use client";

import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Feedback {
  text: string;
  author: string;
  handle: string;
}

interface FeedbackCarouselProps {
  feedbacks: Feedback[];
}

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

export default function FeedbackCarousel() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section className="px-6 py-4 bg-gray-1000">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className={`transition-all duration-1000 delay-300 ${
            sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
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
  );
}
