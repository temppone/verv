import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="px-6 py-20 md:py-32 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp"
          id="hero-heading"
        >
          <span className="text-white">Branding estratégico para</span>
          <br />
          <span className="text-pale-pink">criativos destemidos.</span>
        </h1>

        <div className="md:block mt-12 animate-slideUp animation-delay-500">
          <a href="/contact">
            <Button size="lg">Fale conosco</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
