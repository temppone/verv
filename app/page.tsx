import Biancovilli from "@/public/images/biancovilli.webp";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import Ninho from "@/public/images/ninho.webp";
import Logo from "@/public/verv_logo.svg";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="px-6 flex justify-between items-center top-0 z-10 backdrop-blur-sm bg-black/80">
        <div className="flex justify-center text-xl font-bold hover:text-pale-pink transition-colors duration-300">
          <span className="text-xl pt-8 md:text-2xl font-black text-off-white transition-transform duration-300 hover:scale-105">
            <img
              src={Logo.src}
              alt="Verv Studio"
              className="w-20 invert brightness-0 filter"
            />
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="hover:text-pale-pink transition-colors duration-300 hover:underline"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pale-pink transition-colors duration-300 hover:underline"
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pale-pink transition-colors duration-300 hover:underline"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pale-pink transition-colors duration-300 hover:underline"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp">
            <span className="text-white">Branding estratégico para</span>
            <br />
            <span className="text-pale-pink">criativos destemidos.</span>
          </h1>
          <div className="mt-12 animate-slideUp animation-delay-500">
            <a
              href="#contact"
              className="bg-pale-pink text-black px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-white hover:scale-105 transform"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="px-6 py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Projetos Selecionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard
              image={Biancovilli}
              title="Biancovilli"
              description="Da venda de brigadeiros na rua à referência no mercado de doces"
              delay="200"
              slug="biancovilli"
            />

            <ProjectCard
              image={OqueFazerEmJF}
              title="O que Fazer em JF?"
              description="O amor por Juiz de Fora que acumulou uma legião de fãs"
              delay="400"
              slug="oque-fazer-em-jf"
            />

            <ProjectCard
              image={Ninho}
              title="Ninho Tattoo Studio"
              description="Um estúdio de tatuagem que acolhe e transforma"
              fullWidth={true}
              delay="600"
              slug="ninho-tattoo"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fadeIn">
            <span className="text-off-white">
              <img
                src={Logo.src}
                alt="Verv Studio"
                className="w-20 invert brightness-0 filter"
              />
            </span>{" "}
          </div>
          <div className="animate-fadeIn animation-delay-200">
            <h4 className="font-medium mb-4">Social</h4>
            <ul className="space-y-2 opacity-70">
              <li>
                <a
                  href="https://instagram.com/estudioverv"
                  className="hover:text-pale-pink transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/verv"
                  className="hover:text-pale-pink transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fadeIn animation-delay-600">
            <h4 className="font-medium mb-4">Contato</h4>
            <p className="opacity-70 mb-2">hello@verv.studio</p>
            <a
              href="https://wa.me/yourphonenumber"
              className="border-b border-pale-pink text-pale-pink hover:text-white hover:border-white transition-colors duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-sm opacity-50">
          <p>
            © {new Date().getFullYear()} Verv. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
