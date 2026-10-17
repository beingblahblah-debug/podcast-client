const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const blogImgDir = path.join(publicDir, 'images', 'blog');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(blogImgDir)) {
  fs.mkdirSync(blogImgDir, { recursive: true });
}

async function saveToMultipleLocations(sharpInstance, filename) {
  const buf = await sharpInstance.webp({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(blogImgDir, filename), buf);
  fs.writeFileSync(path.join(imagesDir, filename), buf);
  fs.writeFileSync(path.join(publicDir, filename), buf);
  console.log(`Saved ${filename} across public directories.`);
}

async function generateHeroImage() {
  const width = 1200;
  const height = 630;

  // Background portrait resized & positioned
  const portraitBuf = await sharp(path.join(imagesDir, 'harshita-navy-mic.jpg'))
    .resize(580, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#09090c"/>
        <stop offset="50%" stop-color="#121217"/>
        <stop offset="100%" stop-color="#0a0a0d"/>
      </linearGradient>
      <linearGradient id="fadeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0e0e12" stop-opacity="1"/>
        <stop offset="50%" stop-color="#0e0e12" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0e0e12" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#e2a8b2"/>
        <stop offset="100%" stop-color="#d89ba4"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    
    <!-- Accent glow -->
    <circle cx="200" cy="150" r="300" fill="#d89ba4" opacity="0.08" filter="blur(60px)"/>
    <circle cx="1000" cy="500" r="250" fill="#d89ba4" opacity="0.06" filter="blur(50px)"/>

    <!-- Left Content Column -->
    <g transform="translate(60, 60)">
      <!-- Badge -->
      <rect x="0" y="0" width="340" height="34" rx="17" fill="#ffffff" fill-opacity="0.07" stroke="#d89ba4" stroke-opacity="0.3"/>
      <circle cx="18" cy="17" r="4" fill="#d89ba4"/>
      <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#d89ba4" letter-spacing="1.5">EXPERT-LED PODCASTING · 2026</text>

      <!-- Main Title -->
      <text x="0" y="85" font-family="'Georgia', serif" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Best Podcasts</text>
      <text x="0" y="135" font-family="'Georgia', serif" font-size="42" font-weight="bold" fill="url(#accentGrad)" letter-spacing="-0.5">by Indian Women (2026)</text>

      <!-- Subtitle -->
      <text x="0" y="185" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" fill="#a1a1aa" font-weight="400">
        <tspan x="0" dy="0">Discover Harshita Dagha &amp; Expert-Led Conversations</tspan>
        <tspan x="0" dy="25">Across Business, Law, Medicine, Spirituality &amp; Digital PR</tspan>
      </text>

      <!-- Stats Bar Card -->
      <g transform="translate(0, 255)">
        <rect x="0" y="0" width="540" height="90" rx="18" fill="#18181f" fill-opacity="0.8" stroke="#ffffff" stroke-opacity="0.1"/>
        
        <g transform="translate(24, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">5.2M+</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">IMPRESSIONS</text>
        </g>
        
        <line x1="160" y1="20" x2="160" y2="70" stroke="#ffffff" stroke-opacity="0.1"/>

        <g transform="translate(185, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">180+</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">LEADERSHIP EPS</text>
        </g>

        <line x1="335" y1="20" x2="335" y2="70" stroke="#ffffff" stroke-opacity="0.1"/>

        <g transform="translate(360, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">7 Cities</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">RECORDING HUBS</text>
        </g>
      </g>

      <!-- Host Footnote Card -->
      <g transform="translate(0, 375)">
        <text x="0" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA</text>
        <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#d89ba4">TEDx Speaker · Host of The Harshita Dagha Show · BKC Studio Mumbai</text>
        <text x="0" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Being Blah Blah · 16+ Years Branding &amp; Digital PR · 150+ Countries Reach</text>
      </g>
    </g>

    <!-- Right Side Gradient Shield for image blending -->
    <rect x="620" y="0" width="220" height="${height}" fill="url(#fadeGrad)"/>
  </svg>
  `;

  const heroImg = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 12, g: 12, b: 15, alpha: 1 }
    }
  })
  .composite([
    { input: portraitBuf, left: 660, top: 0 },
    { input: Buffer.from(svgOverlay), left: 0, top: 0 }
  ]);

  await saveToMultipleLocations(heroImg, 'best-podcasts-by-indian-women.webp');
}

async function generateScorecardImage() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="scBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181820" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#121217" stop-opacity="0.95"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#scBg)"/>
    
    <!-- Title Block -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="260" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">EVALUATION BENCHMARK</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">The 7-Point Quality Scorecard</text>
      <text x="0" y="98" font-family="sans-serif" font-size="15" fill="#a1a1aa">Evaluating the best podcasts by Indian women through substance, craft, and retention rather than vanity followers.</text>
    </g>

    <!-- Grid of 7 Points -->
    <!-- Row 1: 4 cards -->
    <g transform="translate(60, 180)">
      <rect width="250" height="195" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">1</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Consistency</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">A disciplined publishing rhythm</tspan>
        <tspan x="20" dy="20">over consecutive quarters, not a</tspan>
        <tspan x="20" dy="20">sporadic burst of 10 episodes</tspan>
        <tspan x="20" dy="20">followed by silence.</tspan>
      </text>
    </g>

    <g transform="translate(340, 180)">
      <rect width="250" height="195" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">2</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Guest Quality</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">High-calibre practitioners:</tspan>
        <tspan x="20" dy="20">unicorn founders, top surgeons,</tspan>
        <tspan x="20" dy="20">legal counsels and verified</tspan>
        <tspan x="20" dy="20">domain authorities.</tspan>
      </text>
    </g>

    <g transform="translate(620, 180)">
      <rect width="250" height="195" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">3</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Interview Craft</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Active listening, sharp follow-</tspan>
        <tspan x="20" dy="20">ups, and masterly tactical</tspan>
        <tspan x="20" dy="20">pauses rather than reading</tspan>
        <tspan x="20" dy="20">a rigid question list.</tspan>
      </text>
    </g>

    <g transform="translate(900, 180)">
      <rect width="250" height="195" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">4</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Audience Trust</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">High episode retention rates,</tspan>
        <tspan x="20" dy="20">frequent organic clip shares,</tspan>
        <tspan x="20" dy="20">and repeat listener loyalty</tspan>
        <tspan x="20" dy="20">over empty bot follower counts.</tspan>
      </text>
    </g>

    <!-- Row 2: 3 cards -->
    <g transform="translate(60, 405)">
      <rect width="345" height="195" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">5</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Platform Presence</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Synchronized distribution across 4K YouTube,</tspan>
        <tspan x="20" dy="20">Spotify, Apple Podcasts, with timestamped chapters</tspan>
        <tspan x="20" dy="20">and searchable full transcripts.</tspan>
      </text>
    </g>

    <g transform="translate(435, 405)">
      <rect width="345" height="195" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">6</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Verified Credentials</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">A transparent track record: published media bylines,</tspan>
        <tspan x="20" dy="20">verifiable speaking credits (TEDx), and real industry</tspan>
        <tspan x="20" dy="20">reputation in executive communications.</tspan>
      </text>
    </g>

    <g transform="translate(810, 405)">
      <rect width="340" height="195" rx="16" fill="url(#cardGrad)" stroke="#d89ba4" stroke-opacity="0.3"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.25"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">7</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">AI Search Discoverability</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Structured schema graphs, entity knowledge</tspan>
        <tspan x="20" dy="20">indexing, and semantic clarity for Google SGE,</tspan>
        <tspan x="20" dy="20">ChatGPT, and Perplexity retrieval.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg));
  await saveToMultipleLocations(img, 'why-indian-women-podcasting-is-growing-2026.webp');
}

async function run() {
  await generateHeroImage();
  await generateScorecardImage();
  console.log("All images generated successfully!");
}

run().catch(console.error);
