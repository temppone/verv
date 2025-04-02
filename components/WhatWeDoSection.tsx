import { Paintbrush, BarChart3, Layout, Globe } from "lucide-react";

const services = [
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
];

export default function WhatWeDoSection() {
  return (
    <section className="px-6 py-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
          O que fazemos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="true"
            >
              <div className="flex flex-col h-full">
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
  );
}
