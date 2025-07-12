import ProjectCard from "@/components/ProjectCard";
import OqueFazerEmJF from "@/public/images/oqueFazerEmJF.webp";
import PaolaGatti from "@/public/images/paola_01.webp";
import Ninho from "@/public/images/ninho.webp";

export default function SelectedProjectsSection() {
  return (
    <section className="px-6 py-8 bg-gray-1000 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 animate-fadeIn tracking-tight relative before:content-[''] before:absolute before:w-20 before:h-1 before:-bottom-4 before:left-0 before:bg-pale-pink">
          Transformações que guiamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            image={OqueFazerEmJF}
            title="O que Fazer em JF?"
            delay="400"
            slug="oque-fazer-em-jf"
            square
          />
          <ProjectCard
            image={PaolaGatti}
            title="Paola Gatti"
            delay="400"
            slug="paola-gatti"
            square
          />
          <ProjectCard
            image={Ninho}
            title="Ninho Tattoo Studio"
            fullWidth={true}
            delay="400"
            slug="ninho"
          />
        </div>
      </div>
    </section>
  );
}
