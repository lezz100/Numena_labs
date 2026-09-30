import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/work";
import { siteUrl } from "@/lib/site";

// Placeholder pages (privacy, terms, resources, careers) are noindex and left out.
const staticPaths = ["", "/services", "/industries", "/pricing", "/work", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...caseStudies.map((study) => `/work/${study.slug}`),
  ];

  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
