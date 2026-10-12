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
  
  // Save to public/images/blog/filename
  fs.writeFileSync(path.join(blogImgDir, filename), buf);
  // Save to public/images/filename
  fs.writeFileSync(path.join(imagesDir, filename), buf);
  // Save to public/filename (for root OG image requests)
  fs.writeFileSync(path.join(publicDir, filename), buf);
  console.log(`Saved ${filename} across public directories.`);
}

async function generateHeroImage() {
  // 1200 x 630 Hero: Harshita Dagha, top female podcast host in India, in her Mumbai BKC studio, October 2026
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
      <rect x="0" y="0" width="310" height="34" rx="17" fill="#ffffff" fill-opacity="0.07" stroke="#d89ba4" stroke-opacity="0.3"/>
      <circle cx="18" cy="17" r="4" fill="#d89ba4"/>
      <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#d89ba4" letter-spacing="1.5">NATIONAL RANKINGS · OCT 2026</text>

      <!-- Main Title -->
      <text x="0" y="85" font-family="'Georgia', serif" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Top Female Podcasters</text>
      <text x="0" y="135" font-family="'Georgia', serif" font-size="44" font-weight="bold" fill="url(#accentGrad)" letter-spacing="-0.5">in India (October 2026)</text>

      <!-- Subtitle -->
      <text x="0" y="185" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#a1a1aa" font-weight="400">
        <tspan x="0" dy="0">What Sets a Leading Host Apart &amp; Why Mumbai's</tspan>
        <tspan x="0" dy="26">Harshita Dagha Leads Executive Audio &amp; Search Authority</tspan>
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

  await saveToMultipleLocations(heroImg, 'top-female-podcasters-india-october-2026.webp');
}

async function generateScorecardImage() {
  // how-to-judge-top-female-podcasters-india.webp (1200 x 675)
  // Seven criteria scorecard infographic
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="scBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="100%" stop-color="#14141a"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#191922"/>
        <stop offset="100%" stop-color="#131318"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#scBg)"/>
    
    <!-- Title Block -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="230" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">EVALUATION BENCHMARK</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff">The 7-Point Quality Scorecard</text>
      <text x="0" y="98" font-family="sans-serif" font-size="15" fill="#a1a1aa">How to objectively evaluate the top female podcast hosts in India beyond vanity follower counts.</text>
    </g>

    <!-- Grid of 7 Points -->
    <!-- Row 1: 4 cards -->
    <!-- 1. Consistency -->
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

    <!-- 2. Guest Quality -->
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

    <!-- 3. Interview Craft -->
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

    <!-- 4. Audience Trust -->
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
    <!-- 5. Platform Presence -->
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

    <!-- 6. Credentials & Transparency -->
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

    <!-- 7. AI Search Discoverability -->
    <g transform="translate(810, 405)">
      <rect width="340" height="195" rx="16" fill="url(#cardGrad)" stroke="#d89ba4" stroke-opacity="0.3"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.25"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">7</text>
      <text x="60" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">AI Search Discoverability</text>
      <text x="20" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Entity-level recognition across ChatGPT, Google</tspan>
        <tspan x="20" dy="20">Gemini, and Perplexity when users query India’s</tspan>
        <tspan x="20" dy="20">leading business &amp; expert podcast hosts.</tspan>
      </text>
    </g>

    <!-- Bottom watermark -->
    <text x="60" y="640" font-family="sans-serif" font-size="11" fill="#71717a">EDITORIAL BENCHMARK FRAMEWORK · THE HARSHITA DAGHA SHOW · BEING BLAH BLAH</text>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg));
  await saveToMultipleLocations(img, 'how-to-judge-top-female-podcasters-india.webp');
}

