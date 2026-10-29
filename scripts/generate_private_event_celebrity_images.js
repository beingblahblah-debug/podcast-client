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
  console.log('Generating Book Celebrity for Private Event WebP assets...');

  // ---------------------------------------------------------------------------
  // 1. HERO BANNER: book-celebrity-for-private-event.webp (1200 x 630)
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
        <rect x="0" y="0" width="370" height="34" rx="17" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#f59e0b"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#fcd34d" letter-spacing="1.5">CELEBRITY PRIVATE EVENTS · INDIA</text>

        <!-- Main Title -->
        <text x="0" y="86" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Book Celebrity for</text>
        <text x="0" y="132" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="url(#goldAccent)" letter-spacing="-0.5">Private Events in India</text>

        <!-- Subtitle -->
        <text x="0" y="176" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#cbd5e1" font-weight="400">
          <tspan x="0" dy="0">Weddings, Birthdays, Anniversaries &amp; Luxury Celebrations</tspan>
          <tspan x="0" dy="23">with Professional Guidance by Harshita Dagha &amp; Beingblahblah.</tspan>
        </text>

        <!-- 3 Feature Columns -->
        <g transform="translate(0, 240)">
          <rect x="0" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#fbbf24">💍</text>
          <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Weddings &amp; Galas</text>
          <text x="20" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Tailored appearances,</text>
          <text x="20" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">performances &amp; greetings</text>

          <rect x="200" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="220" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#f472b6">📋</text>
          <text x="220" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Clear Commercials</text>
          <text x="220" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Transparent fee riders,</text>
          <text x="220" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">travel &amp; usage contracts</text>

          <rect x="400" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="420" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#38bdf8">🛡️</text>
          <text x="420" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Privacy &amp; Protocol</text>
          <text x="420" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">VIP security coordination</text>
          <text x="420" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">&amp; guest comfort</text>
        </g>

        <!-- Host Footer -->
        <g transform="translate(0, 386)">
          <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA · BEINGBLAHBLAH</text>
          <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#fbbf24">16+ Years Branding &amp; Celebrity PR Strategist · Mumbai &amp; Pan-India</text>
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

    await saveAll('book-celebrity-for-private-event.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 2. PROCESS INFOGRAPHIC: private-event-celebrity-booking-process.webp (1200 x 675)
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
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#f59e0b"/>
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
      <g transform="translate(60, 42)">
        <rect x="0" y="0" width="375" height="30" rx="15" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1"/>
        <text x="187" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">PRIVATE EVENT CELEBRITY BOOKING</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">The 4-Step Private Event Booking Process</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          A Professional Coordination Guide for Weddings, Birthdays &amp; Exclusive Gatherings
        </text>
      </g>

      <!-- 4 Columns Grid -->
      <g transform="translate(60, 160)">
        <!-- Step 1 -->
        <g transform="translate(0, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#fbbf24" text-anchor="middle">01</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Define Event Brief</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Occasion &amp; theme</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Date, city &amp; venue</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Approximate guest count</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Approximate budget</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">A clear initial brief</tspan>
            <tspan x="20" dy="18">focuses the inquiry and</tspan>
            <tspan x="20" dy="18">enables exact talent</tspan>
            <tspan x="20" dy="18">availability checks.</tspan>
          </text>
        </g>

        <!-- Step 2 -->
        <g transform="translate(275, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#f472b6" text-anchor="middle">02</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Terms &amp; Proposal</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Appearance duration</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Performance vs greeting</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Travel &amp; stay riders</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• All-inclusive fee scope</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">Transparent quotes</tspan>
            <tspan x="20" dy="18">separating professional</tspan>
            <tspan x="20" dy="18">fees from hospitality</tspan>
            <tspan x="20" dy="18">and production riders.</tspan>
          </text>
        </g>

        <!-- Step 3 -->
        <g transform="translate(550, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#38bdf8" text-anchor="middle">03</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Written Agreement</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Date &amp; exact timing</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Milestone payments</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Photography/video rights</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Cancellation terms</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">Formal documentation</tspan>
            <tspan x="20" dy="18">protects both organiser</tspan>
            <tspan x="20" dy="18">and celebrity with</tspan>
            <tspan x="20" dy="18">unambiguous terms.</tspan>
          </text>
        </g>

        <!-- Step 4 -->
        <g transform="translate(825, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(167, 139, 250, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#a78bfa" text-anchor="middle">04</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Event Day Execution</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Nominated liaison</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• VIP arrival &amp; security</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Stage &amp; session flow</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Seamless departure</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">Disciplined operational</tspan>
            <tspan x="20" dy="18">coordination ensures an</tspan>
            <tspan x="20" dy="18">unforgettable, smooth</tspan>
            <tspan x="20" dy="18">celebration for guests.</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Tagline -->
      <g transform="translate(60, 610)">
        <text x="0" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748b">
          Harshita Dagha · Beingblahblah Celebrity Marketing &amp; Private Event Advisory · Mumbai &amp; Pan-India
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('private-event-celebrity-booking-process.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 3. COST FACTORS INFOGRAPHIC: celebrity-private-event-cost-factors.webp (1200 x 675)
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
        <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#f59e0b"/>
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

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">What Determines Celebrity Booking Costs?</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          The 4 Core Factors Governing Private Event Quotations in India
        </text>
      </g>

      <!-- 4 Pillars in 2x2 Grid -->
      <g transform="translate(60, 160)">
        <!-- Card 1 -->
        <g transform="translate(0, 0)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#fbbf24" text-anchor="middle">⭐</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Celebrity Category &amp; Public Stature</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#fbbf24">Demand, star power &amp; current filming commitments</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Film stars, TV personalities, musicians, sports stars &amp; creators have diverse tiers</tspan>
            <tspan x="24" dy="20">• Busy shooting schedules and peak wedding season dates command premium fees</tspan>
            <tspan x="24" dy="20">• National icon vs regional appeal vs specialized industry expert</tspan>
          </text>
        </g>

        <!-- Card 2 -->
        <g transform="translate(555, 0)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#f472b6" text-anchor="middle">🎭</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Engagement Format &amp; Duration</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#f472b6">Guest appearance vs live performance vs hosting</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Brief 15-30 min ribbon-cutting or stage greeting vs full musical performance</tspan>
            <tspan x="24" dy="20">• Structured meet-and-greet sessions require pre-agreed guest limits</tspan>
            <tspan x="24" dy="20">• Master of ceremonies (MC) or keynote dialogue involves extensive prep</tspan>
          </text>
        </g>

        <!-- Card 3 -->
        <g transform="translate(0, 210)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#38bdf8" text-anchor="middle">✈️</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Location &amp; Hospitality Riders</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#38bdf8">Travel, 5-star accommodation, glam team &amp; security</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Outstation events require business class flights for celebrity &amp; entourage</tspan>
            <tspan x="24" dy="20">• 5-star suite hospitality, local luxury transfers, hair &amp; makeup team</tspan>
            <tspan x="24" dy="20">• Private security escort and green room hospitality specifications</tspan>
          </text>
        </g>

        <!-- Card 4 -->
        <g transform="translate(555, 210)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(167, 139, 250, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#a78bfa" text-anchor="middle">📸</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Recording, Usage &amp; Commercial Rights</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#a78bfa">Private family memories vs public promotional media</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Personal family photos vs commercial broadcast or social media publication</tspan>
            <tspan x="24" dy="20">• Brand endorsement or commercial sponsorship requires separate licensing</tspan>
            <tspan x="24" dy="20">• Written agreements define exact permitted video and media distribution</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Tagline -->
      <g transform="translate(60, 620)">
        <text x="0" y="15" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748b">
          Harshita Dagha Maisheri · Beingblahblah Celebrity Marketing &amp; PR Advisory
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('celebrity-private-event-cost-factors.webp', pipeline);
  }

  console.log('✅ All Private Event WebP assets generated successfully!');
}

main().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
