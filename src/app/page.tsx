import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { SectionHeader } from "@/components/sections/section-header";
import { StackCard } from "@/components/sections/stack-card";
import { HeroVisual } from "@/components/projects/hero-visual";
import { ProjectCard } from "@/components/projects/project-card";
import {
  aboutStrengths,
  experienceHighlights,
  heroStats,
  learningHighlights,
  siteConfig,
  skillGroups,
} from "@/content/site";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="section-shell section-base section-glow">
        <div className="container-page grid gap-10 pb-16 pt-10 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-14">
          <div className="order-2 reveal lg:order-1">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Flutter Mobile Developer
            </Badge>
            <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              I Build Real-World Mobile Products
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I am Frans Budi Kashira, a Flutter-focused mobile developer with 4+ years of
              programming experience, freelance product work, and startup CTO background.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 bg-primary text-primary-foreground">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="ghost" className="h-11">
                <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                  <Download className="size-4" />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/3 p-4">
                  <p className="font-heading text-2xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section id="about" className="section-shell section-base">
        <RevealOnScroll className="container-page py-16">
          <div className="grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:items-start lg:gap-8">
            <div className="order-1">
              <div className="relative mx-auto aspect-4/5 w-3/4 overflow-hidden rounded-3xl border border-white/10 bg-card/70 lg:w-full">
                <Image
                  src="/image/frans-transparant.webp"
                  alt="Frans Budi Kashira portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            <div className="order-2">
              <SectionHeader
                eyebrow="About"
                title="Mobile developer with product, fintech, and startup context."
                description="My strongest work combines Flutter implementation with product judgment, backend awareness, and business workflow understanding."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutStrengths.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card key={item.label} className="border-white/10 bg-card">
                      <CardContent className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8 text-primary">
                            <Icon className="size-5" />
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            {item.label}
                          </p>
                        </div>
                        <h3 className="mt-5 font-heading text-xl font-semibold leading-snug text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="section-shell section-alt">
        <RevealOnScroll className="container-page py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Featured Projects"
              title="Case studies built around product value"
              description="CPay leads the portfolio, followed by education, startup, attendance, AI, and workflow products."
            />
            <Button asChild variant="outline">
              <Link href="/projects">
                All Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 2} />
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="section-shell section-base section-motif">
        <RevealOnScroll className="container-page py-16">
          <SectionHeader
            eyebrow="Core Stack"
            title="Capability-first stack for shipping real-world products."
            description="The section highlights the areas I rely on most when delivering Flutter products, supporting product flows, payment logic, and day-to-day engineering workflow."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <StackCard key={group.title} group={group} />
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="section-shell section-base">
        <RevealOnScroll className="container-page py-16">
          <SectionHeader
            eyebrow="Experience"
            title="Credibility from freelance, internship, and startup execution."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {experienceHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="border-white/10 bg-card">
                  <CardContent className="p-6">
                    <Icon className="size-6 text-primary" />
                    <p className="mt-5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-primary font-medium">{item.organization}</p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </RevealOnScroll>
      </section>

      <section className="section-shell section-base">
        <RevealOnScroll className="container-page py-16">
          <SectionHeader
            eyebrow="Learning & Education"
            title="Compact credibility from education and focused upskilling."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {learningHighlights.map((item) => (
              <Card key={item.title} className="border-white/10 bg-card">
                <CardContent className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{item.meta}</p>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <CtaSection />
    </>
  );
}
