import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/salutte/Header";
import { Footer } from "@/components/salutte/Footer";
import { WhatsAppFloating } from "@/components/salutte/WhatsAppButton";
import {
  Avaliacoes,
  CtaFinal,
  Diferenciais,
  Galeria,
  Hero,
  Localizacao,
  Procedimentos,
  Sobre,
} from "@/components/salutte/Sections";
import { useReveal } from "@/hooks/use-reveal";
import { clinic } from "@/content/site";

const title = "Salutte Clinic e Estética Avançada | Caldas Novas - GO";
const description =
  "Estética avançada, tecnologia e atendimento humanizado em Caldas Novas - GO. Agende sua avaliação na Salutte Clinic pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Salutte Clinic e Estética Avançada",
          description,
          telephone: "+556434530636",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. E, 1 - Quadra 89, Lote 28",
            addressLocality: "Caldas Novas",
            addressRegion: "GO",
            postalCode: "75680-368",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "312",
          },
          url: clinic.mapsUrl,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Procedimentos />
        <Diferenciais />
        <Avaliacoes />
        <Galeria />
        <CtaFinal />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
