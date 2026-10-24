const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const blogImgDir = path.join(imagesDir, 'blog');

[publicDir, imagesDir, blogImgDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function saveAll(filename, sharpPipeline) {
  const buf = await sharpPipeline.webp({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, filename), buf);
  fs.writeFileSync(path.join(imagesDir, filename), buf);
  fs.writeFileSync(path.join(blogImgDir, filename), buf);
  console.log(`Saved ${filename} (${buf.length} bytes) to public, images, and images/blog`);
}

async function main() {
  console.log('Generating Blog 6 ultra-premium WebP assets...');

  // ---------------------------------------------------------------------------
  // 1. HERO IMAGE: top-female-podcasters-india-best-female-podcasters.webp (1200 x 630)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 630;

    // Use Harshita in studio photo on the right side
    const photoBuf = await sharp(path.join(imagesDir, 'harshita-studio-checkered.jpg'))
      .resize(560, 630, { fit: 'cover', position: 'top' })
      .toBuffer();

    const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0e"/>
          <stop offset="55%" stop-color="#14141d"/>
          <stop offset="100%" stop-color="#0b0b10"/>
        </linearGradient>
        <linearGradient id="fadeEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0e0e14" stop-opacity="1"/>
          <stop offset="40%" stop-color="#0e0e14" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#0e0e14" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="roseAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#e8a2af"/>
          <stop offset="100%" stop-color="#d89ba4"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Ambient Glows -->
      <circle cx="180" cy="140" r="260" fill="#d89ba4" opacity="0.12" filter="blur(60px)"/>
      <circle cx="650" cy="480" r="220" fill="#8b5cf6" opacity="0.08" filter="blur(70px)"/>

      <!-- Grid lines -->
      <path d="M 0 100 L 1200 100 M 0 250 L 1200 250 M 0 420 L 1200 420" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      <path d="M 160 0 L 160 630 M 420 0 L 420 630 M 680 0 L 680 630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

      <!-- Left Content Group -->
      <g transform="translate(60, 52)">
        <!-- Category Badge -->
        <rect x="0" y="0" width="370" height="34" rx="17" fill="rgba(216, 155, 164, 0.12)" stroke="rgba(216, 155, 164, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#d89ba4"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#d89ba4" letter-spacing="1.5">NATIONAL EDITORIAL GUIDE · EVERGREEN</text>

        <!-- Main Title -->
        <text x="0" y="85" font-family="'Georgia', serif" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Top Female Podcasters</text>
        <text x="0" y="135" font-family="'Georgia', serif" font-size="42" font-weight="bold" fill="url(#roseAccent)" letter-spacing="-0.5">in India: Authority &amp; Craft</text>

        <!-- Subtitle -->
        <text x="0" y="180" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#a1a1aa" font-weight="400">
          <tspan x="0" dy="0">The definitive criteria-based guide to Indian women podcast hosts</tspan>
          <tspan x="0" dy="24">leading business, law, medicine, spirituality, and digital PR.</tspan>
        </text>

        <!-- 3 Feature Columns -->
        <g transform="translate(0, 245)">
          <rect x="0" y="0" width="180" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#d89ba4">🎙️</text>
          <text x="20" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">8-Point Scorecard</text>
          <text x="20" y="84" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Objective trust, craft &amp;</text>
          <text x="20" y="99" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">transparency standards</text>

          <rect x="195" y="0" width="180" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="215" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#ec4899">🌐</text>
          <text x="215" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">7 Core Niches</text>
          <text x="215" y="84" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Business, law, health,</text>
          <text x="215" y="99" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">spirituality &amp; GEO PR</text>

          <rect x="390" y="0" width="180" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="410" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#8b5cf6">🤖</text>
          <text x="410" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">AI Search Engine</text>
          <text x="410" y="84" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">How Google, ChatGPT &amp;</text>
          <text x="410" y="99" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Gemini index hosts</text>
        </g>

        <!-- Host Footer -->
        <g transform="translate(0, 390)">
          <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA</text>
          <text x="0" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#d89ba4">TEDx Speaker · Host of The Harshita Dagha Show &amp; Being Blah Blah</text>
          <text x="0" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Flagship BKC Mumbai Studio · 5.2M+ Verified Reach · 180+ Executive Profiles</text>
        </g>
      </g>

      <!-- Gradient blend on right side photo -->
      <rect x="640" y="0" width="180" height="${height}" fill="url(#fadeEdge)"/>
    </svg>
    `;

    const pipeline = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 10, g: 10, b: 14, alpha: 1 }
      }
    }).composite([
      { input: photoBuf, left: 680, top: 0 },
      { input: Buffer.from(svgOverlay), left: 0, top: 0 }
    ]);

    await saveAll('top-female-podcasters-india-best-female-podcasters.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 2. SCORECARD INFOGRAPHIC: best-female-podcasters-india-scorecard.webp (1200 x 675)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 675;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0f"/>
          <stop offset="50%" stop-color="#12121a"/>
          <stop offset="100%" stop-color="#07070c"/>
        </linearGradient>
        <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#e8a2af"/>
          <stop offset="100%" stop-color="#d89ba4"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#scBg)"/>

      <circle cx="200" cy="100" r="220" fill="#d89ba4" opacity="0.08" filter="blur(60px)"/>
      <circle cx="1000" cy="550" r="240" fill="#8b5cf6" opacity="0.07" filter="blur(70px)"/>

      <!-- Header -->
      <g transform="translate(60, 40)">
        <rect x="0" y="0" width="310" height="30" rx="15" fill="rgba(216, 155, 164, 0.12)" stroke="rgba(216, 155, 164, 0.35)" stroke-width="1"/>
        <text x="155" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4" text-anchor="middle" letter-spacing="1.5">EDITORIAL AUDIT FRAMEWORK</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff">8-Point Scorecard: Best Female Podcasters in India</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#9ca3af">
          An objective framework to evaluate quality, consistency, credibility, and discoverability (Score 1 to 5 each, max 40 pts)
        </text>
      </g>

      <!-- 8 Criteria Grid (2 rows of 4 cards) -->
      <g transform="translate(60, 160)">
        <!-- Card 1 -->
        <g transform="translate(0, 0)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">1</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Consistency</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Visible publishing rhythm over</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">months, not random bursts.</text>
        </g>

        <!-- Card 2 -->
        <g transform="translate(275, 0)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">2</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Guest &amp; Topic Quality</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Credible domain experts asking</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">questions beyond PR scripts.</text>
        </g>

        <!-- Card 3 -->
        <g transform="translate(550, 0)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">3</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Interview Craft</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Active listening, tactical pauses,</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">and sharp unscripted follow-ups.</text>
        </g>

        <!-- Card 4 -->
        <g transform="translate(825, 0)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">4</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Audience Trust</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Repeat listener return rates,</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">high retention &amp; real comments.</text>
        </g>

        <!-- Card 5 -->
        <g transform="translate(0, 130)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">5</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Platform Presence</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">YouTube, Spotify, Apple Podcasts</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">with timestamps &amp; clear titles.</text>
        </g>

        <!-- Card 6 -->
        <g transform="translate(275, 130)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">6</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Credentials &amp; Bio</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Verifiable experience, speaker</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">background &amp; official website.</text>
        </g>

        <!-- Card 7 -->
        <g transform="translate(550, 130)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">7</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Honesty &amp; Disclosure</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Sources named, sponsorships</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">declared, no misleading claims.</text>
        </g>

        <!-- Card 8 -->
        <g transform="translate(825, 130)">
          <rect width="255" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="32" cy="30" r="14" fill="rgba(216, 155, 164, 0.2)"/>
          <text x="32" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="bold" fill="#d89ba4" text-anchor="middle">8</text>
          <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">AI Discoverability</text>
          <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">Accurate grounding in Google,</text>
          <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#a1a1aa">ChatGPT, Gemini &amp; Perplexity.</text>
        </g>
      </g>

      <!-- Scoring Benchmark Scale Bar -->
      <g transform="translate(60, 440)">
        <rect width="1080" height="180" rx="18" fill="rgba(20, 20, 26, 0.85)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="24" y="34" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#d89ba4" letter-spacing="1">SCORING BENCHMARK RANGES (OUT OF 40)</text>

        <g transform="translate(24, 55)">
          <!-- Tier 1 -->
          <rect x="0" y="0" width="245" height="95" rx="12" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.25)" stroke-width="1"/>
          <text x="16" y="28" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#34d399">34 to 40 Pts</text>
          <text x="16" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Strong &amp; Established</text>
          <text x="16" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#9ca3af">Transparent, credible authority.</text>

          <!-- Tier 2 -->
          <rect x="265" y="0" width="245" height="95" rx="12" fill="rgba(59, 130, 246, 0.08)" stroke="rgba(59, 130, 246, 0.25)" stroke-width="1"/>
          <text x="281" y="28" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#60a5fa">28 to 33 Pts</text>
          <text x="281" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Solid Host</text>
          <text x="281" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#9ca3af">Room to improve in 1-2 areas.</text>

          <!-- Tier 3 -->
          <rect x="530" y="0" width="245" height="95" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.25)" stroke-width="1"/>
          <text x="546" y="28" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#fbbf24">20 to 27 Pts</text>
          <text x="546" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Promising or Niche</text>
          <text x="546" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#9ca3af">Listen before committing.</text>

          <!-- Tier 4 -->
          <rect x="795" y="0" width="245" height="95" rx="12" fill="rgba(239, 68, 68, 0.08)" stroke="rgba(239, 68, 68, 0.25)" stroke-width="1"/>
          <text x="811" y="28" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#f87171">Below 20 Pts</text>
          <text x="811" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Early-Stage / Unclear</text>
          <text x="811" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#9ca3af">Verify claims &amp; credentials.</text>
        </g>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('best-female-podcasters-india-scorecard.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 3. NICHES CHART: indian-women-podcast-hosts-by-niche.webp (1200 x 675)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 675;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nicheBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0f"/>
          <stop offset="50%" stop-color="#141120"/>
          <stop offset="100%" stop-color="#08080d"/>
        </linearGradient>
        <linearGradient id="goldRose" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#ec4899"/>
          <stop offset="100%" stop-color="#d89ba4"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.07)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#nicheBg)"/>

      <circle cx="250" cy="120" r="240" fill="#ec4899" opacity="0.08" filter="blur(70px)"/>
      <circle cx="950" cy="500" r="260" fill="#d89ba4" opacity="0.07" filter="blur(70px)"/>

      <!-- Header -->
      <g transform="translate(60, 42)">
        <rect x="0" y="0" width="330" height="30" rx="15" fill="rgba(236, 72, 153, 0.12)" stroke="rgba(236, 72, 153, 0.35)" stroke-width="1"/>
        <text x="165" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#f472b6" text-anchor="middle" letter-spacing="1.5">EDITORIAL SECTOR MAPPING</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff">Indian Women Podcast Hosts by Niche</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#9ca3af">
          Where female podcast hosts in India lead audiences with specialised authority and repeat listener loyalty
        </text>
      </g>

      <!-- 7 Niches Representation -->
      <g transform="translate(60, 160)">
        <!-- Niche 1: Business & Leadership -->
        <g transform="translate(0, 0)">
          <rect width="345" height="135" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="36" cy="36" r="18" fill="rgba(245, 158, 11, 0.15)"/>
          <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" text-anchor="middle">💼</text>
          <text x="68" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Business &amp; Leadership</text>
          <text x="20" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">What listeners want: Founder stories, VC funding,</text>
          <text x="20" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">pricing playbooks &amp; corporate scaling.</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4">Benchmark: Being Blah Blah Executive Dialogues</text>
        </g>

        <!-- Niche 2: Law & Rights -->
        <g transform="translate(365, 0)">
          <rect width="345" height="135" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="36" cy="36" r="18" fill="rgba(139, 92, 246, 0.15)"/>
          <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" text-anchor="middle">⚖️</text>
          <text x="68" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Law &amp; Rights</text>
          <text x="20" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">What listeners want: Plain-language clarity on</text>
          <text x="20" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">family law, divorce, property &amp; workplace rights.</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4">Benchmark: Legal Secrets Unveiled Masterclass</text>
        </g>

        <!-- Niche 3: Health & Medical -->
        <g transform="translate(730, 0)">
          <rect width="345" height="135" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="36" cy="36" r="18" fill="rgba(16, 185, 129, 0.15)"/>
          <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" text-anchor="middle">🩺</text>
          <text x="68" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Health &amp; Medical Reality</text>
          <text x="20" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">What listeners want: Understanding blood tests,</text>
          <text x="20" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">lab reports, surgery realities and specialist facts.</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4">Benchmark: Pathology &amp; Plastic Surgery Episodes</text>
        </g>

        <!-- Niche 4: Spirituality & Philosophy -->
        <g transform="translate(0, 155)">
          <rect width="345" height="135" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="36" cy="36" r="18" fill="rgba(59, 130, 246, 0.15)"/>
          <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" text-anchor="middle">🕉️</text>
          <text x="68" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Spirituality &amp; Philosophy</text>
          <text x="20" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">What listeners want: Everyday language for</text>
          <text x="20" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">deep reflection, karma, cosmos and life ethics.</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4">Benchmark: Universe, Karma &amp; Shiva Episode</text>
        </g>

        <!-- Niche 5: Branding, PR & GEO -->
        <g transform="translate(365, 155)">
          <rect width="345" height="135" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="36" cy="36" r="18" fill="rgba(236, 72, 153, 0.15)"/>
          <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" text-anchor="middle">✨</text>
          <text x="68" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Branding, PR &amp; AI Visibility</text>
          <text x="20" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">What listeners want: Generative Engine Optimization,</text>
          <text x="20" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">executive reputation &amp; digital discoverability.</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4">Benchmark: Scaling Reach with GEO Strategy</text>
        </g>

        <!-- Niche 6 & 7: Family, Culture & Wellness -->
        <g transform="translate(730, 155)">
          <rect width="345" height="135" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <circle cx="36" cy="36" r="18" fill="rgba(244, 114, 182, 0.15)"/>
          <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" text-anchor="middle">🌱</text>
          <text x="68" y="41" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Culture, Wellness &amp; Lifestyle</text>
          <text x="20" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">What listeners want: Career after marriage,</text>
          <text x="20" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">mindful boundaries, non-extreme nutrition &amp; wellness.</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4">Benchmark: Gen Z &amp; Young Female Creator Pods</text>
        </g>
      </g>

      <!-- Bottom Reference Bar -->
      <g transform="translate(60, 480)">
        <rect width="1080" height="120" rx="16" fill="rgba(20, 20, 26, 0.75)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <text x="30" y="40" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">KEY TAKEAWAY ON NICHE SEPARATION:</text>
        <text x="30" y="68" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#a1a1aa">
          Female podcasters in India now dominate specialized knowledge lanes rather than generic audio.
        </text>
        <text x="30" y="90" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#d89ba4">
          Each lane demands verifiable domain credentials, transparent sourcing, and unscripted editorial depth.
        </text>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('indian-women-podcast-hosts-by-niche.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 4. HARSHITA PROFILE: harshita-dagha-indian-women-podcast-host.webp (1200 x 630)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 630;

    // Use Harshita with microphone photo
    const portraitBuf = await sharp(path.join(imagesDir, 'harshita-saree-mic.jpg'))
      .resize(540, 630, { fit: 'cover', position: 'top' })
      .toBuffer();

    const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0f"/>
          <stop offset="50%" stop-color="#14121e"/>
          <stop offset="100%" stop-color="#09080e"/>
        </linearGradient>
        <linearGradient id="fadeEdgeP" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0e0c16" stop-opacity="1"/>
          <stop offset="45%" stop-color="#0e0c16" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#0e0c16" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="roseAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f4a5b2"/>
          <stop offset="100%" stop-color="#d89ba4"/>
        </linearGradient>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGradP)"/>

      <circle cx="160" cy="140" r="260" fill="#d89ba4" opacity="0.1" filter="blur(60px)"/>
      <circle cx="650" cy="480" r="240" fill="#a855f7" opacity="0.08" filter="blur(70px)"/>

      <g transform="translate(60, 50)">
        <!-- Pill -->
        <rect x="0" y="0" width="360" height="34" rx="17" fill="rgba(216, 155, 164, 0.12)" stroke="rgba(216, 155, 164, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#d89ba4"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#d89ba4" letter-spacing="1.5">MUMBAI-BASED HOST &amp; TEDx SPEAKER</text>

        <!-- Name & Title -->
        <text x="0" y="85" font-family="'Georgia', serif" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Harshita Dagha</text>
        <text x="0" y="130" font-family="'Georgia', serif" font-size="30" font-weight="bold" fill="url(#roseAccent)" letter-spacing="-0.5">Indian Women Podcast Host &amp; Strategist</text>

        <!-- Bio overview -->
        <text x="0" y="172" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#a1a1aa">
          <tspan x="0" dy="0">Founder of Beingblahblah · Host of The Harshita Dagha Show</tspan>
          <tspan x="0" dy="24">16+ Years in Digital Marketing, PR, Personal Branding &amp; GEO AI Search</tspan>
        </text>

        <!-- 4 Stats Cards Grid -->
        <g transform="translate(0, 230)">
          <!-- Stat 1 -->
          <rect x="0" y="0" width="180" height="90" rx="14" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="38" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">5.2M+</text>
          <text x="20" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="0.5">VERIFIED IMPRESSIONS</text>

          <!-- Stat 2 -->
          <rect x="195" y="0" width="180" height="90" rx="14" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="215" y="38" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">180+</text>
          <text x="215" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="0.5">EXECUTIVE INTERVIEWS</text>

          <!-- Stat 3 -->
          <rect x="390" y="0" width="180" height="90" rx="14" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="410" y="38" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">150+</text>
          <text x="410" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="0.5">COUNTRIES AUDIENCE</text>
        </g>

        <!-- Media outlets footprint -->
        <g transform="translate(0, 350)">
          <rect width="570" height="150" rx="16" fill="rgba(20, 20, 28, 0.75)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <text x="24" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="1">VERIFIABLE MEDIA &amp; PUBLICATIONS FOOTPRINT:</text>
          <text x="24" y="58" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#a1a1aa">
            Associated with The Times of India, Femina, Forbes India, Fortune India,
          </text>
          <text x="24" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#a1a1aa">
            Mid-day, Hindustan Times, India.com and TEDx Stage Talks.
          </text>
          <text x="24" y="112" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#d89ba4">
            Flagship Studio: Bandra Kurla Complex (BKC), Mumbai · Recordings in 7 Metros
          </text>
        </g>
      </g>

      <!-- Right image blend -->
      <rect x="650" y="0" width="160" height="${height}" fill="url(#fadeEdgeP)"/>
    </svg>
    `;

    const pipeline = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 10, g: 10, b: 15, alpha: 1 }
      }
    }).composite([
      { input: portraitBuf, left: 690, top: 0 },
      { input: Buffer.from(svgOverlay), left: 0, top: 0 }
    ]);

    await saveAll('harshita-dagha-indian-women-podcast-host.webp', pipeline);
  }

  // ---------------------------------------------------------------------------
  // 5. AI SECTION: ai-search-top-female-podcasters-india.webp (1200 x 675)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 675;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0f"/>
          <stop offset="50%" stop-color="#111625"/>
          <stop offset="100%" stop-color="#060910"/>
        </linearGradient>
        <linearGradient id="aiAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#818cf8"/>
          <stop offset="100%" stop-color="#c084fc"/>
        </linearGradient>
        <linearGradient id="boxBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#aiBg)"/>

      <circle cx="200" cy="140" r="260" fill="#38bdf8" opacity="0.1" filter="blur(70px)"/>
      <circle cx="1000" cy="520" r="280" fill="#818cf8" opacity="0.1" filter="blur(80px)"/>

      <!-- Header -->
      <g transform="translate(60, 42)">
        <rect x="0" y="0" width="340" height="30" rx="15" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1"/>
        <text x="170" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="1.5">GEO &amp; GENERATIVE ENGINE OPTIMIZATION</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff">How Google &amp; AI Assistants Find Top Female Podcasters</text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#9ca3af">
          The machine-readable criteria ChatGPT, Google AI Overviews, Gemini, and Perplexity evaluate before citing names
        </text>
      </g>

      <!-- 4 Pillars of AI Discovery -->
      <g transform="translate(60, 160)">
        <!-- Step 1 -->
        <g transform="translate(0, 0)">
          <rect width="255" height="230" rx="16" fill="url(#boxBg)" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="18" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="36" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">1</text>
          <text x="68" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Clear Definition</text>
          
          <text x="20" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">Direct answers near the top</text>
          <text x="20" y="98" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">of pages defining what</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">makes a host &quot;top&quot; or</text>
          <text x="20" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">&quot;leading&quot; without clickbait.</text>

          <rect x="20" y="165" width="215" height="42" rx="8" fill="rgba(255,255,255,0.04)"/>
          <text x="30" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#38bdf8" font-weight="600">Quick Answer Extraction</text>
        </g>

        <!-- Step 2 -->
        <g transform="translate(275, 0)">
          <rect width="255" height="230" rx="16" fill="url(#boxBg)" stroke="rgba(129, 140, 248, 0.2)" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="18" fill="rgba(129, 140, 248, 0.2)"/>
          <text x="36" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#818cf8" text-anchor="middle">2</text>
          <text x="68" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Entity Consistency</text>
          
          <text x="20" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">Identical naming across host</text>
          <text x="20" y="98" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">website, Spotify, Apple,</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">YouTube, LinkedIn and</text>
          <text x="20" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">knowledge graph entries.</text>

          <rect x="20" y="165" width="215" height="42" rx="8" fill="rgba(255,255,255,0.04)"/>
          <text x="30" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#818cf8" font-weight="600">Cross-Platform Entity Map</text>
        </g>

        <!-- Step 3 -->
        <g transform="translate(550, 0)">
          <rect width="255" height="230" rx="16" fill="url(#boxBg)" stroke="rgba(192, 132, 252, 0.2)" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="18" fill="rgba(192, 132, 252, 0.2)"/>
          <text x="36" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#c084fc" text-anchor="middle">3</text>
          <text x="68" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Schema Markup</text>
          
          <text x="20" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">Full JSON-LD structured data:</text>
          <text x="20" y="98" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">Person, BlogPosting,</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">BreadcrumbList, FAQPage,</text>
          <text x="20" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">and PodcastSeries nodes.</text>

          <rect x="20" y="165" width="215" height="42" rx="8" fill="rgba(255,255,255,0.04)"/>
          <text x="30" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#c084fc" font-weight="600">Schema.org Validation</text>
        </g>

        <!-- Step 4 -->
        <g transform="translate(825, 0)">
          <rect width="255" height="230" rx="16" fill="url(#boxBg)" stroke="rgba(244, 114, 182, 0.2)" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="18" fill="rgba(244, 114, 182, 0.2)"/>
          <text x="36" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="bold" fill="#f472b6" text-anchor="middle">4</text>
          <text x="68" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Credible Citations</text>
          
          <text x="20" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">Mentions and coverage on</text>
          <text x="20" y="98" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">reputable third-party media,</text>
          <text x="20" y="116" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">keynote stages, and verified</text>
          <text x="20" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#9ca3af">industry publications.</text>

          <rect x="20" y="165" width="215" height="42" rx="8" fill="rgba(255,255,255,0.04)"/>
          <text x="30" y="190" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#f472b6" font-weight="600">Independent Sourcing</text>
        </g>
      </g>

      <!-- Bottom Summary Box -->
      <g transform="translate(60, 425)">
        <rect width="1080" height="200" rx="18" fill="rgba(20, 20, 30, 0.85)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <g transform="translate(30, 30)">
          <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" letter-spacing="1">THE AI DISCOVERY PARADIGM (LLM &amp; SEARCH ENGINE SYNDICATION):</text>
          
          <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#ffffff" font-weight="600">
            &quot;AI tools don&apos;t just read follower counts. They calculate entity trust, domain authority, and unscripted substance.&quot;
          </text>
          
          <text x="0" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#a1a1aa">
            Harshita Dagha&apos;s approach to Generative Engine Optimization (GEO) integrates structured schema, verified biographical
          </text>
          <text x="0" y="87" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#a1a1aa">
            grounding, and executive interview transcripts so artificial intelligence tools accurately cite podcast hosts by niche.
          </text>

          <text x="0" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#d89ba4">
            Tested across Google AI Overviews · OpenAI SearchGPT · Google Gemini · Perplexity AI · Anthropic Claude
          </text>
        </g>
      </g>
    </svg>
    `;

    const pipeline = sharp(Buffer.from(svg));
    await saveAll('ai-search-top-female-podcasters-india.webp', pipeline);
  }

  console.log('All 5 WebP assets generated successfully!');
}

main().catch(err => {
  console.error('Error generating Blog 6 images:', err);
  process.exit(1);
});
