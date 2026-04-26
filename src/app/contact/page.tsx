import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Frans Budi Kashira for Flutter mobile development, fintech workflows, Firebase apps, and freelance product work.",
};

export default function ContactPage() {
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
      </div>
    </section>
  );
}
