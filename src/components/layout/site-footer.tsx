import Link from "next/link";
import { navItems, siteConfig, socials } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Flutter-focused mobile developer building real-world products across
            fintech, education, startup, and freelance product development.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Navigation</p>
          <div className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Connect</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                  aria-label={social.label}
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{siteConfig.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Built as a static
        product-focused portfolio.
      </div>
    </footer>
  );
}
