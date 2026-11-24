import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/journal/first-light/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
