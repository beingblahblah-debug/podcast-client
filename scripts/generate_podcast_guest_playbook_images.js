const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const blogImgDir = path.join(imagesDir, 'blog');
const publicBlogDir = path.join(publicDir, 'blog');

[publicDir, imagesDir, blogImgDir, publicBlogDir].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function saveAll(filename, sharpPipeline) {
  const buf = await sharpPipeline.webp({ quality: 92 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, filename), buf);
  fs.writeFileSync(path.join(imagesDir, filename), buf);
  fs.writeFileSync(path.join(blogImgDir, filename), buf);
  fs.writeFileSync(path.join(publicBlogDir, filename), buf);
  console.log(`Saved ${filename} (${buf.length} bytes) to public, images, images/blog, and blog`);
}

async function main() {
  console.log('Generating Podcast Guest Playbook WebP assets...');

  // ---------------------------------------------------------------------------
  // 1. HERO IMAGE: podcast-guest-playbook-how-to-get-booked.webp (1200 x 630)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 630;

    const photoBuf = await sharp(path.join(imagesDir, 'harshita-studio-navy.jpg'))
      .resize(560, 630, { fit: 'cover', position: 'top' })
      .toBuffer();

    const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#08080c"/>
          <stop offset="55%" stop-color="#12101a"/>
          <stop offset="100%" stop-color="#09080e"/>
        </linearGradient>
        <linearGradient id="fadeEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0c0a14" stop-opacity="1"/>
          <stop offset="42%" stop-color="#0c0a14" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#0c0a14" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#818cf8"/>
          <stop offset="100%" stop-color="#c084fc"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Ambient Glows -->
      <circle cx="160" cy="140" r="280" fill="#6366f1" opacity="0.14" filter="blur(65px)"/>
      <circle cx="640" cy="460" r="240" fill="#d89ba4" opacity="0.10" filter="blur(70px)"/>

      <!-- Grid lines -->
      <path d="M 0 100 L 1200 100 M 0 250 L 1200 250 M 0 430 L 1200 430" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      <path d="M 160 0 L 160 630 M 420 0 L 420 630 M 680 0 L 680 630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

      <!-- Left Content Group -->
      <g transform="translate(60, 48)">
        <!-- Category Badge -->
        <rect x="0" y="0" width="375" height="34" rx="17" fill="rgba(99, 102, 241, 0.15)" stroke="rgba(129, 140, 248, 0.4)" stroke-width="1.2"/>
        <circle cx="18" cy="17" r="4.5" fill="#818cf8"/>
        <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#a5b4fc" letter-spacing="1.5">PODCAST GUEST PLAYBOOK · EVERGREEN GUIDE</text>

        <!-- Main Title -->
        <text x="0" y="86" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Podcast Guest Playbook</text>
        <text x="0" y="132" font-family="'Georgia', serif" font-size="36" font-weight="bold" fill="url(#goldAccent)" letter-spacing="-0.5">How to Get Booked &amp; Find Shows</text>

        <!-- Subtitle -->
        <text x="0" y="174" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#cbd5e1" font-weight="400">
          <tspan x="0" dy="0">A master roadmap: 15-point readiness audit, pitch templates</tspan>
          <tspan x="0" dy="22">for 6 channels, 10-point audit, and 40 questions hosts ask.</tspan>
        </text>

        <!-- 3 Feature Columns -->
        <g transform="translate(0, 235)">
          <rect x="0" y="0" width="185" height="115" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18">🎙️</text>
          <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">6-Stage System</text>
          <text x="20" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Profile, Shortlist, Pitch,</text>
          <text x="20" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Follow-up, Record, Promote</text>

          <rect x="200" y="0" width="185" height="115" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="220" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18">📋</text>
          <text x="220" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">15-Point Audit</text>
          <text x="220" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Idea, Proof, Packaging,</text>
          <text x="220" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Presence &amp; Pipeline</text>

          <rect x="400" y="0" width="185" height="115" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <text x="420" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18">✉️</text>
          <text x="420" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">6 Pitch Templates</text>
          <text x="420" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">Email, LinkedIn, IG,</text>
          <text x="420" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">WhatsApp &amp; 40 Questions</text>
        </g>

        <!-- Host Footer Citation -->
        <g transform="translate(0, 395)">
          <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">
            AUTHOR &amp; HOST: <tspan fill="#ffffff">HARSHITA DAGHA</tspan> · MUMBAI STUDIO (BKC) · BEINGBLAHBLAH
          </text>
        </g>
      </g>
    </svg>
    `;

    // Composite photo on right half, overlay SVG with left fade
    const baseWithPhoto = await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 12, g: 10, b: 20, alpha: 1 }
      }
    })
      .composite([
        { input: photoBuf, top: 0, left: 640 },
        { input: Buffer.from(svgOverlay), top: 0, left: 0 }
      ]);

    await saveAll('podcast-guest-playbook-how-to-get-booked.webp', baseWithPhoto);
  }

  // ---------------------------------------------------------------------------
  // 2. SIX-STAGE SYSTEM: how-to-get-booked-on-podcasts-six-stages.webp (1200 x 640)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 640;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a10"/>
          <stop offset="100%" stop-color="#141422"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#818cf8"/>
        </linearGradient>
        <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.015)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad2)"/>

      <!-- Ambient Glow -->
      <circle cx="600" cy="180" r="300" fill="#6366f1" opacity="0.10" filter="blur(75px)"/>

      <!-- Header -->
      <g transform="translate(60, 48)">
        <rect x="0" y="0" width="310" height="30" rx="15" fill="rgba(99, 102, 241, 0.15)" stroke="rgba(129, 140, 248, 0.35)" stroke-width="1"/>
        <circle cx="16" cy="15" r="4" fill="#818cf8"/>
        <text x="28" y="19" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#a5b4fc" letter-spacing="1.2">EXECUTIVE METHODOLOGY · 6-STAGE ENGINE</text>

        <text x="0" y="68" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">Six Stages of Getting Booked on Podcasts</text>
        <text x="0" y="98" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#94a3b8">The proven end-to-end operational framework behind every high-impact interview appearance.</text>
      </g>

      <!-- 6 Stage Cards in 2 rows of 3 -->
      <!-- Row 1 -->
      <g transform="translate(60, 180)">
        <!-- Stage 1 -->
        <rect x="0" y="0" width="345" height="180" rx="16" fill="url(#cardGrad2)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <circle cx="36" cy="36" r="18" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">01</text>
        <text x="68" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Profile Architecture</text>
        <text x="24" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1" leading="20">
          <tspan x="24" dy="0">• Build a dedicated guest profile page</tspan>
          <tspan x="24" dy="22">• 60-word &amp; 150-word bios with headshot</tspan>
          <tspan x="24" dy="22">• 60-90 sec speaking video proof</tspan>
          <tspan x="24" dy="22">• Stated audience problem, not job title</tspan>
        </text>

        <!-- Stage 2 -->
        <rect x="368" y="0" width="345" height="180" rx="16" fill="url(#cardGrad2)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <circle cx="404" cy="36" r="18" fill="rgba(129, 140, 248, 0.15)"/>
        <text x="404" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#818cf8" text-anchor="middle">02</text>
        <text x="436" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Shortlist Curation</text>
        <text x="392" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1">
          <tspan x="392" dy="0">• Shortlist 10 to 15 targeted shows</tspan>
          <tspan x="392" dy="22">• Verify listeners match your audience</tspan>
          <tspan x="392" dy="22">• Audit recent publishing consistency</tspan>
          <tspan x="392" dy="22">• Watch at least 1 full recent episode</tspan>
        </text>

        <!-- Stage 3 -->
        <rect x="735" y="0" width="345" height="180" rx="16" fill="url(#cardGrad2)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <circle cx="771" cy="36" r="18" fill="rgba(192, 132, 252, 0.15)"/>
        <text x="771" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#c084fc" text-anchor="middle">03</text>
        <text x="803" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Hyper-Targeted Pitch</text>
        <text x="759" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1">
          <tspan x="759" dy="0">• Max 120-150 words total</tspan>
          <tspan x="759" dy="22">• Name specific episode &amp; takeaway</tspan>
          <tspan x="759" dy="22">• Pitch 1 audience problem &amp; 3 bullets</tspan>
          <tspan x="759" dy="22">• Link to guest page &amp; video proof</tspan>
        </text>
      </g>

      <!-- Row 2 -->
      <g transform="translate(60, 390)">
        <!-- Stage 4 -->
        <rect x="0" y="0" width="345" height="180" rx="16" fill="url(#cardGrad2)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <circle cx="36" cy="36" r="18" fill="rgba(244, 114, 182, 0.15)"/>
        <text x="36" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#f472b6" text-anchor="middle">04</text>
        <text x="68" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Disciplined Follow-Up</text>
        <text x="24" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1">
          <tspan x="24" dy="0">• Follow up exactly once after 7-10 days</tspan>
          <tspan x="24" dy="22">• Keep reminder to 2 lines only</tspan>
          <tspan x="24" dy="22">• If no reply, pause for 3 months</tspan>
          <tspan x="24" dy="22">• Never spam or aggressively ping hosts</tspan>
        </text>

        <!-- Stage 5 -->
        <rect x="368" y="0" width="345" height="180" rx="16" fill="url(#cardGrad2)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <circle cx="404" cy="36" r="18" fill="rgba(52, 211, 153, 0.15)"/>
        <text x="404" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle">05</text>
        <text x="436" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Calm Recording Prep</text>
        <text x="392" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1">
          <tspan x="392" dy="0">• Quiet room with headphones &amp; mic</tspan>
          <tspan x="392" dy="22">• Master 40 common host questions</tspan>
          <tspan x="392" dy="22">• Use tactical pauses &amp; short stories</tspan>
          <tspan x="392" dy="22">• Frame ideas as practical lessons</tspan>
        </text>

        <!-- Stage 6 -->
        <rect x="735" y="0" width="345" height="180" rx="16" fill="url(#cardGrad2)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <circle cx="771" cy="36" r="18" fill="rgba(251, 191, 36, 0.15)"/>
        <text x="771" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle">06</text>
        <text x="803" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Syndication &amp; PR</text>
        <text x="759" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#cbd5e1">
          <tspan x="759" dy="0">• Share on LinkedIn &amp; socials in 48h</tspan>
          <tspan x="759" dy="22">• Repurpose 2-3 high-impact video reels</tspan>
          <tspan x="759" dy="22">• Add to permanent website press page</tspan>
          <tspan x="759" dy="22">• Earn host goodwill &amp; peer referrals</tspan>
        </text>
      </g>
    </svg>
    `;

    const sharpInstance = sharp(Buffer.from(svg));
    await saveAll('how-to-get-booked-on-podcasts-six-stages.webp', sharpInstance);
  }

  // ---------------------------------------------------------------------------
  // 3. READINESS CHECKLIST: podcast-guest-readiness-checklist.webp (1200 x 740)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 740;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a12"/>
          <stop offset="100%" stop-color="#141424"/>
        </linearGradient>
        <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad3)"/>

      <!-- Ambient Glow -->
      <circle cx="200" cy="180" r="280" fill="#3b82f6" opacity="0.10" filter="blur(70px)"/>
      <circle cx="1000" cy="500" r="250" fill="#10b981" opacity="0.08" filter="blur(70px)"/>

      <!-- Header -->
      <g transform="translate(60, 44)">
        <rect x="0" y="0" width="340" height="30" rx="15" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(96, 165, 250, 0.35)" stroke-width="1"/>
        <circle cx="16" cy="15" r="4" fill="#60a5fa"/>
        <text x="28" y="19" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#93c5fd" letter-spacing="1.2">PRE-PITCH AUDIT · 15-POINT SCORECARD</text>

        <text x="0" y="66" font-family="'Georgia', serif" font-size="30" font-weight="bold" fill="#ffffff">Fifteen-Point Podcast Guest Readiness Checklist</text>
        <text x="0" y="94" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#94a3b8">Score yourself 1 point per check. Know exactly if you are ready to pitch or need foundation work.</text>
      </g>

      <!-- 5 Columns / Dimension Cards -->
      <g transform="translate(60, 165)">
        <!-- Col 1: Idea -->
        <rect x="0" y="0" width="205" height="380" rx="14" fill="url(#cardGrad3)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <rect x="14" y="14" width="70" height="24" rx="6" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="49" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">1. IDEA</text>
        <text x="14" y="66" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Core Angle</text>
        
        <g transform="translate(14, 85)">
          <circle cx="8" cy="8" r="7" fill="#0284c7" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Topic stated as audience problem, not title</text>
        </g>
        <g transform="translate(14, 155)">
          <circle cx="8" cy="8" r="7" fill="#0284c7" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">3 distinct episode ideas drafted as titles</text>
        </g>
        <g transform="translate(14, 225)">
          <circle cx="8" cy="8" r="7" fill="#0284c7" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Clear, counter-intuitive POV someone could disagree with</text>
        </g>

        <!-- Col 2: Proof -->
        <rect x="220" y="0" width="205" height="380" rx="14" fill="url(#cardGrad3)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <rect x="234" y="14" width="76" height="24" rx="6" fill="rgba(129, 140, 248, 0.15)"/>
        <text x="272" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="bold" fill="#818cf8" text-anchor="middle">2. PROOF</text>
        <text x="234" y="66" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Evidence Base</text>

        <g transform="translate(234, 85)">
          <circle cx="8" cy="8" r="7" fill="#4f46e5" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#818cf8" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Verifiable result, talk, publication or credential</text>
        </g>
        <g transform="translate(234, 155)">
          <circle cx="8" cy="8" r="7" fill="#4f46e5" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#818cf8" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">2 grounded stories with a real number and detail</text>
        </g>
        <g transform="translate(234, 225)">
          <circle cx="8" cy="8" r="7" fill="#4f46e5" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#818cf8" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Plain-language clarity without industry jargon</text>
        </g>

        <!-- Col 3: Packaging -->
        <rect x="440" y="0" width="205" height="380" rx="14" fill="url(#cardGrad3)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <rect x="454" y="14" width="105" height="24" rx="6" fill="rgba(192, 132, 252, 0.15)"/>
        <text x="506" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">3. PACKAGING</text>
        <text x="454" y="66" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Assets &amp; Media</text>

        <g transform="translate(454, 85)">
          <circle cx="8" cy="8" r="7" fill="#9333ea" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#c084fc" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Dedicated guest profile page on your domain</text>
        </g>
        <g transform="translate(454, 150)">
          <circle cx="8" cy="8" r="7" fill="#9333ea" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#c084fc" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">60-word and 150-word bios ready to paste</text>
        </g>
        <g transform="translate(454, 215)">
          <circle cx="8" cy="8" r="7" fill="#9333ea" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#c084fc" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">High-res headshot + 60-90 sec speaking video</text>
        </g>

        <!-- Col 4: Presence -->
        <rect x="660" y="0" width="205" height="380" rx="14" fill="url(#cardGrad3)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <rect x="674" y="14" width="98" height="24" rx="6" fill="rgba(244, 114, 182, 0.15)"/>
        <text x="723" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="bold" fill="#f472b6" text-anchor="middle">4. PRESENCE</text>
        <text x="674" y="66" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">GEO &amp; Search</text>

        <g transform="translate(674, 85)">
          <circle cx="8" cy="8" r="7" fill="#db2777" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#f472b6" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Name &amp; title identical across LinkedIn &amp; site</text>
        </g>
        <g transform="translate(674, 150)">
          <circle cx="8" cy="8" r="7" fill="#db2777" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#f472b6" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Search for name shows consistent results</text>
        </g>
        <g transform="translate(674, 215)">
          <circle cx="8" cy="8" r="7" fill="#db2777" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#f472b6" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Online FAQ helps AI engines describe you</text>
        </g>

        <!-- Col 5: Pipeline -->
        <rect x="880" y="0" width="200" height="380" rx="14" fill="url(#cardGrad3)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <rect x="894" y="14" width="94" height="24" rx="6" fill="rgba(52, 211, 153, 0.15)"/>
        <text x="941" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">5. PIPELINE</text>
        <text x="894" y="66" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Execution</text>

        <g transform="translate(894, 85)">
          <circle cx="8" cy="8" r="7" fill="#059669" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#34d399" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Active tracker for shows, pitches &amp; follow-ups</text>
        </g>
        <g transform="translate(894, 155)">
          <circle cx="8" cy="8" r="7" fill="#059669" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#34d399" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Commitment to 5 targeted pitches per week</text>
        </g>
        <g transform="translate(894, 225)">
          <circle cx="8" cy="8" r="7" fill="#059669" opacity="0.3"/>
          <text x="8" y="11" font-family="sans-serif" font-size="9" fill="#34d399" text-anchor="middle">✓</text>
          <text x="22" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#cbd5e1">Commitment to full month consistency</text>
        </g>
      </g>

      <!-- Scorecard Summary Bar at Bottom -->
      <g transform="translate(60, 570)">
        <rect x="0" y="0" width="1080" height="120" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        
        <g transform="translate(35, 25)">
          <rect x="0" y="0" width="120" height="28" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="1"/>
          <text x="60" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">12 TO 15 PTS</text>
          <text x="0" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Start Pitching Now</text>
          <text x="0" y="68" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Ready for top-tier outreach</text>
        </g>

        <line x1="360" y1="20" x2="360" y2="100" stroke="rgba(255,255,255,0.1)"/>

        <g transform="translate(400, 25)">
          <rect x="0" y="0" width="120" height="28" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1"/>
          <text x="60" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle">8 TO 11 PTS</text>
          <text x="0" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Fix Foundations First</text>
          <text x="0" y="68" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Polish profile page &amp; video proof</text>
        </g>

        <line x1="720" y1="20" x2="720" y2="100" stroke="rgba(255,255,255,0.1)"/>

        <g transform="translate(760, 25)">
          <rect x="0" y="0" width="120" height="28" rx="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" stroke-width="1"/>
          <text x="60" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f87171" text-anchor="middle">0 TO 7 PTS</text>
          <text x="0" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">2-Week Asset Build</text>
          <text x="0" y="68" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Do not pitch cold; establish presence</text>
        </g>
      </g>
    </svg>
    `;

    const sharpInstance = sharp(Buffer.from(svg));
    await saveAll('podcast-guest-readiness-checklist.webp', sharpInstance);
  }

  // ---------------------------------------------------------------------------
  // 4. PITCH CHANNELS: podcast-guest-pitch-templates-by-channel.webp (1200 x 700)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 700;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a14"/>
          <stop offset="100%" stop-color="#121226"/>
        </linearGradient>
        <linearGradient id="cardGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad4)"/>

      <!-- Ambient Glow -->
      <circle cx="600" cy="160" r="320" fill="#8b5cf6" opacity="0.10" filter="blur(75px)"/>

      <!-- Header -->
      <g transform="translate(60, 44)">
        <rect x="0" y="0" width="300" height="30" rx="15" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(167, 139, 250, 0.35)" stroke-width="1"/>
        <circle cx="16" cy="15" r="4" fill="#a78bfa"/>
        <text x="28" y="19" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#c4b5fd" letter-spacing="1.2">COMMUNICATION ARSENAL · 6 CHANNELS</text>

        <text x="0" y="66" font-family="'Georgia', serif" font-size="30" font-weight="bold" fill="#ffffff">Podcast Guest Pitch Templates by Channel</text>
        <text x="0" y="94" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#94a3b8">One high-leverage idea adapted across six distinct communication mediums for maximum host reply rate.</text>
      </g>

      <!-- 6 Channel Cards (2 rows x 3 cols) -->
      <g transform="translate(60, 160)">
        <!-- Card 1: Email -->
        <rect x="0" y="0" width="345" height="235" rx="16" fill="url(#cardGrad4)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <rect x="18" y="18" width="95" height="24" rx="8" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="65" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">A. EMAIL (120-150w)</text>
        <text x="18" y="70" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">The Flagship Pitch</text>
        <text x="18" y="94" font-family="sans-serif" font-size="11.5" fill="#94a3b8">
          <tspan x="18" dy="0">• Subj: Guest idea for [audience]: [topic]</tspan>
          <tspan x="18" dy="20">• Cite specific episode &amp; standout detail</tspan>
          <tspan x="18" dy="20">• Propose 1 big idea + 3 concise bullets</tspan>
          <tspan x="18" dy="20">• Stated credentials &amp; proof link</tspan>
          <tspan x="18" dy="20">• Close with clear availability &amp; format</tspan>
        </text>

        <!-- Card 2: LinkedIn -->
        <rect x="368" y="0" width="345" height="235" rx="16" fill="url(#cardGrad4)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <rect x="386" y="18" width="115" height="24" rx="8" fill="rgba(129, 140, 248, 0.15)"/>
        <text x="443" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#818cf8" text-anchor="middle">B. LINKEDIN (60-80w)</text>
        <text x="386" y="70" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Peer-to-Peer Direct</text>
        <text x="386" y="94" font-family="sans-serif" font-size="11.5" fill="#94a3b8">
          <tspan x="386" dy="0">• Compliment a recent thought/post</tspan>
          <tspan x="386" dy="20">• Position how you help their listeners</tspan>
          <tspan x="386" dy="20">• Suggest 1 compelling episode title</tspan>
          <tspan x="386" dy="20">• Single link to guest portfolio page</tspan>
          <tspan x="386" dy="20">• Zero pressure, polite out</tspan>
        </text>

        <!-- Card 3: Instagram / X -->
        <rect x="735" y="0" width="345" height="235" rx="16" fill="url(#cardGrad4)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <rect x="753" y="18" width="115" height="24" rx="8" fill="rgba(244, 114, 182, 0.15)"/>
        <text x="810" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f472b6" text-anchor="middle">C. IG / X DM (40-60w)</text>
        <text x="753" y="70" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Rapid Mobile Hook</text>
        <text x="753" y="94" font-family="sans-serif" font-size="11.5" fill="#94a3b8">
          <tspan x="753" dy="0">• Fast shoutout to recent episode guest</tspan>
          <tspan x="753" dy="20">• 1 punchy episode hook concept</tspan>
          <tspan x="753" dy="20">• Offer to send short outline if relevant</tspan>
          <tspan x="753" dy="20">• Direct link to 60-second video</tspan>
          <tspan x="753" dy="20">• Low friction, mobile-first brevity</tspan>
        </text>

        <!-- Card 4: WhatsApp Desk -->
        <rect x="0" y="255" width="345" height="235" rx="16" fill="url(#cardGrad4)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <rect x="18" y="273" width="115" height="24" rx="8" fill="rgba(52, 211, 153, 0.15)"/>
        <text x="75" y="289" font-family="sans-serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">D. WHATSAPP DESK</text>
        <text x="18" y="325" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Permission Inquiries</text>
        <text x="18" y="349" font-family="sans-serif" font-size="11.5" fill="#94a3b8">
          <tspan x="18" dy="0">• Use ONLY if host publicised number</tspan>
          <tspan x="18" dy="20">• State context: following up on guest call</tspan>
          <tspan x="18" dy="20">• State episode concept in 1 sentence</tspan>
          <tspan x="18" dy="20">• Attach single clean profile link</tspan>
          <tspan x="18" dy="20">• Express flexibility on host format</tspan>
        </text>

        <!-- Card 5: Warm Intro -->
        <rect x="368" y="255" width="345" height="235" rx="16" fill="url(#cardGrad4)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <rect x="386" y="273" width="125" height="24" rx="8" fill="rgba(251, 191, 36, 0.15)"/>
        <text x="448" y="289" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">E. WARM INTRO BLURB</text>
        <text x="386" y="325" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Forwardable Email</text>
        <text x="386" y="349" font-family="sans-serif" font-size="11.5" fill="#94a3b8">
          <tspan x="386" dy="0">• Pre-write 3 lines for mutual contact</tspan>
          <tspan x="386" dy="20">• Contact clicks forward with 0 typing</tspan>
          <tspan x="386" dy="20">• State credibility &amp; why audience benefits</tspan>
          <tspan x="386" dy="20">• High trust multiplier vs cold email</tspan>
          <tspan x="386" dy="20">• Respectful of mutual relationship</tspan>
        </text>

        <!-- Card 6: Application Form -->
        <rect x="735" y="255" width="345" height="235" rx="16" fill="url(#cardGrad4)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        <rect x="753" y="273" width="125" height="24" rx="8" fill="rgba(192, 132, 252, 0.15)"/>
        <text x="815" y="289" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">F. GUEST WEB FORM</text>
        <text x="753" y="325" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Typeform / Google Form</text>
        <text x="753" y="349" font-family="sans-serif" font-size="11.5" fill="#94a3b8">
          <tspan x="753" dy="0">• Read hidden instructions in first lines</tspan>
          <tspan x="753" dy="20">• Answer actual question, not whole CV</tspan>
          <tspan x="753" dy="20">• Propose concrete listener problem title</tspan>
          <tspan x="753" dy="20">• State exact post-episode promo plan</tspan>
          <tspan x="753" dy="20">• Zero typos or template carelessness</tspan>
        </text>
      </g>
    </svg>
    `;

    const sharpInstance = sharp(Buffer.from(svg));
    await saveAll('podcast-guest-pitch-templates-by-channel.webp', sharpInstance);
  }

  // ---------------------------------------------------------------------------
  // 5. PITCH AUDIT SCORECARD: podcast-guest-pitch-audit-scorecard.webp (1200 x 650)
  // ---------------------------------------------------------------------------
  {
    const width = 1200;
    const height = 650;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a14"/>
          <stop offset="100%" stop-color="#141426"/>
        </linearGradient>
        <linearGradient id="cardGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad5)"/>

      <!-- Ambient Glow -->
      <circle cx="200" cy="180" r="280" fill="#ec4899" opacity="0.10" filter="blur(70px)"/>
      <circle cx="1000" cy="460" r="280" fill="#6366f1" opacity="0.10" filter="blur(70px)"/>

      <!-- Header -->
      <g transform="translate(60, 44)">
        <rect x="0" y="0" width="310" height="30" rx="15" fill="rgba(236, 72, 153, 0.15)" stroke="rgba(244, 114, 182, 0.35)" stroke-width="1"/>
        <circle cx="16" cy="15" r="4" fill="#f472b6"/>
        <text x="28" y="19" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#fbcfe8" letter-spacing="1.2">QUALITY CONTROL · 10-POINT PITCH AUDIT</text>

        <text x="0" y="66" font-family="'Georgia', serif" font-size="30" font-weight="bold" fill="#ffffff">Ten-Point Podcast Guest Pitch Audit Scorecard</text>
        <text x="0" y="94" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#94a3b8">Review every outbound message against these ten rigorous quality criteria before clicking send.</text>
      </g>

      <!-- 10 Audit Items (2 columns of 5) -->
      <g transform="translate(60, 160)">
        <!-- Col 1 -->
        <rect x="0" y="0" width="525" height="340" rx="16" fill="url(#cardGrad5)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        
        <g transform="translate(24, 28)">
          <circle cx="12" cy="12" r="10" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">1</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Specific Episode Mention</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Cites a real recent episode, guest name, and exact takeaway.</text>
        </g>

        <g transform="translate(24, 90)">
          <circle cx="12" cy="12" r="10" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">2</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Names Audience Problem</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Focuses squarely on what the host's listeners struggle with.</text>
        </g>

        <g transform="translate(24, 152)">
          <circle cx="12" cy="12" r="10" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">3</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Offers One Clear Episode Title</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Presents a single, punchy title instead of 5 rambling topics.</text>
        </g>

        <g transform="translate(24, 214)">
          <circle cx="12" cy="12" r="10" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">4</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Includes Strong Proof Point</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Mentions 1 verifiable number, published case study, or credential.</text>
        </g>

        <g transform="translate(24, 276)">
          <circle cx="12" cy="12" r="10" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">5</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Under 150 Words Total</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Strict brevity respected; respects the host's busy inbox.</text>
        </g>

        <!-- Col 2 -->
        <rect x="555" y="0" width="525" height="340" rx="16" fill="url(#cardGrad5)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

        <g transform="translate(579, 28)">
          <circle cx="12" cy="12" r="10" fill="rgba(192, 132, 252, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">6</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Web Proof Link (No Attachments)</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Clean link to guest profile &amp; video; never heavy attachments.</text>
        </g>

        <g transform="translate(579, 90)">
          <circle cx="12" cy="12" r="10" fill="rgba(192, 132, 252, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">7</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">States Format, Language &amp; Setup</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Confirms remote/in-person capability and language fluency.</text>
        </g>

        <g transform="translate(579, 152)">
          <circle cx="12" cy="12" r="10" fill="rgba(192, 132, 252, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">8</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Zero Template Filler</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Written by a human for a specific person; no AI generic tone.</text>
        </g>

        <g transform="translate(579, 214)">
          <circle cx="12" cy="12" r="10" fill="rgba(192, 132, 252, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">9</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Host's Preferred Channel</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Sent via their requested channel (email, form, or DM).</text>
        </g>

        <g transform="translate(579, 276)">
          <circle cx="12" cy="12" r="10" fill="rgba(192, 132, 252, 0.2)"/>
          <text x="12" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c084fc" text-anchor="middle">10</text>
          <text x="36" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Simple, Low-Pressure Close</text>
          <text x="36" y="34" font-family="sans-serif" font-size="11.5" fill="#94a3b8">Gracious sign-off: easy to say yes, and easy to decline gracefully.</text>
        </g>
      </g>

      <!-- Bottom Benchmark Card -->
      <g transform="translate(60, 520)">
        <rect x="0" y="0" width="1080" height="85" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <g transform="translate(30, 20)">
          <text x="0" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#34d399">SCORE 7 TO 10: READY TO SEND</text>
          <text x="0" y="44" font-family="sans-serif" font-size="12" fill="#94a3b8">Your pitch has clear market positioning and high probability of securing an executive interview response.</text>
        </g>
        <line x1="560" y1="15" x2="560" y2="70" stroke="rgba(255,255,255,0.1)"/>
        <g transform="translate(600, 20)">
          <text x="0" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f87171">SCORE BELOW 7: REVISE BEFORE SENDING</text>
          <text x="0" y="44" font-family="sans-serif" font-size="12" fill="#94a3b8">Do not burn goodwill with cold hosts. Tighten your proof point and cut length under 150 words.</text>
        </g>
      </g>
    </svg>
    `;

    const sharpInstance = sharp(Buffer.from(svg));
    await saveAll('podcast-guest-pitch-audit-scorecard.webp', sharpInstance);
  }

  console.log('All 5 WebP assets generated and distributed successfully!');
}

main().catch((err) => {
  console.error('Error generating images:', err);
  process.exit(1);
});
