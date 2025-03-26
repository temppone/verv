import {
  AlertCircle,
  ArrowRight,
  Bot,
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
  Palette,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import HomeImage from "../../../svg/home.svg";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Ebook() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
            <span className="text-xl font-bold">IA para Criativos</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#beneficios"
              className="text-sm font-medium hover:text-black transition-colors duration-200 ease-in-out"
            >
              Benefícios
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium hover:text-black transition-colors duration-200 ease-in-out"
            >
              Depoimentos
            </Link>
            <Link
              href="#oferta"
              className="text-sm font-medium hover:text-black transition-colors duration-200 ease-in-out"
            >
              Oferta
            </Link>
          </nav>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ease-in-out"
            asChild
          >
            <Link href="#comprar-agora">Comprar Agora</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col order-2 justify-center space-y-4 md:order-1">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Aprenda a usar a IA para automatizar seu trabalho
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Automatize atendimento, organize briefings e otimize seu
                    fluxo de trabalho – por apenas R$7!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white transition-all duration-200 ease-in-out hover:shadow-md"
                    asChild
                  >
                    <Link href="#comprar-agora">
                      QUERO MEU E-BOOK AGORA{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-black text-black"
                        />
                      ))}
                  </div>
                  <span className="text-muted-foreground">
                    Oferta por tempo limitado
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center order-1">
                <img
                  src={HomeImage.src}
                  alt="Home"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="problema"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Se você é um criativo independente, provavelmente já passou
                  por isso
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              {[
                {
                  title: "Tempo Desperdiçado",
                  description:
                    "Gastando tempo demais respondendo clientes e organizando tarefas.",
                  icon: Clock,
                },
                {
                  title: "Prazos Perdidos",
                  description:
                    "Perdendo prazos por falta de um processo claro.",
                  icon: FileText,
                },
                {
                  title: "Sobrecarga",
                  description:
                    "Se sentindo sobrecarregado com a parte burocrática do seu negócio.",
                  icon: Zap,
                },
              ].map((problema, i) => (
                <Card
                  key={i}
                  className="border-none transition-all duration-300 ease-in-out hover:shadow-md"
                >
                  <CardContent className="p-6 text-left md:text-left text-center">
                    <div className="flex justify-center md:justify-start mb-4">
                      <problema.icon className="h-12 w-12 text-black transition-transform duration-300 ease-in-out hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold">{problema.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      <X className="h-4 w-4 inline mr-1" />{" "}
                      {problema.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 max-w-3xl mx-auto">
              <p className="text-lg font-medium">
                A boa notícia? A IA pode te ajudar a resolver tudo isso – sem
                tirar sua autenticidade.
              </p>
              <p className="mt-4 text-muted-foreground">
                Neste e-book, você vai aprender como usar inteligência
                artificial para organizar sua rotina, automatizar processos e
                tornar seu fluxo de trabalho mais leve e eficiente.
              </p>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  O Que Você Vai Aprender?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Saiba como a IA pode fazer o trabalho pesado enquanto você
                  foca no que importa: criar{" "}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  title: "Mensagens Persuasivas",
                  description:
                    "Como usar IA para criar mensagens persuasivas para clientes (sem parecer robótico).",
                  icon: MessageSquare,
                },
                {
                  title: "Briefings Rápidos",
                  description:
                    "Como estruturar um briefing completo em minutos e eliminar retrabalho.",
                  icon: FileText,
                },
                {
                  title: "Organização Prática",
                  description:
                    "Como organizar seus projetos de forma prática usando IA + Notion.",
                  icon: CheckCircle,
                },
                {
                  title: "Automatização",
                  description:
                    "Automatização de tarefas repetitivas para ganhar tempo e reduzir estresse.",
                  icon: Zap,
                },
                {
                  title: "Dicas Práticas",
                  description:
                    "Dicas práticas e ferramentas que você pode começar a usar hoje.",
                  icon: MessageSquare,
                },
                {
                  title: "Economia de Tempo",
                  description:
                    "Libere mais tempo para focar no que realmente importa: criar.",
                  icon: Clock,
                },
              ].map((beneficio, i) => (
                <Card
                  key={i}
                  className="border-none transition-all duration-300 ease-in-out hover:shadow-md"
                >
                  <CardContent className="p-6 text-left md:text-left text-center">
                    <div className="flex justify-center md:justify-start mb-4">
                      <beneficio.icon className="h-12 w-12 text-black transition-transform duration-300 ease-in-out hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold">{beneficio.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      <CheckCircle className="h-4 w-4 inline mr-1" />{" "}
                      {beneficio.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-bold">
                <Zap className="h-4 w-4 inline mr-1" /> E tudo isso por APENAS
                R$7!
              </p>
              <Button
                size="lg"
                className="mt-4 bg-green-500 hover:bg-green-600 text-white transition-all duration-200 ease-in-out hover:shadow-md"
                asChild
              >
                <Link href="#comprar-agora">
                  QUERO MEU E-BOOK AGORA <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="para-quem"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Para Quem Esse E-book é Perfeito?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Se você se encaixa em um desses perfis, esse guia é para você:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              {[
                {
                  title: "Designers e Criativos",
                  description:
                    "Que querem mais tempo para criar sem se perder na parte burocrática.",
                  icon: Palette,
                },
                {
                  title: "Freelancers",
                  description:
                    "Que precisam otimizar seu atendimento e organização.",
                  icon: Briefcase,
                },
                {
                  title: "Empreendedores Criativos",
                  description:
                    "Que querem automatizar processos e melhorar a produtividade.",
                  icon: Users,
                },
              ].map((perfil, i) => (
                <Card
                  key={i}
                  className="border-none transition-all duration-300 ease-in-out hover:shadow-md"
                >
                  <CardContent className="p-6 text-left md:text-left text-center">
                    <div className="flex justify-center md:justify-start mb-4">
                      <perfil.icon className="h-12 w-12 text-black transition-transform duration-300 ease-in-out hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-bold">{perfil.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      <CheckCircle className="h-4 w-4 inline mr-1" />{" "}
                      {perfil.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Depoimentos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja o que quem já usa IA no dia a dia está dizendo:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-8">
              {[
                {
                  quote:
                    "Depois que comecei a usar IA no meu fluxo de trabalho, reduzi meu tempo de atendimento pela metade!",
                  author: "Mariana S.",
                  title: "Designer Gráfica",
                },
                {
                  quote:
                    "Agora organizo meus briefings em minutos e sem stress. Esse e-book me deu um norte incrível!",
                  author: "Rafael T.",
                  title: "Freelancer",
                },
                {
                  quote:
                    "As dicas de automação com IA + Notion transformaram completamente minha organização de projetos.",
                  author: "Camila R.",
                  title: "Social Media",
                },
                {
                  quote:
                    "Consegui reduzir o tempo gasto com tarefas administrativas e agora tenho mais tempo para criar.",
                  author: "Lucas M.",
                  title: "Ilustrador",
                },
              ].map((depoimento, i) => (
                <Card
                  key={i}
                  className="text-left transition-all duration-300 ease-in-out hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-black text-black"
                          />
                        ))}
                    </div>
                    <p className="mb-4 italic">"{depoimento.quote}"</p>
                    <div>
                      <p className="font-semibold">{depoimento.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {depoimento.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-medium">
                Escrito por um designer estratégico com anos de experiência,
                esse material traz dicas práticas e reais – sem enrolação!
              </p>
            </div>
          </div>
        </section>

        <section
          id="oferta"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Oferta por Tempo Limitado
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De R$27 por apenas R$7 – por tempo limitado!
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Card className="border-2 border-black transition-all duration-300 ease-in-out hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">
                        IA para Criativos: Automatize seu Fluxo
                      </h3>
                      <div className="mt-4 flex items-baseline justify-center">
                        <span className="text-lg line-through text-muted-foreground">
                          R$27
                        </span>
                        <span className="ml-2 text-5xl font-bold text-black">
                          R$7
                        </span>
                        <span className="ml-1 text-muted-foreground">
                          pagamento único
                        </span>
                      </div>
                    </div>
                    <ul className="grid gap-2 py-4">
                      {[
                        "E-book completo em formato PDF",
                        "Dicas práticas de automação com IA",
                        "Templates para briefing e atendimento",
                        "Guia de integração IA + Notion",
                        "Acesso imediato após a compra",
                        "Atualizações gratuitas",
                        "Garantia de 7 dias",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-black" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div id="comprar-agora" className="pt-4">
                      <Button
                        size="lg"
                        className="w-full bg-green-500 text-white transition-all duration-200 ease-in-out hover:bg-green-600"
                        asChild
                      >
                        <Link href="#comprar-agora">
                          QUERO MEU E-BOOK AGORA
                        </Link>
                      </Button>
                      <p className="mt-2 text-xs text-center text-muted-foreground">
                        Pagamento seguro. Download imediato após a compra.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 inline mr-1" /> Atenção! Esse
                  preço promocional pode acabar a qualquer momento. Aproveite
                  antes que volte ao valor original!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para Transformar seu Fluxo de Trabalho?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Baixe agora e libere mais tempo para focar no que realmente
                  importa: criar.
                </p>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ease-in-out"
                asChild
              >
                <Link href="#comprar-agora">
                  QUERO MEU E-BOOK AGORA <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-black" />
            <p className="text-sm text-muted-foreground">
              © 2024 IA para Criativos. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-black transition-colors duration-200 ease-in-out"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-black transition-colors duration-200 ease-in-out"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-black transition-colors duration-200 ease-in-out"
            >
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
