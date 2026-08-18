import { Instagram, MapPin, Phone } from "lucide-react";
import { clinic, navLinks } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="surface-petrol">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-3xl tracking-[0.28em]">
            {clinic.name.toUpperCase()}
          </span>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground/70">
            {clinic.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Salutte Clinic"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Salutte Clinic"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {navLinks
              .filter((l) => l.label !== "Diferenciais")
              .map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={clinic.phoneHref} className="hover:text-gold">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {clinic.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{clinic.address.full}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="container-page py-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {clinic.name} {clinic.tagline}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
