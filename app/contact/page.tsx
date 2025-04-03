"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileSymlink, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSendEmail } from "../hooks/useSendEmail";
import { useEffect } from "react";

export default function Contact() {
  const { toast } = useToast();
  const { sendSimpleMessage, success, error, isLoading } = useSendEmail();

  const schema = z.object({
    name: z.string({
      required_error: "Nome é obrigatório",
    }),
    email: z
      .string({
        required_error: "E-mail é obrigatório",
      })
      .email({
        message: "E-mail inválido",
      }),
    message: z.string({
      required_error: "Mensagem é obrigatória",
    }),
  });

  type ContactFormData = z.infer<typeof schema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (success) {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
        className: "bg-green-100 border-green-400 text-green-800",
      });

      form.reset();
    } else if (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
      });
    }
  }, [success, error]); // Dispara o Toast quando success ou error mudar

  const onSubmit = async (data: ContactFormData) => {
    const { email, message, name } = data;

    await sendSimpleMessage({
      email,
      message,
      name,
    });
  };

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
          <div className="bg-black p-8 rounded-lg border border-gray-800 relative overflow-hidden">
            {success ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-95 z-10 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-pale-pink/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pale-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-pale-pink mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-300 text-center max-w-xs">
                  Obrigado por entrar em contato. Retornaremos em breve.
                </p>
              </div>
            ) : null}

            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel className="text-sm font-medium text-gray-300">
                        Nome
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-gray-900 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink focus:border-transparent"
                          placeholder="Seu nome"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel className="text-sm font-medium text-gray-300">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-gray-900 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel className="text-sm font-medium text-gray-300">
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="bg-gray-900 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink focus:border-transparent"
                          placeholder="Sua mensagem"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className={`w-full mt-6 transition-all ${
                    isLoading
                      ? "bg-gray-700"
                      : "bg-pale-pink hover:bg-pale-pink/80 text-black"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar mensagem"
                  )}
                </Button>
              </form>
            </Form>
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
                    href="https://wa.me/5532999508150"
                    className="text-gray-300 hover:text-pale-pink transition-colors duration-300"
                  >
                    +55 32 99950-8150
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FileSymlink size={24} className="text-pale-pink mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Solicitar orçamento
                  </h3>
                  <a
                    href="https://form.respondi.app/NwPH9MZX"
                    className="text-gray-300 hover:text-pale-pink transition-colors duration-300"
                  >
                    Clique aqui{" "}
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
              className="btn-primary"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
