import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

function CtaAssetIcon({ src, className }: { src: string; className: string }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

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
          <div className="border-t border-white/10 bg-black/10 p-8 sm:p-10 md:border-l md:border-t-0">
            <div className="flex flex-col gap-3">
              <Button
                asChild
                className="h-12 justify-between font-semibold rounded-lg bg-primary px-4 text-primary-foreground"
              >
                <Link href={`mailto:${siteConfig.email}`}>
                  <span className="inline-flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/12">
                      <CtaAssetIcon
                        src="/social-media-logo/gmail.svg"
                        className="size-4 bg-primary-foreground"
                      />
                    </span>
                    Discuss a Project
                  </span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 justify-between rounded-lg px-4">
                <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                  <span className="inline-flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white/6">
                      <CtaAssetIcon
                        src="/social-media-logo/whatsapp.svg"
                        className="size-4 bg-current"
                      />
                    </span>
                    Chat on WhatsApp
                  </span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="h-12 justify-between rounded-lg px-4">
                <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                  <span className="inline-flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white/6">
                      <Download className="size-4" />
                    </span>
                    Download CV
                  </span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Best for freelance inquiries, product collaboration, and project discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
