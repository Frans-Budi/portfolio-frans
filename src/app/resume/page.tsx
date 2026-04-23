import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/sections/section-header";
import { certifications, experienceHighlights, siteConfig, skillGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume hub for Frans Budi Kashira, Flutter Mobile Developer with fintech, education, and startup experience.",
};

export default function ResumePage() {
  return (
    <section className="container-page py-14">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader
            eyebrow="Resume"
            title="CV, experience, education, and core skills."
            description="A recruiter-friendly version of the portfolio content, with the downloadable PDF available below."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="size-4" />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Frans
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6">
          <Card className="border-primary/20 bg-primary/10">
            <CardContent className="p-6">
              <h2 className="font-heading text-2xl font-semibold">
                Frans Budi Kashira
              </h2>
              <p className="mt-2 text-primary">Flutter Mobile Developer</p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Mobile developer specializing in Flutter with 4+ years of
                programming experience, freelance work, and startup CTO
                background. Experienced across education and fintech products,
                including CPay for a Saudi Arabia-based client.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            {experienceHighlights.map((item) => (
              <Card key={item.title} className="border-white/10 bg-card">
                <CardContent className="p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.organization}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <Card key={item.title} className="border-white/10 bg-card">
                <CardContent className="p-5">
                  <p className="text-sm text-primary">{item.provider}</p>
                  <h3 className="mt-2 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-white/10 bg-card">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold">Technical Skills</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-semibold text-primary">{group.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
