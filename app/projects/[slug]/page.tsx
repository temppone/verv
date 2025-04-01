import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";

import PaolaGatti from "@/public/images/paola_01.webp";

import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import { Fragment } from "react";

const projects = [
  {
    slug: "paola-gatti",
    title: "Paola Gatti",
    subtitle: "Identidade Visual & Branding",
    description:
      "Transformando memórias e sentimentos em tatuagens únicas com delicadeza, afeto e conexão",
    image: PaolaGatti,
    stats: [
      { label: "Seguidores", value: "+10k" },
      { label: "Clientes fiéis", value: "95%" },
      { label: "Tempo do projeto", value: "2 meses" },
    ],
    services: [
      "Identidade visual",
      "Posicionamento",
      "Arquétipos",
      "Tom de voz",
    ],
    testimonial: {
      quote:
        "Minha experiência de trabalhar com a empresa foi maravilhosa demais. Levei muito tempo pra criar coragem e me sentir aberta a sugestões que esse tipo de trabalho me traria... E eles me deram toda a confiança em me expor (do meu jeitinho)... Gostei da forma como tiveram a sensibilidade de entender meu ponto prático e afetivo no meu trabalho! Eu amei o resultado tanto quanto o processo de construção! Hoje me sinto lindamente conectada com tudo na identidade que criaram pra mim! A equipe está de parabéns! Muito obrigada por tudo!",

      author: "Paola Gatti",
      role: "Tatuadora",
    },

    relatedProjects: ["oquefazeremjf", "ninho"],
    fullContent: [
      {
        type: "lead",
        content:
          "Este projeto de identidade visual para a tatuadora Paola Gatti foi uma imersão em um universo de delicadeza, afeto e conexão. O desafio era traduzir a essência de seu trabalho – transformar memórias e sentimentos em tatuagens únicas – em uma marca que respirasse autenticidade e cuidado.",
      },
      {
        type: "paragraph",
        content:
          "Cada elemento foi pensado para refletir a sensibilidade e a paixão que Paola dedica a cada cliente e a cada traço.",
      },
      {
        type: "image",
        src: "/images/paola_02.webp",
        alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
      },

      {
        type: "image",
        src: "/images/paola_03.webp",
        alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
      },

      {
        type: "image",
        src: "/images/paola_04.webp",
        alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
      },

      {
        type: "heading",
        content: "Essência da Marca",
      },
      {
        type: "paragraph",
        content:
          "Paola Gatti não é apenas uma tatuadora; é uma artista que eterniza histórias na pele. Sua abordagem acolhedora e sensível cria um espaço seguro onde os clientes se sentem à vontade para compartilhar suas vivências.",
      },
      {
        type: "paragraph",
        content:
          "Inspirada pela natureza e pelos laços emocionais, Paola cria obras de arte personalizadas que celebram a individualidade e a beleza das relações humanas. A marca reflete essa essência, buscando transmitir a mesma delicadeza e exclusividade presentes em suas tatuagens.",
      },
      {
        type: "heading",
        content: "Pilares da Marca",
      },
      {
        type: "list",
        items: [
          "Missão: Oferecer uma experiência de tatuagem personalizada, transformando histórias e sentimentos em criações delicadas e significativas.",
          "Visão: Ser referência em tatuagens botânicas e afetivas, reconhecida por um atendimento humanizado e uma conexão profunda com o cliente.",
          "Valores: Empatia e acolhimento. Exclusividade e delicadeza. Conexão com a natureza. Respeito e transparência.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Estes pilares guiaram cada decisão criativa, desde a escolha da tipografia até a paleta de cores, garantindo que a marca comunicasse de forma clara e consistente o propósito e os valores de Paola.",
      },
      {
        type: "heading",
        content: "Comunicação",
      },
      {
        type: "paragraph",
        content:
          "Tom & Voz: Empático e acolhedor, elegante e artístico, autêntico e acessível. A comunicação da marca busca criar um diálogo próximo e sincero com o público, transmitindo confiança e cuidado.",
      },
      {
        type: "paragraph",
        content:
          "Look & Feel: Extrovertida, alegre e elegante. A identidade visual é vibrante e expressiva, refletindo a personalidade de Paola e a beleza de suas criações.",
      },
      {
        type: "quote",
        content:
          "A combinação de um tom de voz acolhedor com um visual elegante e alegre foi fundamental para construir uma marca que se destaca pela sua autenticidade e calor humano.",
      },
      {
        type: "heading",
        content: "Arquétipos",
      },
      {
        type: "paragraph",
        content:
          "A marca Paola Gatti é personificada pela combinação dos arquétipos Cuidador e Criador. O Cuidador representa a empatia, o acolhimento e o desejo de nutrir as relações, refletindo a atenção e o respeito que Paola dedica a cada cliente. O Criador, por sua vez, simboliza a originalidade, a inspiração e a expressão artística, evidenciando a habilidade de Paola em transformar histórias e emoções em tatuagens únicas.",
      },
      {
        type: "list",
        items: [
          "O Cuidador: Acolhedora, sensível e confiável. Foco na experiência humanizada e no bem-estar do cliente. Comunicação amigável e emocional.",
          "O Criador: Valoriza a criatividade e a individualidade. Busca excelência e inovação artística. Expressão única e marcante.",
        ],
      },
      {
        type: "paragraph",
        content:
          "A sinergia entre esses dois arquétipos define a identidade da marca, equilibrando o cuidado com a expressão artística e a individualidade.",
      },
      {
        type: "heading",
        content: "Desafios e Desenvolvimento",
      },
      {
        type: "paragraph",
        content:
          "O projeto de identidade visual para Paola Gatti apresentou alguns desafios e necessidades específicas, que foram abordados com cuidado e atenção em cada etapa do desenvolvimento:",
      },
      {
        type: "list",
        items: [
          "Tradução da Essência: O principal desafio foi capturar a delicadeza, a sensibilidade e a exclusividade do trabalho de Paola em uma identidade visual.",
          "Equilíbrio entre Arte e Acessibilidade: Era fundamental criar uma marca que fosse ao mesmo tempo elegante e artística, refletindo a qualidade do trabalho de Paola.",
          "Destaque da Individualidade: Cada tatuagem de Paola é única e personalizada, refletindo a história e a personalidade de cada cliente.",
          "Comunicação Eficaz: Desenvolver uma linguagem visual e verbal que transmitisse os valores da marca foi essencial.",
        ],
      },
      {
        type: "heading",
        content: "Considerações Finais",
      },
      {
        type: "paragraph",
        content:
          "O projeto de identidade visual para Paola Gatti foi uma jornada de descoberta e criação, onde cada detalhe foi cuidadosamente pensado para refletir a essência e os valores da marca. O resultado é uma identidade que celebra a beleza da conexão humana e a arte de eternizar histórias na pele, posicionando Paola como uma referência em tatuagens botânicas e afetivas.",
      },
      {
        type: "quote",
        content:
          "Foi um privilégio dar vida a essa marca e contribuir para o sucesso de uma artista tão talentosa e dedicada.",
      },
    ],
  },
  {
    slug: "oque-fazer-em-jf",
    title: "O que fazer em JF",
    subtitle: "Branding & Identidade Visual",
    image: OqueFazerEmJF,
    stats: [
      { label: "Seguidores", value: "100k+" },
      { label: "Parcerias locais", value: "50+" },
      { label: "Alcance mensal", value: "500k+" },
    ],
    services: ["Identidade visual"],
    testimonial: {
      quote:
        "A identidade visual traduziu perfeitamente o que eu sempre quis comunicar: o amor e a energia de Juiz de Fora.",
      author: "Mirella Mota",
      role: "Fundadora",
    },
    relatedProjects: ["ninho"],
    beforeAfter: {
      before: {
        image: "/images/oqfjf_antes.jpg",
        title: "Desafios",
        items: [
          "Falta de consistência visual",
          "Dificuldade em parcerias profissionais",
          "Imagem não refletia a energia da marca",
        ],
      },
      after: {
        image: "/images/oqfjf_depois.jpg",
        title: "Resultados",
        items: [
          "Sistema visual dinâmico e flexível",
          "Mais parcerias com negócios locais",
          "Credibilidade e profissionalismo",
        ],
      },
    },
    fullContent: [
      {
        type: "lead",
        content:
          "O amor por Juiz de Fora que acumulou uma legião de fãs. Quando Mirella Mota criou a página O Que Fazer em JF, o objetivo era claro: mostrar para juiz-foranos e turistas o quanto Juiz de Fora tem a oferecer.",
      },
      {
        type: "heading",
        content: "O Desafio",
      },
      {
        type: "paragraph",
        content:
          "Mas apesar do excelente posicionamento, a marca não tinha uma identidade visual consistente. O que antes funcionava bem no formato simples e espontâneo começou a demandar mais profissionalismo e identidade.",
      },
      {
        type: "image",
        src: "/images/oqfjf_1.webp",
        alt: "O Que Fazer em JF - Antes da nova identidade visual",
      },
      {
        type: "heading",
        content: "Nossa Abordagem",
      },
      {
        type: "paragraph",
        content:
          "A missão era clara: criar uma marca que fosse divertida, criativa e tão vibrante quanto Juiz de Fora, mas sem perder a personalidade leve e acolhedora que Mirella construiu ao longo dos anos.",
      },
      {
        type: "list",
        items: [
          "Sistema visual dinâmico e flexível",
          "Paleta de cores vibrante",
          "Tipografia moderna e acessível",
          "Elementos gráficos lúdicos",
        ],
      },
      {
        type: "image",
        src: "/images/oqfjf_2.webp",
        alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
      },
      {
        type: "heading",
        content: "Os resultados, tão coloridos quanto",
      },
      {
        type: "paragraph",
        content:
          "A página não só manteve o crescimento, como passou a ser vista com mais seriedade. A mudança trouxe uma confiança maior para representar marcas e negócios locais, além de facilitar a comunicação com o público.",
      },
      {
        type: "image",
        src: "/images/oqfjf_3.webp",
        alt: "O Que Fazer em JF - Aplicação da nova marca",
      },
      {
        type: "heading",
        content: "Impacto na Cidade",
      },
      {
        type: "paragraph",
        content:
          "Hoje, o O Que Fazer em JF é mais do que uma página — é uma referência para quem busca explorar Juiz de Fora e descobrir o melhor da cidade. Com uma identidade forte e alinhada ao propósito, a marca continua conectando pessoas e mostrando que Juiz de Fora tem muito a oferecer.",
      },
    ],
  },
];

export const metadata = {
  title: "E-book: IA para Criativos - Capítulo 1",
  description:
    "Descubra como a IA pode transformar o fluxo de trabalho de criativos no primeiro capítulo deste e-book.",
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const renderContent = (content: any) => {
    switch (content.type) {
      case "lead":
        return (
          <p className="lead text-xl font-light text-white mb-6">
            {content.content}
          </p>
        );
      case "paragraph":
        return <p className="mb-6">{content.content}</p>;
      case "heading":
        return (
          <h2 className="text-pale-pink font-medium text-2xl mt-10 mb-4">
            {content.content}
          </h2>
        );
      case "quote":
        return (
          <blockquote className="bg-gray-900 p-6 rounded-md my-8 text-xl text-gray-200 leading-relaxed font-medium">
            {content.content}
          </blockquote>
        );
      case "list":
        return (
          <ul className="mb-6 pl-5 space-y-2">
            {content.items.map((item: string, index: number) => (
              <li key={index} className="list-disc list-outside">
                {item}
              </li>
            ))}
          </ul>
        );
      case "image":
        return (
          <figure className="my-10">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={content.src}
                alt={content.alt}
                width={1200}
                height={800}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            {content.caption && (
              <figcaption className="text-center text-gray-400 mt-3 text-sm">
                {content.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <main
        className="min-h-screen bg-black text-white selection:bg-pale-pink selection:text-black"
        style={{ scrollBehavior: "smooth" }}
      >
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-0"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div>
                {project.subtitle && (
                  <div className="mb-3 text-pale-pink tracking-wider uppercase text-sm font-medium animate-fadeIn">
                    {project.subtitle}
                  </div>
                )}

                <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fadeIn leading-tight">
                  {project.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fadeIn animation-delay-200 leading-relaxed">
                  {project.description}
                </p>

                {/* Services List */}
                <div className="mb-10">
                  <div className="flex flex-wrap gap-3">
                    {project.services?.map((service, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg animate-fadeIn animation-delay-300 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {project.stats && (
          <section className="py-16 bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {project.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-pale-pink mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Content */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-lg prose-invert mx-auto animate-fadeIn animation-delay-400">
              {project.fullContent &&
                Array.isArray(project.fullContent) &&
                project.fullContent.map((content, index) => (
                  <Fragment key={index}>{renderContent(content)}</Fragment>
                ))}
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        {project.beforeAfter && (
          <section className="py-24 bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl font-bold mb-16 text-center">
                Antes & Depois
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-square w-full relative">
                    <Image
                      src={project.beforeAfter.before.image}
                      alt={`${project.title} - Antes`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium mb-3 text-pale-pink">
                      {project.beforeAfter.before.title}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {project.beforeAfter.before.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1 text-gray-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-square w-full relative">
                    <Image
                      src={project.beforeAfter.after.image}
                      alt={`${project.title} - Depois`}
                      className="object-cover"
                      fill
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-medium mb-3 text-pale-pink">
                      {project.beforeAfter.after.title}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {project.beforeAfter.after.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1 text-pale-pink"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        {project.testimonial && (
          <section className="py-32 bg-gray-950 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-gray-900 to-transparent z-0 opacity-70"></div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-pale-pink/5 rounded-full blur-3xl"></div>
            <div className="max-w-5xl mx-auto px-6 relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 md:p-16 shadow-2xl border border-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pale-pink/30 mb-8"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-2xl md:text-3xl leading-relaxed mb-10 font-light italic text-white/90">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-pale-pink to-pale-pink/70 text-black rounded-full flex items-center justify-center font-bold text-xl mr-5 shadow-lg">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-pale-pink text-xl">
                      {project.testimonial.author}
                    </div>
                    <div className="text-gray-400 mt-1">
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos trabalhar juntos na
              <br /> <span className="text-pale-pink"> sua marca?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Transformamos marcas com estratégia, design e narrativas potentes
              que conectam seu negócio ao público certo.
            </p>
            <a
              href="https://form.respondi.app/NwPH9MZX"
              className="bg-pale-pink text-black px-10 py-4 text-lg font-medium transition-all duration-300 hover:bg-white hover:scale-105 transform inline-block rounded-md shadow-lg hover:shadow-pale-pink/20"
            >
              Solicitar Orçamento
            </a>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
