import Header from "@/components/Header";
import Image from "next/image";
import AboutImage from "@/public/images/about-image.jpg"; // You'll need to add this image
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "João Silva",
      role: "Fundador & Diretor Criativo",
      bio: "Com mais de 10 anos de experiência em design e branding, João fundou a Verv para ajudar marcas a descobrirem sua identidade única e autêntica.",
      image: "/images/team-member-1.jpg", // Add these images to your public folder
    },
    {
      name: "Marina Costa",
      role: "Estrategista de Marca",
      bio: "Marina combina análise de mercado e psicologia para desenvolver estratégias que conectam marcas ao seu público ideal de forma significativa.",
      image: "/images/team-member-2.jpg",
    },
    // You can add more team members as needed
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="px-6 py-20 md:py-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp">
            <span className="text-white">Quem está por trás da</span>
            <br />
            <span className="text-pale-pink">Verv Studio</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl animate-slideUp animation-delay-300">
            Somos um estúdio de design e branding focado em transformar a visão
            de criativos destemidos em identidades visuais impactantes.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
              Nossa História
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A Verv nasceu da paixão por design e da crença de que cada marca
              tem uma história única para contar. Fundada em 2018, nossa missão
              tem sido conectar empresas criativas com seu verdadeiro potencial
              através de identidades visuais autênticas.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Cada projeto é uma oportunidade de criar algo extraordinário que
              não apenas parece incrível, mas também comunica os valores e a
              visão por trás da marca.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            {/* Replace this with actual About image */}
            <div className="absolute inset-0 bg-gradient-to-br from-pale-pink/30 to-black/50 mix-blend-overlay z-10" />
            {/* Uncomment when you have the image */}
            {/* <Image 
              src={AboutImage} 
              alt="Verv Studio Team" 
              fill 
              className="object-cover"
            /> */}

            {/* This is a placeholder div until you add the actual image */}
            <div className="absolute inset-0 bg-gray-800" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Nossa Filosofia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Autenticidade",
                description:
                  "Acreditamos que as melhores marcas são aquelas que expressam sua verdadeira essência. Cada projeto é desenvolvido de forma personalizada.",
              },
              {
                title: "Estratégia",
                description:
                  "Design não é apenas estética. Trabalhamos com base em estratégias sólidas que alinham sua comunicação visual com seus objetivos de negócio.",
              },
              {
                title: "Colaboração",
                description:
                  "Você é o especialista em seu negócio, nós somos especialistas em design. Juntos, criamos resultados que superam expectativas.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-pale-pink">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Nossa Equipe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-full md:w-40 h-40 rounded-lg overflow-hidden relative bg-gray-800">
                  {/* Uncomment when you have the actual images */}
                  {/* <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  /> */}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pale-pink mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Estamos prontos para transformar sua marca e elevar seu negócio ao
            próximo nível.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-pale-pink hover:text-white transition-colors duration-300"
            >
              <span>Voltar para a Home</span>
              <MoveRight size={16} />
            </Link>
            <a
              href="https://form.respondi.app/NwPH9MZX"
              className="bg-pale-pink text-black px-10 py-4 text-lg font-medium transition-all duration-300 hover:bg-white hover:scale-105 transform inline-block rounded-md shadow-lg hover:shadow-pale-pink/20"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
