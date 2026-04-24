"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/projects/project-visual";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Card className="border-white/10 bg-card/80 py-0 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <ProjectVisual
        src={project.thumbnail}
        alt={`${project.title} project preview`}
        priority={priority}
        className="rounded-b-none border-x-0 border-t-0"
      />
      <CardHeader className="px-5">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline" className="border-primary/25 text-primary">
            {project.category}
          </Badge>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.tier}
          </span>
        </div>
        <CardTitle className="mt-3 font-heading text-2xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-5">
        <p className="text-sm leading-6 text-muted-foreground">{project.shortSummary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <Badge key={item} variant="secondary" className="bg-white/6">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-white/10 bg-white/2 px-5 py-4">
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={`/projects/${project.slug}`}>
            View Case Study
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
