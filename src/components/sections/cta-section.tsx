import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function CtaSection() {
  return (
    <section className="section-shell section-cta">
      <div className="container-page py-16">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/3 md:grid-cols-[1.3fr_0.7fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Available for product work
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Need a Flutter developer who can think beyond screens?
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              I can help with mobile-first product delivery, fintech workflows, Firebase-backed
              apps, and polished case-study-ready product execution.
            </p>
          </div>
          <div className="grid gap-3 border-t border-white/10 bg-black/10 p-8 sm:p-10 md:border-l md:border-t-0">
            <Button asChild className="h-11 justify-between bg-primary text-primary-foreground">
              <Link href={`mailto:${siteConfig.email}`}>
                <span className="inline-flex items-center gap-2">
                  <Mail className="size-4" />
                  Email Me
                </span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 justify-between">
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4" />
                  WhatsApp
                </span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="h-11 justify-between">
              <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <Download className="size-4" />
                  Download CV
                </span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
