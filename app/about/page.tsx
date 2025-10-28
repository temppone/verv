import CTASection from "@/components/CTASection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Globe, Layout, Paintbrush } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="px-6 py-20 md:py-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto md:text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp">
            <span className="text-white">Não criamos marcas.</span>
            <br />
            <span className="text-pale-pink">Despertamos essências.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-1000">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1">
            <p className="text-xl text-gray-300 leading-relaxed text-left pb-4 md:text-center">
              Sua marca já existe. Ela está na sua história, nas suas
              cicatrizes, na sua visão de mundo, naquilo que só você sabe fazer.
              Ela só precisa ser descoberta e traduzida para o mundo.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed text-left pb-4 md:text-center">
              A Primitiva nasceu de uma inquietação. O que começou como um
              estúdio de design amadureceu e encontrou sua verdadeira vocação:
              ser o despertar de uma nova forma de fazer branding. Cansamos de
              ver o mercado saturado de fórmulas prontas , soluções superficiais
              e design que é só estética.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-1000">
        <div className="max-w-6xl mx-auto md:flex md:flex-col md:items-center">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 md:before:left-1/2 md:before:-translate-x-1/2 before:bg-pale-pink md:text-center">
            Nossa Filosofia
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-4xl md:text-center">
            Nós acreditamos que as marcas mais poderosas não são inventadas, mas
            sim despertadas. Por isso, nosso trabalho não é criar algo do zero,
            mas guiar você em uma jornada de autodescoberta para revelar a marca
            que já existe aí dentro.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
