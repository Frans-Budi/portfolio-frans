import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeader } from "@/components/sections/section-header";
import { HeroVisual } from "@/components/projects/hero-visual";
import { ProjectCard } from "@/components/projects/project-card";
import { VideoCard } from "@/components/projects/video-card";
import {
  certifications,
  demoVideos,
  experienceHighlights,
  heroStats,
  siteConfig,
  skillGroups,
} from "@/content/site";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="container-page grid gap-10 pb-16 pt-10 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-14">
        <div className="order-2 reveal lg:order-1">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Flutter Mobile Developer
          </Badge>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            I Build Real-World Mobile Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I am Frans Budi Kashira, a Flutter-focused mobile developer with 4+ years of programming
            experience, freelance product work, and startup CTO background.
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
      </section>

      <section id="about" className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="About"
            title="Mobile developer with product, fintech, and startup context."
            description="My strongest work combines Flutter implementation with product judgment, backend awareness, and business workflow understanding."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "4+ years programming experience with Flutter as the main production focus.",
              "Freelance experience building CPay and Fit Lit across mobile, web, backend, and Firebase services.",
              "Mobile Developer internship at PT Bejana Investidata Globalindo, contributing to Risehand and Dzikra.",
              "Startup CTO background from BangunAja x KuliKu with validation, partners, incubators, and funding.",
            ].map((item) => (
              <Card key={item} className="border-white/10 bg-card">
                <CardContent className="p-5 text-sm leading-7 text-muted-foreground">
                  <Sparkles className="mb-4 size-5 text-primary" />
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Case studies built around product value, not screenshot dumps."
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
      </section>

      <section className="container-page py-16">
        <SectionHeader
          eyebrow="Core Stack"
          title="Grouped skills for mobile-first product delivery."
          description="The stack reflects Flutter delivery, backend integration, fintech workflow implementation, and practical tooling."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-white/10 bg-card">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-white/6">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
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
                  <p className="mt-1 text-sm text-primary">{item.organization}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeader
          eyebrow="Demo Videos"
          title="Thumbnail-first demos keep the site fast."
          description="Video content is represented as lightweight preview cards so embeds do not slow the first load."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {demoVideos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeader
          eyebrow="Achievements"
          title="Education and certifications that reinforce the portfolio."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <Card key={item.title} className="border-white/10 bg-card">
              <CardContent className="p-6">
                <p className="text-sm text-primary">{item.provider}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
