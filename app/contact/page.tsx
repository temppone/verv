import { Behance } from "@/public/icons/behanceIcon";
import { Instagram, Mail, MoveRight, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="px-6 pb-4 pt-20 md:py-32 animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-slideUp">
            <span className="text-white">Entre em</span>
            <br />
            <span className="text-pale-pink">Contato</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl animate-slideUp animation-delay-300">
            Vamos criar algo incrível juntos. Entre em contato e transforme sua
            marca em uma experiência inesquecível.
          </p>
        </div>
      </section>

      <section className="px-6 pb-2 pt-16 bg-gray-950 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-black p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-pale-pink text-black px-6 py-3 font-medium rounded-md transition-all duration-300 hover:bg-white hover:scale-105 transform"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
              Informações de Contato
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-pale-pink mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                  <a
                    href="mailto:hello@vervstudio.com.br"
                    className="text-gray-300 hover:text-pale-pink transition-colors duration-300"
                  >
                    hello@vervstudio.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={24} className="text-pale-pink mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                  <a
                    href="tel:+5532999508150"
                    className="text-gray-300 hover:text-pale-pink transition-colors duration-300"
                  >
                    +55 32 9950-8150
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section for common inquiries */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
            Perguntas Frequentes sobre Contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Quanto tempo para resposta?",
                description:
                  "Normalmente respondemos todas as mensagens em até 24h úteis, mas pode variar de acordo com o volume de contatos.",
              },
              {
                title: "Como funciona o orçamento?",
                description:
                  "Após o contato inicial, agendamos uma conversa para entender suas necessidades e preparar uma proposta personalizada.",
              },
              {
                title: "Trabalham remotamente?",
                description:
                  "Sim! Atendemos clientes de todo o Brasil e exterior com reuniões online e comunicação eficiente.",
              },
              {
                title: "Preciso de uma reunião?",
                description:
                  "Recomendamos uma conversa inicial para alinhar expectativas e entender melhor o seu projeto, mas não é obrigatória.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-lg hover:border-pale-pink transition-all duration-300 group relative min-h-[200px] hover:bg-gray-950"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-pale-pink">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pale-pink/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar sua marca?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Entre em contato hoje mesmo ou acesse nosso formulário de orçamento
            para começarmos seu projeto.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
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
