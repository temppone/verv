import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-teal-500/10 z-0"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-dark-teal-500">
                <span className="block">Desperte seu</span>
                <span className="text-pale-pink-500">Verve.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-800">
                Ajudamos artistas a se concentrarem em sua arte, fornecendo
                posicionamento estratégico e presença digital impactante.
              </p>
              <div className="pt-4">
                <Link
                  href="#contato"
                  className="px-8 py-3 bg-sage-green-500 text-white rounded-md hover:bg-sage-green-600 transition-colors"
                >
                  Comece Agora
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-teal-500 to-light-green-500 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">
                  Arte • Estratégia • Impacto
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 h-24 bg-gradient-to-t from-off-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-teal-500 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Desenvolvemos soluções criativas que ajudam artistas a comunicar
              seu valor e alcançar o público certo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-16 w-16 rounded-full bg-light-green-500 flex items-center justify-center mb-6 group-hover:bg-dark-teal-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-teal-500 mb-3">
                Branding
              </h3>
              <p className="text-gray-800">
                Estratégia de marca, consultoria e mentoria para artistas que
                desejam construir uma identidade autêntica e memorável.
              </p>
            </div>

            {/* Website Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-16 w-16 rounded-full bg-sage-green-500 flex items-center justify-center mb-6 group-hover:bg-dark-teal-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-teal-500 mb-3">
                Website
              </h3>
              <p className="text-gray-800">
                Sites responsivos e visualmente impressionantes que destacam seu
                trabalho e conectam você ao seu público-alvo.
              </p>
            </div>

            {/* Visual Identity Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-16 w-16 rounded-full bg-pale-pink-500 flex items-center justify-center mb-6 group-hover:bg-dark-teal-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-dark-teal-500 mb-3">
                Identidade Visual
              </h3>
              <p className="text-gray-800">
                Desenvolvimento de elementos visuais coesos que comunicam a
                essência da sua arte e fortalecem sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-20 bg-gradient-to-br from-dark-teal-100 to-off-white-500"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-sage-green-500 to-dark-teal-500 opacity-80"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Nossa Filosofia
                </h3>
                <p className="text-lg text-white">
                  Acreditamos que cada artista possui uma voz única. Nossa
                  missão é amplificar essa voz através de estratégias de design
                  e comunicação que ressoam com seu público ideal.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-dark-teal-500">
                Quem Somos
              </h2>
              <p className="text-lg text-gray-800">
                A Verv. nasceu da paixão por conectar arte e estratégia. Somos
                uma equipe de designers e estrategistas dedicados a ajudar
                artistas a comunicarem seu valor e despertarem seu próprio
                "verve" - aquela energia e entusiasmo que torna sua arte única.
              </p>
              <p className="text-lg text-gray-800">
                Entendemos os desafios que artistas enfrentam ao gerenciar sua
                presença digital. Nossa abordagem é personalizada, estratégica e
                sempre focada em resultados que impulsionam sua carreira
                artística.
              </p>
              <div className="pt-4">
                <Link
                  href="#contato"
                  className="px-8 py-3 border-2 border-dark-teal-500 text-dark-teal-500 rounded-md hover:bg-dark-teal-500 hover:text-white transition-all"
                >
                  Conheça Nossa Equipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Portfolio Showcase */}
      <section id="portfolio" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-teal-500 mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Veja como ajudamos artistas a transformarem sua presença digital e
              alcançarem novos patamares em suas carreiras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-teal-500 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white">
                      Maria Oliveira
                    </h4>
                    <p className="text-white opacity-90">Artista Visual</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-800">
                    "A parceria com a Verv. transformou minha presença online. O
                    novo site e estratégia de marca me ajudaram a atrair
                    galerias e colecionadores que realmente valorizam meu
                    trabalho."
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#portfolio-completo"
              className="px-8 py-3 bg-pale-pink-500 text-white rounded-md hover:bg-pale-pink-600 transition-colors"
            >
              Ver Portfólio Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-dark-teal-500 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Vamos Conversar</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Pronto para despertar seu verve criativo? Entre em contato conosco
              para uma consulta gratuita sobre como podemos ajudar a impulsionar
              sua carreira artística.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark-teal-400 border border-dark-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-green-500 text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark-teal-400 border border-dark-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-green-500 text-white"
                    placeholder="Seu email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-teal-400 border border-dark-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-green-500 text-white"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-light-green-500 text-dark-teal-800 font-bold rounded-md hover:bg-light-green-400 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">
                Verv<span className="text-light-green-500">.</span>
              </h3>
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="hover:text-light-green-500 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="hover:text-light-green-500 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="hover:text-light-green-500 transition-colors"
              >
                Behance
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Verv. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
