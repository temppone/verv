import { Project } from "@/types/project";
import oqueFazerEmJF from "./oque-fazer-em-jf";
import ninho from "./ninho";
import peDeCafe from "./pe-de-cafe";
import gustavoKnop from "./gustavo-knop";

export const projects: Project[] = [oqueFazerEmJF, ninho, peDeCafe, gustavoKnop];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map((p) => p.slug);
};

export const getRelatedProjects = (slugs: string[]): Project[] => {
  return projects.filter((project) => slugs.includes(project.slug));
};
