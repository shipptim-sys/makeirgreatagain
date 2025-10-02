import { MetadataRoute } from "next";
import { SITE_URL, VENDORS } from "@/data/vendors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date().toISOString();

  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 }
  ];

  VENDORS.forEach(v => {
    items.push({
      url: `${base}/vendors/${v.slug}`,
      lastModified: v.lastVerified,
      changeFrequency: "monthly",
      priority: 0.8
    });
  });

  return items;
}