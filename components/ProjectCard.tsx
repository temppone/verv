import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  delay?: string;
  fullWidth?: boolean;
  slug: string;
  square?: boolean;
  isVisible?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  delay = "0",
  fullWidth = false,
  slug,
  square,
  isVisible = true,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`group relative overflow-hidden block rounded-2xl transition-all duration-1000 ${
        fullWidth ? "md:col-span-2" : ""
      } ${
        isVisible
          ? "animate-fade-in-up opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`overflow-hidden rounded-2xl ${
          square ? "aspect-square" : ""
        }`}
      >
        <Image
          src={image}
          alt={title}
          className={`w-full transition-transform duration-500 group-hover:scale-105 ${
            square ? "h-full object-cover" : "h-auto"
          }`}
          placeholder="blur"
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
