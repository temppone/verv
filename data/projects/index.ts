import { Project } from "@/types/project";
import paolaGatti from "./paola-gatti";
import oqueFazerEmJF from "./oque-fazer-em-jf";
import ninho from "./ninho";

export const projects: Project[] = [paolaGatti, oqueFazerEmJF, ninho];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map((p) => p.slug);
};

export const getRelatedProjects = (slugs: string[]): Project[] => {
  return projects.filter((project) => slugs.includes(project.slug));
};
