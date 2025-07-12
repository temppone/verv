import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quanto tempo leva o processo completo?",
    answer:
      "O processo completo geralmente leva de 4 a 6 semanas, dependendo da complexidade do projeto e da rapidez do feedback do cliente.",
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer:
      "Trabalhamos com um sistema de 50% de entrada para iniciar o projeto e 50% na entrega final. Também oferecemos opções de parcelamento.",
  },
  {
    question: "O que está incluído no pacote de branding?",
    answer:
      "O pacote inclui estratégia de marca, identidade visual completa (logo, cores, tipografia), manual de marca e arquivos em todos os formatos necessários.",
  },
  {
    question: "Vocês fazem alterações após a entrega?",
    answer:
      "Sim, incluímos duas rodadas de alterações no pacote padrão para garantir que você esteja completamente satisfeito com o resultado.",
  },
  {
    question: "Trabalham com projetos internacionais?",
    answer:
      "Sim, trabalhamos remotamente com clientes de qualquer lugar do mundo através de reuniões online e ferramentas colaborativas.",
  },
  {
    question: "Como começar um projeto?",
    answer:
      "Entre em contato através do formulário ou WhatsApp. Faremos uma reunião inicial gratuita para entender suas necessidades e apresentar nossa proposta.",
  },
];

export default function FAQSection() {
  return (
    <section className="px-6 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
          Perguntas Frequentes
        </h2>
        <div className="w-100">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white-900 rounded-lg px-6 data-[state=open]:border-pale-pink transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline group">
                  <span className="text-xl font-medium text-left group-hover:text-pale-pink transition-colors duration-300">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
