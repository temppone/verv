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
}

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  delay = "0",
  fullWidth = false,
  slug,
  square,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`animate-fadeIn group relative overflow-hidden block rounded-2xl ${
        fullWidth ? "md:col-span-2" : ""
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
