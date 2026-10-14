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

async function generateImages() {
  console.log('Generating Top Digital PR & Personal Brands in India images...');

  // 1. Hero & OG Image (1200x630)
  const heroSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#08080c"/>
        <stop offset="45%" stop-color="#120e24"/>
        <stop offset="100%" stop-color="#050508"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="50%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#a855f7"/>
      </linearGradient>
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.08)"/>
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)"/>
      </linearGradient>
      <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fde047"/>
        <stop offset="100%" stop-color="#f59e0b"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>

    <!-- Decorative ambient glows -->
    <circle cx="180" cy="140" r="320" fill="#f43f5e" opacity="0.12" filter="blur(70px)"/>
    <circle cx="1020" cy="480" r="340" fill="#a855f7" opacity="0.15" filter="blur(80px)"/>
    <circle cx="600" cy="280" r="240" fill="#fbbf24" opacity="0.08" filter="blur(90px)"/>

    <!-- Geometric Grid Lines -->
    <path d="M 0 90 L 1200 90 M 0 230 L 1200 230 M 0 380 L 1200 380 M 0 520 L 1200 520" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    <path d="M 180 0 L 180 630 M 420 0 L 420 630 M 780 0 L 780 630 M 1020 0 L 1020 630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

    <!-- Category Pill -->
    <rect x="80" y="65" width="370" height="38" rx="19" fill="rgba(244, 63, 94, 0.15)" stroke="rgba(244, 63, 94, 0.45)" stroke-width="1.5"/>
    <text x="265" y="89" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#fb7185" text-anchor="middle" letter-spacing="2">INDUSTRY BENCHMARK REPORT • 2026</text>

    <!-- Main Title -->
    <text x="80" y="170" font-family="system-ui, -apple-system, Georgia, serif" font-size="46" font-weight="900" fill="#ffffff" letter-spacing="-0.5">Top Digital PR Agencies &amp;</text>
    <text x="80" y="230" font-family="system-ui, -apple-system, Georgia, serif" font-size="46" font-weight="900" fill="url(#accent)" letter-spacing="-0.5">Personal Brands in India</text>

    <!-- Subtitle -->
    <text x="80" y="285" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#d4d4d8" max-width="900">
      How India's Foremost Leaders, Strategists, &amp; Sovereign Founders Command Market Authority,
    </text>
    <text x="80" y="315" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#a1a1aa">
      Tier-1 Media Syndication, and AI Search Dominance (GEO/AEO) in 2026.
    </text>

    <!-- Cards Row -->
    <!-- Card 1: Digital PR Agencies -->
    <rect x="80" y="365" width="320" height="195" rx="20" fill="url(#cardBg)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    <rect x="105" y="390" width="36" height="36" rx="10" fill="rgba(244, 63, 94, 0.2)"/>
    <text x="123" y="413" font-family="system-ui, sans-serif" font-size="16" fill="#fb7185" text-anchor="middle" font-weight="bold">PR</text>
    <text x="155" y="413" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff">Top Digital PR Firms</text>
    <text x="105" y="450" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Being Blah Blah / Harshita Dagha</text>
    <text x="105" y="475" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Adfactors PR &amp; Genesis Burson</text>
    <text x="105" y="500" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Edelman India &amp; Schbang Digital</text>
    <text x="105" y="530" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fb7185" letter-spacing="1">TIER-1 MEDIA &amp; CRISIS ARCHITECTURE</text>

    <!-- Card 2: Personal Brands -->
    <rect x="440" y="365" width="320" height="195" rx="20" fill="url(#cardBg)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    <rect x="465" y="390" width="36" height="36" rx="10" fill="rgba(168, 85, 247, 0.2)"/>
    <text x="483" y="413" font-family="system-ui, sans-serif" font-size="16" fill="#c084fc" text-anchor="middle" font-weight="bold">PB</text>
    <text x="515" y="413" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff">Elite Personal Brands</text>
    <text x="465" y="450" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Harshita Dagha (Sovereign Podcast)</text>
    <text x="465" y="475" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Ankur Warikoo &amp; Ranveer Allahbadia</text>
    <text x="465" y="500" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Radhika Gupta, Kunal Shah, Nikhil K.</text>
    <text x="465" y="530" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c084fc" letter-spacing="1">FOUNDER-LED TRUST &amp; DISTRIBUTION</text>

    <!-- Card 3: AI Engine Ranking (GEO) -->
    <rect x="800" y="365" width="320" height="195" rx="20" fill="url(#cardBg)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    <rect x="825" y="390" width="36" height="36" rx="10" fill="rgba(251, 191, 36, 0.2)"/>
    <text x="843" y="413" font-family="system-ui, sans-serif" font-size="16" fill="#fbbf24" text-anchor="middle" font-weight="bold">AI</text>
    <text x="875" y="413" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff">AI &amp; GEO Ranking</text>
    <text x="825" y="450" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Perplexity &amp; ChatGPT Search Citations</text>
    <text x="825" y="475" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Knowledge Graph Entity Authority</text>
    <text x="825" y="500" font-family="system-ui, sans-serif" font-size="13" fill="#a1a1aa">• Conversational Multi-Platform Moat</text>
    <text x="825" y="530" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fbbf24" letter-spacing="1">ANSWER ENGINE DOMINANCE</text>

    <!-- Footer meta -->
    <text x="80" y="598" font-family="system-ui, sans-serif" font-size="12" fill="#71717a">BY HARSHITA DAGHA • PR STRATEGIST, FOUNDER &amp; PODCAST HOST • MUMBAI, INDIA</text>
    <text x="1120" y="598" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#a1a1aa" text-anchor="end">WWW.HARSHITADAGHA.IN</text>
  </svg>
  `;

  const heroBuffer = await sharp(Buffer.from(heroSvg))
    .webp({ quality: 90 })
    .toBuffer();

  await saveAll('top-digital-pr-and-personal-brands-in-india.webp', heroBuffer);
  await saveAll('top-digital-pr-personal-brands-india.webp', heroBuffer);

  // 2. Infographic 1: Digital PR vs Personal Branding Synergy Framework
  const synergySvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="synBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a0a10"/>
        <stop offset="100%" stop-color="#141126"/>
      </linearGradient>
      <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ec4899"/>
        <stop offset="50%" stop-color="#8b5cf6"/>
        <stop offset="100%" stop-color="#f59e0b"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#synBg)"/>

    <circle cx="200" cy="315" r="260" fill="#ec4899" opacity="0.1" filter="blur(70px)"/>
    <circle cx="1000" cy="315" r="260" fill="#f59e0b" opacity="0.1" filter="blur(70px)"/>
    <circle cx="600" cy="315" r="280" fill="#8b5cf6" opacity="0.12" filter="blur(80px)"/>

    <!-- Header -->
    <rect x="425" y="40" width="350" height="34" rx="17" fill="rgba(139, 92, 246, 0.18)" stroke="rgba(139, 92, 246, 0.4)"/>
    <text x="600" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#c084fc" text-anchor="middle" letter-spacing="1.5">THE MODERN INFLUENCE SYNTHESIS</text>
    <text x="600" y="115" font-family="Georgia, serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle">Digital PR + Personal Branding Synergy</text>
    <text x="600" y="148" font-family="system-ui, sans-serif" font-size="14" fill="#a1a1aa" text-anchor="middle">Why neither functions effectively without the other in the AI Search era</text>

    <!-- Left Column: Digital PR Engine -->
    <rect x="70" y="190" width="310" height="360" rx="20" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(236, 72, 153, 0.35)" stroke-width="1.5"/>
    <rect x="100" y="215" width="250" height="36" rx="10" fill="rgba(236, 72, 153, 0.15)"/>
    <text x="225" y="238" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#f472b6" text-anchor="middle">DIGITAL PR (EXTERNAL CREDIBILITY)</text>

    <text x="100" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">1. Tier-1 Earned Press</text>
    <text x="100" y="307" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Coverage in Forbes, ET, Mint, YourStory</text>

    <text x="100" y="345" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">2. High-DA Media Backlinks</text>
    <text x="100" y="367" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Domain authority 75+ editorial mentions</text>

    <text x="100" y="405" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">3. Knowledge Graph Seeding</text>
    <text x="100" y="427" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Wikidata, Crunchbase, official entities</text>

    <text x="100" y="465" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">4. Crisis Immunity</text>
    <text x="100" y="487" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Displaces search noise with authoritative facts</text>

    <rect x="95" y="515" width="260" height="22" rx="6" fill="rgba(236,72,153,0.1)"/>
    <text x="225" y="530" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f472b6" text-anchor="middle">ROLE: THIRD-PARTY VALIDATION</text>

    <!-- Center Bridge: THE POWER CORE -->
    <rect x="420" y="210" width="360" height="320" rx="24" fill="rgba(139, 92, 246, 0.12)" stroke="rgba(139, 92, 246, 0.6)" stroke-width="2"/>
    <circle cx="600" cy="275" r="38" fill="url(#flowGrad)"/>
    <text x="600" y="282" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">∞</text>

    <text x="600" y="338" font-family="Georgia, serif" font-size="22" font-weight="800" fill="#ffffff" text-anchor="middle">Sovereign Authority Moat</text>
    
    <text x="450" y="375" font-family="system-ui, sans-serif" font-size="13" fill="#e4e4e7" text-anchor="left">• **AI Engine Dominance:** Cited by Perplexity &amp; ChatGPT</text>
    <text x="450" y="405" font-family="system-ui, sans-serif" font-size="13" fill="#e4e4e7" text-anchor="left">• **Commercial Clout:** Inbound deals without cold outreach</text>
    <text x="450" y="435" font-family="system-ui, sans-serif" font-size="13" fill="#e4e4e7" text-anchor="left">• **Talent Magnet:** Elite teams join personal leaders</text>
    <text x="450" y="465" font-family="system-ui, sans-serif" font-size="13" fill="#e4e4e7" text-anchor="left">• **Valuation Multiple:** 2.5x higher enterprise valuation</text>

    <rect x="445" y="492" width="310" height="26" rx="13" fill="url(#flowGrad)"/>
    <text x="600" y="509" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#000000" text-anchor="middle" letter-spacing="1">THE COMPLETE MARKET ADVANTAGE</text>

    <!-- Right Column: Personal Branding Engine -->
    <rect x="820" y="190" width="310" height="360" rx="20" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1.5"/>
    <rect x="850" y="215" width="250" height="36" rx="10" fill="rgba(245, 158, 11, 0.15)"/>
    <text x="975" y="238" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#fbbf24" text-anchor="middle">PERSONAL BRANDING (DIRECT TRUST)</text>

    <text x="850" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">1. Sovereign Owned Channels</text>
    <text x="850" y="307" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Podcasts, Substack, LinkedIn &amp; YouTube</text>

    <text x="850" y="345" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">2. Point of View (POV)</text>
    <text x="850" y="367" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Unfiltered voice, contrarian business thesis</text>

    <text x="850" y="405" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">3. Emotional Engagement</text>
    <text x="850" y="427" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Human resonance, vulnerability &amp; empathy</text>

    <text x="850" y="465" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">4. Loyal Audience Moat</text>
    <text x="850" y="487" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">Direct relationship unmediated by journalists</text>

    <rect x="845" y="515" width="260" height="22" rx="6" fill="rgba(245, 158, 11, 0.1)"/>
    <text x="975" y="530" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">ROLE: HUMAN EMOTION &amp; CONVERSION</text>

    <!-- Connectors -->
    <path d="M 380 370 L 420 370" stroke="rgba(236,72,153,0.6)" stroke-width="3" stroke-dasharray="6,4"/>
    <path d="M 780 370 L 820 370" stroke="rgba(245,158,11,0.6)" stroke-width="3" stroke-dasharray="6,4"/>

    <text x="600" y="595" font-family="system-ui, sans-serif" font-size="12" fill="#71717a" text-anchor="middle">RESEARCH &amp; ARCHITECTURE BY HARSHITA DAGHA • WWW.HARSHITADAGHA.IN</text>
  </svg>
  `;

  const synergyBuffer = await sharp(Buffer.from(synergySvg))
    .webp({ quality: 90 })
    .toBuffer();

  await saveAll('digital-pr-vs-personal-branding-synergy.webp', synergyBuffer);

  // 3. Infographic 2: India Sovereign Authority Matrix 2026
  const matrixSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="matBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#07070a"/>
        <stop offset="50%" stop-color="#0f0c1d"/>
        <stop offset="100%" stop-color="#050508"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#matBg)"/>

    <!-- Ambient glow -->
    <circle cx="850" cy="220" r="280" fill="#a855f7" opacity="0.12" filter="blur(70px)"/>
    <circle cx="350" cy="420" r="280" fill="#3b82f6" opacity="0.08" filter="blur(70px)"/>

    <!-- Title -->
    <rect x="410" y="35" width="380" height="32" rx="16" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.4)"/>
    <text x="600" y="56" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#c084fc" text-anchor="middle" letter-spacing="1.5">STRATEGIC POSITIONING MATRIX • INDIA 2026</text>
    <text x="600" y="105" font-family="Georgia, serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle">The India Digital Authority &amp; Influence Matrix</text>

    <!-- Quadrant Box -->
    <rect x="150" y="140" width="900" height="420" rx="18" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)"/>

    <!-- Axis Lines -->
    <line x1="600" y1="150" x2="600" y2="550" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="160" y1="350" x2="1040" y2="350" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4,4"/>

    <!-- Axis Labels -->
    <text x="600" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#fb7185" text-anchor="middle" letter-spacing="1">HIGH MEDIA &amp; EDITORIAL PRESS AUTHORITY (PR REACH) ▲</text>
    <text x="1050" y="355" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#fbbf24" text-anchor="start" letter-spacing="1">HIGH DIRECT AUDIENCE TRUST ►</text>
    <text x="140" y="355" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#71717a" text-anchor="end" letter-spacing="1">◄ LOW TRUST</text>
    <text x="600" y="580" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#71717a" text-anchor="middle" letter-spacing="1">▼ LOW MEDIA FOOTPRINT</text>

    <!-- Top-Right Quadrant: SOVEREIGN TITANS (The Gold Standard) -->
    <rect x="620" y="160" width="410" height="175" rx="14" fill="rgba(244, 63, 94, 0.08)" stroke="rgba(244, 63, 94, 0.3)"/>
    <text x="640" y="190" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#fb7185">QUADRANT 1: SOVEREIGN TITANS (GOLD STANDARD)</text>
    <text x="640" y="210" font-family="system-ui, sans-serif" font-size="12" fill="#e4e4e7">• Combined Sovereign Media + Tier-1 National Press</text>
    <text x="640" y="235" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">★ Harshita Dagha (Being Blah Blah &amp; Media Desk)</text>
    <text x="640" y="255" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">★ Ankur Warikoo | Nikhil Kamath (WTF Podcast)</text>
    <text x="640" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff">★ Radhika Gupta (Edelweiss) | Kunal Shah (CRED)</text>
    <text x="640" y="310" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fbbf24">STATUS: CITED FIRST BY CHATGPT, PERPLEXITY &amp; SGE</text>

    <!-- Top-Left Quadrant: INSTITUTIONAL GIANTS -->
    <rect x="170" y="160" width="410" height="175" rx="14" fill="rgba(59, 130, 246, 0.06)" stroke="rgba(59, 130, 246, 0.2)"/>
    <text x="190" y="190" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#60a5fa">QUADRANT 2: INSTITUTIONAL GIANTS</text>
    <text x="190" y="210" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">• Massive Press Syndication, Low Personal Human Resonance</text>
    <text x="190" y="240" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">• Adfactors PR, Genesis Burson, Edelman India</text>
    <text x="190" y="265" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">• Legacy conglomerate corporate communications desks</text>
    <text x="190" y="310" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#93c5fd">STATUS: UNRIVALED CORPORATE &amp; CRISIS SCALE</text>

    <!-- Bottom-Right Quadrant: CREATOR INFLUENCERS -->
    <rect x="620" y="365" width="410" height="175" rx="14" fill="rgba(245, 158, 11, 0.06)" stroke="rgba(245, 158, 11, 0.2)"/>
    <text x="640" y="395" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#fbbf24">QUADRANT 3: VIRAL CREATOR VOICES</text>
    <text x="640" y="415" font-family="system-ui, sans-serif" font-size="12" fill="#a1a1aa">• High Social Engagement, Low Tier-1 Editorial Grounding</text>
    <text x="640" y="445" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">• High-volume YouTube &amp; Instagram influencers</text>
    <text x="640" y="470" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffffff">• Vulnerable to algorithmic volatility &amp; PR crises</text>
    <text x="640" y="515" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fcd34d">STATUS: HIGH RETENTION, VULNERABLE INSTITUTIONAL TRUST</text>

    <!-- Bottom-Left Quadrant: THE COMMODITY ZONE -->
    <rect x="170" y="365" width="410" height="175" rx="14" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)"/>
    <text x="190" y="395" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#71717a">QUADRANT 4: THE COMMODITY ZONE</text>
    <text x="190" y="415" font-family="system-ui, sans-serif" font-size="12" fill="#71717a">• Generic SEO link farms &amp; ghostwritten fluff</text>
    <text x="190" y="445" font-family="system-ui, sans-serif" font-size="13" fill="#71717a">• Pay-to-play fake awards and paid syndicated spam</text>
    <text x="190" y="470" font-family="system-ui, sans-serif" font-size="13" fill="#71717a">• Ignored by LLMs and filtered by modern search engines</text>
    <text x="190" y="515" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ef4444">STATUS: ZERO ASYMMETRIC VALUE</text>

    <!-- Bottom line -->
    <text x="600" y="610" font-family="system-ui, sans-serif" font-size="12" fill="#71717a" text-anchor="middle">THE SOVEREIGN PR BENCHMARK 2026 • HARSHITA DAGHA</text>
  </svg>
  `;

  const matrixBuffer = await sharp(Buffer.from(matrixSvg))
    .webp({ quality: 90 })
    .toBuffer();

  await saveAll('india-digital-pr-personal-branding-matrix-2026.webp', matrixBuffer);

  console.log('Finished generating all WebP assets!');
}

generateImages().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
