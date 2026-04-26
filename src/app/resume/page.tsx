import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, Download, ExternalLink, GraduationCap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StackChip } from "@/components/sections/stack-chip";
import { experienceHighlights, siteConfig, skillGroups, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume hub for Frans Budi Kashira, Flutter Mobile Developer with fintech, education, and startup experience.",
};

const recruiterFacts = [
  { label: "Focus", value: "Flutter mobile delivery" },
  { label: "Product Contexts", value: "Fintech, education, startup" },
  { label: "Programming Experience", value: "4+ years" },
  { label: "Flagship Product", value: "CPay fintech platform" },
] as const;

const credibilitySignals = [
  {
    title: "Bangkit Academy 2024",
    meta: "Google, GoTo, Traveloka",
    note: "Mobile Development cohort selected from 55,000 participants.",
    icon: GraduationCap,
  },
  {
    title: "Digital Business Degree",
    meta: "Universitas Pendidikan Indonesia",
    note: "Completed 147 credits with GPA 3.95/4.00.",
    icon: GraduationCap,
  },
  {
    title: "Android & Kotlin Certifications",
    meta: "Dicoding",
    note: "Selected credentials across Kotlin, Android fundamentals, intermediate Android, and Jetpack Compose.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Startup Validation & Incubators",
    meta: "BangunAja x KuliKu",
    note: "16+ partners recruited, multiple incubators joined, and early scholarship funding secured.",
    icon: Rocket,
  },
] as const;

export default function ResumePage() {
  const primarySocials = socials.filter((item) => item.priority);

  return (
    <section className="container-page py-10 lg:py-14">
      <div className="grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-8">
          <Card className="overflow-hidden border-primary/18 bg-linear-to-br from-card to-card/85 shadow-[0_28px_100px_rgba(0,0,0,0.22)]">
            <CardContent className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                    Resume
                  </p>
                  <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Frans Budi Kashira
                  </h1>
                  <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
                    Flutter Mobile Developer
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    Flutter-focused developer shipping real product work across freelance,
                    internship, startup, fintech, and education contexts. I build mobile experiences
                    with strong product judgment, practical implementation, and end-to-end delivery
                    awareness.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:w-88 xl:grid-cols-1">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground">
                    <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                      <Download className="size-4" />
                      Download Resume PDF
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">
                      Contact Frans
                      <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {recruiterFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">{fact.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
                  Professional Experience
                </p>
                <h2 className="mt-3 font-heading text-3xl font-semibold">
                  Experience built around shipped product work.
                </h2>
              </div>
            </div>

            <div className="grid gap-4">
              {experienceHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="border-white/10 bg-card/88">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                              {item.period}
                            </p>
                            <h3 className="mt-3 font-heading text-2xl font-semibold">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.organization}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          Impact-focused
                        </Badge>
                      </div>
                      <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
                        {item.summary}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
                Education & Credentials
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold">
                Quick trust signals for recruiters and hiring teams.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {credibilitySignals.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="border-white/10 bg-card/84">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                            {item.meta}
                          </p>
                          <h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">
                            {item.note}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
          <Card className="border-white/10 bg-card/84">
            <CardContent className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
                Core Capabilities
              </p>
              <div className="mt-5 grid gap-4">
                {skillGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.title}
                      className="rounded-2xl border border-white/10 bg-white/3 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-primary/18 bg-primary/8 text-primary">
                          <Icon className="size-4.5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {group.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <StackChip key={item.label} item={item} className="bg-white/4" />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-card/80">
            <CardContent className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
                Contact
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Email
                  </p>
                  <p className="mt-2 text-sm text-foreground">{siteConfig.email}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Phone / WhatsApp
                  </p>
                  <p className="mt-2 text-sm text-foreground">{siteConfig.phone}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {primarySocials.map((item) => (
                    <Button key={item.label} asChild size="sm" variant="outline">
                      <Link href={item.href} target="_blank" rel="noreferrer">
                        {item.label}
                        <ExternalLink className="size-3.5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
}
