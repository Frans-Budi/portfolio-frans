import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/projects/project-visual";
import { ProjectMockupHero } from "@/components/projects/project-mockup-hero";

type CaseStudyTemplateProps = {
  project: Project;
};

export function CaseStudyTemplate({ project }: CaseStudyTemplateProps) {
  return (
    <>
      <section className="container-page pb-14 pt-10">
        <Button asChild variant="ghost" className="mb-8 text-muted-foreground">
          <Link href="/projects">
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </Button>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 reveal lg:order-1">
            <Badge variant="outline" className="border-primary/30 text-primary">
              {project.category}
            </Badge>
            <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.longSummary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <MetaItem icon={<UserRound className="size-4" />} label="Role" value={project.role} />
              <MetaItem
                icon={<Calendar className="size-4" />}
                label="Duration"
                value={project.duration}
              />
            </div>
            {project.demoUrl ? (
              <Button asChild className="mt-6 bg-primary text-primary-foreground">
                <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                  Watch Demo
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            ) : null}
          </div>
          <ProjectMockupHero
            leftSrc={project.heroMockupLeft ?? "/media/mock-cpay-left.webp"}
            rightSrc={project.heroMockupRight ?? "/media/mock-cpay-right.webp"}
            altBase={`${project.title} case study hero`}
            priority
            className="order-1 min-h-80 lg:order-2 lg:min-h-130"
          />
        </div>
      </section>

      <section className="container-page grid gap-6 py-10 md:grid-cols-3">
        <StoryBlock title="Problem" body={project.problem} />
        <StoryBlock title="Solution" body={project.solution} />
        <StoryBlock title="Outcome" body={project.outcome} />
      </section>

      {project.demoUrl ? (
        <section className="container-page py-8">
          <div className="rounded-3xl border border-white/10 bg-card/75 p-6 lg:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Product Demo
            </p>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-heading text-2xl font-semibold">See the workflow in motion.</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  This project includes a recorded walkthrough that shows the core product flow more
                  clearly than static screenshots alone.
                </p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                  Watch Demo
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">My Role</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold">
            Product-minded execution across the stack.
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            This case study emphasizes what I planned, implemented, integrated, and shipped rather
            than only showing screens.
          </p>
        </div>
        <div className="grid gap-4">
          {project.highlights.map((highlight) => (
            <Card key={highlight} className="border-white/10 bg-card/80">
              <CardContent className="p-5 text-sm leading-6 text-muted-foreground">
                {highlight}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Key Features
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.featureGroups.map((group) => (
                <Card key={group.title} className="border-white/10 bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                    <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Technical Highlights
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">
              <ul className="grid gap-4">
                {project.technicalHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 size-2 rounded-full bg-primary shadow-[0_0_20px_rgba(92,225,230,0.7)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Separator className="my-6 bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="secondary" className="bg-white/6">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Visual Showcase
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">Project surfaces</h2>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/contact">
              Discuss a Project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((image, index) => (
            <ProjectVisual
              key={`${project.slug}-${image}`}
              src={image}
              alt={`${project.title} visual ${index + 1}`}
              className="aspect-video rounded-lg"
            />
          ))}
        </div>
      </section>
    </>
  );
}

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
        {icon}
        {label}
      </div>
      <p className="mt-2 text-sm text-foreground">{value}</p>
    </div>
  );
}

function StoryBlock({ title, body }: { title: string; body: string }) {
  return (
    <Card className="border-white/10 bg-card/80">
      <CardContent className="p-6">
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}
