import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

// Import all project images
import Biancovilli from "@/public/images/biancovilli.webp";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import Ninho from "@/public/images/ninho.webp";
import Logo from "@/public/verv_logo.svg";
import { Fragment } from "react";

// Define project data
const projects = [
  {
    slug: "biancovilli",
    title: "Biancovilli",
    subtitle: "Branding & Estratégia",
    description:
      "Da venda de brigadeiros na rua à referência no mercado de doces premium",
    image: Biancovilli,
    stats: [
      { label: "Crescimento em vendas", value: "+215%" },
      { label: "Alunos na Escola", value: "1000+" },
      { label: "Tempo do projeto", value: "3 meses" },
    ],
    services: [
      "Estratégia de marca",
      "Naming",
      "Identidade visual",
      "Posicionamento",
    ],
    testimonial: {
      quote:
        "Agora, nossos clientes não pedem desconto. Eles sabem o que estão comprando e estão felizes em pagar pelo valor que entregamos.",
      author: "Gustavo Biancovilli",
      role: "Fundador",
    },
    relatedProjects: ["oquefazeremjf", "ninho"],
    fullContent: [
      {
        type: "lead",
        content:
          "A história da Biancovilli começou de maneira simples e inspiradora: Gustavo Biancovilli, cansado da rotina do trabalho CLT, decidiu empreender vendendo brigadeiros na rua.",
      },
      {
        type: "paragraph",
        content:
          "No início, tudo era improvisado, mas havia um elemento que nunca faltava: a paixão por entregar produtos de altíssima qualidade. Durante a pandemia, quando as vendas presenciais se tornaram inviáveis, Gustavo ousou apostar no delivery, e foi nesse momento que a marca começou a ganhar força.",
      },
      {
        type: "heading",
        content: "O Desafio",
      },
      {
        type: "paragraph",
        content:
          'A marca enfrentava desafios claros. Antes conhecida como "Delirium," ela carregava um nome que não traduzia a sofisticação e exclusividade dos doces que Gustavo criava. Além disso, o nome não era registrável, limitando a expansão da empresa.',
      },
      {
        type: "quote",
        content:
          "Nossa missão era criar uma marca que representasse a qualidade excepcional dos produtos e permitisse o crescimento sustentável do negócio.",
      },
      {
        type: "heading",
        content: "Nossa Abordagem",
      },
      {
        type: "paragraph",
        content:
          'Mergulhamos no processo de rebranding com foco na essência do negócio. O novo nome, "Biancovilli," foi escolhido para transmitir:',
      },
      {
        type: "list",
        items: [
          "Sofisticação e exclusividade",
          "Conexão com as raízes do fundador",
          "Uma experiência premium desde o primeiro contato",
          "Um legado que pudesse ser construído ao longo do tempo",
        ],
      },
      {
        type: "heading",
        content: "Resultados",
      },
      {
        type: "paragraph",
        content:
          "Com a nova marca, Gustavo se sentiu confiante para reposicionar seus produtos, ajustando seus preços para refletir a verdadeira qualidade oferecida. O feedback foi imediato: clientes se conectaram de forma mais profunda com a marca.",
      },
      {
        type: "heading",
        content: "Expansão do Negócio",
      },
      {
        type: "paragraph",
        content:
          "Hoje, a Biancovilli não se limita a ser apenas uma doceria. A marca expandiu suas fronteiras e conquistou um novo nicho: infoprodutos. Com mais de mil alunos na Escola Biancovilli, a marca não só ensina a arte de fazer doces, mas também compartilha o segredo de seu sucesso.",
      },
    ],
  },
  {
    slug: "oque-fazer-em-jf",
    title: "O que fazer em JF",
    subtitle: "Branding & Identidade Visual",
    description: "O guia turístico mais querido de JF",
    image: OqueFazerEmJF,
    stats: [
      { label: "Seguidores", value: "100k+" },
      { label: "Parcerias locais", value: "50+" },
      { label: "Alcance mensal", value: "500k+" },
    ],
    services: [
      "Identidade visual",
      "Design de marca",
      "Estratégia de comunicação",
      "Posicionamento",
    ],
    testimonial: {
      quote:
        "A identidade visual traduziu perfeitamente o que eu sempre quis comunicar: o amor e a energia de Juiz de Fora.",
      author: "Mirella Mota",
      role: "Fundadora",
    },
    relatedProjects: ["biancovilli", "ninho"],
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
        type: "heading",
        content: "Os resultados, tão coloridos quanto",
      },
      {
        type: "paragraph",
        content:
          "A página não só manteve o crescimento, como passou a ser vista com mais seriedade. A mudança trouxe uma confiança maior para representar marcas e negócios locais, além de facilitar a comunicação com o público.",
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

  const relatedProjects = project.relatedProjects
    ? projects.filter((p) => project.relatedProjects?.includes(p.slug))
    : [];

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
        <section className="pt-24 pb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-0"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-10">
              <Link
                href="/"
                className="text-pale-pink hover:underline flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Voltar para projetos
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Serviços
                  </h3>
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
        <section className="py-24 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Antes & Depois
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-xl font-medium mb-3">Delirium</h3>
                    <p className="text-gray-400">
                      Marca original com limitações de registro e posicionamento
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-3 text-pale-pink">Desafios</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
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
                      <span>Nome não registrável</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                      <span>Não traduzia a sofisticação do produto</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                      <span>Limitava a expansão do negócio</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-64 bg-pale-pink/10 flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-xl font-medium mb-3 text-pale-pink">
                      Biancovilli
                    </h3>
                    <p className="text-gray-400">
                      Marca sofisticada e registrável com conexão pessoal
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-3 text-pale-pink">
                    Resultados
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
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
                      <span>Nome registrável e exclusivo</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                      <span>Transmite sofisticação e exclusividade</span>
                    </li>
                    <li className="flex items-start gap-2">
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
                      <span>Permitiu reposicionamento de preço</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {project.testimonial && (
          <section className="py-24 bg-gray-950 relative">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-gray-900 z-0"></div>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="bg-gray-900 rounded-lg p-10 md:p-16 shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pale-pink/20 mb-6"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light">
                  {project.testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pale-pink text-black rounded-full flex items-center justify-center font-bold mr-4">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-pale-pink">
                      {project.testimonial.author}
                    </div>
                    <div className="text-gray-400">
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-24 bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-16">Outros Projetos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/projects/${related.slug}`}
                    className="group"
                  >
                    <div className="bg-gray-800 rounded-lg overflow-hidden h-full hover:shadow-xl hover:shadow-pale-pink/10 transition-all duration-300 transform group-hover:translate-y-[-5px]">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-pale-pink mb-2">
                          {related.subtitle}
                        </div>
                        <h3 className="text-xl font-medium mb-2">
                          {related.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {related.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos trabalhar juntos no seu próximo projeto?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Transformamos marcas com estratégia, design e narrativas potentes
              que conectam seu negócio ao público certo.
            </p>
            <a
              href="#contact"
              className="bg-pale-pink text-black px-10 py-4 text-lg font-medium transition-all duration-300 hover:bg-white hover:scale-105 transform inline-block rounded-md shadow-lg hover:shadow-pale-pink/20"
            >
              Solicitar Orçamento
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Link href="/">
                <span className="text-off-white">
                  <img
                    src={Logo.src}
                    alt="Verv Studio"
                    className="w-20 invert brightness-0 filter"
                  />
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-400 max-w-xs">
                Transformamos marcas com estratégia, design e narrativas
                potentes.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-pale-pink">Social</h4>
              <ul className="space-y-3 opacity-80">
                <li>
                  <a
                    href="https://instagram.com/estudioverv"
                    className="hover:text-pale-pink transition-colors duration-300 inline-flex items-center gap-2 hover:translate-x-1 transform transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net/verv"
                    className="hover:text-pale-pink transition-colors duration-300 inline-flex items-center gap-2 hover:translate-x-1 transform transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    >
                      <path d="M8 3H2v18h6V3z" />
                      <path d="M14 3h6v18h-6V3z" />
                      <circle cx="8" cy="12" r="3" />
                      <path d="M20 12a3 3 0 0 0-6 0v3a3 3 0 0 0 6 0v-3z" />
                    </svg>
                    Behance
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-pale-pink">Contato</h4>
              <p className="opacity-80 mb-4 text-xl">hello@verv.studio</p>
              <a
                href="https://wa.me/yourphonenumber"
                className="border-b-2 border-pale-pink text-pale-pink hover:text-white hover:border-white transition-colors duration-300 inline-block text-lg py-1"
                id="contact"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-800/50 text-sm opacity-50">
            <p>
              © {new Date().getFullYear()} Verv Studio. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </main>
    </Fragment>
  );
}
