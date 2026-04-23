import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeader } from "@/components/sections/section-header";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Frans Budi Kashira across fintech, education, startup, AI, messaging, and business workflows.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="container-page py-14">
      <SectionHeader
        eyebrow="Projects"
        title="Structured case studies for real product work."
        description="Every project page explains the problem, solution, role, key features, technical highlights, and business value."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 2} />
        ))}
      </div>
    </section>
  );
}
