import Header from "@/components/Header";
import Image from "next/image";
import AboutImage from "@/public/images/about-image.jpg"; // You'll need to add this image
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
  const teamMembers = [
    {
      name: "Giovani Lopes",
      role: "Designer & Estrategista",
      bio: "Com experiência em design e estratégia de marca, Giovani combina criatividade e visão estratégica para desenvolver identidades visuais que realmente comunicam a essência de cada negócio.",
      image: "/images/giovani.webp",
    },
    {
      name: "Gustavo Tempone",
      role: "Desenvolvedor Frontend",
      bio: "Especialista em criar experiências digitais impressionantes e funcionais, Gustavo transforma conceitos em interfaces interativas que elevam a presença digital das marcas.",
      image: "/images/tempone.jpg",
    },
  ];

  const services = [
    {
      title: "Branding estratégico",
      description:
        "Porque uma marca forte não se constrói só com um logo bonito.",
    },
    {
      title: "Identidade visual",
      description: "Visual que não só impressiona, mas comunica.",
    },
    {
      title: "Consultoria",
      description:
        "Te ajudamos a entender e aplicar estratégia no seu próprio negócio.",
    },
    {
      title: "Websites",
      description:
        "Porque sua presença digital precisa ser tão autêntica quanto seu trabalho.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="px-6 py-20 md:py-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp">
            <span className="text-white">Quem está por trás da</span>
            <br />
            <span className="text-pale-pink">Verv Studio</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
              Nossa História
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A Verv nasceu para ajudar criativos a focarem no que fazem de
              melhor: criar. Enquanto você mergulha no que faz de melhor, a
              gente cuida do seu posicionamento estratégico, garantindo que sua
              identidade visual e presença digital falem por você.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Aqui, nada de fórmulas prontas ou designs sem alma. Nosso trabalho
              é estratégico, autêntico e afiado. Criamos marcas que respiram
              ousadia, com identidade visual que impacta e posicionamento que
              faz sentido – para você e para o público que quer atrair.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 pt-16 pb-2 bg-black md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            O que fazemos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-pale-pink transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-pale-pink">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Nossa Filosofia
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-4xl">
            A Verv. não acredita em design só pelo visual. Acreditamos em
            impacto. Em marcas que transformam, que mexem com a percepção e que
            fazem sentido. Nossa abordagem é fundamentada em três princípios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Transformação",
                description:
                  "Design não é maquiagem. É alquimia. Cada cor, forma e conceito que criamos tem um propósito: revelar a verdadeira essência da sua marca e mudar a forma como o mundo a enxerga.",
              },
              {
                title: "Estratégia",
                description:
                  "Nada aqui é aleatório. Criamos marcas que comunicam antes mesmo da primeira palavra. Seu público precisa sentir sua identidade antes de entender sua mensagem.",
              },
              {
                title: "Ousadia",
                description:
                  "Quebramos padrões, mas com intenção. Fugimos do óbvio, mas sempre com estratégia. Ousadia sem direção é só barulho – e a gente prefere fazer ruído do jeito certo.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-pale-pink">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            A Verv. é para você que…
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            <div className="p-6 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 flex gap-2 items-center">
              <div className="text-pale-pink mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p className="text-xl text-gray-200 flex-grow">
                Quer se destacar sem precisar gritar.
              </p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 flex gap-2 items-center">
              <div className="text-pale-pink mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p className="text-xl text-gray-200 flex-grow">
                Cansou de brigar por preço e quer que seu trabalho seja
                valorizado pelo que realmente é.
              </p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 flex gap-2 items-center">
              <div className="text-pale-pink mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p className="text-xl text-gray-200 flex-grow">
                Acredita que estratégia e estética andam juntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Nossa Equipe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start gap-6 "
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative flex-shrink-0 bg-gray-800 border-2 border-pale-pink shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 160px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute inset-0 ring-2 ring-white/10 rounded-full"></div>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pale-pink mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed text-center md:text-start">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Se você sentiu o impacto, já sabe: sua marca pode ser muito mais. E
            a gente está aqui para fazer isso acontecer.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="https://form.respondi.app/NwPH9MZX"
              className="btn-primary"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
