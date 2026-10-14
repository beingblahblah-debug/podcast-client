import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDirs = [
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'public/images'),
  path.join(process.cwd(), 'public/images/blog')
];

outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function saveAll(name, buffer) {
  for (const dir of outDirs) {
    fs.writeFileSync(path.join(dir, name), buffer);
  }
  console.log(`Saved ${name} across all public directories`);
}

async function generatePrAgencyImages() {
  console.log('Generating PR Agency Mumbai images...');

  // 1. Hero & OG Image (1200x630)
  const heroSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a0a0f"/>
        <stop offset="50%" stop-color="#141126"/>
        <stop offset="100%" stop-color="#07070a"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#ec4899"/>
        <stop offset="100%" stop-color="#8b5cf6"/>
      </linearGradient>
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.08)"/>
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>

    <!-- Decorative ambient glows -->
    <circle cx="150" cy="120" r="280" fill="#ec4899" opacity="0.12" filter="blur(60px)"/>
    <circle cx="1050" cy="500" r="320" fill="#8b5cf6" opacity="0.15" filter="blur(70px)"/>
    <circle cx="600" cy="300" r="220" fill="#f59e0b" opacity="0.08" filter="blur(80px)"/>

    <!-- Geometric Grid Lines -->
    <path d="M 0 100 L 1200 100 M 0 250 L 1200 250 M 0 400 L 1200 400 M 0 550 L 1200 550" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    <path d="M 200 0 L 200 630 M 450 0 L 450 630 M 750 0 L 750 630 M 1000 0 L 1000 630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

    <!-- Category Pill -->
    <rect x="80" y="70" width="310" height="38" rx="19" fill="rgba(236, 72, 153, 0.15)" stroke="rgba(236, 72, 153, 0.4)" stroke-width="1.5"/>
    <text x="235" y="94" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f472b6" text-anchor="middle" letter-spacing="1.5">STRATEGIC PR &amp; BRANDING • MUMBAI</text>

    <!-- Main Title -->
    <text x="80" y="165" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      Public Relations Agency
    </text>
    <text x="80" y="222" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="url(#accent)" letter-spacing="-0.5">
      in Mumbai: Visibility &amp; Trust
    </text>

    <!-- Subtitle -->
    <text x="80" y="275" font-family="system-ui, sans-serif" font-size="20" font-weight="400" fill="#9ca3af" width="600">
      How Strategic PR, Digital Media &amp; Executive Storytelling Build Long-Term Authority
    </text>

    <!-- 3 Pillars Feature Box -->
    <g transform="translate(80, 320)">
      <!-- Box 1 -->
      <rect x="0" y="0" width="220" height="150" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <circle cx="36" cy="36" r="16" fill="rgba(245, 158, 11, 0.2)"/>
      <text x="36" y="42" font-family="system-ui, sans-serif" font-size="16" fill="#f59e0b" text-anchor="middle">📰</text>
      <text x="24" y="80" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Media Relations</text>
      <text x="24" y="105" font-family="system-ui, sans-serif" font-size="13" fill="#9ca3af">National tier-1 press,</text>
      <text x="24" y="123" font-family="system-ui, sans-serif" font-size="13" fill="#9ca3af">trade &amp; industry media</text>

      <!-- Box 2 -->
      <rect x="240" y="0" width="220" height="150" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <circle cx="276" cy="36" r="16" fill="rgba(236, 72, 153, 0.2)"/>
      <text x="276" y="42" font-family="system-ui, sans-serif" font-size="16" fill="#ec4899" text-anchor="middle">🌐</text>
      <text x="264" y="80" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Digital PR &amp; GEO</text>
      <text x="264" y="105" font-family="system-ui, sans-serif" font-size="13" fill="#9ca3af">Online syndication &amp;</text>
      <text x="264" y="123" font-family="system-ui, sans-serif" font-size="13" fill="#9ca3af">AI search discoverability</text>

      <!-- Box 3 -->
      <rect x="480" y="0" width="220" height="150" rx="16" fill="url(#cardBg)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <circle cx="516" cy="36" r="16" fill="rgba(139, 92, 246, 0.2)"/>
      <text x="516" y="42" font-family="system-ui, sans-serif" font-size="16" fill="#8b5cf6" text-anchor="middle">🎙️</text>
      <text x="504" y="80" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Executive Branding</text>
      <text x="504" y="105" font-family="system-ui, sans-serif" font-size="13" fill="#9ca3af">Founder visibility,</text>
      <text x="504" y="123" font-family="system-ui, sans-serif" font-size="13" fill="#9ca3af">LinkedIn &amp; podcasts</text>
    </g>

    <!-- Right Card: Harshita Dagha Credentials -->
    <g transform="translate(830, 100)">
      <rect x="0" y="0" width="290" height="420" rx="20" fill="rgba(20, 20, 35, 0.85)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <circle cx="145" cy="90" r="50" fill="#ec4899" opacity="0.2"/>
      <text x="145" y="98" font-family="system-ui, sans-serif" font-size="34" fill="#ffffff" text-anchor="middle">HD</text>

      <text x="145" y="170" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle">Harshita Dagha</text>
      <text x="145" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#f472b6" text-anchor="middle">FOUNDER &amp; PR STRATEGIST</text>
      
      <line x1="30" y1="215" x2="260" y2="215" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

      <text x="40" y="245" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">✓ 16+ Years Experience</text>
      <text x="40" y="275" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">✓ TEDx Speaker</text>
      <text x="40" y="305" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">✓ Founder, Beingblahblah</text>
      <text x="40" y="335" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">✓ BKC Mumbai Flagship Studio</text>
      <text x="40" y="365" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">✓ GEO &amp; AI Search Specialist</text>

      <rect x="30" y="380" width="230" height="26" rx="6" fill="rgba(255,255,255,0.05)"/>
      <text x="145" y="397" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#9ca3af" text-anchor="middle">HARSHITADAGHA.IN/SERVICES</text>
    </g>

    <!-- Bottom Bar -->
    <rect x="80" y="520" width="700" height="48" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1"/>
    <text x="100" y="550" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#9ca3af">
      Location: <tspan fill="#ffffff" font-weight="700">Mumbai (BKC)</tspan> • Focus: <tspan fill="#ffffff" font-weight="700">Public Relations &amp; Brand Storytelling</tspan>
    </text>
  </svg>
  `;

  const heroBuffer = await sharp(Buffer.from(heroSvg)).webp({ quality: 90 }).toBuffer();
  await saveAll('public-relations-agency-in-mumbai.webp', heroBuffer);
  await saveAll('public-relations-agency-mumbai.webp', heroBuffer);

  // 2. PR Strategy Framework & Comparison Scorecard (1200x630)
  const scorecardSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b0f19"/>
        <stop offset="100%" stop-color="#05070d"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#bg2)"/>
    <circle cx="200" cy="100" r="220" fill="#3b82f6" opacity="0.1" filter="blur(60px)"/>
    <circle cx="1000" cy="500" r="250" fill="#10b981" opacity="0.1" filter="blur(70px)"/>

    <text x="600" y="70" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#60a5fa" text-anchor="middle" letter-spacing="2">EVALUATION FRAMEWORK</text>
    <text x="600" y="115" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle">What to Compare in a Mumbai PR Agency</text>
    <text x="600" y="150" font-family="system-ui, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle">5 Essential Pillars for High-Impact Brand Visibility &amp; Executive Credibility</text>

    <!-- 5 Horizontal Criterion Cards -->
    <g transform="translate(100, 185)">
      <!-- Card 1 -->
      <rect x="0" y="0" width="1000" height="68" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="15" y="14" width="40" height="40" rx="8" fill="rgba(59, 130, 246, 0.15)"/>
      <text x="35" y="40" font-family="system-ui, sans-serif" font-size="18" fill="#60a5fa" text-anchor="middle" font-weight="800">1</text>
      <text x="75" y="41" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Industry Understanding</text>
      <text x="320" y="41" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Reflecting domain language, sector nuances, competitor context, and audience realities.</text>

      <!-- Card 2 -->
      <rect x="0" y="80" width="1000" height="68" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="15" y="94" width="40" height="40" rx="8" fill="rgba(236, 72, 153, 0.15)"/>
      <text x="35" y="120" font-family="system-ui, sans-serif" font-size="18" fill="#ec4899" text-anchor="middle" font-weight="800">2</text>
      <text x="75" y="121" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Storytelling Craft</text>
      <text x="320" y="121" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Moving beyond generic promotional slogans into substance, data, evidence and insights.</text>

      <!-- Card 3 -->
      <rect x="0" y="160" width="1000" height="68" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="15" y="174" width="40" height="40" rx="8" fill="rgba(245, 158, 11, 0.15)"/>
      <text x="35" y="200" font-family="system-ui, sans-serif" font-size="18" fill="#f59e0b" text-anchor="middle" font-weight="800">3</text>
      <text x="75" y="201" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Media Relevance</text>
      <text x="320" y="201" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Reaching qualified stakeholders, business leaders, investors, and active prospective buyers.</text>

      <!-- Card 4 -->
      <rect x="0" y="240" width="1000" height="68" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="15" y="254" width="40" height="40" rx="8" fill="rgba(16, 185, 129, 0.15)"/>
      <text x="35" y="280" font-family="system-ui, sans-serif" font-size="18" fill="#10b981" text-anchor="middle" font-weight="800">4</text>
      <text x="75" y="281" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Digital PR &amp; GEO Integration</text>
      <text x="320" y="281" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Coordinating digital footprints so coverage feeds AI discovery, search engines, and web presence.</text>

      <!-- Card 5 -->
      <rect x="0" y="320" width="1000" height="68" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="15" y="334" width="40" height="40" rx="8" fill="rgba(139, 92, 246, 0.15)"/>
      <text x="35" y="360" font-family="system-ui, sans-serif" font-size="18" fill="#8b5cf6" text-anchor="middle" font-weight="800">5</text>
      <text x="75" y="361" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#ffffff">Transparent Measurement</text>
      <text x="320" y="361" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Tracking branded search, qualified inquiries, referral traffic, and genuine authority metrics.</text>
    </g>
  </svg>
  `;

  const scorecardBuffer = await sharp(Buffer.from(scorecardSvg)).webp({ quality: 90 }).toBuffer();
  await saveAll('pr-strategy-framework-mumbai.webp', scorecardBuffer);

  // 3. Personal Branding & Executive PR (1200x630)
  const executivePrSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#111827"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#090d16"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#bg3)"/>
    <circle cx="950" cy="150" r="280" fill="#ec4899" opacity="0.12" filter="blur(80px)"/>

    <text x="80" y="90" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ec4899" letter-spacing="1.5">EXECUTIVE VISIBILITY &amp; PERSONAL BRANDING</text>
    <text x="80" y="145" font-family="system-ui, sans-serif" font-size="38" font-weight="900" fill="#ffffff">The Bridge Between PR &amp; Founder Reputation</text>
    <text x="80" y="185" font-family="system-ui, sans-serif" font-size="16" fill="#9ca3af">How personal branding amplifies institutional public relations in competitive markets</text>

    <!-- Split Visual Blocks -->
    <g transform="translate(80, 220)">
      <!-- Left: Traditional Corporate PR -->
      <rect x="0" y="0" width="500" height="340" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="40" y="50" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#f59e0b">Institutional Public Relations</text>
      <text x="40" y="80" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Builds the company's baseline credibility:</text>
      
      <circle cx="50" cy="120" r="4" fill="#f59e0b"/>
      <text x="65" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Press releases and milestone announcements</text>

      <circle cx="50" cy="160" r="4" fill="#f59e0b"/>
      <text x="65" y="165" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Corporate interviews and quarterly results</text>

      <circle cx="50" cy="200" r="4" fill="#f59e0b"/>
      <text x="65" y="205" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Crisis communication and brand defense</text>

      <circle cx="50" cy="240" r="4" fill="#f59e0b"/>
      <text x="65" y="245" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Industry award submissions and partnerships</text>
      
      <rect x="40" y="280" width="420" height="36" rx="8" fill="rgba(245, 158, 11, 0.1)"/>
      <text x="250" y="303" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#f59e0b" text-anchor="middle">Corporate Trust &amp; Market Standing</text>

      <!-- Right: Personal & Executive PR -->
      <rect x="540" y="0" width="500" height="340" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(236, 72, 153, 0.25)" stroke-width="1.5"/>
      <text x="580" y="50" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#ec4899">Founder &amp; Executive Storytelling</text>
      <text x="580" y="80" font-family="system-ui, sans-serif" font-size="14" fill="#9ca3af">Brings human trust, perspective, and resonance:</text>

      <circle cx="590" cy="120" r="4" fill="#ec4899"/>
      <text x="605" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Long-form podcast interviews &amp; unscripted dialogues</text>

      <circle cx="590" cy="160" r="4" fill="#ec4899"/>
      <text x="605" y="165" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">LinkedIn executive thought leadership &amp; industry essays</text>

      <circle cx="590" cy="200" r="4" fill="#ec4899"/>
      <text x="605" y="205" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Keynote speaking, panel moderation &amp; TEDx appearances</text>

      <circle cx="590" cy="240" r="4" fill="#ec4899"/>
      <text x="605" y="245" font-family="system-ui, sans-serif" font-size="14" fill="#d1d5db">Generative Engine Optimization (GEO) for AI citations</text>

      <rect x="580" y="280" width="420" height="36" rx="8" fill="rgba(236, 72, 153, 0.15)"/>
      <text x="790" y="303" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#f472b6" text-anchor="middle">Personal Authority &amp; Long-Term Inbound Demand</text>
    </g>
  </svg>
  `;

  const executivePrBuffer = await sharp(Buffer.from(executivePrSvg)).webp({ quality: 90 }).toBuffer();
  await saveAll('personal-branding-pr-harshita-dagha.webp', executivePrBuffer);

  console.log('All PR Agency images generated successfully!');
}

generatePrAgencyImages().catch(err => {
  console.error(err);
  process.exit(1);
});
