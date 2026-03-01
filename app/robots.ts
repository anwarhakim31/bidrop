import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: process.env.NEXT_PUBLIC_URL + "/sitemap.xml",
    host: process.env.NEXT_PUBLIC_URL || "https://bidropproduction.com",
  };
}
