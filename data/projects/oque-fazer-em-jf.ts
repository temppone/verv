import { Project } from "@/types/project";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";

const project: Project = {
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
  relatedProjects: ["ninho", "paola-gatti"],
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
};

export default project;
