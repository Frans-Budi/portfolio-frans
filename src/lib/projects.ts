import { projects } from "@/content/projects";

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function getDemoVideos() {
  return projects
    .filter((project) => project.demoUrl)
    .map((project) => ({
      title: `${project.title} Demo`,
      project: project.title,
      note: project.shortSummary,
      youtubeUrl: project.demoUrl ?? "",
      thumbnail: project.thumbnail,
    }));
}
