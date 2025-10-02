import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/vendors";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}