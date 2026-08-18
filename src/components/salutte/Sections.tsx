import {
  Compass,
  Heart,
  Home,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import {
  clinic,
  depoimentos,
  diferenciais,
  galeria,
  hero,
  procedimentos,
  sobre,
} from "@/content/site";
import { CtaLink, WhatsAppCta, WhatsAppIcon } from "./WhatsAppButton";

const icons = { heart: Heart, users: Users, home: Home, sparkles: Sparkles, compass: Compass };

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      <span
        className={align === "center" ? "gold-rule mx-auto mt-6" : "gold-rule mt-6"}
        aria-hidden="true"
      />
      {text && <p className="mt-6 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="surface-veil pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Caldas Novas — GO</p>
          <h1 className="mt-5 text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
            Sua beleza, seu cuidado,{" "}
            <span className="italic text-gold">sua melhor versão.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta />
            <CtaLink href="#procedimentos" variant="outline">
              Conhecer procedimentos
            </CtaLink>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            <div>
              <dt className="flex items-center gap-1 text-lg font-semibold text-primary">
                <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                {clinic.rating}/5
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground">Avaliação Google</dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-primary">{clinic.reviewCount}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">avaliações</dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-primary">Humanizado</dt>
              <dd className="mt-1 text-xs text-muted-foreground">Atendimento acolhedor</dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-primary">Especializados</dt>
              <dd className="mt-1 text-xs text-muted-foreground">Profissionais da área</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-gold lg:block" />
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1600}
            height={1200}
            className="relative aspect-[4/3] w-full rounded-[var(--radius)] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-[var(--radius)] bg-background px-6 py-4 shadow-soft lg:block">
            <p className="eyebrow">Salutte</p>
            <p className="mt-1 font-display text-lg text-primary">Estética avançada</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          <img
            src={sobre.image}
            alt={sobre.imageAlt}
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-[var(--radius)] object-cover shadow-soft"
          />
          <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-b border-r border-gold lg:block" />
        </div>

        <div className="reveal order-1 lg:order-2">
          <SectionHeading eyebrow="Sobre a Salutte" title={sobre.title} align="left" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            {sobre.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppCta variant="outline">Falar com a equipe</WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Procedimentos() {
  return (
    <section id="procedimentos" className="surface-veil py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Procedimentos"
          title="Cuidados pensados para você"
          text="Categorias de atendimento disponíveis na clínica. Os protocolos e indicações são definidos durante a sua avaliação individual."
        />

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {procedimentos.map((item) => (
            <li
              key={item.name}
              className="reveal group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl text-primary">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-gold"
                >
                  Saiba mais
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a Salutte?"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                className="reveal group rounded-[var(--radius)] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary transition-colors duration-500 group-hover:bg-gold-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="surface-veil py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem conhece, recomenda"
          text={`${clinic.rating} de 5 estrelas com base em mais de 312 avaliações.`}
        />

        <div className="mt-8 flex justify-center gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-5 w-5 fill-gold text-gold" />
          ))}
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {depoimentos.map((item) => (
            <li
              key={item.text.slice(0, 24)}
              className="reveal rounded-[var(--radius)] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/85">
                “{item.text}”
              </blockquote>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Cliente Salutte
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <CtaLink href={clinic.reviewsUrl} variant="outline" external>
            Ver mais avaliações
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

export function Galeria() {
  return (
    <section id="galeria" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Galeria"
          title="Um ambiente feito para acolher"
          text="Imagens ilustrativas — podem ser substituídas pelas fotos reais da clínica."
        />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galeria.map((img) => (
            <figure
              key={img.alt}
              className="reveal group overflow-hidden rounded-[var(--radius)] break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="surface-petrol py-20 lg:py-24">
      <div className="container-page text-center">
        <p className="eyebrow">Agendamento</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          Pronta para cuidar de você?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          Agende sua avaliação e descubra qual cuidado faz mais sentido para você.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppCta variant="gold">
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </WhatsAppCta>
        </div>
      </div>
    </section>
  );
}

export function Localizacao() {
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <SectionHeading eyebrow="Localização" title="Onde estamos" align="left" />

          <div className="mt-8 space-y-6 text-sm">
            <div>
              <p className="font-display text-2xl text-primary">
                Salutte Clinic e Estética Avançada
              </p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-muted-foreground">
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
                <br />
                {clinic.address.zip}
              </address>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={clinic.phoneHref} className="text-muted-foreground hover:text-primary">
                {clinic.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                {clinic.whatsapp}
              </a>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={clinic.mapsUrl} external>
              Como chegar
            </CtaLink>
            <WhatsAppCta variant="outline">Agendar avaliação</WhatsAppCta>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-[var(--radius)] border border-border shadow-soft">
          <iframe
            title="Mapa da localização da Salutte Clinic"
            src={clinic.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full lg:h-full lg:min-h-[440px]"
          />
        </div>
      </div>
    </section>
  );
}
