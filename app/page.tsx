import { Button } from "@/components/ui/button";
import Logo from "@/public/verv_logo.svg";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Calendar,
  Check,
  Clock,
  Download,
  FileText,
  LayoutTemplate,
  Lightbulb,
  MessageSquare,
  Notebook,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IA para Criativos - Ebook</title>
        <meta
          name="description"
          content="Aprenda a usar a IA para automatizar seu trabalho e otimizar seu fluxo de trabalho com nosso ebook por apenas R$7!"
        />
        <meta
          name="keywords"
          content="IA, Criativos, Ebook, Automação, Trabalho, Fluxo de Trabalho"
        />
        <meta name="author" content="IA para Criativos" />
      </Head>

      <div className="flex min-h-screen flex-col bg-off-white overflow-hidden">
        {/* Fixed navigation with transparent background that becomes solid on scroll */}
        <header className="w-full fixed top-0 z-50 transition-colors duration-300 bg-gradient-to-r from-dark-teal-800/90 to-dark-teal-700/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-lg">
          <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-black text-off-white transition-transform duration-300 hover:scale-105">
                <span className="text-sage-green">
                  <img
                    src={Logo.src}
                    alt="Home"
                    className="w-20 filter brightness-0 invert"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(88%) sepia(12%) saturate(1088%) hue-rotate(77deg) brightness(99%) contrast(87%)",
                    }}
                  />
                </span>
              </span>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-off-white hover:text-sage-green-300 hover:bg-dark-teal-600/30"
                asChild
              >
                <Link href="#beneficios">Benefícios</Link>
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="text-off-white hover:text-sage-green-300 hover:bg-dark-teal-600/30"
                asChild
              >
                <Link href="#depoimentos">Depoimentos</Link>
              </Button>

              <Button
                size="sm"
                variant="ghost"
                className="text-off-white hover:text-sage-green-300 hover:bg-dark-teal-600/30"
                asChild
              >
                <Link href="#oferta">Oferta</Link>
              </Button>

              <Button
                size="sm"
                className="bg-sage-green hover:bg-sage-green-600 text-off-white rounded-full px-6 shadow-sage-green/20 shadow-lg"
                asChild
              >
                <Link href="#comprar">Comprar agora</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-dark-teal-800 to-dark-teal-600 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
          </div>

          <div className="container px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-off-white space-y-4 sm:space-y-6 text-center md:text-left">
                <div className="inline-block bg-light-green text-dark-teal-800 px-4 py-1 rounded-full text-sm font-semibold mb-2 sm:mb-4 shadow-lg">
                  Novo E-book
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Aprenda a usar a IA para automatizar seu trabalho
                </h1>

                <p className="text-off-white-200 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                  Automatize atendimento, organize briefings e otimize seu fluxo
                  de trabalho – por apenas R$7!
                </p>

                <div className="pt-4 sm:pt-6 space-y-4">
                  <Button
                    size="lg"
                    className="bg-sage-green hover:bg-sage-green-600 text-off-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                    asChild
                  >
                    <Link
                      href="#comprar"
                      className="flex items-center justify-center"
                    >
                      QUERO MEU E-BOOK AGORA
                      <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </Button>

                  <p className="text-light-green-300 text-sm flex items-center justify-center md:justify-start font-semibold">
                    <Clock className="h-4 w-4 mr-2" />
                    Oferta por tempo limitado
                  </p>
                </div>
              </div>

              <div className="relative mt-8 md:mt-0 max-w-md mx-auto md:max-w-none">
                <div className="relative w-full h-auto transition-all duration-500 hover:scale-105">
                  <div className="bg-off-white rounded-2xl shadow-xl overflow-hidden border border-dark-teal-200">
                    <div className="bg-gradient-to-r from-dark-teal-500 to-dark-teal-700 p-4 sm:p-6 text-off-white">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        IA para Criativos
                      </h2>
                      <div className="flex items-center justify-between">
                        <span className="opacity-75 text-xs sm:text-sm">
                          por VervStudio
                        </span>
                        <span className="bg-off-white text-dark-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                          2024
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                      <div className="space-y-2 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-dark-teal-800">
                          Otimize seu fluxo de trabalho
                        </h3>
                        <p className="text-dark-teal-600 text-sm sm:text-base">
                          Automatize tarefas repetitivas e foque no que
                          realmente importa: criar.
                        </p>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center text-dark-teal-700 text-sm sm:text-base">
                          <BookOpen className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-sage-green flex-shrink-0" />
                          <span>E-book completo em formato PDF</span>
                        </div>
                        <div className="flex items-center text-dark-teal-700 text-sm sm:text-base">
                          <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-sage-green flex-shrink-0" />
                          <span>Templates para briefing e atendimento</span>
                        </div>
                        <div className="flex items-center text-dark-teal-700 text-sm sm:text-base">
                          <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-sage-green flex-shrink-0" />
                          <span>Acesso imediato após a compra</span>
                        </div>
                      </div>

                      <div className="pt-2 sm:pt-4">
                        <div className="bg-off-white-200 rounded-lg p-3 sm:p-4 flex justify-between items-center">
                          <div>
                            <span className="text-xs sm:text-sm text-dark-teal-400 line-through">
                              R$27,00
                            </span>
                            <div className="text-xl sm:text-2xl font-bold text-sage-green-600">
                              R$7,00
                            </div>
                          </div>
                          <div className="bg-light-green text-dark-teal-800 font-bold px-2 sm:px-3 py-1 rounded-lg text-sm">
                            -74%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-pale-pink text-off-white rounded-full p-3 sm:p-4 shadow-lg rotate-12 z-20">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-24 bg-off-white-100">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-teal-800 mb-4">
                Se você é um criativo independente, provavelmente já passou por
                isso
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Tempo Desperdiçado",
                  icon: <Clock className="h-8 w-8" />,
                  desc: "Gastando tempo demais respondendo clientes e organizando tarefas.",
                  color: "from-pale-pink-400 to-pale-pink-600",
                },
                {
                  title: "Prazos Perdidos",
                  icon: <Calendar className="h-8 w-8" />,
                  desc: "Perdendo prazos por falta de um processo claro.",
                  color: "from-light-green-400 to-sage-green-600",
                },
                {
                  title: "Sobrecarga",
                  icon: <BrainCircuit className="h-8 w-8" />,
                  desc: "Se sentindo sobrecarregado com a parte burocrática do seu negócio.",
                  color: "from-sage-green-400 to-dark-teal-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-off-white-500 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                  <div className="p-8">
                    <div
                      className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${item.color} text-off-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-teal-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-dark-teal-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-sage-green-100 to-light-green-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-teal-800 mb-4">
                A boa notícia? A IA pode te ajudar a resolver tudo isso – sem
                tirar sua autenticidade.
              </h3>
              <p className="text-dark-teal-600 text-lg">
                Neste e-book, você vai aprender como usar inteligência
                artificial para organizar sua rotina, automatizar processos e
                tornar seu fluxo de trabalho mais leve e eficiente.
              </p>
            </div>
          </div>
        </section>
        {/* Benefícios Section */}
        <section id="beneficios" className="py-16 sm:py-24 bg-off-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-teal-800 mb-3 sm:mb-4">
                O que você vai{" "}
                <span className="text-sage-green">aprender?</span>
              </h2>
              <p className="text-dark-teal-600 text-base sm:text-lg">
                Saiba como a IA pode fazer o trabalho pesado enquanto você foca
                no que importa: criar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
              {[
                {
                  title: "Mensagens persuasivas",
                  icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />,
                  desc: "Como usar IA para criar mensagens persuasivas para clientes (sem parecer robótico).",
                },
                {
                  title: "Briefings rápidos",
                  icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />,
                  desc: "Como estruturar um briefing completo em minutos e eliminar retrabalho.",
                },
                {
                  title: "Organização prática",
                  icon: <LayoutTemplate className="h-5 w-5 sm:h-6 sm:w-6" />,
                  desc: "Como organizar seus projetos de forma prática usando IA + Notion.",
                },
                {
                  title: "Automatização",
                  icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
                  desc: "Automatização de tarefas repetitivas para ganhar tempo e reduzir estresse.",
                },
                {
                  title: "Dicas práticas",
                  icon: <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />,
                  desc: "Dicas práticas e ferramentas que você pode começar a usar hoje.",
                },
                {
                  title: "Economia de tempo",
                  icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
                  desc: "Libere mais tempo para focar no que realmente importa: criar.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-off-white-100 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-off-white-400"
                >
                  <div className="flex items-start">
                    <div className="bg-sage-green/20 text-sage-green-600 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-dark-teal-800 mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-dark-teal-600 text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center px-4">
              <p className="text-xl sm:text-2xl font-bold text-dark-teal-700 mb-6 sm:mb-8">
                E tudo isso por{" "}
                <span className="text-sage-green-600">APENAS R$7!</span>
              </p>
              <Button
                size="lg"
                className="bg-sage-green hover:bg-sage-green-600 text-off-white font-bold rounded-full shadow-lg shadow-sage-green/30 transition-all duration-300 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                asChild
              >
                <Link
                  href="#comprar"
                  className="flex items-center justify-center"
                >
                  QUERO MEU E-BOOK AGORA
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Para Quem Section */}
        <section className="py-24 bg-dark-teal-800 text-off-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Para quem esse{" "}
                <span className="text-sage-green-400">e-book é perfeito?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Designers e criativos",
                  desc: "Que querem mais tempo para criar sem se perder na parte burocrática.",
                },
                {
                  title: "Freelancers",
                  desc: "Que precisam otimizar seu atendimento e organização.",
                },
                {
                  title: "Empreendedores criativos",
                  desc: "Que querem automatizar processos e melhorar a produtividade.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-dark-teal-700/60 backdrop-blur-sm rounded-lg p-6 border border-dark-teal-600 hover:border-sage-green-400/50 transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-sage-green-500/20 text-sage-green-300 rounded-full p-3 mr-4">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-off-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-off-white-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Depoimentos Section */}
        <section id="depoimentos" className="py-12 sm:py-24 bg-off-white-100">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-teal-800 mb-2 sm:mb-4">
                Depoimentos
              </h2>
              <p className="text-dark-teal-600 text-base sm:text-lg">
                Veja o que quem já usa IA no dia a dia está dizendo:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              {[
                {
                  name: "Mariana S.",
                  position: "Designer Gráfica",
                  quote:
                    "Depois que comecei a usar IA no meu fluxo de trabalho, reduzi meu tempo de atendimento pela metade!",
                },
                {
                  name: "Rafael T.",
                  position: "Freelancer",
                  quote:
                    "Agora organizo meus briefings em minutos e sem stress. Esse e-book me deu um norte incrível!",
                },
                {
                  name: "Camila R.",
                  position: "Social Media",
                  quote:
                    "As dicas de automação com IA + Notion transformaram completamente minha organização de projetos.",
                },
                {
                  name: "Lucas M.",
                  position: "Ilustrador",
                  quote:
                    "Consegui reduzir o tempo gasto com tarefas administrativas e agora tenho mais tempo para criar.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-off-white rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-off-white-400"
                >
                  <div className="flex flex-col">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-dark-teal-700 italic text-sm sm:text-base">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="font-bold text-dark-teal-800 text-sm sm:text-base">
                        {item.name}
                      </p>
                      <p className="text-sage-green-600 text-xs sm:text-sm">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sage-green-100 border border-sage-green-200 rounded-xl p-4 sm:p-6 max-w-3xl mx-auto">
              <p className="text-dark-teal-700 text-center text-sm sm:text-base">
                <span className="font-bold">
                  Escrito por um designer estratégico com anos de experiência
                </span>
                , esse material traz dicas práticas e reais – sem enrolação!
              </p>
            </div>
          </div>
        </section>

        {/* Oferta Section */}
        <section
          id="oferta"
          className="py-12 sm:py-24 bg-gradient-to-br from-off-white to-sage-green-100"
        >
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-teal-800 mb-2 sm:mb-4">
                Oferta por Tempo Limitado
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-off-white rounded-2xl shadow-xl overflow-hidden border border-sage-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-dark-teal-500 to-dark-teal-600 p-6 sm:p-10 text-off-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
                    De <span className="line-through">R$27</span> por apenas{" "}
                    <span className="text-light-green-300">R$7</span>
                  </h3>
                  <p className="text-off-white-200 mb-4 sm:mb-8 text-sm sm:text-base">
                    Pagamento único - Sem mensalidades!
                  </p>
                  <div id="comprar" className="space-y-3 sm:space-y-4">
                    <Button
                      size="lg"
                      className="bg-light-green hover:bg-light-green-600 text-dark-teal-800 font-bold rounded-full shadow-lg transition-all duration-300 w-full py-4 sm:py-6 text-base sm:text-lg"
                      asChild
                    >
                      <Link
                        href="https://pay.kiwify.com.br/"
                        className="flex items-center justify-center"
                      >
                        QUERO MEU E-BOOK AGORA
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-off-white-200 text-xs sm:text-sm">
                      Processado por Kiwify - Pagamento 100% seguro
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-teal-800 mb-4 sm:mb-6">
                    O que está incluso:
                  </h3>
                  <div className="space-y-2 sm:space-y-4">
                    {[
                      {
                        text: "E-book completo em formato PDF",
                        icon: <FileText />,
                      },
                      {
                        text: "Dicas práticas de automação com IA",
                        icon: <Lightbulb />,
                      },
                      {
                        text: "Templates para briefing e atendimento",
                        icon: <LayoutTemplate />,
                      },
                      {
                        text: "Guia de integração IA + Notion",
                        icon: <Notebook />,
                      },
                      { text: "Acesso imediato após a compra", icon: <Zap /> },
                      { text: "Atualizações gratuitas", icon: <ArrowRight /> },
                      { text: "Garantia de 7 dias", icon: <ShieldCheck /> },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-sage-green flex-shrink-0" />
                        <span className="text-dark-teal-700 text-sm sm:text-base">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-pale-pink-100 border border-pale-pink-200 rounded-lg">
                    <p className="text-dark-teal-800 font-bold text-xs sm:text-sm">
                      Atenção! Esse preço promocional pode acabar a qualquer
                      momento. Aproveite antes que volte ao valor original!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section className="py-12 sm:py-20 bg-dark-teal-800 text-off-white">
          <div className="container text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
              Pronto para transformar seu fluxo de trabalho?
            </h2>
            <p className="text-off-white-200 text-sm sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-10">
              Baixe agora e libere mais tempo para focar no que realmente
              importa: criar.
            </p>
            <Button
              size="lg"
              className="bg-sage-green hover:bg-sage-green-600 text-off-white font-bold rounded-full shadow-lg shadow-sage-green/30 transition-all duration-300 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              asChild
            >
              <Link
                href="#comprar"
                className="flex items-center justify-center"
              >
                QUERO MEU E-BOOK AGORA
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
