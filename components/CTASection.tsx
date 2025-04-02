import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-8 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Vamos trabalhar juntos na sua marca?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Transformamos marcas com estratégia, design e narrativas potentes que
          conectam seu negócio ao público certo.
        </p>
        <Button size="lg">
          <a href="https://form.respondi.app/NwPH9MZX">Solicitar Orçamento</a>
        </Button>
      </div>
    </section>
  );
}
