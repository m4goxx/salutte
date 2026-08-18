import { cn } from "@/lib/utils";
import { clinic } from "@/content/site";

type Variant = "solid" | "outline" | "gold" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] px-6 py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border border-primary/25 text-primary hover:border-primary hover:-translate-y-0.5",
  gold: "bg-gold text-primary-foreground hover:-translate-y-0.5 hover:shadow-lift",
  light:
    "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  className,
  external,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function WhatsAppCta({
  children = "Agendar avaliação",
  variant = "solid",
  className,
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string | undefined;
}) {
  return (
    <CtaLink href={clinic.whatsappUrl} variant={variant} className={className ?? ""} external>
      {children}
    </CtaLink>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Salutte Clinic pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.88 1.27h.01c5.5 0 9.97-4.47 9.97-9.97A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 18.18h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.06.8.82-2.99-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.56 3.71-8.28 8.28-8.28 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.57-3.71 8.2-8.33 8.2Zm4.54-6.16c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
