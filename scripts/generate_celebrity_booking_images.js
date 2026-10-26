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
  console.log('Generating Celebrity Booking Agency India WebP assets...');

  // ---------------------------------------------------------------------------
  // 1. HERO IMAGE: celebrity-booking-agency-india.webp (1200 x 630)
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
        <rect x="0" y="0" width="395" height="34" rx="17" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#f59e0b"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#fcd34d" letter-spacing="1.5">CELEBRITY MARKETING &amp; EVENT TALENT · INDIA</text>

        <!-- Main Title -->
        <text x="0" y="86" font-family="'Georgia', serif" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Celebrity Booking Agency</text>
        <text x="0" y="134" font-family="'Georgia', serif" font-size="40" font-weight="bold" fill="url(#goldAccent)" letter-spacing="-0.5">India | Book for Events</text>

        <!-- Subtitle -->
        <text x="0" y="178" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15.5" fill="#cbd5e1" font-weight="400">
          <tspan x="0" dy="0">Corporate Events, Product Launches, Award Ceremonies &amp; Bollywood</tspan>
          <tspan x="0" dy="23">Appearances with Harshita Dagha &amp; Beingblahblah Mumbai.</tspan>
        </text>

        <!-- 3 Feature Columns -->
        <g transform="translate(0, 240)">
          <rect x="0" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#fbbf24">🎭</text>
          <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">Talent &amp; Bollywood</text>
          <text x="20" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">Actors, keynote speakers,</text>
          <text x="20" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">&amp; creators curated for fit</text>

          <rect x="200" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="220" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#f472b6">💼</text>
          <text x="220" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">Corporate Events</text>
          <text x="220" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">Summits, launches, awards,</text>
          <text x="220" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">&amp; commercial clarity</text>

          <rect x="400" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="420" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#38bdf8">📰</text>
          <text x="420" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">Digital PR Synergy</text>
          <text x="420" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">Campaign storytelling &amp;</text>
          <text x="420" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">multi-platform coverage</text>
        </g>

        <!-- Host Footer -->
        <g transform="translate(0, 386)">
          <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA · BEINGBLAHBLAH</text>
          <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#fbbf24">16+ Years PR &amp; Branding Strategist · Podcast Host · TEDx Speaker</text>
          <text x="0" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Bandra Kurla Complex (BKC), Mumbai · Phone: +91 87790 03799 · beingblahblah@gmail.com</text>
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

    await saveAll('celebrity-booking-agency-india.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 2. PROCESS INFOGRAPHIC: celebrity-booking-process-india.webp (1200 x 675)
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
        <rect x="0" y="0" width="340" height="30" rx="15" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1"/>
        <text x="170" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">STRATEGIC EVENT COORDINATION</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">How to Book a Celebrity for an Event in India</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          The 5-Step Professional Blueprint for Corporate Summits, Product Launches &amp; Brand Campaigns
        </text>
      </g>

      <!-- 5 Step Process Grid -->
      <g transform="translate(60, 165)">
        <!-- Step 1 -->
        <g transform="translate(0, 0)">
          <rect width="205" height="390" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="18" y="18" width="46" height="46" rx="12" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="41" y="48" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#fbbf24" text-anchor="middle">01</text>
          <text x="18" y="95" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Define Event Brief</text>
          <text x="18" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Purpose &amp; format</text>
          <text x="18" y="147" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Date, city &amp; venue</text>
          <text x="18" y="169" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Expected duration</text>
          <text x="18" y="191" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Target audience</text>
          <text x="18" y="213" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Realistic budget</text>
          <text x="18" y="255" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">
            <tspan x="18" dy="0">A comprehensive brief</tspan>
            <tspan x="18" dy="16">ensures precise talent</tspan>
            <tspan x="18" dy="16">proposals &amp; quotes.</tspan>
          </text>
        </g>

        <!-- Step 2 -->
        <g transform="translate(218, 0)">
          <rect width="205" height="390" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="18" y="18" width="46" height="46" rx="12" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="41" y="48" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#f472b6" text-anchor="middle">02</text>
          <text x="18" y="95" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Talent &amp; Fit Audit</text>
          <text x="18" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Audience alignment</text>
          <text x="18" y="147" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Brand reputation</text>
          <text x="18" y="169" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Keynote or glamour</text>
          <text x="18" y="191" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Industry relevance</text>
          <text x="18" y="213" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Category exclusivity</text>
          <text x="18" y="255" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">
            <tspan x="18" dy="0">Choose the best fit</tspan>
            <tspan x="18" dy="16">over sheer celebrity</tspan>
            <tspan x="18" dy="16">follower count.</tspan>
          </text>
        </g>

        <!-- Step 3 -->
        <g transform="translate(436, 0)">
          <rect width="205" height="390" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="18" y="18" width="46" height="46" rx="12" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="41" y="48" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#38bdf8" text-anchor="middle">03</text>
          <text x="18" y="95" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Verify Dates &amp; Fees</text>
          <text x="18" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Schedule locking</text>
          <text x="18" y="147" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Appearance duration</text>
          <text x="18" y="169" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Travel &amp; stay terms</text>
          <text x="18" y="191" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Glam team &amp; rider</text>
          <text x="18" y="213" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Transparent quotes</text>
          <text x="18" y="255" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">
            <tspan x="18" dy="0">Written commercial</tspan>
            <tspan x="18" dy="16">breakdown avoids</tspan>
            <tspan x="18" dy="16">hidden surprises.</tspan>
          </text>
        </g>

        <!-- Step 4 -->
        <g transform="translate(654, 0)">
          <rect width="205" height="390" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="18" y="18" width="46" height="46" rx="12" fill="rgba(168, 85, 247, 0.15)"/>
          <text x="41" y="48" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#c084fc" text-anchor="middle">04</text>
          <text x="18" y="95" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Confirm Contracts</text>
          <text x="18" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Role in programme</text>
          <text x="18" y="147" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• IP &amp; photo rights</text>
          <text x="18" y="169" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Video usage window</text>
          <text x="18" y="191" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Cancellation policy</text>
          <text x="18" y="213" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Milestone payouts</text>
          <text x="18" y="255" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">
            <tspan x="18" dy="0">Explicit contract terms</tspan>
            <tspan x="18" dy="16">protect both brand</tspan>
            <tspan x="18" dy="16">&amp; celebrity talent.</tspan>
          </text>
        </g>

        <!-- Step 5 -->
        <g transform="translate(872, 0)">
          <rect width="205" height="390" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="18" y="18" width="46" height="46" rx="12" fill="rgba(52, 211, 153, 0.15)"/>
          <text x="41" y="48" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#34d399" text-anchor="middle">05</text>
          <text x="18" y="95" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="bold" fill="#ffffff">PR &amp; Amplification</text>
          <text x="18" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Pre-event press release</text>
          <text x="18" y="147" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Red carpet media</text>
          <text x="18" y="169" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Post-event storytelling</text>
          <text x="18" y="191" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Approved digital clips</text>
          <text x="18" y="213" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" font-weight="600">• Long-term brand lift</text>
          <text x="18" y="255" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#94a3b8">
            <tspan x="18" dy="0">Turn an appearance</tspan>
            <tspan x="18" dy="16">into lasting authority</tspan>
            <tspan x="18" dy="16">via Digital PR.</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Trust Banner -->
      <g transform="translate(60, 595)">
        <text x="0" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Harshita Dagha Maisheri · Beingblahblah Advisory Desk</text>
        <text x="1080" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#fbbf24" text-anchor="end">Official Inquiries: +91 87790 03799 · BKC Mumbai</text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('celebrity-booking-process-india.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 3. COMPARISON INFOGRAPHIC: celebrity-marketing-digital-pr-synergy.webp (1200 x 675)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 675;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="matrixBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08080c"/>
          <stop offset="50%" stop-color="#111119"/>
          <stop offset="100%" stop-color="#07070a"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#matrixBg)"/>

      <circle cx="200" cy="120" r="240" fill="#f59e0b" opacity="0.08" filter="blur(65px)"/>
      <circle cx="1000" cy="520" r="240" fill="#38bdf8" opacity="0.08" filter="blur(70px)"/>

      <!-- Header -->
      <g transform="translate(60, 42)">
        <rect x="0" y="0" width="310" height="30" rx="15" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1"/>
        <text x="155" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">CAMPAIGN ARCHITECTURE MATRIX</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">Celebrity Appearance vs. Endorsement vs. Digital PR</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          Understanding the strategic differences, scope of rights, deliverables, and brand return in India
        </text>
      </g>

      <!-- 3 Columns -->
      <g transform="translate(60, 160)">
        <!-- Col 1: Celebrity Event Appearance -->
        <g transform="translate(0, 0)">
          <rect width="345" height="400" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="40" height="40" rx="10" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="44" y="50" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" text-anchor="middle">🎤</text>
          <text x="76" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Celebrity Appearance</text>
          <text x="76" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#fbbf24">Single Event Engagement</text>

          <path d="M 24 85 L 321 85" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

          <text x="24" y="115" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Primary Purpose:</text>
          <text x="24" y="135" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Event glamour, attendance draw, ribbon cutting</text>

          <text x="24" y="170" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Engagement Format:</text>
          <text x="24" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">1 to 3 hours physical presence on stage/lounge</text>

          <text x="24" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Usage Rights:</text>
          <text x="24" y="245" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Event-day documentation; limited social clips</text>

          <text x="24" y="280" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Commercial Basis:</text>
          <text x="24" y="300" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Per-appearance fee + travel, stay &amp; rider</text>

          <rect x="24" y="335" width="297" height="42" rx="8" fill="rgba(245, 158, 11, 0.1)"/>
          <text x="36" y="361" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600" fill="#fbbf24">Best for: Launches, Annual Galas, Award Nights</text>
        </g>

        <!-- Col 2: Brand Endorsement -->
        <g transform="translate(365, 0)">
          <rect width="345" height="400" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="40" height="40" rx="10" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="44" y="50" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" text-anchor="middle">👑</text>
          <text x="76" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Brand Endorsement</text>
          <text x="76" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#f472b6">Commercial Partnership</text>

          <path d="M 24 85 L 321 85" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

          <text x="24" y="115" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Primary Purpose:</text>
          <text x="24" y="135" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Commercial credibility, ad campaign face, sales</text>

          <text x="24" y="170" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Engagement Format:</text>
          <text x="24" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Contracted term (6–24 mos), TVCs, photo shoots</text>

          <text x="24" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Usage Rights:</text>
          <text x="24" y="245" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Extensive print, billboard, TV &amp; digital ads</text>

          <text x="24" y="280" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Commercial Basis:</text>
          <text x="24" y="300" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Annual retainer with strict category exclusivity</text>

          <rect x="24" y="335" width="297" height="42" rx="8" fill="rgba(244, 114, 182, 0.1)"/>
          <text x="36" y="361" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600" fill="#f472b6">Best for: Consumer Brands, Pan-India FMCG</text>
        </g>

        <!-- Col 3: Digital PR Synergy -->
        <g transform="translate(730, 0)">
          <rect width="345" height="400" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="40" height="40" rx="10" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="44" y="50" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" text-anchor="middle">🚀</text>
          <text x="76" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Digital PR Synergy</text>
          <text x="76" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#38bdf8">Beingblahblah Strategic Edge</text>

          <path d="M 24 85 L 321 85" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

          <text x="24" y="115" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Primary Purpose:</text>
          <text x="24" y="135" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Evergreen brand authority, media &amp; AI search</text>

          <text x="24" y="170" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Engagement Format:</text>
          <text x="24" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Multi-tier PR, executive podcasts, press syndication</text>

          <text x="24" y="225" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Usage Rights:</text>
          <text x="24" y="245" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Third-party editorial news citations, permanent GEO</text>

          <text x="24" y="280" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#e2e8f0">Commercial Basis:</text>
          <text x="24" y="300" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">Campaign PR advisory integrated with booking</text>

          <rect x="24" y="335" width="297" height="42" rx="8" fill="rgba(56, 189, 248, 0.1)"/>
          <text x="36" y="361" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600" fill="#38bdf8">Amplifies: Both Appearances &amp; Endorsements</text>
        </g>
      </g>

      <!-- Bottom Banner -->
      <g transform="translate(60, 595)">
        <text x="0" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" font-weight="700" fill="#ffffff">Harshita Dagha — Mumbai Celebrity Marketing &amp; PR Advisory</text>
        <text x="1080" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="end">Direct Desk WhatsApp: +91 87790 03799 · beingblahblah@gmail.com</text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('celebrity-marketing-digital-pr-synergy.webp', pipeline);
  }

  console.log('All 3 WebP images generated successfully!');
}

main().catch(console.error);
