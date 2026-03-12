import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

type BlogMetaParams = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
};

/** Generates metadata with canonical + openGraph for blog posts */
export function blogMetadata({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  keywords = [],
}: BlogMetaParams): Metadata {
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: datePublished,
      modifiedTime: dateModified,
      siteName: "Card Rummy Pakistan",
      images: [{ url: `${SITE_URL}/card-rummy.webp`, width: 1200, height: 630, alt: "Card Rummy App" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** HowTo JSON-LD — helps AI assistants (Google AI, ChatGPT, Perplexity) parse and cite your step-by-step guides */
export function howToSchema(params: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    url: params.url,
    ...(params.image && { image: params.image }),
    step: params.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    publisher: { "@type": "Organization", name: "Card Rummy", url: SITE_URL },
  };
}

/** Generates Article JSON-LD for blog posts */
export function articleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const image = params.image || `${SITE_URL}/card-rummy.webp`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    ...(params.dateModified && { dateModified: params.dateModified }),
    image: image,
    author: { "@type": "Organization", name: "Card Rummy" },
    publisher: {
      "@type": "Organization",
      name: "Card Rummy",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/card-rummy.webp` },
    },
  };
}
