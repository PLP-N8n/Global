import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "public", "images", "og-image.jpg");

const WIDTH = 1200;
const HEIGHT = 630;

// Create a branded OG image with dark background and gold accents
async function generate() {
  // Dark gradient background with subtle texture
  const svgOverlay = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0B0C10;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#12141A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0B0C10;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#C9A96E;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#E8D5A8;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

      <!-- Subtle grid pattern -->
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,169,110,0.04)" stroke-width="1" />
      </pattern>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

      <!-- Gold accent line top -->
      <rect x="80" y="160" width="80" height="3" fill="url(#gold)" rx="1.5" />

      <!-- Main title -->
      <text x="80" y="230" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#FFFFFF" letter-spacing="-2">
        Global
      </text>
      <text x="345" y="230" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#C9A96E" letter-spacing="-2">
        Telecom
      </text>

      <!-- Subtitle -->
      <text x="80" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="rgba(255,255,255,0.7)" letter-spacing="1">
        Electronics &amp; Mobile Store
      </text>

      <!-- Location -->
      <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="rgba(255,255,255,0.45)" letter-spacing="2">
        Panipat, Haryana · Since 1997
      </text>

      <!-- Brand pills -->
      <text x="80" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="rgba(255,255,255,0.35)" letter-spacing="3" text-transform="uppercase">
        Samsung · Apple · Vivo · OnePlus · Xiaomi · Oppo · Realme
      </text>

      <!-- Gold accent line bottom -->
      <rect x="80" y="470" width="1040" height="1" fill="rgba(201,169,110,0.15)" />

      <!-- Contact info -->
      <text x="80" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="rgba(201,169,110,0.8)" letter-spacing="1">
        +91 98126 33000
      </text>
      <text x="80" y="555" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="rgba(255,255,255,0.3)" letter-spacing="1">
        global-telecom-panipat.com
      </text>

      <!-- Decorative corner accents -->
      <rect x="${WIDTH - 120}" y="160" width="40" height="2" fill="rgba(201,169,110,0.3)" />
      <rect x="${WIDTH - 82}" y="160" width="2" height="40" fill="rgba(201,169,110,0.3)" />

      <rect x="80" y="${HEIGHT - 80}" width="2" height="40" fill="rgba(201,169,110,0.15)" />
      <rect x="80" y="${HEIGHT - 42}" width="40" height="2" fill="rgba(201,169,110,0.15)" />
    </svg>
  `;

  await sharp(Buffer.from(svgOverlay))
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(OUTPUT);

  console.log(`OG image generated: ${OUTPUT}`);
}

generate().catch(console.error);
