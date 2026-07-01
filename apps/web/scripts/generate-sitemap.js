/**
 * Dynamic Sitemap Generator for Marigold Magick
 * Run this script to generate an updated sitemap with current products
 * Usage: node scripts/generate-sitemap.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = "https://marigoldmagick.com";
const OUTPUT_DIR = path.join(__dirname, "../public");

// Static pages configuration
const staticPages = [
  {
    url: "/",
    changefreq: "weekly",
    priority: "1.0",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: "0.9",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/services",
    changefreq: "weekly",
    priority: "0.9",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/contact",
    changefreq: "monthly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/testimonials",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    url: "/success",
    changefreq: "yearly",
    priority: "0.3",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

// Generate XML for a single URL
function generateUrlXml(page) {
  return `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
}

// Generate main sitemap
function generateMainSitemap() {
  const urls = staticPages.map(generateUrlXml).join("\n\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls}

</urlset>`;

  return sitemap;
}

// Generate sitemap index
function generateSitemapIndex() {
  const today = new Date().toISOString().split("T")[0];

  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  
  <sitemap>
    <loc>${SITE_URL}/sitemap-products.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>

</sitemapindex>`;

  return index;
}

// Write files
function writeSitemaps() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Write main sitemap
    const mainSitemap = generateMainSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, "sitemap.xml"), mainSitemap, "utf8");
    console.log("✓ Generated sitemap.xml");

    // Write sitemap index
    const sitemapIndex = generateSitemapIndex();
    fs.writeFileSync(
      path.join(OUTPUT_DIR, "sitemap-index.xml"),
      sitemapIndex,
      "utf8",
    );
    console.log("✓ Generated sitemap-index.xml");

    console.log("\n✅ All sitemaps generated successfully!");
    console.log(`📍 Location: ${OUTPUT_DIR}`);
    console.log(`🌐 Submit to: https://search.google.com/search-console`);
  } catch (error) {
    console.error("❌ Error generating sitemaps:", error);
    process.exit(1);
  }
}

// Run the generator
console.log("🚀 Generating sitemaps for Marigold Magick...\n");
writeSitemaps();

export { generateMainSitemap, generateSitemapIndex, writeSitemaps };
