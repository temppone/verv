import { Project } from "@/types/project";

const project: Project = {
  slug: "ninho",
  title: "Ninho",
  subtitle: "Identidade Visual & Branding",
  description:
    "Um estúdio de tatuagem que oferece acolhimento, confiança e expressão através da arte corporal",
  image: "/images/ninho.webp",
  services: [
    "Redesign de marca",
    "Identidade visual",
    "Posicionamento",
    "Comunicação",
  ],
  testimonial: {
    quote:
      "Ficou SENSACIONAL! E eu to amando aplicar aos pouquinhos! Só tenho a agradecer por esse trabalho maravilhoso e tãaaaaaao minha cara! Sucesso puro",
    author: "Isabela Gatti",
    role: "@ninhoestudio",
    image: "/customersFeedback/feedback_ninho.webp",
  },
  relatedProjects: ["paola-gatti", "oque-fazer-em-jf"],
  fullContent: [
    {
      type: "lead",
      content:
        "O estúdio Ninho nasceu com uma proposta clara: ser um espaço que acolhe e transforma, onde clientes e profissionais se sentem em casa enquanto modificam o corpo de forma significativa e transformadora.",
    },
    {
      type: "heading",
      content: "O Desafio",
    },
    {
      type: "paragraph",
      content:
        "Quando o projeto começou, o Ninho já tinha conquistado um bom posicionamento no mercado, mas enfrentava um desafio significativo: sua identidade visual não conseguia traduzir seus valores fundamentais de acolhimento e proximidade. Havia uma clara desconexão entre a essência da marca e como ela era percebida pelo público.",
    },
    {
      type: "paragraph",
      content:
        "Era necessário criar uma identidade visual que refletisse tanto o aspecto acolhedor quanto a seriedade profissional do estúdio, equilibrando a informalidade criativa com a confiabilidade de um negócio bem estabelecido.",
    },
    {
      type: "image",
      src: "/images/ninho_1.jpg",
      alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
    },
    {
      type: "heading",
      content: "Nossa Abordagem",
    },
    {
      type: "paragraph",
      content:
        "O processo começou com um diagnóstico profundo para compreender a personalidade, o posicionamento e a essência da marca. Realizamos uma pesquisa completa que nos permitiu identificar os elementos-chave que deveriam ser comunicados através da nova identidade visual.",
    },
    {
      type: "list",
      items: [
        "Desenvolvimento de um conceito visual que traduzisse a ideia de 'ninho' como lugar seguro e acolhedor",
        "Criação de elementos gráficos que equilibrassem acolhimento com a rebeldia associada à tatuagem",
        "Design de um sistema visual flexível que pudesse ser aplicado em diversos contextos",
        "Definição de uma comunicação que transmitisse proximidade e empatia sem perder a seriedade",
      ],
    },
    {
      type: "image",
      src: "/images/ninho_3.webp",
      alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
    },
    {
      type: "heading",
      content: "O Conceito",
    },
    {
      type: "paragraph",
      content:
        "O conceito central da nova identidade gira em torno da ideia literal de um ninho: um lugar seguro, acolhedor e confortável para os clientes, mas também ousado e criativo. Trabalhamos com formas orgânicas que remetem tanto à proteção quanto à liberdade de expressão através da arte corporal.",
    },
    {
      type: "image",
      src: "/images/ninho_2.jpg",
      alt: "O Que Fazer em JF - Desenvolvimento da identidade visual",
    },
    {
      type: "quote",
      content:
        "Modificar o corpo é uma experiência transformadora e deve ser tratada com o devido cuidado e empatia, do início ao fim do processo. Esse foi o norte que guiou todo o redesign.",
    },
    {
      type: "heading",
      content: "Resultados",
    },
    {
      type: "paragraph",
      content:
        "Com a nova identidade visual, o Ninho deixou de ser visto como um simples coworking informal de tatuagem para se posicionar como uma empresa confiável, onde a experiência do cliente é prioridade e a interação com os profissionais é próxima e empática.",
    },
    {
      type: "paragraph",
      content:
        "O estúdio agora transmite com clareza seus valores de acolhimento e confiança, enquanto mantém o aspecto criativo e rebelde que é essencial à sua área de atuação. O resultado é uma marca que comunica com autenticidade sua verdadeira essência.",
    },
  ],
};

export default project;
