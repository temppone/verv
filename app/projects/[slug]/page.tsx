import Header from "@/components/Header";
import { getProjectBySlug, projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Fragment>
      <main
        className="min-h-screen bg-black text-white selection:bg-pale-pink selection:text-black"
        style={{ scrollBehavior: "smooth" }}
      >
        <Header />

        {/* Hero Image */}
        <section className="mt-16 bg-gray-1000">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>

        {/* Intro Section */}
        <section className="pt-16 w-full flex justify-center bg-white md:py-16">
          <div className="max-w-screen-2xl px-6">
            <div className="lg:w-full">
              <h1 className="font-libre text-5xl lg:text-6xl font-bold text-black mb-6">
                {project.category}
              </h1>
              <div className="w-full h-px bg-black"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Left Column - Client Name */}
              <div className="lg:w-1/3"></div>

              {/* Right Column - Content */}
              <div className="lg:w-2/3">
                {/* Client & Services Info */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 py-4 border-b border-black">
                    <span className="text-sm min-w-20 font-medium text-black uppercase tracking-wide md:min-w-40">
                      Cliente
                    </span>
                    <span className="text-sm font-medium text-black text-left max-w-md">
                      {project.client}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center py-4 border-b border-black">
                    <span className="text-sm min-w-20 font-medium text-black uppercase tracking-wide md:min-w-40">
                      Serviços
                    </span>
                    <span className="text-sm font-medium text-black text-left max-w-md">
                      {project.services.join(", ")}
                    </span>
                  </div>
                </div>

                {/* O Superficial */}
                <div className="mb-8">
                  <p className="text-lg text-black leading-relaxed">
                    O Superficial
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    {project.superficial}
                  </p>
                </div>

                {/* O Primitivo */}
                <div className="mb-8">
                  <p className="text-lg text-black leading-relaxed">
                    O Primitivo
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    {project.primitivo}
                  </p>
                </div>

                {/* Case Study */}
                <div className="md:mb-8">
                  <div className="prose prose-lg max-w-none">
                    {project.caseStudy.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-black leading-relaxed mb-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-white md:py-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="flex flex-col gap-4">
              {project.images.map((imageSrc, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={imageSrc}
                      alt={`${project.title} - Imagem ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-pale-pink/20 opacity-30"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <h2 className="font-libre text-4xl text-gray-950 md:text-5xl font-bold mb-6">
              A próxima marca aqui <br />{" "}
              <span className="text-black">pode ser a sua</span>
            </h2>
            <p className="text-xl text-gray-950 mb-10 max-w-2xl mx-auto">
              Marcas autênticas não acontecem por acaso. Se você quer uma marca
              que se destaque de verdade e conecte com o seu público, clica no
              botão e bora conversar.
            </p>
            <a
              href="https://form.respondi.app/9NqpobzW"
              className="bg-pale-pink text-black px-10 py-4 text-lg font-medium transition-all duration-300 hover:bg-pale-pink-550 hover:scale-105 transform inline-block rounded-md shadow-lg"
            >
              Agendar uma conversa
            </a>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export async function generateStaticParams() {
  const slugs = projects.map((project) => project.slug);

  return slugs.map((slug) => ({
    slug,
  }));
}
