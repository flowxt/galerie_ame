export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout/", "/_next/", "/admin/"],
    },
    sitemap: "https://atelierartame.com/sitemap.xml",
  };
}

