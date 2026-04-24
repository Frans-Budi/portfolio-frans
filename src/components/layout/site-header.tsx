"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-background/82 backdrop-blur-xl">
        <div className="container-page flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              className="relative size-9 overflow-hidden cursor-pointer rounded-xl border border-primary/30 bg-primary/10 shadow-[0_0_35px_rgba(92,225,230,0.18)] transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label="Open profile image"
            >
              <Image
                src="/images/frans-profile.webp"
                alt="Frans Budi Kashira profile photo"
                fill
                className="object-cover"
                priority
              />
            </button>
            <Link href="/" className="hidden leading-tight sm:block">
              <span className="block font-heading text-sm font-semibold">{siteConfig.name}</span>
              <span className="block text-xs text-muted-foreground">{siteConfig.title}</span>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-muted-foreground hover:text-foreground",
                    active && "bg-white/5 text-foreground",
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="border-white/10 bg-card">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-3 bg-primary text-primary-foreground">
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {isProfileOpen ? (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setIsProfileOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile image preview"
        >
          <div className="w-full max-w-md" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                className="rounded-full border-white/15 bg-background/80 backdrop-blur cursor-pointer"
                onClick={() => setIsProfileOpen(false)}
                aria-label="Close profile image preview"
              >
                <X className="size-6" />
              </Button>
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-white/10 bg-secondary shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/frans-profile.webp"
                alt="Frans Budi Kashira profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
