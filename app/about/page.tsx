import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Globe, Layout, Paintbrush } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Giovani Lopes",
      role: "Designer & Estrategista",
      bio: "    Criativo de natureza e estrategista por escolha, Giovani transforma marcas em experiências visuais autênticas. Depois de anos vendo design ser tratado como detalhe, decidiu unir estética e estratégia para criar identidades que fazem sentido — e não só agradam aos olhos.",
      image: "/images/giovani.webp",
    },
    {
      name: "Gustavo Tempone",
      role: "Desenvolvedor Frontend",
      bio: "Especialista em criar experiências digitais impressionantes e funcionais, Gustavo transforma conceitos em interfaces interativas que elevam a presença digital das marcas.",
      image: "/images/tempone.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="px-6 py-20 md:py-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto md:text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp">
            <span className="text-white">Muito mais que design</span>
            <br />
            <span className="text-pale-pink">Esse é o nosso porquê</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1">
            <p className="text-xl text-gray-300 leading-relaxed text-left pb-4 md:text-center">
              A Verv existe porque acredita que os criativos têm o poder de
              transformar o mundo através de suas criações. No entanto, muitos
              criativos enfrentam dificuldades para construir marcas fortes e
              relevantes, o que os impede de alcançar seu pleno potencial.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed text-left md:text-center">
              Acreditamos que, ao ajudar artistas e criativos a construirem
              marcas fortes, a Verv contribui para um mundo mais inspirador e
              transformador.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto md:flex md:flex-col md:items-center">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 md:before:left-1/2 md:before:-translate-x-1/2 before:bg-pale-pink md:text-center">
            O que fazemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
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
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950 md:text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="true"
              >
                <div className="flex flex-col h-full md:items-center">
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

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto md:flex md:flex-col md:items-center">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 md:before:left-1/2 md:before:-translate-x-1/2 before:bg-pale-pink md:text-center">
            Nossa Filosofia
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-4xl md:text-center">
            A Verv. não acredita em design só pelo visual. Acreditamos em
            impacto. Em marcas que transformam, que mexem com a percepção e que
            fazem sentido. Nossa abordagem é fundamentada em três princípios:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Transformação",
                description:
                  "Cada cor, forma e conceito que criamos tem um propósito: revelar a verdadeira essência da sua marca e mudar a forma como o mundo a enxerga.",
              },
              {
                title: "Estratégia",
                description:
                  "Criamos marcas que comunicam antes mesmo da primeira palavra. Seu público precisa sentir sua identidade antes de entender sua mensagem.",
              },
              {
                title: "Ousadia",
                description:
                  "Quebramos padrões, mas com intenção. Fugimos do óbvio, mas sempre com estratégia. Ousadia sem direção é só barulho – e a gente prefere fazer ruído do jeito certo.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950 md:text-center"
              >
                <div className="flex flex-col h-full md:items-center">
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

      {/* Team Section */}
      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto md:flex md:flex-col md:items-center">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 md:before:left-1/2 md:before:-translate-x-1/2 before:bg-pale-pink text-left md:text-center">
            Quem está por trás da Verv
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Avatar className="w-full h-full border-2 border-pale-pink shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gray-800">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pale-pink mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed text-center">
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
