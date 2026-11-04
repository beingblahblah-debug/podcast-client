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

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function createHeroBanner({ filename, badge, titleLine1, titleLine2, subtitleLine1, subtitleLine2, card1, card2, card3 }) {
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
      <rect x="0" y="0" width="380" height="34" rx="17" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.2"/>
      <circle cx="18" cy="17" r="4.5" fill="#f59e0b"/>
      <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" letter-spacing="1.5">${escapeXml(badge)}</text>

      <!-- Main Title -->
      <text x="0" y="86" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">${escapeXml(titleLine1)}</text>
      <text x="0" y="132" font-family="'Georgia', serif" font-size="38" font-weight="bold" fill="url(#goldAccent)" letter-spacing="-0.5">${escapeXml(titleLine2)}</text>

      <!-- Subtitle -->
      <text x="0" y="176" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#cbd5e1" font-weight="400">
        <tspan x="0" dy="0">${escapeXml(subtitleLine1)}</tspan>
        <tspan x="0" dy="23">${escapeXml(subtitleLine2)}</tspan>
      </text>

      <!-- 3 Feature Columns -->
      <g transform="translate(0, 240)">
        <rect x="0" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="20" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#fbbf24">${card1.icon}</text>
        <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">${escapeXml(card1.title)}</text>
        <text x="20" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(card1.desc1)}</text>
        <text x="20" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(card1.desc2)}</text>

        <rect x="200" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="220" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#f472b6">${card2.icon}</text>
        <text x="220" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">${escapeXml(card2.title)}</text>
        <text x="220" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(card2.desc1)}</text>
        <text x="220" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(card2.desc2)}</text>

        <rect x="400" y="0" width="185" height="110" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="420" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" fill="#38bdf8">${card3.icon}</text>
        <text x="420" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#ffffff">${escapeXml(card3.title)}</text>
        <text x="420" y="82" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(card3.desc1)}</text>
        <text x="420" y="97" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(card3.desc2)}</text>
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

  await saveAll(filename, pipeline);
}

async function main() {
  console.log('Generating 5 WebP Hero Banners...');

  // 1. Celebrity Chief Guest Booking for Events
  await createHeroBanner({
    filename: 'celebrity-chief-guest-booking-for-events.webp',
    badge: 'CHIEF GUEST BOOKING · INDIA',
    titleLine1: 'Celebrity Chief Guest Booking',
    titleLine2: 'For Events in India',
    subtitleLine1: 'Conferences, Summits, Award Ceremonies & Institutional Events',
    subtitleLine2: 'with Strategic PR & Guest Coordination by Harshita Dagha.',
    card1: { icon: '🏆', title: 'Prestigious Presence', desc1: 'Inaugural addresses,', desc2: 'awards & keynotes' },
    card2: { icon: '🎙️', title: 'Curated Alignment', desc1: 'Entrepreneurs, actors', desc2: '& thought leaders' },
    card3: { icon: '🛡️', title: 'Smooth Execution', desc1: 'Protocol, riders &', desc2: 'media soundbites' }
  });

  // 2. Celebrity for Wedding Event Booking
  await createHeroBanner({
    filename: 'celebrity-for-wedding-event-booking.webp',
    badge: 'WEDDING & CELEBRATION BOOKINGS',
    titleLine1: 'Celebrity for Wedding Event',
    titleLine2: 'Booking in India',
    subtitleLine1: 'Luxury Weddings, Grand Receptions, Sangeets & Cocktails',
    subtitleLine2: 'with Unforgettable Performances & Celebrity Appearances.',
    card1: { icon: '💍', title: 'Wedding Glamour', desc1: 'Film stars, top singers', desc2: '& celebrity hosts' },
    card2: { icon: '🎶', title: 'Live Performances', desc1: 'Sangeet concerts &', desc2: 'choreographed sets' },
    card3: { icon: '📜', title: 'Clear Contracts', desc1: 'Hospitality riders &', desc2: 'guest privacy terms' }
  });

  // 3. Celebrity for College Fest Booking
  await createHeroBanner({
    filename: 'celebrity-for-college-fest-booking.webp',
    badge: 'CAMPUS & CULTURAL FESTIVALS',
    titleLine1: 'Celebrity for College Fest',
    titleLine2: 'Booking: Campus Guide',
    subtitleLine1: 'Singers, Comedians, Creators & Performers for Youth Fests',
    subtitleLine2: 'Structured Planning & Budget Management by Harshita Dagha.',
    card1: { icon: '🎸', title: 'Music & Energy', desc1: 'Singers, rock bands', desc2: '& headline DJ sets' },
    card2: { icon: '🎭', title: 'Comedy & Creators', desc1: 'Standup comedians &', desc2: 'relatable influencers' },
    card3: { icon: '⚡', title: 'Campus Security', desc1: 'Stage tech, riders &', desc2: 'crowd management' }
  });

  // 4. Celebrity for Store Launch in India
  await createHeroBanner({
    filename: 'celebrity-for-store-launch-in-india.webp',
    badge: 'RETAIL & STORE INAUGURATIONS',
    titleLine1: 'Celebrity for Store Launch',
    titleLine2: 'in India: Opening Guide',
    subtitleLine1: 'Showrooms, Boutiques, Luxury Malls & Retail Expansions',
    subtitleLine2: 'Maximise First Impressions, Footfalls & Media Buzz.',
    card1: { icon: '✂️', title: 'Ribbon-Cutting', desc1: 'High-impact launch &', desc2: 'curated walkthrough' },
    card2: { icon: '📸', title: 'Media Attention', desc1: 'Press bytes, reels &', desc2: 'social media virality' },
    card3: { icon: '🛍️', title: 'Customer Footfall', desc1: 'Exclusive showcase &', desc2: 'VIP meet-and-greets' }
  });

  // 5. Celebrity for Inauguration Event Booking
  await createHeroBanner({
    filename: 'celebrity-for-inauguration-event-booking.webp',
    badge: 'GRAND OPENINGS & LAUNCHES',
    titleLine1: 'Celebrity for Inauguration',
    titleLine2: 'Event Booking in India',
    subtitleLine1: 'Offices, Hotels, Hospitals, Malls & Commercial Properties',
    subtitleLine2: 'Professional Coordination & Brand Storytelling by Harshita Dagha.',
    card1: { icon: '🏢', title: 'Commercial Openings', desc1: 'Corporate HQs, hotels', desc2: '& flagship outlets' },
    card2: { icon: '✨', title: 'Lamp Lighting', desc1: 'Auspicious ceremonies', desc2: '& stage addresses' },
    card3: { icon: '📰', title: 'Digital PR Synergy', desc1: 'Brand storytelling &', desc2: 'media syndication' }
  });

  console.log('✅ All 5 hero banners generated successfully!');
}

main().catch((err) => {
  console.error('Error generating banners:', err);
  process.exit(1);
});
