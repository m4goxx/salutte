import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic, navLinks } from "@/content/site";
import { WhatsAppCta } from "./WhatsAppButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
        <a href="#inicio" className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.28em] text-primary">
            {clinic.name.toUpperCase()}
          </span>
          <span className="mt-1 truncate text-[0.6rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {clinic.tagline}
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[0.8125rem] font-medium text-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <WhatsAppCta className="hidden px-5 py-2.5 md:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius)] border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Menu móvel"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-sm text-foreground/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <WhatsAppCta className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
