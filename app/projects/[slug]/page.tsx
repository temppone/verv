import Header from "@/components/Header";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import ProjectClientPage from "./project-client-page";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Fragment>
      <Header />
      <ProjectClientPage project={project} />
    </Fragment>
  );
}

export async function generateStaticParams() {
  const slugs = projects.map((project) => project.slug);

  return slugs.map((slug) => ({
    slug,
  }));
}
