import { Project } from "@/types/project";

const project: Project = {
  slug: "pe-de-cafe",
  category: "Café",
  title: "Pé de Café",
  subtitle: "Branding & Identidade Visual",
  description: "O espírito mineiro do café transformado em movimento cultural",
  image: "/images/placeholder-project.webp", // Placeholder until photos are provided
  client: "Concurso Pé de Café",
  superficial: "Um concurso local de cafeterias.",
  primitivo: "O espírito mineiro do café. Uma marca viva que se transformou em um movimento cultural, unindo público, 27 cafeterias e grandes apoiadores.",
  caseStudy: `Pé de Café nasceu da paixão de Mirella Mota pelos encontros que o café inspira. O desafio? Estruturar essa essência em uma experiência de marca profissional, capaz de atrair grandes parceiros e engajar o público em escala.

Na Primitiva, nossa missão foi construir essa ponte. A estratégia teve dois focos: dar aos participantes e apoiadores uma base sólida que comprovasse a seriedade do projeto; e encantar o público com uma identidade impossível de ignorar.

Nos inspiramos na mineridade para criar uma identidade visual acolhedora, com referências dos desenhos dos anos 20 e um mascote simpático que guiou toda a comunicação. A voz da marca seguiu o mesmo tom: divertida, próxima e cheia de "prosa", transformando cada legenda e cartaz em um convite espontâneo e afetuoso.

No back-end, desenvolvemos um site imersivo com um sistema de votação justo e moderno, usando QR Codes exclusivos em cada mesa e uma média bayesiana para garantir equidade na apuração.

O impacto foi imediato: o número de participantes mais que dobrou, de 11 para 27 cafeterias, sob o apoio de gigantes como Chico Rei, TV Integração e UniAcademia. A parceria com a Chico Rei foi tão profunda que rendeu uma coleção exclusiva de produtos, vestindo a marca Pé de Café.

Em apenas duas semanas, o projeto ultrapassou 10 mil avaliações e ganhou repercussão espontânea em mídias relevantes (G1, Tribuna de Minas, Zine…). O Pé de Café deixou de ser apenas um concurso para se tornar um movimento cultural — um case real de como estratégia e alma transformam uma boa ideia em uma marca essencial para a cidade.`,
  images: [
    "/images/placeholder-project.webp",
    "/images/placeholder-project.webp",
    "/images/placeholder-project.webp"
  ], // Placeholder images until photos are provided
  services: [
    "Branding",
    "Identidade Visual & Verbal", 
    "Estratégia de Marca",
    "Desenvolvimento Web",
    "Ativações de Marca"
  ],
  relatedProjects: ["oque-fazer-em-jf", "gustavo-knop"],
  fullContent: [
    {
      type: "lead",
      content:
        "Pé de Café nasceu da paixão de Mirella Mota pelos encontros que o café inspira. O desafio? Estruturar essa essência em uma experiência de marca profissional, capaz de atrair grandes parceiros e engajar o público em escala.",
    },
    {
      type: "heading",
      content: "O Desafio",
    },
    {
      type: "paragraph",
      content:
        "Na Primitiva, nossa missão foi construir essa ponte. A estratégia teve dois focos: dar aos participantes e apoiadores uma base sólida que comprovasse a seriedade do projeto; e encantar o público com uma identidade impossível de ignorar.",
    },
    {
      type: "heading",
      content: "Nossa Abordagem",
    },
    {
      type: "paragraph",
      content:
        "Nos inspiramos na mineridade para criar uma identidade visual acolhedora, com referências dos desenhos dos anos 20 e um mascote simpático que guiou toda a comunicação. A voz da marca seguiu o mesmo tom: divertida, próxima e cheia de prosa, transformando cada legenda e cartaz em um convite espontâneo e afetuoso.",
    },
    {
      type: "heading",
      content: "Desenvolvimento Técnico",
    },
    {
      type: "paragraph",
      content:
        "No back-end, desenvolvemos um site imersivo com um sistema de votação justo e moderno, usando QR Codes exclusivos em cada mesa e uma média bayesiana para garantir equidade na apuração.",
    },
    {
      type: "heading",
      content: "Resultados",
    },
    {
      type: "paragraph",
      content:
        "O impacto foi imediato: o número de participantes mais que dobrou, de 11 para 27 cafeterias, sob o apoio de gigantes como Chico Rei, TV Integração e UniAcademia. A parceria com a Chico Rei foi tão profunda que rendeu uma coleção exclusiva de produtos, vestindo a marca Pé de Café.",
    },
    {
      type: "paragraph",
      content:
        "Em apenas duas semanas, o projeto ultrapassou 10 mil avaliações e ganhou repercussão espontânea em mídias relevantes (G1, Tribuna de Minas, Zine…). O Pé de Café deixou de ser apenas um concurso para se tornar um movimento cultural — um case real de como estratégia e alma transformam uma boa ideia em uma marca essencial para a cidade.",
    },
  ],
};

export default project;
