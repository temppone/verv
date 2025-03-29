import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  delay?: string;
  fullWidth?: boolean;
  slug: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  description,
  delay = "0",
  fullWidth = false,
  slug,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`animate-fadeIn group relative overflow-hidden block rounded-2xl ${fullWidth ? "md:col-span-2" : ""
        }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
