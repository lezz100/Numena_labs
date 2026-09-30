import type { Metadata } from "next";

export const siteName = "Numena Labs";

// NEXT_PUBLIC_SITE_URL wins once the custom domain is set; until then Vercel's
// production URL keeps canonical, OG and sitemap links absolute and correct.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const ogImageAlt =
  "Numena Labs — WhatsApp-first systems for East African service businesses";

// Served by app/opengraph-image.tsx; listed explicitly because a page-level
// openGraph object would otherwise drop the root image.
const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: ogImageAlt };

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

// openGraph merges shallowly across segments, so every page must carry the full object.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_KE",
      siteName,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}
