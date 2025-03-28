"use client";
import { Button } from "@/components/ui/button";
import Logo from "@/public/ia-para-criativos.svg";
import Profile from "@/public/profile.jpg";
import HotmartIcons from "@/public/icones-hotmart.webp";
import {
  ArrowRight,
  BrainCircuit,
  Calendar,
  Check,
  Clock,
  FileText,
  LayoutTemplate,
  Lightbulb,
  MessageSquare,
  Notebook,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.querySelectorAll("section")[1];

      if (secondSection) {
        const secondSectionTop = secondSection.offsetTop;
        setShowHeader(window.scrollY >= secondSectionTop - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>IA para Criativos - Ebook</title>
        <meta
          name="description"
          content="Aprenda a usar a IA para automatizar seu trabalho e otimizar seu fluxo de trabalho com nosso ebook por apenas R$19!"
        />
        <meta
          name="keywords"
          content="IA, Criativos, Ebook, Automação, Trabalho, Fluxo de Trabalho"
        />
        <meta name="author" content="IA para Criativos" />
      </Head>

      <div className="flex min-h-screen flex-col bg-off-white overflow-hidden">
        <header
          className={`w-full fixed top-0 z-50 transition-all duration-300 bg-gradient-to-r from-dark-teal-800/90 to-dark-teal-700/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-lg border-b border-dark-teal-600/20 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-black text-off-white transition-transform duration-300 hover:scale-105">
                <img
                  src={Logo.src}
                  alt="Verv Studio"
                  className="w-20 invert brightness-0 filter"
                />
              </span>
            </div>

            <nav className="md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:inline-flex text-off-white hover:text-sage-green-300 hover:bg-dark-teal-600/40"
                asChild
              >
                <Link href="#beneficios">Benefícios</Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hidden md:inline-flex text-off-white hover:text-sage-green-300 hover:bg-dark-teal-600/40"
                asChild
              >
                <Link href="#depoimentos">Depoimentos</Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hidden md:inline-flex text-off-white hover:text-sage-green-300 hover:bg-dark-teal-600/40"
                asChild
              >
                <Link href="#oferta">Oferta</Link>
              </Button>

              <Button
                size="sm"
                className="bg-sage-green hover:bg-sage-green-600 text-off-white rounded-full px-6 shadow-sm hover:shadow transition-all"
                asChild
              >
                <Link href="#comprar">Comprar agora</Link>
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-dark-teal-800 to-dark-teal-600 relative overflow-hidden">
          {/* Background pattern */}

          <div className="container px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-off-white space-y-4 sm:space-y-6 text-center md:text-left">
                <div className="inline-block bg-light-green text-dark-teal-800 px-4 py-1 rounded-full text-sm font-semibold mb-2 sm:mb-4 shadow-lg">
                  Novo E-book
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Pare de perder horas com tarefas chatas.
                </h1>

                <p className="text-off-white-200 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                  Automatize as tarefas operacionais com IA e foque no que
                  realmente importa - por apenas R$19!
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
                      QUERO PARAR DE PERDER TEMPO
                    </Link>
                  </Button>

                  <div className="flex items-center justify-center md:justify-start">
                    <Clock className="h-4 w-4 mr-2 text-light-green-300" />
                    <p className="text-light-green-300 text-sm font-semibold">
                      Oferta por tempo limitado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-10 bg-off-white-100">
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
                  className="bg-off-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-off-white-500 group text-center"
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                  <div className="p-8">
                    <div
                      className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${item.color} text-off-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
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
        <section
          id="beneficios"
          className="py-20 pb-20 sm:py-24 bg-off-white scroll-mt-16 md:scroll-mt-20"
        >
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
                <span className="text-sage-green-600">APENAS R$19!</span>
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
                  QUERO USAR A IA A MEU FAVOR
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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Esse e-book é para{" "}
                <span className="text-sage-green-400">você que…</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-1 max-w-4xl mx-auto">
              {[
                "Perde horas com tarefas operacionais e sobra pouco tempo para criar.",
                "Sente que poderia ser mais produtivo, mas não sabe como delegar tarefas para a IA.",
                "Já tentou usar IA, mas não conseguiu boas respostas e acabou desistindo.",
                "Acha que a IA não é para você, mas gostaria de testar sem complicação.",
                "Está cansado de fazer tudo sozinho e quer uma forma mais inteligente de otimizar seu fluxo de trabalho.",
                "Quer economizar tempo, automatizar o que não precisa ser manual e focar no que realmente importa, esse e-book é para você!",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-dark-teal-700/60 backdrop-blur-sm rounded-lg p-5 border border-dark-teal-600 flex items-start"
                >
                  <div className="bg-pale-green-500/20 text-pale-green-300 rounded-full p-2 mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-lg font-bold">
                      <Check />
                    </span>
                  </div>
                  <p className="text-off-white-300 text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="depoimentos"
          className="py-12 sm:py-24 bg-off-white-100 scroll-mt-16 md:scroll-mt-20"
        >
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
                  position: "Tatuadora",
                  quote:
                    "Depois que comecei a usar IA no meu fluxo de trabalho, reduzi meu tempo de atendimento pela metade!",
                },
                {
                  name: "Rafael T.",
                  position: "Designer",
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
                  className="bg-off-white rounded-xl text-center p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-off-white-400"
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
          </div>
        </section>

        {/* Oferta Section */}
        <section
          id="comprar"
          className="py-12 sm:py-24 bg-gradient-to-br from-off-white to-sage-green-100 scroll-mt-16 md:scroll-mt-20"
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
                  <div className="mb-4 sm:mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="line-through text-off-white-300 text-base">
                        R$47
                      </span>
                      <span className="bg-light-green-400 text-dark-teal-800 text-xs font-bold px-2 py-1 rounded-full">
                        60% OFF
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-light-green-300 text-6xl sm:text-5xl font-extrabold">
                        R$19
                      </span>
                    </div>
                  </div>
                  <p className="text-off-white-200 text-center mb-4 sm:mb-8 text-sm sm:text-base">
                    Pagamento único - Sem mensalidades!
                  </p>
                  <div className="space-y-3 sm:space-y-4 scroll-mt-16 md:scroll-mt-20">
                    <Button
                      size="lg"
                      className="bg-light-green hover:bg-light-green-600 text-dark-teal-800 font-bold rounded-full shadow-lg transition-all duration-300 w-full py-4 sm:py-6 text-base sm:text-lg"
                      asChild
                    >
                      <Link
                        href="https://pay.kiwify.com.br/"
                        className="flex items-center justify-center"
                      >
                        QUERO FACILITAR MINHA ROTINA
                      </Link>
                    </Button>
                  </div>

                  {/* Brazilian payment security badges */}
                  <div>
                    <div className="flex flex-col space-y-4">
                      {/* Hotmart guarantee badge */}
                      <div className="flex items-center justify-center mt-4 bg-sage-green-50 p-3 rounded-lg border border-sage-green-200">
                        <div className="mr-3">
                          <ShieldCheck className="h-6 w-6 text-sage-green-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-medium text-sm">
                            Garantia Hotmart
                          </p>
                          <p className="text-white-600 text-xs">
                            Pagamento processado com segurança
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center mt-2">
                        <p className="text-xs text-white text-center max-w-xs">
                          Seus dados estão protegidos e o pagamento é processado
                          em ambiente seguro.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-10">
                  <h3 className="text-xl sm:text-2xl text-center font-bold text-dark-teal-800 mb-4 sm:mb-6">
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
                      { text: "Garantia de 7 dias", icon: <ShieldCheck /> },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-sage-green flex-shrink-0" />
                        <span className="text-dark-teal-700 text-sm sm:text-base">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-pale-pink-100 border border-pale-pink-200 rounded-lg">
                    <p className="text-dark-teal-800 font-bold text-xs sm:text-sm text-center">
                      Atenção! Esse preço promocional pode acabar a qualquer
                      momento. Aproveite antes que volte ao valor original!
                    </p>
                  </div>

                  <div className="w-100 flex justify-center">
                    <img
                      src={HotmartIcons.src}
                      alt="Verv Studio"
                      className="w-60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="container text-white relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-teal-700 rounded-2xl p-8 border border-dark-teal-600 mb-8">
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="bg-sage-green-500/20 text-sage-green-300 rounded-full p-6 mb-4">
                  <ShieldCheck className="h-12 w-12" />
                </div>
              </div>

              <h2 className="text-3xl text-center md:text-4xl font-extrabold mb-4">
                <span className="text-sage-green-400">Garantia</span> de 7 dias
              </h2>

              <p className="text-off-white-200 text-center mb-8 max-w-2xl mx-auto">
                Nós acreditamos tanto que este e-book vai transformar a sua
                forma de trabalhar, que oferecemos uma garantia de 7 dias. Se,
                por qualquer motivo, você sentir que o conteúdo não é para você
                ou não atendeu às suas expectativas, basta nos avisar e
                garantimos o seu reembolso total, sem perguntas ou burocracia.
              </p>

              <p className="text-off-white font-semibold text-center mb-6">
                É simples:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  "Faça o download do e-book e explore o conteúdo.",
                  "Se em até 7 dias você achar que não é o que esperava, nos avise.",
                  "Receba 100% do seu dinheiro de volta sem questionamentos.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark-teal-600/60 backdrop-blur-sm rounded-lg p-5 border border-dark-teal-500 flex items-start"
                  >
                    <div className="bg-pale-green-500/20 text-pale-green-300 rounded-full p-2 mr-3 flex-shrink-0 mt-0.5">
                      <span className="flex items-center justify-center w-5 h-5 text-lg font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-off-white-300">{item}</p>
                  </div>
                ))}
              </div>

              <p className="font-bold text-center text-sage-green-300 text-xl">
                Sem riscos. Só oportunidades para melhorar a sua rotina.
              </p>
            </div>
          </div>
        </section>

        {/* About the Author Section */}
        <section className="py-2 bg-off-white">
          <div className="container pb-14 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-dark-teal-50 to-sage-green-50 rounded-2xl p-6 sm:p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-full overflow-hidden border-4 border-sage-green-300 max-w-[200px] mx-auto">
                      {/* Replace with actual image */}
                      <div className="w-full h-full bg-gradient-to-br from-dark-teal-400 to-dark-teal-600 flex items-center justify-center text-off-white text-5xl font-bold">
                        <img src={Profile.src} alt="Profile" />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h2 className="text-2xl text-center sm:text-3xl font-bold text-dark-teal-800 mb-6">
                      Quem sou eu
                      <br /> pra falar disso?
                    </h2>

                    <div className="space-y-4 text-dark-teal-700">
                      <p>
                        Sou o Giovani, designer estratégico e fundador da Verv,
                        um estúdio que ajuda criativos a construir marcas
                        autênticas sem ficarem presos a tarefas operacionais.
                      </p>

                      <p>
                        Trabalho com criatividade há mais de 6 anos e sei bem
                        como é perder tempo com briefing mal estruturado,
                        clientes demorando para responder e processos que
                        poderiam ser bem mais ágeis.
                      </p>

                      <p>
                        A IA mudou o jogo pra mim. Aprendi a usá-la como
                        assistente, economizando tempo e deixando espaço para
                        focar no que realmente importa: criar.
                      </p>

                      <p className="font-medium">
                        Agora, quero te mostrar como fazer o mesmo. Sem
                        complicação, sem promessas irreais, só o que realmente
                        funciona.
                      </p>
                    </div>
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
                GANHAR TEMPO AGORA
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
