/**
 * Conteúdo editável do site da Salutte Clinic.
 * A equipe da clínica pode alterar textos, links, procedimentos e depoimentos
 * apenas editando este arquivo — nenhum componente precisa ser modificado.
 */

import heroClinic from "@/assets/hero-clinic.jpg";
import sobreAtendimento from "@/assets/sobre-atendimento.jpg";
import procFacial from "@/assets/proc-facial.jpg";
import procCorporal from "@/assets/proc-corporal.jpg";
import procMassagem from "@/assets/proc-massagem.jpg";
import procSobrancelhas from "@/assets/proc-sobrancelhas.jpg";
import galeriaRecepcao from "@/assets/galeria-recepcao.jpg";
import galeriaDetalhe from "@/assets/galeria-detalhe.jpg";

export const clinic = {
  name: "Salutte",
  tagline: "Clinic e Estética Avançada",
  phone: "(64) 3453-0636",
  phoneHref: "tel:+556434530636",
  whatsapp: "(64) 98460-0002",
  whatsappUrl: "https://api.whatsapp.com/send?phone=5564984600002",
  instagramUrl: "https://www.instagram.com/", // editável
  address: {
    line1: "Av. E, 1 - Quadra 89, Lote 28",
    line2: "Itanhangá — Caldas Novas, GO",
    zip: "CEP 75680-368",
    full: "Av. E, 1 - Quadra 89, Lote 28 - Itanhangá, Caldas Novas - GO, 75680-368",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Salutte+Clinic+e+Est%C3%A9tica+Avan%C3%A7ada+Caldas+Novas",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Av.+E,+1+-+Quadra+89,+Lote+28+-+Itanhang%C3%A1,+Caldas+Novas+-+GO,+75680-368&output=embed",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Salutte+Clinic+e+Est%C3%A9tica+Avan%C3%A7ada+Caldas+Novas",
  rating: "4,8",
  reviewCount: "312+",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  headline: "Sua beleza, seu cuidado, sua melhor versão.",
  text: "Na Salutte Clinic, unimos estética avançada, tecnologia e atendimento humanizado para proporcionar resultados e experiências que valorizam você.",
  image: heroClinic,
  imageAlt: "Sala de atendimento da Salutte Clinic e Estética Avançada",
};

export const sobre = {
  title: "Cuidado que vai além da estética",
  paragraphs: [
    "A Salutte Clinic e Estética Avançada nasceu para proporcionar uma experiência diferenciada em cuidados estéticos. Cada atendimento é pensado de forma individualizada, unindo conhecimento, tecnologia, segurança e atenção aos detalhes.",
    "Do primeiro contato ao pós-procedimento, cada etapa é conduzida com acolhimento e transparência, para que você se sinta confortável e bem orientada em toda a sua jornada.",
  ],
  image: sobreAtendimento,
  imageAlt: "Profissional da Salutte Clinic durante um atendimento",
};

/** Categorias de procedimentos — edite livremente nomes, descrições e imagens. */
export const procedimentos = [
  {
    name: "Estética facial",
    description:
      "Cuidados voltados à saúde e à harmonia da pele do rosto, definidos após avaliação individual.",
    image: procFacial,
  },
  {
    name: "Estética corporal",
    description:
      "Protocolos corporais planejados de acordo com os objetivos e as necessidades de cada cliente.",
    image: procCorporal,
  },
  {
    name: "Massagens",
    description:
      "Técnicas manuais para relaxamento e bem-estar, conduzidas por profissionais da equipe.",
    image: procMassagem,
  },
  {
    name: "Sobrancelhas",
    description:
      "Design e cuidados de sobrancelhas com foco na proporção natural de cada rosto.",
    image: procSobrancelhas,
  },
  {
    name: "Tratamentos estéticos",
    description:
      "Diferentes linhas de tratamento disponíveis na clínica, apresentadas durante a avaliação.",
    image: galeriaDetalhe,
  },
  {
    name: "Procedimentos personalizados",
    description:
      "Combinações de cuidados montadas sob medida a partir do seu perfil e dos seus objetivos.",
    image: galeriaRecepcao,
  },
];

export const diferenciais = [
  {
    title: "Atendimento humanizado",
    text: "Cada cliente é tratado com atenção, respeito e cuidado.",
    icon: "heart" as const,
  },
  {
    title: "Equipe especializada",
    text: "Profissionais preparados para oferecer uma experiência segura e de qualidade.",
    icon: "users" as const,
  },
  {
    title: "Ambiente acolhedor",
    text: "Um espaço pensado para proporcionar conforto e tranquilidade.",
    icon: "home" as const,
  },
  {
    title: "Tecnologia e inovação",
    text: "Soluções modernas para tratamentos e cuidados estéticos.",
    icon: "sparkles" as const,
  },
  {
    title: "Experiência personalizada",
    text: "Cada atendimento considera as necessidades e objetivos individuais.",
    icon: "compass" as const,
  },
];

/** Depoimentos reais recebidos pela clínica. */
export const depoimentos = [
  {
    text: "Fui muito bem atendida. Recepção nota 1000, todos muito atenciosos.",
  },
  {
    text: "Fiz meu tratamento com a Dra. Marina e super recomendo.",
  },
  {
    text: "Amei a experiência! Fiz massagem pós enzimas e foi perfeita. Profissional muito competente e cuidadosa.",
  },
  {
    text: "Uma equipe extremamente prestativa! Todos os funcionários são muito atenciosos desde a marcação dos procedimentos até a realização.",
  },
];

/** Galeria — substitua por fotos reais da clínica quando disponíveis. */
export const galeria = [
  { src: galeriaRecepcao, alt: "Recepção da clínica (imagem ilustrativa)" },
  { src: heroClinic, alt: "Sala de procedimentos (imagem ilustrativa)" },
  { src: procMassagem, alt: "Sala de massagem (imagem ilustrativa)" },
  { src: galeriaDetalhe, alt: "Produtos e materiais (imagem ilustrativa)" },
  { src: sobreAtendimento, alt: "Atendimento na clínica (imagem ilustrativa)" },
  { src: procSobrancelhas, alt: "Design de sobrancelhas (imagem ilustrativa)" },
];
