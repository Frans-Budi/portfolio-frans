import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume hub for Frans Budi Kashira, Flutter Mobile Developer with fintech, education, and startup experience.",
};

export default function ResumePage() {
  return (
    <section className="container-page py-14">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.62fr_1fr] lg:items-center lg:gap-12">
        <div className="order-1">
          <div className="relative mx-auto aspect-4/5 w-2/3 overflow-hidden rounded-3xl border border-white/10 bg-card/70 sm:w-50 lg:mx-0 lg:w-full lg:max-w-sm">
            <Image
              src="/image/frans-transparant.webp"
              alt="Frans Budi Kashira portrait"
              fill
              sizes="(max-width: 640px) 10rem, (max-width: 1024px) 12rem, 22rem"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="order-2">
          <SectionHeader
            eyebrow="Resume"
            title="Download the format that fits your review flow."
            description="Choose the CV or the resume version, or contact me directly if you want to discuss a role, freelance work, or product collaboration."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
            <Button asChild className="h-12 justify-center bg-primary text-primary-foreground">
              <Link href={siteConfig.cvUrl} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <Download className="size-4" />
                  Download CV
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 justify-center">
              <Link href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <Download className="size-4" />
                  Download Resume
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 justify-between sm:col-span-2 lg:col-span-1"
            >
              <Link href="/contact">
                <span className="inline-flex items-center gap-2">Contact Frans</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
