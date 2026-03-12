import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/contact", "/blog", "/privacy", "/disclaimer"];
  const blogPosts = [
    "/blog/download-card-rummy",
    "/blog/how-to-deposit-money",
    "/blog/fix-ip-limit-exceeds",
    "/blog/how-to-withdraw-money",
    "/blog/best-games-to-play",
    "/blog/how-to-win-big",
  ];

  const routes: MetadataRoute.Sitemap = [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
    ...blogPosts.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
  return routes;
}
