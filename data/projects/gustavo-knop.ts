import { Project } from "@/types/project";

const project: Project = {
  slug: "gustavo-knop",
  category: 'Tennis',
  title: "Gustavo Knop",
  subtitle: "Identidade Visual",
  description: "Uma marca de lifestyle que traduz energia, fluidez e diversão do beach tennis",
  image: "/images/placeholder-project.webp", // Placeholder until photos are provided
  client: "Gustavo Knop",
  superficial: "Um professor autônomo de beach tennis.",
  primitivo: "Uma marca de lifestyle. A tradução visual da energia, fluidez e diversão que definem a experiência do beach tennis.",
  caseStudy: `Gustavo Knop não é um professor comum; suas aulas são focadas em criatividade e interatividade. O desafio era que sua identidade visual não comunicava isso. Ela representava um profissional, mas não capturava a atmosfera positiva e o estilo de vida ativo que ele proporciona aos alunos.

A missão da Primitiva foi encontrar a alma do esporte e injetá-la na marca. O que define o beach tennis? Energia solar e movimento fluido.

Construímos a nova identidade sobre esses dois pilares. Primeiro, a energia: uma paleta vibrante que transmite otimismo, juventude e a sensação de diversão sob o sol. Segundo, a fluidez: trouxemos formas orgânicas e onduladas que remetem ao mar e ao movimento constante do jogo, simbolizando a evolução e a persistência dos alunos.

O resultado é uma marca extrovertida, leve e profissional. Ela deixou de ser apenas um nome para se tornar um convite: uma marca que reflete a atmosfera acolhedora das aulas e posiciona o Gustavo como um verdadeiro representante do lifestyle do esporte.`,
  images: [
    "/images/placeholder-project.webp",
    "/images/placeholder-project.webp",
    "/images/placeholder-project.webp"
  ], // Placeholder images until photos are provided
  services: ["Identidade Visual"],
  relatedProjects: ["ninho", "pe-de-cafe"],
  fullContent: [
    {
      type: "lead",
      content:
        "Gustavo Knop não é um professor comum; suas aulas são focadas em criatividade e interatividade. O desafio era que sua identidade visual não comunicava isso. Ela representava um profissional, mas não capturava a atmosfera positiva e o estilo de vida ativo que ele proporciona aos alunos.",
    },
    {
      type: "heading",
      content: "O Desafio",
    },
    {
      type: "paragraph",
      content:
        "A missão da Primitiva foi encontrar a alma do esporte e injetá-la na marca. O que define o beach tennis? Energia solar e movimento fluido.",
    },
    {
      type: "heading",
      content: "Nossa Abordagem",
    },
    {
      type: "paragraph",
      content:
        "Construímos a nova identidade sobre esses dois pilares. Primeiro, a energia: uma paleta vibrante que transmite otimismo, juventude e a sensação de diversão sob o sol. Segundo, a fluidez: trouxemos formas orgânicas e onduladas que remetem ao mar e ao movimento constante do jogo, simbolizando a evolução e a persistência dos alunos.",
    },
    {
      type: "heading",
      content: "Resultados",
    },
    {
      type: "paragraph",
      content:
        "O resultado é uma marca extrovertida, leve e profissional. Ela deixou de ser apenas um nome para se tornar um convite: uma marca que reflete a atmosfera acolhedora das aulas e posiciona o Gustavo como um verdadeiro representante do lifestyle do esporte.",
    },
  ],
};

export default project;
