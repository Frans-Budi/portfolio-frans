import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/sections/cta-section";
import { CaseStudyTemplate } from "@/components/projects/case-study-template";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortSummary,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.shortSummary,
      images: [{ url: project.heroImage, width: 1200, height: 760 }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <CaseStudyTemplate project={project} />
      <CtaSection />
    </>
  );
}
