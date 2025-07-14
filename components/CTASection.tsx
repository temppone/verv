import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contato" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Removed gradient overlay div */}
      <div className="max-w-4xl mx-auto px-6 text-gray-950 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Vamos descobrir juntos <br /> sua essência?
        </h2>
        <p className="text-xl text-gray-950 mb-10 max-w-2xl mx-auto">
          Se você se identificou e sente que é o momento de despertar o poder da
          sua marca, vamos conversar.
        </p>
        <Button size="lg">
          <a href="https://form.respondi.app/9NqpobzW">Agendar uma conversa</a>
        </Button>
      </div>
    </section>
  );
}
