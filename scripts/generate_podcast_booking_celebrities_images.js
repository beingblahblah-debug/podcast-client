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
  console.log('Generating Podcast Booking for Celebrities WebP assets...');

  // ---------------------------------------------------------------------------
  // 1. HERO BANNER: podcast-booking-for-celebrities.webp (1200 x 630)
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
        <rect x="0" y="0" width="370" height="34" rx="17" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#f59e0b"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#fcd34d" letter-spacing="1.5">CELEBRITY PODCAST BOOKING · INDIA</text>

        <!-- Main Title -->
        <text x="0" y="86" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Podcast Booking for</text>
        <text x="0" y="132" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="url(#goldAccent)" letter-spacing="-0.5">Celebrities: Find Right Shows</text>

        <!-- Subtitle -->
        <text x="0" y="176" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#cbd5e1" font-weight="400">
          <tspan x="0" dy="0">Helping Public Figures, Actors, Founders &amp; Creators Connect With</tspan>
          <tspan x="0" dy="23">Relevant Audiences &amp; Build Enduring Brand Authority.</tspan>
        </text>

        <!-- 3 Feature Columns -->
        <g transform="translate(0, 240)">
          <rect x="0" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#fbbf24">🎯</text>
          <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Strategic Alignment</text>
          <text x="20" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Audience relevance &amp;</text>
          <text x="20" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">personal brand goals</text>

          <rect x="200" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="220" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#f472b6">🎙️</text>
          <text x="220" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Show Quality Audit</text>
          <text x="220" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Host style, acoustics &amp;</text>
          <text x="220" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">editorial standards</text>

          <rect x="400" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="420" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#38bdf8">📈</text>
          <text x="420" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Long-Term Impact</text>
          <text x="420" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Repurposed content &amp;</text>
          <text x="420" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">deep community trust</text>
        </g>

        <!-- Host Footer -->
        <g transform="translate(0, 386)">
          <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA · BEINGBLAHBLAH</text>
          <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#fbbf24">16+ Years Branding &amp; PR Strategist · Podcast Host · TEDx Speaker</text>
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

    await saveAll('podcast-booking-for-celebrities.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 2. STRATEGIC BLUEPRINT: podcast-booking-celebrities-strategic-framework.webp (1200 x 675)
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
        <text x="187" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">CELEBRITY PODCAST STRATEGY BLUEPRINT</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">The 4-Stage Celebrity Podcast Booking System</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          How Leading Agencies Structure Meaningful, High-ROI Show Appearances
        </text>
      </g>

      <!-- 4 Columns Grid -->
      <g transform="translate(60, 160)">
        <!-- Stage 1 -->
        <g transform="translate(0, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#fbbf24" text-anchor="middle">01</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Goal Setting</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Clarify core objective</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Awareness vs authority</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Project launch anchor</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Define talking angles</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">Establishes what the</tspan>
            <tspan x="20" dy="18">celebrity aims to convey</tspan>
            <tspan x="20" dy="18">and which communities</tspan>
            <tspan x="20" dy="18">matter most.</tspan>
          </text>
        </g>

        <!-- Stage 2 -->
        <g transform="translate(275, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#f472b6" text-anchor="middle">02</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Show &amp; Audience Vetting</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Listener demographics</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Language &amp; geography</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Host style &amp; consistency</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Production quality check</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">High engagement beats</tspan>
            <tspan x="20" dy="18">sheer vanity download</tspan>
            <tspan x="20" dy="18">counts for genuine brand</tspan>
            <tspan x="20" dy="18">affinity.</tspan>
          </text>
        </g>

        <!-- Stage 3 -->
        <g transform="translate(550, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#38bdf8" text-anchor="middle">03</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Strategic Pitch &amp; Terms</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Contextual pitch narrative</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Commercial clarity</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Content usage permissions</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Schedule &amp; rider lock</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">Explicit agreement on</tspan>
            <tspan x="20" dy="18">recording dates, format,</tspan>
            <tspan x="20" dy="18">editing rights, and promo</tspan>
            <tspan x="20" dy="18">deliverables.</tspan>
          </text>
        </g>

        <!-- Stage 4 -->
        <g transform="translate(825, 0)">
          <rect width="255" height="395" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="20" y="20" width="48" height="48" rx="12" fill="rgba(167, 139, 250, 0.15)"/>
          <text x="44" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="bold" fill="#a78bfa" text-anchor="middle">04</text>
          <text x="20" y="100" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Prep &amp; Content Synergy</text>
          <text x="20" y="132" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Soundbite preparation</text>
          <text x="20" y="156" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Studio acoustics &amp; tech</text>
          <text x="20" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Repurposed reels &amp; clips</text>
          <text x="20" y="204" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" font-weight="600">• Qualitative &amp; reach ROI</text>
          <text x="20" y="250" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="20" dy="0">Turns a 60-minute</tspan>
            <tspan x="20" dy="18">interview into 20+ viral</tspan>
            <tspan x="20" dy="18">touchpoints across digital</tspan>
            <tspan x="20" dy="18">PR channels.</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Tagline -->
      <g transform="translate(60, 610)">
        <text x="0" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748b">
          Harshita Dagha · Beingblahblah Celebrity Marketing &amp; Podcast Advisory · Mumbai &amp; Pan-India
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('podcast-booking-celebrities-strategic-framework.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 3. EVALUATION SCORECARD: evaluating-podcast-quality-celebrities.webp (1200 x 675)
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
        <text x="185" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" text-anchor="middle" letter-spacing="1.5">QUALITY AUDIT SCORECARD</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">Evaluating Podcast Quality Before Confirming a Booking</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">
          The Non-Negotiable Vetting Criteria for Celebrities, Representatives &amp; Talent Managers
        </text>
      </g>

      <!-- 4 Audit Pillars in 2x2 Grid -->
      <g transform="translate(60, 160)">
        <!-- Card 1 -->
        <g transform="translate(0, 0)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#fbbf24" text-anchor="middle">🎙️</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Host Profile &amp; Editorial Demeanour</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#fbbf24">Tone, respectful dialogue &amp; unscripted depth</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Review last 5 episodes for host interviewing depth vs clickbait sensationalism</tspan>
            <tspan x="24" dy="20">• Check if past high-profile guests were treated with editorial fairness</tspan>
            <tspan x="24" dy="20">• Verify alignment with the celebrity's communication comfort zone</tspan>
          </text>
        </g>

        <!-- Card 2 -->
        <g transform="translate(555, 0)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#f472b6" text-anchor="middle">👥</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Audience Relevance &amp; True Engagement</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#f472b6">Genuine community vs artificial vanity stats</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Prioritize relevant listener demographics over sheer download totals</tspan>
            <tspan x="24" dy="20">• Audit YouTube comment depth, sentiment, and organic community discussions</tspan>
            <tspan x="24" dy="20">• Ensure language and geographic reach target the intended market</tspan>
          </text>
        </g>

        <!-- Card 3 -->
        <g transform="translate(0, 210)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(56, 189, 248, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#38bdf8" text-anchor="middle">🎚️</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Audio Engineering &amp; Video Production</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#38bdf8">Broadcast quality standards protect brand reputation</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Clear directional microphones, acoustic treatment, and professional lighting</tspan>
            <tspan x="24" dy="20">• Multi-camera 4K studio recording or studio-grade remote bridge (Riverside/SquadCast)</tspan>
            <tspan x="24" dy="20">• Publishing cadence consistency (active over minimum 6+ continuous months)</tspan>
          </text>
        </g>

        <!-- Card 4 -->
        <g transform="translate(555, 210)">
          <rect width="525" height="185" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <rect x="24" y="24" width="44" height="44" rx="10" fill="rgba(167, 139, 250, 0.15)"/>
          <text x="46" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#a78bfa" text-anchor="middle">📜</text>
          <text x="82" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Commercial Terms &amp; Content Rights</text>
          <text x="82" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#a78bfa">Contractual clarity, disclaimers &amp; clip usage</text>
          <text x="24" y="105" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94a3b8">
            <tspan x="24" dy="0">• Written agreements confirming recording duration, fees, and travel riders</tspan>
            <tspan x="24" dy="20">• Full rights to repurpose approved clips and soundbites across personal PR channels</tspan>
            <tspan x="24" dy="20">• Sensitive topics pre-cleared with mutual sign-off on promotional assets</tspan>
          </text>
        </g>
      </g>

      <!-- Bottom Tagline -->
      <g transform="translate(60, 620)">
        <text x="0" y="15" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#64748b">
          Harshita Dagha Maisheri · Beingblahblah Celebrity PR &amp; Executive Media Advisory
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('evaluating-podcast-quality-celebrities.webp', pipeline);
  }

  console.log('✅ All WebP assets generated successfully!');
}

main().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
