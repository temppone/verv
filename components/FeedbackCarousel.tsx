import { Carousel, CarouselItem } from "@/components/ui/carousel";

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
  return (
    <section className="px-6 py-4 bg-gray-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
          Vozes de quem despertou
        </h2>
        <div>
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
