import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/sections/section-header";
import { siteConfig, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Frans Budi Kashira for Flutter mobile development, fintech workflows, Firebase apps, and freelance product work.",
};

export default function ContactPage() {
  return (
    <section className="container-page py-14">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s discuss product work, mobile apps, or collaboration."
            description="The fastest channels are email and WhatsApp. LinkedIn and GitHub are included for professional review."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Button asChild className="h-12 justify-between bg-primary text-primary-foreground">
              <Link href={`mailto:${siteConfig.email}`}>
                <span className="inline-flex items-center gap-2">
                  <Mail className="size-4" />
                  {siteConfig.email}
                </span>
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 justify-between">
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </span>
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {socials.map((social) => {
            return (
              <Card key={social.href} className="border-white/10 bg-card">
                <CardContent className="p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8">
                    <span
                      className="size-5 bg-primary"
                      aria-hidden="true"
                      style={{
                        WebkitMaskImage: `url("${social.logoSrc}")`,
                        maskImage: `url("${social.logoSrc}")`,
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-semibold">{social.label}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {social.priority
                      ? "Primary professional channel for review, contact, or collaboration."
                      : "Supporting channel for demos and deeper product proof."}
                  </p>
                  <Button asChild variant="ghost" className="mt-5 px-0 text-primary">
                    <Link href={social.href} target="_blank" rel="noreferrer">
                      Open
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
