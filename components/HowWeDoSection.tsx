export default function HowWeDoSection() {
  const steps = [
    {
      step: "01",
      title: "Entrevista Individual",
      description:
        "Começamos com uma conversa profunda para entender a história da sua marca, seus objetivos, personalidade e o que você deseja transmitir ao seu público.",
    },
    {
      step: "02",
      title: "Estratégia & Pesquisa",
      description:
        "Desenvolvemos um documento estratégico e analisamos o mercado para entender como destacar sua marca da concorrência.",
    },
    {
      step: "03",
      title: "Desenvolvimento Visual",
      description:
        "Criamos moodboards e desenvolvemos sua identidade visual completa, incluindo logotipo, paleta de cores e tipografia.",
    },
    {
      step: "04",
      title: "Refinamento & Entrega",
      description:
        "Apresentamos o projeto, realizamos ajustes necessários e entregamos todos os arquivos e materiais para uso imediato.",
    },
  ];

  return (
    <section className="px-6 py-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
          Como fazemos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl transition-all duration-500 ease-out bg-black/40 scale-[1.02] cursor-pointer backdrop-blur-sm border border-pale-pink/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pale-pink/5 to-transparent opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-pale-pink font-bold text-4xl opacity-100 transition-opacity duration-300">
                    {item.step}
                  </span>
                  <div className="h-[1px] flex-grow bg-pale-pink/20 transform origin-left scale-x-100 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-pale-pink transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
