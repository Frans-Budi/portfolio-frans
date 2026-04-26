"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ImagePreviewDialog } from "@/components/ui/image-preview-dialog";
import { navItems, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHomepage) return;

    const delta = latest - lastScrollY.current;

    if (latest <= 24 || isSheetOpen || isProfileDialogOpen) {
      setIsHeaderHidden(false);
      lastScrollY.current = latest;
      return;
    }

    if (Math.abs(delta) < 6) return;

    if (delta > 0 && latest > 96) {
      setIsHeaderHidden(true);
    } else if (delta < 0) {
      setIsHeaderHidden(false);
    }

    lastScrollY.current = latest;
  });

  const shouldHide = isHomepage && isHeaderHidden && !isSheetOpen && !isProfileDialogOpen;

  return (
    <>
      <motion.header
        className={cn(
          "sticky inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-background/82 backdrop-blur-xl",
          shouldHide && "pointer-events-none",
        )}
        initial={false}
        animate={shouldHide ? { y: "-100%", opacity: 0.08 } : { y: "0%", opacity: 1 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="container-page flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <ImagePreviewDialog
              src="/image/frans-profile.webp"
              alt="Frans Budi Kashira profile photo"
              title="Profile image preview"
              triggerAriaLabel="Open profile image"
              priority
              open={isProfileDialogOpen}
              onOpenChange={setIsProfileDialogOpen}
              trigger={
                <button
                  type="button"
                  className="relative size-9 cursor-pointer overflow-hidden rounded-xl border border-primary/30 bg-primary/10 shadow-[0_0_35px_rgba(92,225,230,0.18)] transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <Image
                    src="/image/frans-profile.webp"
                    alt="Frans Budi Kashira profile photo"
                    fill
                    sizes="36px"
                    className="object-cover"
                    priority
                  />
                </button>
              }
            />
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
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
      </motion.header>
    </>
  );
}
