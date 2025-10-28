"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function HowWeDoSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const brandingSteps = [
    {
      step: "01",
      title: "Imersão & Entrevista",
      description:
        "Conversamos a fundo para entender a história, objetivos e personalidade da marca.",
    },
    {
      step: "02",
      title: "Estratégia & Pesquisa",
      description:
        "Mapeamos o mercado e definimos posicionamento, territórios criativos e diretrizes.",
    },
    {
      step: "03",
      title: "Identidade Visual",
      description:
        "Moodboards, logo, paleta, tipografia e sistemas visuais que dão vida à marca.",
    },
    {
      step: "04",
      title: "Refino & Entrega",
      description:
        "Ajustes finais e entrega organizada de todos os arquivos prontos para uso.",
    },
  ];

  const webSteps = [
    {
      step: "01",
      title: "Descoberta & Arquitetura",
      description:
        "Entendemos objetivos, definimos sitemap, jornadas e estrutura de conteúdo.",
    },
    {
      step: "02",
      title: "UX/UI & Protótipos",
      description:
        "Wireframes e interfaces alinhadas à identidade, com foco em clareza e conversão.",
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description:
        "Implementação responsiva e otimizada em Next.js, animações e integrações.",
    },
    {
      step: "04",
      title: "Lançamento & Evolução",
      description:
        "Deploy, monitoramento e melhorias contínuas baseadas em dados e feedback.",
    },
  ];

  return (
    <section className="px-6 py-8 bg-gray-1000">
      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          sectionVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className={`text-4xl font-bold font-libre mb-10 pt-10 text-center tracking-tight transition-all duration-1000 delay-200 ${
            sectionVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Nosso ritual
        </h2>

        <Tabs defaultValue="branding">
          <div className="flex items-center justify-center">
            <TabsList className="bg-transparent p-0">
              <TabsTrigger value="branding" variant="ghost">
                Branding
              </TabsTrigger>
              <TabsTrigger value="web" variant="ghost">
                Web
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="branding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {brandingSteps.map((item, index) => (
                <div
                  key={`branding-${index}`}
                  className={`group relative p-8 rounded-xl transition-all duration-500 ease-out bg-black/40 scale-[1.02] cursor-pointer backdrop-blur-sm border border-pale-pink/20 ${
                    sectionVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 from-pale-pink/5 to-transparent opacity-100 transition-opacity duration-500 rounded-xl" />
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
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {webSteps.map((item, index) => (
                <div
                  key={`web-${index}`}
                  className={`group relative p-8 rounded-xl transition-all duration-500 ease-out bg-black/40 scale-[1.02] cursor-pointer backdrop-blur-sm border border-pale-pink/20 ${
                    sectionVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 from-pale-pink/5 to-transparent opacity-100 transition-opacity duration-500 rounded-xl" />
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