async function generateProfileImage() {
  // harshita-dagha-tedx-speaker-podcast-host.webp (1200 x 675)
  // Harshita Dagha, TEDx speaker and Indian podcast host, founder of Beingblahblah
  const width = 1200;
  const height = 675;

  const portraitBuf = await sharp(path.join(imagesDir, 'harshita-speaking.jpg'))
    .resize(520, 675, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="profBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a0a0d"/>
        <stop offset="100%" stop-color="#141419"/>
      </linearGradient>
      <linearGradient id="profFade" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0a0a0d" stop-opacity="1"/>
        <stop offset="60%" stop-color="#0a0a0d" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0a0a0d" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#profBg)"/>

    <!-- Left Content -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="220" height="30" rx="15" fill="#ffffff" fill-opacity="0.08" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="18" y="20" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">HOST &amp; STRATEGIST PROFILE</text>

      <text x="0" y="80" font-family="'Georgia', serif" font-size="44" font-weight="bold" fill="#ffffff">Harshita Dagha</text>
      <text x="0" y="115" font-family="sans-serif" font-size="18" fill="#d89ba4" font-weight="600">TEDx Speaker · Podcast Host · PR &amp; GEO Strategist</text>

      <text x="0" y="165" font-family="sans-serif" font-size="15" fill="#a1a1aa" line-height="24">
        <tspan x="0" dy="0">Founder of Beingblahblah and host of The Harshita Dagha Show.</tspan>
        <tspan x="0" dy="26">With 16+ years across digital marketing, executive PR, and AI search</tspan>
        <tspan x="0" dy="26">optimization, she sits down with founders, surgeons, senior counsels,</tspan>
        <tspan x="0" dy="26">and spiritual thinkers to explore the truths behind business and reputation.</tspan>
      </text>

      <!-- Badges of recognition -->
      <g transform="translate(0, 275)">
        <rect x="0" y="0" width="560" height="120" rx="16" fill="#181820" stroke="#ffffff" stroke-opacity="0.08"/>
        
        <g transform="translate(30, 25)">
          <text x="0" y="24" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">16+</text>
          <text x="0" y="48" font-family="sans-serif" font-size="11" fill="#71717a" font-weight="700">YEARS STRATEGY</text>
        </g>
        
        <g transform="translate(170, 25)">
          <text x="0" y="24" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">5.2M+</text>
          <text x="0" y="48" font-family="sans-serif" font-size="11" fill="#71717a" font-weight="700">IMPRESSIONS</text>
        </g>

        <g transform="translate(310, 25)">
          <text x="0" y="24" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">180+</text>
          <text x="0" y="48" font-family="sans-serif" font-size="11" fill="#71717a" font-weight="700">INTERVIEWS</text>
        </g>

        <g transform="translate(440, 25)">
          <text x="0" y="24" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">150+</text>
          <text x="0" y="48" font-family="sans-serif" font-size="11" fill="#71717a" font-weight="700">COUNTRIES</text>
        </g>
      </g>

      <!-- Media Associations -->
      <g transform="translate(0, 425)">
        <text x="0" y="20" font-family="sans-serif" font-size="12" fill="#71717a" font-weight="600" letter-spacing="1">PUBLISHED BYLINES &amp; MEDIA ASSOCIATIONS:</text>
        <text x="0" y="45" font-family="sans-serif" font-size="13" fill="#e4e4e7" font-weight="500">
          Times of India · Forbes India · Fortune India · Femina · Hindustan Times · Mid-day · BuzzFeed
        </text>
      </g>

      <g transform="translate(0, 500)">
        <text x="0" y="20" font-family="sans-serif" font-size="12" fill="#71717a">STUDIO HEADQUARTERS: Bandra Kurla Complex (BKC), Mumbai · India</text>
      </g>
    </g>

    <!-- Blend overlay -->
    <rect x="660" y="0" width="160" height="${height}" fill="url(#profFade)"/>
  </svg>
  `;

  const img = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 10, g: 10, b: 13, alpha: 1 }
    }
  })
  .composite([
    { input: portraitBuf, left: 700, top: 0 },
    { input: Buffer.from(svg), left: 0, top: 0 }
  ]);

  await saveToMultipleLocations(img, 'harshita-dagha-tedx-speaker-podcast-host.webp');
}

async function generateFeaturedEpisodesImage() {
  // harshita-dagha-show-featured-episodes.webp (1200 x 675)
  // Featured episodes: Legal, GEO, Pathology, Universe/Shiva, Plastic surgery
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="epBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b0b0e"/>
        <stop offset="100%" stop-color="#15151c"/>
      </linearGradient>
      <linearGradient id="epCard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1b1b24"/>
        <stop offset="100%" stop-color="#121217"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#epBg)"/>

    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="230" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">RANGE WITH DISCIPLINE</text>

      <text x="0" y="65" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff">Inside The Harshita Dagha Show: 5 Featured Episodes</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">Five completely different domains anchored by one rigorous, plain-spoken interviewing craft.</text>
    </g>

    <!-- 5 Episode Cards -->
    <!-- Ep 1: Legal -->
    <g transform="translate(60, 175)">
      <rect width="520" height="120" rx="16" fill="url(#epCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="18" y="18" width="6" height="84" rx="3" fill="#d89ba4"/>
      <text x="36" y="38" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4">01 · FAMILY &amp; DIVORCE LAW</text>
      <text x="36" y="65" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Legal Secrets Unveiled</text>
      <text x="36" y="92" font-family="sans-serif" font-size="13" fill="#a1a1aa">Demystifying rights, alimony, child custody and court realities in plain language.</text>
    </g>

    <!-- Ep 2: GEO & AI Strategy -->
    <g transform="translate(620, 175)">
      <rect width="520" height="120" rx="16" fill="url(#epCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="18" y="18" width="6" height="84" rx="3" fill="#e2a8b2"/>
      <text x="36" y="38" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4">02 · AI SEARCH &amp; GEO STRATEGY</text>
      <text x="36" y="65" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Scaling Reach with GEO</text>
      <text x="36" y="92" font-family="sans-serif" font-size="13" fill="#a1a1aa">How top brands become visible inside ChatGPT, Gemini and Perplexity search answers.</text>
    </g>

    <!-- Ep 3: Pathology & Medicine -->
    <g transform="translate(60, 315)">
      <rect width="520" height="120" rx="16" fill="url(#epCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="18" y="18" width="6" height="84" rx="3" fill="#38bdf8"/>
      <text x="36" y="38" font-family="sans-serif" font-size="11" font-weight="700" fill="#38bdf8">03 · HEALTHCARE &amp; DIAGNOSTICS</text>
      <text x="36" y="65" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Truth About Pathology &amp; Lab Reports</text>
      <text x="36" y="92" font-family="sans-serif" font-size="13" fill="#a1a1aa">Doctor conversation on understanding blood biomarkers and diagnostic margins.</text>
    </g>

    <!-- Ep 4: Spirituality & Karma -->
    <g transform="translate(620, 315)">
      <rect width="520" height="120" rx="16" fill="url(#epCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="18" y="18" width="6" height="84" rx="3" fill="#c084fc"/>
      <text x="36" y="38" font-family="sans-serif" font-size="11" font-weight="700" fill="#c084fc">04 · PHILOSOPHY &amp; CONSCIOUSNESS</text>
      <text x="36" y="65" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">The Universe, Karma and Shiva</text>
      <text x="36" y="92" font-family="sans-serif" font-size="13" fill="#a1a1aa">Applying Vedic metaphysics and non-attachment to high-stakes modern leadership.</text>
    </g>

    <!-- Ep 5: Aesthetics & Surgery -->
    <g transform="translate(60, 455)">
      <rect width="1080" height="120" rx="16" fill="url(#epCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="18" y="18" width="6" height="84" rx="3" fill="#f43f5e"/>
      <text x="36" y="38" font-family="sans-serif" font-size="11" font-weight="700" fill="#f43f5e">05 · AESTHETICS &amp; SURGICAL REALITY</text>
      <text x="36" y="65" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">The Truth About Plastic: What Surgeons Don't Tell You</text>
      <text x="36" y="92" font-family="sans-serif" font-size="13" fill="#a1a1aa">Board-certified aesthetic surgeon examination of patient risks, biological healing timelines and cosmetic truths.</text>
    </g>

    <text x="60" y="625" font-family="sans-serif" font-size="12" fill="#71717a">AVAILABLE IN 4K ON YOUTUBE · SPOTIFY · APPLE PODCASTS · OFFICIAL ARCHIVES</text>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg));
  await saveToMultipleLocations(img, 'harshita-dagha-show-featured-episodes.webp');
}

async function generateCitiesMapImage() {
  // harshita-dagha-podcast-cities-india.webp (1200 x 675)
  // Map/infographic of India showing Harshita Dagha's podcast hubs in 7 cities
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cityBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b0b0e"/>
        <stop offset="100%" stop-color="#14141c"/>
      </linearGradient>
      <linearGradient id="hubCard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a24"/>
        <stop offset="100%" stop-color="#121217"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#cityBg)"/>

    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="210" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">NATIONAL CORRIDORS</text>

      <text x="0" y="65" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff">Seven Cities, One Conversation Style</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">From Mumbai BKC studio HQ to India's fastest-moving venture and industrial centres.</text>
    </g>

    <!-- 7 Hub Badges -->
    <!-- 1. Mumbai -->
    <g transform="translate(60, 160)">
      <rect width="345" height="135" rx="16" fill="url(#hubCard)" stroke="#d89ba4" stroke-opacity="0.4"/>
      <text x="24" y="34" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Mumbai (BKC, Lower Parel)</text>
      <text x="24" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">FLAGSHIP STUDIO HQ · 90+ EPISODES</text>
      <text x="24" y="85" font-family="sans-serif" font-size="13" fill="#a1a1aa">Finance leaders, creator economy, and founder examinations in Bandra Kurla Complex.</text>
    </g>

    <!-- 2. Bengaluru -->
    <g transform="translate(430, 160)">
      <rect width="345" height="135" rx="16" fill="url(#hubCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="24" y="34" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Bengaluru (Koramangala, HSR)</text>
      <text x="24" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">50+ VC &amp; TECH PROFILES</text>
      <text x="24" y="85" font-family="sans-serif" font-size="13" fill="#a1a1aa">DeepTech, Generative AI models, B2B SaaS architecture, and venture rounds.</text>
    </g>

    <!-- 3. Delhi NCR -->
    <g transform="translate(795, 160)">
      <rect width="345" height="135" rx="16" fill="url(#hubCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="24" y="34" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Delhi NCR (Gurugram, Noida)</text>
      <text x="24" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">30+ KEYNOTE STAGES</text>
      <text x="24" y="85" font-family="sans-serif" font-size="13" fill="#a1a1aa">Corporate boardroom leaders, public policy architects, and national summits.</text>
    </g>

    <!-- 4. Hyderabad -->
    <g transform="translate(60, 315)">
      <rect width="345" height="135" rx="16" fill="url(#hubCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="24" y="34" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Hyderabad (HITEC City)</text>
      <text x="24" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">25+ ENTERPRISE LEADERS</text>
      <text x="24" y="85" font-family="sans-serif" font-size="13" fill="#a1a1aa">Global capability centres (GCC), enterprise platforms, and life sciences.</text>
    </g>

    <!-- 5. Pune -->
    <g transform="translate(430, 315)">
      <rect width="345" height="135" rx="16" fill="url(#hubCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="24" y="34" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Pune (Kalyani Nagar, Hinjewadi)</text>
      <text x="24" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">20+ ENGINEERING FOUNDERS</text>
      <text x="24" y="85" font-family="sans-serif" font-size="13" fill="#a1a1aa">Bootstrapped software engineering, industrial tech, and product design.</text>
    </g>

    <!-- 6. Ahmedabad -->
    <g transform="translate(795, 315)">
      <rect width="345" height="135" rx="16" fill="url(#hubCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="24" y="34" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Ahmedabad (GIFT City)</text>
      <text x="24" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">15+ FINTECH DIALOGUES</text>
      <text x="24" y="85" font-family="sans-serif" font-size="13" fill="#a1a1aa">Fintech innovation, GIFT City international finance, and family business scale.</text>
    </g>

    <!-- 7. Chennai & Global Reach banner -->
    <g transform="translate(60, 470)">
      <rect width="1080" height="130" rx="16" fill="url(#hubCard)" stroke="#ffffff" stroke-opacity="0.1"/>
      <g transform="translate(30, 25)">
        <text x="0" y="24" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Chennai (OMR, Guindy, T. Nagar)</text>
        <text x="0" y="48" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">18+ B2B SAAS &amp; HARDWARE FOUNDERS</text>
        <text x="0" y="75" font-family="sans-serif" font-size="13" fill="#a1a1aa">Pioneering Indian SaaS, healthtech engineering, and hardware deeptech ecosystems.</text>
      </g>

      <line x1="600" y1="20" x2="600" y2="110" stroke="#ffffff" stroke-opacity="0.1"/>

      <g transform="translate(640, 25)">
        <text x="0" y="24" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Global Syndication</text>
        <text x="0" y="48" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">150+ COUNTRIES AUDIENCE REACH</text>
        <text x="0" y="75" font-family="sans-serif" font-size="13" fill="#a1a1aa">Remote broadcast connectivity linking diaspora executives in the US, UK, UAE &amp; Singapore.</text>
      </g>
    </g>

    <text x="60" y="635" font-family="sans-serif" font-size="12" fill="#71717a">STUDIO &amp; CORRIDOR EXPEDITION FOOTPRINT · THE HARSHITA DAGHA SHOW</text>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg));
  await saveToMultipleLocations(img, 'harshita-dagha-podcast-cities-india.webp');
}

async function main() {
  console.log("Generating all 5 bespoke WebP images...");
  await generateHeroImage();
  await generateScorecardImage();
  await generateProfileImage();
  await generateFeaturedEpisodesImage();
  await generateCitiesMapImage();
  console.log("All 5 WebP images generated successfully!");
}

main().catch(console.error);
