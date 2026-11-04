const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const blogImgDir = path.join(imagesDir, 'blog');

[publicDir, imagesDir, blogImgDir].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function saveAll(filename, sharpPipeline) {
  const buf = await sharpPipeline.webp({ quality: 92 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, filename), buf);
  fs.writeFileSync(path.join(imagesDir, filename), buf);
  fs.writeFileSync(path.join(blogImgDir, filename), buf);
  console.log(`Saved ${filename} (${buf.length} bytes) to public, images, and images/blog`);
}

async function main() {
  console.log('Generating Book Celebrity for Event WebP assets...');

  // ---------------------------------------------------------------------------
  // 1. HERO BANNER: book-celebrity-for-event.webp (1200 x 630)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 630;

    const photoBuf = await sharp(path.join(imagesDir, 'harshita-speaking.jpg'))
      .resize(560, 630, { fit: 'cover', position: 'top' })
      .toBuffer();

    const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08080c"/>
          <stop offset="55%" stop-color="#14111c"/>
          <stop offset="100%" stop-color="#0c0914"/>
        </linearGradient>
        <linearGradient id="fadeEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0c0914" stop-opacity="1"/>
          <stop offset="45%" stop-color="#0c0914" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#0c0914" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="60%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="roseAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f472b6"/>
          <stop offset="100%" stop-color="#d89ba4"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Ambient Glows -->
      <circle cx="160" cy="140" r="280" fill="#f59e0b" opacity="0.10" filter="blur(65px)"/>
      <circle cx="640" cy="460" r="240" fill="#d89ba4" opacity="0.09" filter="blur(70px)"/>

      <!-- Grid lines -->
      <path d="M 0 100 L 1200 100 M 0 250 L 1200 250 M 0 430 L 1200 430" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      <path d="M 160 0 L 160 630 M 420 0 L 420 630 M 680 0 L 680 630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

      <!-- Left Content Group -->
      <g transform="translate(60, 48)">
        <!-- Category Badge -->
        <rect x="0" y="0" width="375" height="34" rx="17" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#f59e0b"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#fcd34d" letter-spacing="1.5">CELEBRITY EVENT BOOKINGS · INDIA</text>

        <!-- Main Title -->
        <text x="0" y="86" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Book Celebrity for Event</text>
        <text x="0" y="132" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="url(#goldAccent)" letter-spacing="-0.5">Complete Guide in India</text>

        <!-- Subtitle -->
        <text x="0" y="176" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#cbd5e1" font-weight="400">
          <tspan x="0" dy="0">Corporate Events, Product Launches, Award Ceremonies &amp; Bollywood</tspan>
          <tspan x="0" dy="23">Appearances with Harshita Dagha &amp; Beingblahblah Mumbai.</tspan>
        </text>

        <!-- 3 Feature Columns -->
        <g transform="translate(0, 240)">
          <rect x="0" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#fbbf24">🏢</text>
          <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Corporate &amp; Summits</text>
          <text x="20" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Conferences, keynotes &amp;</text>
          <text x="20" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">annual day celebrations</text>

          <rect x="200" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="220" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#f472b6">🎬</text>
          <text x="220" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Bollywood &amp; Stars</text>
          <text x="220" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Launches, inaugurations</text>
          <text x="220" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">&amp; guest of honour</text>

          <rect x="400" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="420" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#38bdf8">📝</text>
          <text x="420" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Contracts &amp; PR</text>
          <text x="420" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Legal riders, usage rights</text>
          <text x="420" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">&amp; campaign synergy</text>
        </g>

        <!-- Host Footer -->
        <g transform="translate(0, 386)">
          <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA · BEINGBLAHBLAH</text>
          <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#fbbf24">16+ Years PR &amp; Branding Strategist · Podcast Host · TEDx Speaker</text>
          <text x="0" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Bandra Kurla Complex (BKC), Mumbai · www.harshitadagha.in</text>
        </g>
      </g>

      <!-- Gradient blend on right side photo -->
      <rect x="640" y="0" width="200" height="${height}" fill="url(#fadeEdge)"/>
    </svg>
    `;

    const pipeline = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 8, g: 8, b: 12, alpha: 1 }
      }
    }).composite([
      { input: photoBuf, left: 680, top: 0 },
      { input: Buffer.from(svgOverlay), left: 0, top: 0 }
    ]);

    await saveAll('book-celebrity-for-event.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 2. 6-STEP PROCESS INFOGRAPHIC: how-to-book-celebrity-for-event-in-india.webp (1200 x 675)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 675;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08080d"/>
          <stop offset="50%" stop-color="#12101a"/>
          <stop offset="100%" stop-color="#06060a"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.07)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#scBg)"/>

      <circle cx="180" cy="110" r="240" fill="#f59e0b" opacity="0.08" filter="blur(65px)"/>
      <circle cx="1020" cy="540" r="260" fill="#d89ba4" opacity="0.07" filter="blur(75px)"/>

      <!-- Header -->
      <g transform="translate(60, 40)">
        <rect x="0" y="0" width="375" height="30" rx="15" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1"/>
        <text x="187" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">END-TO-END BOOKING FRAMEWORK</text>

        <text x="0" y="66" font-family="'Georgia', serif" font-size="30" font-weight="bold" fill="#ffffff">How to Book a Celebrity for an Event in India</text>
        <text x="0" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#94a3b8">
          The 6-Step Operational Blueprint for Seamless Celebrity Appearances
        </text>
      </g>

      <!-- 6 Columns Grid -->
      <g transform="translate(60, 150)">
        <!-- Step 1 -->
        <g transform="translate(0, 0)">
          <rect width="170" height="420" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="16" y="16" width="38" height="38" rx="10" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="35" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#fbbf24" text-anchor="middle">01</text>
          <text x="16" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="bold" fill="#ffffff">Define Brief</text>
          <text x="16" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Event purpose</text>
          <text x="16" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Date &amp; city</text>
          <text x="16" y="145" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Venue format</text>
          <text x="16" y="165" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Audience size</text>
          <text x="16" y="185" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Approx budget</text>
          <text x="16" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" fill="#94a3b8">
            <tspan x="16" dy="0">Comprehensive</tspan>
            <tspan x="16" dy="15">brief enables</tspan>
            <tspan x="16" dy="15">focused talent</tspan>
            <tspan x="16" dy="15">shortlisting.</tspan>
          </text>
        </g>

        <!-- Step 2 -->
        <g transform="translate(182, 0)">
          <rect width="170" height="420" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="16" y="16" width="38" height="38" rx="10" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="35" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#f472b6" text-anchor="middle">02</text>
          <text x="16" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="bold" fill="#ffffff">Talent Audit</text>
          <text x="16" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Target audience</text>
          <text x="16" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Theme relevance</text>
          <text x="16" y="145" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Public image</text>
          <text x="16" y="165" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Keynote vs glam</text>
          <text x="16" y="185" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Brand safety</text>
          <text x="16" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" fill="#94a3b8">
            <tspan x="16" dy="0">Evaluate fit</tspan>
            <tspan x="16" dy="15">over sheer</tspan>
            <tspan x="16" dy="15">celebrity</tspan>
            <tspan x="16" dy="15">popularity.</tspan>
          </text>
        </g>

        <!-- Step 3 -->
        <g transform="translate(364, 0)">
          <rect width="170" height="420" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="16" y="16" width="38" height="38" rx="10" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="35" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#38bdf8" text-anchor="middle">03</text>
          <text x="16" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="bold" fill="#ffffff">Availability</text>
          <text x="16" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Date verification</text>
          <text x="16" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Shoot calendars</text>
          <text x="16" y="145" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Commercial quotes</text>
          <text x="16" y="165" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Scope inclusions</text>
          <text x="16" y="185" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Authorised desk</text>
          <text x="16" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" fill="#94a3b8">
            <tspan x="16" dy="0">Check schedule</tspan>
            <tspan x="16" dy="15">and fee structure</tspan>
            <tspan x="16" dy="15">via authorized</tspan>
            <tspan x="16" dy="15">representatives.</tspan>
          </text>
        </g>

        <!-- Step 4 -->
        <g transform="translate(546, 0)">
          <rect width="170" height="420" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="16" y="16" width="38" height="38" rx="10" fill="rgba(167, 139, 250, 0.15)"/>
          <text x="35" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#a78bfa" text-anchor="middle">04</text>
          <text x="16" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="bold" fill="#ffffff">Format Lock</text>
          <text x="16" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Unveiling / Launch</text>
          <text x="16" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Award handing</text>
          <text x="16" y="145" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Stage anchoring</text>
          <text x="16" y="165" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Live performance</text>
          <text x="16" y="185" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Media byte time</text>
          <text x="225" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" fill="#94a3b8">
            <tspan x="16" dy="0">Explicitly lock</tspan>
            <tspan x="16" dy="15">deliverables</tspan>
            <tspan x="16" dy="15">to avoid on-site</tspan>
            <tspan x="16" dy="15">mismatches.</tspan>
          </text>
        </g>

        <!-- Step 5 -->
        <g transform="translate(728, 0)">
          <rect width="170" height="420" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="16" y="16" width="38" height="38" rx="10" fill="rgba(52, 211, 153, 0.15)"/>
          <text x="35" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#34d399" text-anchor="middle">05</text>
          <text x="16" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="bold" fill="#ffffff">Travel &amp; Riders</text>
          <text x="16" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Business flights</text>
          <text x="16" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• 5-star suites</text>
          <text x="16" y="145" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Luxury transfers</text>
          <text x="16" y="165" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Security escort</text>
          <text x="16" y="185" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Glam team rider</text>
          <text x="16" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" fill="#94a3b8">
            <tspan x="16" dy="0">Hospitality</tspan>
            <tspan x="16" dy="15">and logistical</tspan>
            <tspan x="16" dy="15">arrangements</tspan>
            <tspan x="16" dy="15">locked in brief.</tspan>
          </text>
        </g>

        <!-- Step 6 -->
        <g transform="translate(910, 0)">
          <rect width="170" height="420" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="16" y="16" width="38" height="38" rx="10" fill="rgba(251, 191, 36, 0.15)"/>
          <text x="35" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#fbbf24" text-anchor="middle">06</text>
          <text x="16" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="bold" fill="#ffffff">Legal Terms</text>
          <text x="16" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Signed agreement</text>
          <text x="16" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Payment schedule</text>
          <text x="16" y="145" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Usage / IP rights</text>
          <text x="16" y="165" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Postponement clause</text>
          <text x="16" y="185" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#cbd5e1" font-weight="600">• Media release</text>
          <text x="16" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" fill="#94a3b8">
            <tspan x="16" dy="0">Written contract</tspan>
            <tspan x="16" dy="15">guarantees</tspan>
            <tspan x="16" dy="15">clarity and</tspan>
            <tspan x="16" dy="15">accountability.</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Tagline -->
      <g transform="translate(60, 615)">
        <text x="0" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748b">
          Harshita Dagha · Beingblahblah Celebrity Marketing &amp; Corporate PR Advisory · Mumbai &amp; Pan-India
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('how-to-book-celebrity-for-event-in-india.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 3. COST FACTORS INFOGRAPHIC: celebrity-event-booking-cost-factors.webp (1200 x 675)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 675;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eqBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08080d"/>
          <stop offset="50%" stop-color="#14111d"/>
          <stop offset="100%" stop-color="#08080c"/>
        </linearGradient>
        <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#eqBg)"/>

      <circle cx="1060" cy="140" r="260" fill="#f59e0b" opacity="0.08" filter="blur(75px)"/>
      <circle cx="140" cy="540" r="240" fill="#f472b6" opacity="0.07" filter="blur(75px)"/>

      <!-- Header -->
      <g transform="translate(60, 42)">
        <rect x="0" y="0" width="370" height="30" rx="15" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1"/>
        <text x="185" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">COST &amp; BUDGET EVALUATION</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">How Much Does It Cost to Book a Celebrity for an Event?</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          The 5 Key Commercial Factors Governing Celebrity Appearance Fees in India
        </text>
      </g>

      <!-- 4 Pillars in 2x2 Grid -->
      <g transform="translate(60, 160)">
        <!-- Card 1 -->
        <g transform="translate(0, 0)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#fbbf24" text-anchor="middle">🌟</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Celebrity Popularity &amp; Demand</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#fbbf24">A-list film stars, icons vs emerging talent &amp; creators</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• National icon vs regional appeal vs specialized industry expert</tspan>
            <tspan x="24" dy="20">• Date popularity (peak corporate quarter-ends and wedding seasons)</tspan>
            <tspan x="24" dy="20">• Current cinema releases, TV broadcast schedules, or sporting tours</tspan>
          </text>
        </g>

        <!-- Card 2 -->
        <g transform="translate(555, 0)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#f472b6" text-anchor="middle">🎭</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Appearance Type &amp; Deliverables</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#f472b6">Guest appearance vs performance vs stage hosting</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Brief 15-30 min ribbon-cutting or stage appearance vs live musical set</tspan>
            <tspan x="24" dy="20">• Keynote address, fireside chat, or award felicitation duties</tspan>
            <tspan x="24" dy="20">• VIP meet-and-greets and media interview commitments</tspan>
          </text>
        </g>

        <!-- Card 3 -->
        <g transform="translate(0, 210)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#38bdf8" text-anchor="middle">✈️</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Event City &amp; Hospitality Riders</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#38bdf8">Travel, 5-star suites, security &amp; glam squad</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Business class airfares for celebrity and key management personnel</tspan>
            <tspan x="24" dy="20">• 5-star hotel presidential / luxury suites with dedicated security</tspan>
            <tspan x="24" dy="20">• Hair, makeup, styling riders and luxury local transfers</tspan>
          </text>
        </g>

        <!-- Card 4 -->
        <g transform="translate(555, 210)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(167, 139, 250, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#a78bfa" text-anchor="middle">📢</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Promotional, Media &amp; IP Rights</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#a78bfa">Internal event footage vs public commercial advertising</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Event attendance is strictly separate from commercial endorsement</tspan>
            <tspan x="24" dy="20">• Social media posts, digital campaigns, and television usage licenses</tspan>
            <tspan x="24" dy="20">• Clear written boundaries prevent unexpected intellectual property claims</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Tagline -->
      <g transform="translate(60, 620)">
        <text x="0" y="15" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748b">
          Harshita Dagha Maisheri · Beingblahblah Celebrity Marketing &amp; PR Advisory · Mumbai (BKC)
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('celebrity-event-booking-cost-factors.webp', pipeline);
  }

  console.log('✅ All Book Celebrity for Event WebP assets generated successfully!');
}

main().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});

