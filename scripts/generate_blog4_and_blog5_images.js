const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const blogImgDir = path.join(publicDir, 'images', 'blog');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(blogImgDir)) {
  fs.mkdirSync(blogImgDir, { recursive: true });
}

async function saveToAllDirs(sharpInstance, filename) {
  const buf = await sharpInstance.webp({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(blogImgDir, filename), buf);
  fs.writeFileSync(path.join(imagesDir, filename), buf);
  fs.writeFileSync(path.join(publicDir, filename), buf);
  console.log(`Saved ${filename} successfully across public folders.`);
}

// -------------------------------------------------------------
// 1. BLOG 4 HERO: best-female-podcasts-india-city-guide.webp (1200x630)
// -------------------------------------------------------------
async function generateBlog4Hero() {
  const width = 1200;
  const height = 630;

  const portraitBuf = await sharp(path.join(imagesDir, 'harshita-navy-mic.jpg'))
    .resize(560, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svg = `
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
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f2c8cf"/>
        <stop offset="100%" stop-color="#d89ba4"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    <circle cx="180" cy="140" r="280" fill="#d89ba4" opacity="0.08" filter="blur(60px)"/>
    <circle cx="1020" cy="480" r="240" fill="#d89ba4" opacity="0.06" filter="blur(50px)"/>

    <g transform="translate(60, 55)">
      <!-- Badge -->
      <rect x="0" y="0" width="365" height="34" rx="17" fill="#ffffff" fill-opacity="0.07" stroke="#d89ba4" stroke-opacity="0.35"/>
      <circle cx="18" cy="17" r="4" fill="#d89ba4"/>
      <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="700" fill="#d89ba4" letter-spacing="1.5">NATIONAL CITY-BY-CITY GUIDE · 2026</text>

      <!-- Main Title -->
      <text x="0" y="85" font-family="'Georgia', serif" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Best Female Podcasts in India</text>
      <text x="0" y="132" font-family="'Georgia', serif" font-size="36" font-weight="bold" fill="url(#goldGrad)" letter-spacing="-0.5">From Mumbai to Chennai</text>

      <!-- Subtitle -->
      <text x="0" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" fill="#a1a1aa" font-weight="400">
        <tspan x="0" dy="0">Seven Indian Business Hubs · Seven Conversation Cultures</tspan>
        <tspan x="0" dy="24">What Listeners Search For Now &amp; How to Choose the Right Show</tspan>
      </text>

      <!-- Stats Bar Card -->
      <g transform="translate(0, 245)">
        <rect x="0" y="0" width="540" height="90" rx="18" fill="#18181f" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.1"/>
        
        <g transform="translate(24, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">7 Hubs</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">ACROSS INDIA</text>
        </g>
        
        <line x1="160" y1="20" x2="160" y2="70" stroke="#ffffff" stroke-opacity="0.1"/>

        <g transform="translate(185, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">180+</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">RECORDED EPS</text>
        </g>

        <line x1="335" y1="20" x2="335" y2="70" stroke="#ffffff" stroke-opacity="0.1"/>

        <g transform="translate(360, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="28" font-weight="bold" fill="#ffffff">150+ Cos</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">GLOBAL AUDIENCE</text>
        </g>
      </g>

      <!-- Host Footnote Card -->
      <g transform="translate(0, 370)">
        <text x="0" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA</text>
        <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#d89ba4">TEDx Speaker · Host of The Harshita Dagha Show · BKC Studio Mumbai</text>
        <text x="0" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Being Blah Blah · 16+ Years Branding &amp; Digital PR · Mumbai · BLR · NCR</text>
      </g>
    </g>

    <rect x="640" y="0" width="200" height="${height}" fill="url(#fadeGrad)"/>
  </svg>
  `;

  const heroImg = await sharp({
    create: { width, height, channels: 4, background: { r: 12, g: 12, b: 15, alpha: 1 } }
  }).composite([
    { input: portraitBuf, left: 680, top: 0 },
    { input: Buffer.from(svg), left: 0, top: 0 }
  ]);

  await saveToAllDirs(heroImg, 'best-female-podcasts-india-city-guide.webp');
}

// -------------------------------------------------------------
// 2. BLOG 4 CRITERIA: how-to-judge-best-female-podcasts-india.webp
// -------------------------------------------------------------
async function generateBlog4Criteria() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181820" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#121217" stop-opacity="0.95"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad2)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="290" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">AUDIENCE SIGNALS BENCHMARK</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">What Makes a Women-Led Podcast Popular in India</text>
      <text x="0" y="98" font-family="sans-serif" font-size="15" fill="#a1a1aa">Five observable indicators that separate genuine long-term audience trust from short-lived viral spikes.</text>
    </g>

    <!-- 5 Cards (3 top, 2 bottom centered) -->
    <!-- Card 1 -->
    <g transform="translate(60, 175)">
      <rect width="340" height="200" rx="16" fill="url(#cardGrad2)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">1</text>
      <text x="62" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Repeat Listening</text>
      <text x="22" y="80" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="22" dy="0">Listeners returning every Sunday or</tspan>
        <tspan x="22" dy="22">Thursday. Comments showing multi-</tspan>
        <tspan x="22" dy="22">month habit, not just a single clip</tspan>
        <tspan x="22" dy="22">reaction.</tspan>
      </text>
    </g>

    <!-- Card 2 -->
    <g transform="translate(430, 175)">
      <rect width="340" height="200" rx="16" fill="url(#cardGrad2)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">2</text>
      <text x="62" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Clip Culture</text>
      <text x="22" y="80" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="22" dy="0">High-retention 30-to-60s Reels</tspan>
        <tspan x="22" dy="22">and Shorts that convey complete</tspan>
        <tspan x="22" dy="22">ideas and funnel viewers into full</tspan>
        <tspan x="22" dy="22">4K master interviews on YouTube.</tspan>
      </text>
    </g>

    <!-- Card 3 -->
    <g transform="translate(800, 175)">
      <rect width="340" height="200" rx="16" fill="url(#cardGrad2)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">3</text>
      <text x="62" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Honest Topics</text>
      <text x="22" y="80" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="22" dy="0">Tackling real life with zero fluff:</tspan>
        <tspan x="22" dy="22">family law, lab blood diagnostics,</tspan>
        <tspan x="22" dy="22">AI visibility, career transitions,</tspan>
        <tspan x="22" dy="22">and independent wealth creation.</tspan>
      </text>
    </g>

    <!-- Card 4 -->
    <g transform="translate(245, 405)">
      <rect width="340" height="200" rx="16" fill="url(#cardGrad2)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">4</text>
      <text x="62" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Expert Trust</text>
      <text x="22" y="80" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="22" dy="0">Verified domain authorities (surgeons,</tspan>
        <tspan x="22" dy="22">senior advocates, tech founders) who</tspan>
        <tspan x="22" dy="22">speak plainly, anchored by safe,</tspan>
        <tspan x="22" dy="22">responsible hosting disclaimers.</tspan>
      </text>
    </g>

    <!-- Card 5 -->
    <g transform="translate(615, 405)">
      <rect width="340" height="200" rx="16" fill="url(#cardGrad2)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="34" cy="34" r="16" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="29" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d89ba4">5</text>
      <text x="62" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">Visible Credentials</text>
      <text x="22" y="80" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="22" dy="0">Transparent host track record: public</tspan>
        <tspan x="22" dy="22">keynote stages, verified credentials,</tspan>
        <tspan x="22" dy="22">structured profile pages, and real</tspan>
        <tspan x="22" dy="22">consulting client results.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'how-to-judge-best-female-podcasts-india.webp');
}

// -------------------------------------------------------------
// 3. BLOG 4 CITIES: women-podcasts-india-seven-city-map.webp
// -------------------------------------------------------------
async function generateBlog4Cities() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0a0a0d"/>
      </linearGradient>
      <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a22"/>
        <stop offset="100%" stop-color="#121217"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad3)"/>
    
    <g transform="translate(60, 40)">
      <rect x="0" y="0" width="310" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">PAN-INDIA RECORDING HUBS</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">Seven Business Hubs · Seven Conversation Cultures</text>
      <text x="0" y="96" font-family="sans-serif" font-size="14.5" fill="#a1a1aa">From Mumbai BKC to Chennai OMR: How The Harshita Dagha Show captures the unique dialogue of each region.</text>
    </g>

    <!-- Row 1: 4 cities -->
    <!-- Mumbai -->
    <g transform="translate(60, 160)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#d89ba4" stroke-opacity="0.4"/>
      <rect x="16" y="16" width="70" height="20" rx="10" fill="#d89ba4" fill-opacity="0.2"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#d89ba4">FLAGSHIP</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Mumbai BKC</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">Finance &amp; Brands · 90+ Eps</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">Acoustic sanctuary hosting</tspan>
        <tspan x="16" dy="18">unicorn founders, Bollywood</tspan>
        <tspan x="16" dy="18">innovators, surgeons and</tspan>
        <tspan x="16" dy="18">senior finance leaders.</tspan>
      </text>
    </g>

    <!-- Bengaluru -->
    <g transform="translate(340, 160)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="85" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">TECH CAPITAL</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Bengaluru</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">DeepTech &amp; VC · 50+ Profiles</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">Koramangala &amp; Indiranagar:</tspan>
        <tspan x="16" dy="18">GenAI innovators, venture</tspan>
        <tspan x="16" dy="18">capital partners and SaaS</tspan>
        <tspan x="16" dy="18">product scale builders.</tspan>
      </text>
    </g>

    <!-- Delhi NCR -->
    <g transform="translate(620, 160)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="95" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">POLICY &amp; STAGES</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Delhi NCR</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">Corporate CXOs · 30+ Stages</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">Cyber City &amp; Central Delhi:</tspan>
        <tspan x="16" dy="18">Fortune 500 leadership,</tspan>
        <tspan x="16" dy="18">public policy debates and</tspan>
        <tspan x="16" dy="18">national summit moderations.</tspan>
      </text>
    </g>

    <!-- Hyderabad -->
    <g transform="translate(900, 160)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="95" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">ENTERPRISE GCC</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Hyderabad</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">Enterprise SaaS · 25+ Leaders</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">HITEC City &amp; Gachibowli:</tspan>
        <tspan x="16" dy="18">Global capability centers,</tspan>
        <tspan x="16" dy="18">cloud infrastructure moats</tspan>
        <tspan x="16" dy="18">and biotech founders.</tspan>
      </text>
    </g>

    <!-- Row 2: Pune, Ahmedabad/GIFT, Chennai, Beyond -->
    <!-- Pune -->
    <g transform="translate(60, 400)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="85" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">ENGINEERING</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Pune</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">Bootstrapped Tech · 20+ Founders</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">Hinjewadi &amp; Kalyani Nagar:</tspan>
        <tspan x="16" dy="18">Precision engineering,</tspan>
        <tspan x="16" dy="18">high-margin software without</tspan>
        <tspan x="16" dy="18">heavy outside venture capital.</tspan>
      </text>
    </g>

    <!-- Ahmedabad / GIFT City -->
    <g transform="translate(340, 400)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="95" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">FINTECH &amp; IFSC</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Ahmedabad</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">GIFT City · 15+ Dialogues</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">Cross-border capital flow,</tspan>
        <tspan x="16" dy="18">modern family business</tspan>
        <tspan x="16" dy="18">succession and next-gen</tspan>
        <tspan x="16" dy="18">fintech modernization.</tspan>
      </text>
    </g>

    <!-- Chennai -->
    <g transform="translate(620, 400)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="90" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">B2B SAAS</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Chennai</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">SaaS Pioneers · 18+ Founders</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">OMR &amp; Guindy tech corridors:</tspan>
        <tspan x="16" dy="18">Enterprise SaaS titans, medical</tspan>
        <tspan x="16" dy="18">hardware innovation and long-</tspan>
        <tspan x="16" dy="18">term capital compounding.</tspan>
      </text>
    </g>

    <!-- Beyond Seven Cities -->
    <g transform="translate(900, 400)">
      <rect width="255" height="210" rx="16" fill="url(#cardGrad3)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="16" y="16" width="95" height="20" rx="10" fill="#ffffff" fill-opacity="0.06"/>
      <text x="24" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a1a1aa">GLOBAL REACH</text>
      <text x="16" y="65" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Global Remote</text>
      <text x="16" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#d89ba4">150+ Countries Reached</text>
      <text x="16" y="115" font-family="sans-serif" font-size="12" fill="#a1a1aa">
        <tspan x="16" dy="0">Synchronized 4K audio pipeline</tspan>
        <tspan x="16" dy="18">connecting diaspora leaders in</tspan>
        <tspan x="16" dy="18">Silicon Valley, Dubai, London,</tspan>
        <tspan x="16" dy="18">Singapore and Tier-2 India.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'women-podcasts-india-seven-city-map.webp');
}

// -------------------------------------------------------------
// 4. BLOG 4 THEMES: popular-themes-women-podcasts-india-2026.webp
// -------------------------------------------------------------
async function generateBlog4Themes() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181822"/>
        <stop offset="100%" stop-color="#111116"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad4)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="280" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">EDITORIAL TREND ANALYSIS</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">8 Themes Popular with Women Podcast Listeners in India</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">October 2026 insights into the high-intent topics urban women search for beyond generic entertainment.</text>
    </g>

    <!-- 8 theme cards in 4x2 grid -->
    <!-- Card 1 -->
    <g transform="translate(60, 165)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">1. AI &amp; GEO Visibility</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">How founders become visible</tspan>
        <tspan x="20" dy="20">in ChatGPT and Gemini answers,</tspan>
        <tspan x="20" dy="20">structuring personal entity authority</tspan>
        <tspan x="20" dy="20">for the AI search revolution.</tspan>
      </text>
    </g>

    <!-- Card 2 -->
    <g transform="translate(340, 165)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">2. Legal Literacy &amp; Rights</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Demystifying family law, divorce,</tspan>
        <tspan x="20" dy="20">property distribution, workplace</tspan>
        <tspan x="20" dy="20">contracts, and knowing your legal</tspan>
        <tspan x="20" dy="20">rights before a crisis strikes.</tspan>
      </text>
    </g>

    <!-- Card 3 -->
    <g transform="translate(620, 165)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">3. Health &amp; Diagnostics</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Reading blood reports, understanding</tspan>
        <tspan x="20" dy="20">pathology, and preparing clear</tspan>
        <tspan x="20" dy="20">questions for family medical care</tspan>
        <tspan x="20" dy="20">without relying on panic searches.</tspan>
      </text>
    </g>

    <!-- Card 4 -->
    <g transform="translate(900, 165)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">4. Money &amp; Independence</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Practical wealth creation: equity</tspan>
        <tspan x="20" dy="20">investing, salary negotiation, asset</tspan>
        <tspan x="20" dy="20">ownership, and commercial scale</tspan>
        <tspan x="20" dy="20">for independent female builders.</tspan>
      </text>
    </g>

    <!-- Row 2 -->
    <!-- Card 5 -->
    <g transform="translate(60, 400)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">5. Career Re-entry &amp; Pivots</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Returning after career breaks,</tspan>
        <tspan x="20" dy="20">pivoting into high-growth sectors,</tspan>
        <tspan x="20" dy="20">and mastering executive presence in</tspan>
        <tspan x="20" dy="20">male-dominated boardrooms.</tspan>
      </text>
    </g>

    <!-- Card 6 -->
    <g transform="translate(340, 400)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">6. Spirituality &amp; Meaning</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Everyday philosophical inquiry,</tspan>
        <tspan x="20" dy="20">karma, cosmic order and Shiva,</tspan>
        <tspan x="20" dy="20">providing calm, grounded clarity</tspan>
        <tspan x="20" dy="20">amidst modern urban chaos.</tspan>
      </text>
    </g>

    <!-- Card 7 -->
    <g transform="translate(620, 400)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">7. Festive Brand Strategy</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">October Q3-Q4 marketing plans,</tspan>
        <tspan x="20" dy="20">consumer trust building, digital</tspan>
        <tspan x="20" dy="20">PR positioning, and customer</tspan>
        <tspan x="20" dy="20">loyalty during peak festive seasons.</tspan>
      </text>
    </g>

    <!-- Card 8 -->
    <g transform="translate(900, 400)">
      <rect width="255" height="205" rx="16" fill="url(#cardGrad4)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="40" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#d89ba4">8. Wellbeing &amp; Boundaries</text>
      <text x="20" y="70" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Unfiltered discussions on stress,</tspan>
        <tspan x="20" dy="20">family expectations, cognitive</tspan>
        <tspan x="20" dy="20">overload, and establishing strong</tspan>
        <tspan x="20" dy="20">personal psychological boundaries.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'popular-themes-women-podcasts-india-2026.webp');
}

// -------------------------------------------------------------
// 5. BLOG 4 PLAN: 14-day-listening-plan-women-podcasts-india.webp
// -------------------------------------------------------------
async function generateBlog4Plan() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a24"/>
        <stop offset="100%" stop-color="#111116"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad5)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="295" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">STRUCTURED LISTENING ROUTE</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">A 14-Day Listening Plan Across Indian Cities &amp; Topics</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">One curated episode per day to experience India's business cultures, expert explainers and executive storytelling.</text>
    </g>

    <!-- 4 Stage Roadmap Cards -->
    <g transform="translate(60, 160)">
      <!-- Stage 1 -->
      <rect width="255" height="440" rx="18" fill="url(#cardGrad5)" stroke="#d89ba4" stroke-opacity="0.4"/>
      <rect x="20" y="20" width="80" height="24" rx="12" fill="#d89ba4" fill-opacity="0.2"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d89ba4">DAYS 1–3</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Mumbai &amp; Law</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Finance &amp; Rights</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 1: Founder Branding</text>
      <text x="20" y="165" font-family="sans-serif" font-size="12" fill="#a1a1aa">The Harshita Dagha Show BKC studio founder journey.</text>

      <text x="20" y="210" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 2: Legal Secrets</text>
      <text x="20" y="230" font-family="sans-serif" font-size="12" fill="#a1a1aa">Divorce, family law &amp; asset protection masterclass.</text>

      <text x="20" y="275" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 3: Highlight Clips</text>
      <text x="20" y="295" font-family="sans-serif" font-size="12" fill="#a1a1aa">High-retention Reels &amp; tactical pause highlights.</text>
    </g>

    <!-- Stage 2 -->
    <g transform="translate(340, 160)">
      <rect width="255" height="440" rx="18" fill="url(#cardGrad5)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="20" y="20" width="80" height="24" rx="12" fill="#ffffff" fill-opacity="0.06"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#a1a1aa">DAYS 4–7</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Tech &amp; Policy</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Bengaluru &amp; Delhi NCR</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 4: AI &amp; GEO Engine</text>
      <text x="20" y="165" font-family="sans-serif" font-size="12" fill="#a1a1aa">How agency founders scale organic reach with GEO.</text>

      <text x="20" y="210" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 5: Bengaluru VC</text>
      <text x="20" y="230" font-family="sans-serif" font-size="12" fill="#a1a1aa">DeepTech, GenAI &amp; venture capital dialogues.</text>

      <text x="20" y="275" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Days 6–7: Delhi NCR CXO</text>
      <text x="20" y="295" font-family="sans-serif" font-size="12" fill="#a1a1aa">Corporate thought leadership &amp; tactical pause craft.</text>
    </g>

    <!-- Stage 3 -->
    <g transform="translate(620, 160)">
      <rect width="255" height="440" rx="18" fill="url(#cardGrad5)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="20" y="20" width="85" height="24" rx="12" fill="#ffffff" fill-opacity="0.06"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#a1a1aa">DAYS 8–11</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Regional Scale</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Hyd, Pune, Ahmd &amp; Chn</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 8: Hyderabad GCC</text>
      <text x="20" y="165" font-family="sans-serif" font-size="12" fill="#a1a1aa">Enterprise scale software &amp; biotech leadership.</text>

      <text x="20" y="210" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 9: Pune Engineering</text>
      <text x="20" y="230" font-family="sans-serif" font-size="12" fill="#a1a1aa">Bootstrapped software &amp; industrial discipline.</text>

      <text x="20" y="275" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Days 10–11: Fintech &amp; SaaS</text>
      <text x="20" y="295" font-family="sans-serif" font-size="12" fill="#a1a1aa">GIFT City finance &amp; Chennai B2B enterprise titans.</text>
    </g>

    <!-- Stage 4 -->
    <g transform="translate(900, 160)">
      <rect width="255" height="440" rx="18" fill="url(#cardGrad5)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="20" y="20" width="85" height="24" rx="12" fill="#ffffff" fill-opacity="0.06"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#a1a1aa">DAYS 12–14</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="20" font-weight="bold" fill="#ffffff">Health &amp; Soul</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Diagnostics &amp; Spirit</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 12: Pathology &amp; Blood</text>
      <text x="20" y="165" font-family="sans-serif" font-size="12" fill="#a1a1aa">Doctor-led lab report diagnostic literacy.</text>

      <text x="20" y="210" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 13: Aesthetic Realities</text>
      <text x="20" y="230" font-family="sans-serif" font-size="12" fill="#a1a1aa">Unfiltered plastic surgery facts &amp; surgeon ethics.</text>

      <text x="20" y="275" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Day 14: Universe &amp; Shiva</text>
      <text x="20" y="295" font-family="sans-serif" font-size="12" fill="#a1a1aa">Reflective spiritual dialogue on karma &amp; meaning.</text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, '14-day-listening-plan-women-podcasts-india.webp');
}

// -------------------------------------------------------------
// 6. BLOG 5 HERO: best-podcast-in-india-top-podcasters-guide.webp (1200x630)
// -------------------------------------------------------------
async function generateBlog5Hero() {
  const width = 1200;
  const height = 630;

  const portraitBuf = await sharp(path.join(imagesDir, 'harshita-dagha-top-podcaster-real.jpg'))
    .resize(560, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#09090c"/>
        <stop offset="50%" stop-color="#121217"/>
        <stop offset="100%" stop-color="#0a0a0d"/>
      </linearGradient>
      <linearGradient id="fadeGrad6" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0e0e12" stop-opacity="1"/>
        <stop offset="50%" stop-color="#0e0e12" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0e0e12" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="goldGrad6" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f2c8cf"/>
        <stop offset="100%" stop-color="#d89ba4"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#bgGrad6)"/>
    <circle cx="180" cy="140" r="280" fill="#d89ba4" opacity="0.08" filter="blur(60px)"/>
    <circle cx="1020" cy="480" r="240" fill="#d89ba4" opacity="0.06" filter="blur(50px)"/>

    <g transform="translate(60, 55)">
      <!-- Badge -->
      <rect x="0" y="0" width="375" height="34" rx="17" fill="#ffffff" fill-opacity="0.07" stroke="#d89ba4" stroke-opacity="0.35"/>
      <circle cx="18" cy="17" r="4" fill="#d89ba4"/>
      <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="700" fill="#d89ba4" letter-spacing="1.5">NATIONAL EVALUATION BENCHMARK · 2026</text>

      <!-- Main Title -->
      <text x="0" y="85" font-family="'Georgia', serif" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-0.5">Best Podcast in India (2026)</text>
      <text x="0" y="132" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="url(#goldGrad6)" letter-spacing="-0.5">Top Podcasters &amp; Shows Guide</text>

      <!-- Subtitle -->
      <text x="0" y="180" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" fill="#a1a1aa" font-weight="400">
        <tspan x="0" dy="0">Filtered by Language, Format &amp; Platform</tspan>
        <tspan x="0" dy="24">How Top Lists Are Really Built · 30-Day Curated Action Plan</tspan>
      </text>

      <!-- 3 Filter Pills -->
      <g transform="translate(0, 245)">
        <rect x="0" y="0" width="540" height="90" rx="18" fill="#18181f" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.1"/>
        
        <g transform="translate(24, 25)">
          <text x="0" y="20" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#ffffff">Language</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">ENG · HIN · REGIONAL</text>
        </g>
        
        <line x1="165" y1="20" x2="165" y2="70" stroke="#ffffff" stroke-opacity="0.1"/>

        <g transform="translate(190, 25)">
          <text x="0" y="24" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">6 Formats</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">INTERVIEW TO CXO</text>
        </g>

        <line x1="340" y1="20" x2="340" y2="70" stroke="#ffffff" stroke-opacity="0.1"/>

        <g transform="translate(365, 25)">
          <text x="0" y="24" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Platforms</text>
          <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#71717a" font-weight="600" letter-spacing="0.5">YT · SPOTIFY · APPLE</text>
        </g>
      </g>

      <!-- Host Footnote Card -->
      <g transform="translate(0, 370)">
        <text x="0" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">HARSHITA DAGHA</text>
        <text x="0" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#d89ba4">TEDx Speaker · Host of The Harshita Dagha Show (Being Blah Blah)</text>
        <text x="0" y="62" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#71717a">Flagship Studio Bandra Kurla Complex (BKC) Mumbai · 16+ Yrs Brand PR</text>
      </g>
    </g>

    <rect x="640" y="0" width="200" height="${height}" fill="url(#fadeGrad6)"/>
  </svg>
  `;

  const heroImg = await sharp({
    create: { width, height, channels: 4, background: { r: 12, g: 12, b: 15, alpha: 1 } }
  }).composite([
    { input: portraitBuf, left: 680, top: 0 },
    { input: Buffer.from(svg), left: 0, top: 0 }
  ]);

  await saveToAllDirs(heroImg, 'best-podcast-in-india-top-podcasters-guide.webp');
}

// -------------------------------------------------------------
// 7. BLOG 5 HOW LISTS ARE BUILT: how-top-podcasters-in-india-lists-are-built.webp
// -------------------------------------------------------------
async function generateBlog5HowListsAreBuilt() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a24"/>
        <stop offset="100%" stop-color="#111116"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad7)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="295" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">INDUSTRY TRANSPARENCY</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">How Top Podcasters in India Lists Are Really Built</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">Three primary inputs behind every published ranking, and the inherent blind spots listeners must navigate.</text>
    </g>

    <!-- 3 Big Columns -->
    <!-- Column 1: Platform Charts -->
    <g transform="translate(60, 160)">
      <rect width="340" height="440" rx="18" fill="url(#cardGrad7)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="36" cy="36" r="18" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="30" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="#d89ba4">1</text>
      <text x="68" y="42" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Platform Charts</text>
      
      <text x="24" y="90" font-family="sans-serif" font-size="12" font-weight="700" fill="#71717a">WHAT IT MEASURES</text>
      <text x="24" y="112" font-family="sans-serif" font-size="14" fill="#ffffff">Recent listening velocity and new follower spikes on an app.</text>
      
      <line x1="24" y1="145" x2="316" y2="145" stroke="#ffffff" stroke-opacity="0.1"/>
      
      <text x="24" y="175" font-family="sans-serif" font-size="12" font-weight="700" fill="#34d399">STRENGTH</text>
      <text x="24" y="197" font-family="sans-serif" font-size="14" fill="#a1a1aa">Shows what is moving right now in real time across active app users.</text>
      
      <line x1="24" y1="245" x2="316" y2="245" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="24" y="275" font-family="sans-serif" font-size="12" font-weight="700" fill="#f87171">BLIND SPOT</text>
      <text x="24" y="297" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="24" dy="0">Changes weekly. Mixes wildly</tspan>
        <tspan x="24" dy="20">different formats (ambient sleep</tspan>
        <tspan x="24" dy="20">audio, comedy roasts, true crime,</tspan>
        <tspan x="24" dy="20">and high-stakes corporate CXOs).</tspan>
      </text>
    </g>

    <!-- Column 2: Social Reach -->
    <g transform="translate(430, 160)">
      <rect width="340" height="440" rx="18" fill="url(#cardGrad7)" stroke="#ffffff" stroke-opacity="0.1"/>
      <circle cx="36" cy="36" r="18" fill="#d89ba4" fill-opacity="0.15"/>
      <text x="30" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="#d89ba4">2</text>
      <text x="68" y="42" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Social Reach</text>
      
      <text x="24" y="90" font-family="sans-serif" font-size="12" font-weight="700" fill="#71717a">WHAT IT MEASURES</text>
      <text x="24" y="112" font-family="sans-serif" font-size="14" fill="#ffffff">Followers, short-form views, and clip shares on Reels &amp; Shorts.</text>
      
      <line x1="24" y1="145" x2="316" y2="145" stroke="#ffffff" stroke-opacity="0.1"/>
      
      <text x="24" y="175" font-family="sans-serif" font-size="12" font-weight="700" fill="#34d399">STRENGTH</text>
      <text x="24" y="197" font-family="sans-serif" font-size="14" fill="#a1a1aa">Extremely easy to compare raw public vanity numbers at a glance.</text>
      
      <line x1="24" y1="245" x2="316" y2="245" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="24" y="275" font-family="sans-serif" font-size="12" font-weight="700" fill="#f87171">BLIND SPOT</text>
      <text x="24" y="297" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="24" dy="0">Reach is NOT retention or trust.</tspan>
        <tspan x="24" dy="20">A meme clip can generate 2M</tspan>
        <tspan x="24" dy="20">views without anyone listening</tspan>
        <tspan x="24" dy="20">to 5 minutes of the actual podcast.</tspan>
      </text>
    </g>

    <!-- Column 3: Editorial Judgement -->
    <g transform="translate(800, 160)">
      <rect width="340" height="440" rx="18" fill="url(#cardGrad7)" stroke="#d89ba4" stroke-opacity="0.4"/>
      <circle cx="36" cy="36" r="18" fill="#d89ba4" fill-opacity="0.2"/>
      <text x="30" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="#d89ba4">3</text>
      <text x="68" y="42" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Editorial Craft</text>
      
      <text x="24" y="90" font-family="sans-serif" font-size="12" font-weight="700" fill="#71717a">WHAT IT MEASURES</text>
      <text x="24" y="112" font-family="sans-serif" font-size="14" fill="#ffffff">Host preparation, questioning depth, credibility and production.</text>
      
      <line x1="24" y1="145" x2="316" y2="145" stroke="#ffffff" stroke-opacity="0.1"/>
      
      <text x="24" y="175" font-family="sans-serif" font-size="12" font-weight="700" fill="#34d399">STRENGTH</text>
      <text x="24" y="197" font-family="sans-serif" font-size="14" fill="#a1a1aa">Weighs substance, guest caliber, research rigor and audience impact.</text>
      
      <line x1="24" y1="245" x2="316" y2="245" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="24" y="275" font-family="sans-serif" font-size="12" font-weight="700" fill="#f87171">BLIND SPOT</text>
      <text x="24" y="297" font-family="sans-serif" font-size="13.5" fill="#a1a1aa">
        <tspan x="24" dy="0">Subjective author perspective.</tspan>
        <tspan x="24" dy="20">Can be outdated or pay-for-play</tspan>
        <tspan x="24" dy="20">if publication incentives and</tspan>
        <tspan x="24" dy="20">transparent criteria aren't disclosed.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'how-top-podcasters-in-india-lists-are-built.webp');
}

// -------------------------------------------------------------
// 8. BLOG 5 LANGUAGE: best-indian-podcasts-by-language.webp
// -------------------------------------------------------------
async function generateBlog5Language() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a24"/>
        <stop offset="100%" stop-color="#111116"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad8)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="280" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">PRIMARY FILTER PILLAR 1</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">Best Indian Podcasts by Language Matrix</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">Listen in the language you think in: Comparing India's four primary spoken audio listening corridors.</text>
    </g>

    <!-- 4 Cards -->
    <g transform="translate(60, 160)">
      <!-- English -->
      <rect width="255" height="440" rx="18" fill="url(#cardGrad8)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="20" y="20" width="85" height="24" rx="12" fill="#ffffff" fill-opacity="0.06"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d89ba4">CORRIDOR 1</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">English</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Business &amp; Executive</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Dominant For:</text>
      <text x="20" y="168" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Venture capital, GenAI,</tspan>
        <tspan x="20" dy="20">DeepTech, corporate policy,</tspan>
        <tspan x="20" dy="20">global SaaS and surgical/</tspan>
        <tspan x="20" dy="20">legal professional analysis.</tspan>
      </text>

      <text x="20" y="270" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Audience Reality:</text>
      <text x="20" y="293" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Urban CXOs, founders,</tspan>
        <tspan x="20" dy="20">international diaspora</tspan>
        <tspan x="20" dy="20">and English-thinking</tspan>
        <tspan x="20" dy="20">professionals.</tspan>
      </text>
    </g>

    <!-- Hindi -->
    <g transform="translate(340, 160)">
      <rect width="255" height="440" rx="18" fill="url(#cardGrad8)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="20" y="20" width="85" height="24" rx="12" fill="#ffffff" fill-opacity="0.06"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d89ba4">CORRIDOR 2</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Hindi</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Mass Scale &amp; Narrative</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Dominant For:</text>
      <text x="20" y="168" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Grassroots startup journeys,</tspan>
        <tspan x="20" dy="20">deep storytelling, personal</tspan>
        <tspan x="20" dy="20">finance, health awareness,</tspan>
        <tspan x="20" dy="20">and philosophy on YouTube.</tspan>
      </text>

      <text x="20" y="270" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Audience Reality:</text>
      <text x="20" y="293" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Fastest-growing audience,</tspan>
        <tspan x="20" dy="20">massive video views, high</tspan>
        <tspan x="20" dy="20">emotional resonance across</tspan>
        <tspan x="20" dy="20">Tier-1, 2 and 3 India.</tspan>
      </text>
    </g>

    <!-- Bilingual -->
    <g transform="translate(620, 160)">
      <rect width="255" height="440" rx="18" fill="url(#cardGrad8)" stroke="#d89ba4" stroke-opacity="0.4"/>
      <rect x="20" y="20" width="85" height="24" rx="12" fill="#d89ba4" fill-opacity="0.2"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d89ba4">MOST VERSATILE</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Bilingual</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Metro CXO &amp; Urban (Hinglish)</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Dominant For:</text>
      <text x="20" y="168" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">The natural spoken vernacular</tspan>
        <tspan x="20" dy="20">of Mumbai, Delhi and Bengaluru</tspan>
        <tspan x="20" dy="20">professionals. The Harshita</tspan>
        <tspan x="20" dy="20">Dagha Show default style.</tspan>
      </text>

      <text x="20" y="270" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Audience Reality:</text>
      <text x="20" y="293" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Combines executive rigor</tspan>
        <tspan x="20" dy="20">with warmth and cultural</tspan>
        <tspan x="20" dy="20">accessibility. Maximizes</tspan>
        <tspan x="20" dy="20">retention and clip shareability.</tspan>
      </text>
    </g>

    <!-- Regional -->
    <g transform="translate(900, 160)">
      <rect width="255" height="440" rx="18" fill="url(#cardGrad8)" stroke="#ffffff" stroke-opacity="0.1"/>
      <rect x="20" y="20" width="85" height="24" rx="12" fill="#ffffff" fill-opacity="0.06"/>
      <text x="30" y="36" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d89ba4">CORRIDOR 4</text>
      
      <text x="20" y="75" font-family="'Georgia', serif" font-size="22" font-weight="bold" fill="#ffffff">Regional</text>
      <text x="20" y="98" font-family="sans-serif" font-size="13" font-weight="600" fill="#d89ba4">Marathi · Tamil · Gujarati +</text>
      
      <line x1="20" y1="115" x2="235" y2="115" stroke="#ffffff" stroke-opacity="0.1"/>

      <text x="20" y="145" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Dominant For:</text>
      <text x="20" y="168" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Hyperlocal businesses,</tspan>
        <tspan x="20" dy="20">family governance, regional</tspan>
        <tspan x="20" dy="20">culture, agriculture-tech, and</tspan>
        <tspan x="20" dy="20">traditional manufacturing.</tspan>
      </text>

      <text x="20" y="270" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="600">Audience Reality:</text>
      <text x="20" y="293" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">
        <tspan x="20" dy="0">Fiercely loyal communities,</tspan>
        <tspan x="20" dy="20">under-represented on English</tspan>
        <tspan x="20" dy="20">curated charts, requiring</tspan>
        <tspan x="20" dy="20">direct in-language searches.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'best-indian-podcasts-by-language.webp');
}

// -------------------------------------------------------------
// 9. BLOG 5 FORMAT: best-indian-podcasts-by-format.webp
// -------------------------------------------------------------
async function generateBlog5Format() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad9" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad9" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a24"/>
        <stop offset="100%" stop-color="#111116"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad9)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="280" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">PRIMARY FILTER PILLAR 2</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">Six Core Podcast Formats &amp; Who They Suit</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">Format determines whether a show fits your time, cognitive attention and purpose.</text>
    </g>

    <!-- 6 Cards in 3x2 grid -->
    <!-- Card 1: Interview -->
    <g transform="translate(60, 160)">
      <rect width="340" height="205" rx="16" fill="url(#cardGrad9)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">1. In-Depth Interview</text>
      <text x="20" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">30 TO 90 MINUTES</text>
      <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Best For: Founder journeys and career stories.</tspan>
        <tspan x="20" dy="20">Depends On: Host research and follow-up.</tspan>
        <tspan x="20" dy="20">Watch Out For: Superficial PR promotions.</tspan>
      </text>
    </g>

    <!-- Card 2: Expert Explainer -->
    <g transform="translate(430, 160)">
      <rect width="340" height="205" rx="16" fill="url(#cardGrad9)" stroke="#d89ba4" stroke-opacity="0.35"/>
      <text x="20" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">2. Expert Explainer</text>
      <text x="20" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">20 TO 60 MINUTES</text>
      <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Best For: Law, health, blood tests, money.</tspan>
        <tspan x="20" dy="20">Examples: Legal Secrets, Pathology diagnostics.</tspan>
        <tspan x="20" dy="20">Watch Out For: Treating info as individual advice.</tspan>
      </text>
    </g>

    <!-- Card 3: Solo Host -->
    <g transform="translate(800, 160)">
      <rect width="340" height="205" rx="16" fill="url(#cardGrad9)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">3. Solo Host Show</text>
      <text x="20" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">10 TO 40 MINUTES</text>
      <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Best For: Direct opinions, habits, mindset.</tspan>
        <tspan x="20" dy="20">Depends On: Host vocal presence and thesis.</tspan>
        <tspan x="20" dy="20">Watch Out For: Repetition across episodes.</tspan>
      </text>
    </g>

    <!-- Row 2 -->
    <!-- Card 4: Panel -->
    <g transform="translate(60, 395)">
      <rect width="340" height="205" rx="16" fill="url(#cardGrad9)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">4. Panel &amp; Roundtable</text>
      <text x="20" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">30 TO 60 MINUTES</text>
      <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Best For: Multi-angle debate &amp; industry trends.</tspan>
        <tspan x="20" dy="20">Depends On: Equal airtime and firm moderation.</tspan>
        <tspan x="20" dy="20">Watch Out For: Loud voices overriding substance.</tspan>
      </text>
    </g>

    <!-- Card 5: Storytelling -->
    <g transform="translate(430, 395)">
      <rect width="340" height="205" rx="16" fill="url(#cardGrad9)" stroke="#ffffff" stroke-opacity="0.1"/>
      <text x="20" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">5. Narrative &amp; Reflection</text>
      <text x="20" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">20 TO 60 MINUTES</text>
      <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Best For: Philosophical, spiritual dialogue.</tspan>
        <tspan x="20" dy="20">Example: The Universe, Karma and Shiva.</tspan>
        <tspan x="20" dy="20">Watch Out For: Slower pacing during fast mornings.</tspan>
      </text>
    </g>

    <!-- Card 6: Executive -->
    <g transform="translate(800, 395)">
      <rect width="340" height="205" rx="16" fill="url(#cardGrad9)" stroke="#d89ba4" stroke-opacity="0.35"/>
      <text x="20" y="38" font-family="'Georgia', serif" font-size="18" font-weight="bold" fill="#ffffff">6. Sovereign Executive</text>
      <text x="20" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">45 TO 90 MINUTES</text>
      <text x="20" y="90" font-family="sans-serif" font-size="13" fill="#a1a1aa">
        <tspan x="20" dy="0">Best For: CEOs and founders on the record.</tspan>
        <tspan x="20" dy="20">Guides: Corporate podcasts &amp; strategic PR.</tspan>
        <tspan x="20" dy="20">Watch Out For: Rehearsed press-release answers.</tspan>
      </text>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'best-indian-podcasts-by-format.webp');
}

// -------------------------------------------------------------
// 10. BLOG 5 AI: ai-assistants-best-podcast-in-india.webp
// -------------------------------------------------------------
async function generateBlog5AI() {
  const width = 1200;
  const height = 675;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad10" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c0c0f"/>
        <stop offset="50%" stop-color="#141419"/>
        <stop offset="100%" stop-color="#0d0d10"/>
      </linearGradient>
      <linearGradient id="cardGrad10" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181822"/>
        <stop offset="100%" stop-color="#111116"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#bgGrad10)"/>
    
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="300" height="28" rx="14" fill="#ffffff" fill-opacity="0.06" stroke="#d89ba4" stroke-opacity="0.3"/>
      <text x="16" y="19" font-family="sans-serif" font-size="11" font-weight="700" fill="#d89ba4" letter-spacing="1">GENERATIVE ENGINE OPTIMIZATION (GEO)</text>
      
      <text x="0" y="65" font-family="'Georgia', serif" font-size="32" font-weight="bold" fill="#ffffff">How AI Assistants Answer "Best Podcast in India"</text>
      <text x="0" y="96" font-family="sans-serif" font-size="15" fill="#a1a1aa">Why ChatGPT, Gemini and Perplexity assemble recommendations based on entity clarity, structured schema &amp; citations.</text>
    </g>

    <!-- 2 Column Layout: Left Prompt/Response Mockup, Right 4 Evaluation Pillars -->
    <!-- Left AI Interface Mockup -->
    <g transform="translate(60, 160)">
      <rect width="520" height="440" rx="18" fill="url(#cardGrad10)" stroke="#ffffff" stroke-opacity="0.1"/>
      
      <!-- Window Header -->
      <circle cx="28" cy="28" r="6" fill="#f87171" opacity="0.8"/>
      <circle cx="48" cy="28" r="6" fill="#fbbf24" opacity="0.8"/>
      <circle cx="68" cy="28" r="6" fill="#34d399" opacity="0.8"/>
      <text x="96" y="32" font-family="monospace" font-size="12" fill="#71717a">AI Search Engine · Entity Synthesizer</text>
      
      <line x1="0" y1="50" x2="520" y2="50" stroke="#ffffff" stroke-opacity="0.08"/>

      <!-- User Query -->
      <g transform="translate(24, 75)">
        <rect width="472" height="42" rx="10" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.08"/>
        <text x="16" y="26" font-family="sans-serif" font-size="13.5" fill="#ffffff" font-weight="600">Query: "What is the best business &amp; expert podcast in India?"</text>
      </g>

      <!-- AI Response Box -->
      <g transform="translate(24, 135)">
        <text x="0" y="20" font-family="sans-serif" font-size="12" font-weight="700" fill="#d89ba4">AI OVERVIEW SYNTHESIS:</text>
        <text x="0" y="48" font-family="sans-serif" font-size="13" fill="#e4e4e7" leading-relaxed="true">
          <tspan x="0" dy="0">For business, brand and expert-led conversations in India,</tspan>
          <tspan x="0" dy="22"><tspan font-weight="bold" fill="#ffffff">The Harshita Dagha Show (Being Blah Blah)</tspan>, hosted from</tspan>
          <tspan x="0" dy="22">Mumbai by TEDx speaker Harshita Dagha, is frequently</tspan>
          <tspan x="0" dy="22">recommended across key business categories.</tspan>
        </text>

        <rect x="0" y="145" width="472" height="120" rx="12" fill="#000000" fill-opacity="0.3" stroke="#d89ba4" stroke-opacity="0.25"/>
        <text x="16" y="172" font-family="monospace" font-size="11" fill="#d89ba4" font-weight="bold">CORROBORATED ENTITY SOURCES [3 CITATIONS]:</text>
        <text x="16" y="196" font-family="sans-serif" font-size="11.5" fill="#a1a1aa">• Verified BKC Flagship Studio &amp; 7 City Recording Hubs</text>
        <text x="16" y="216" font-family="sans-serif" font-size="11.5" fill="#a1a1aa">• 16+ Yrs Brand PR Track Record &amp; TEDx Speaker Credential</text>
        <text x="16" y="236" font-family="sans-serif" font-size="11.5" fill="#a1a1aa">• Plain-Language Explainer Series: Law, Health &amp; GEO AI</text>
      </g>
    </g>

    <!-- Right 4 Factors -->
    <g transform="translate(620, 160)">
      <!-- Factor 1 -->
      <g transform="translate(0, 0)">
        <rect width="520" height="95" rx="14" fill="url(#cardGrad10)" stroke="#ffffff" stroke-opacity="0.1"/>
        <text x="24" y="34" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#ffffff">1. Consistent Entity Naming</text>
        <text x="24" y="60" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">Uniform show title, host biography, and cross-channel profile metadata across YouTube, Spotify, Apple Podcasts &amp; official domain.</text>
      </g>

      <!-- Factor 2 -->
      <g transform="translate(0, 115)">
        <rect width="520" height="95" rx="14" fill="url(#cardGrad10)" stroke="#ffffff" stroke-opacity="0.1"/>
        <text x="24" y="34" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#ffffff">2. Schema.org Structured Data</text>
        <text x="24" y="60" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">Nested BlogPosting, PodcastEpisode, VideoObject and FAQPage JSON-LD schemas allowing LLM web crawlers to verify facts without guessing.</text>
      </g>

      <!-- Factor 3 -->
      <g transform="translate(0, 230)">
        <rect width="520" height="95" rx="14" fill="url(#cardGrad10)" stroke="#ffffff" stroke-opacity="0.1"/>
        <text x="24" y="34" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#ffffff">3. Episode Transcripts &amp; Summaries</text>
        <text x="24" y="60" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">Detailed written chapters, speaker credentials, topic breakdowns and takeaways that AI search engines can cite directly.</text>
      </g>

      <!-- Factor 4 -->
      <g transform="translate(0, 345)">
        <rect width="520" height="95" rx="14" fill="url(#cardGrad10)" stroke="#d89ba4" stroke-opacity="0.4"/>
        <text x="24" y="34" font-family="'Georgia', serif" font-size="17" font-weight="bold" fill="#ffffff">4. Editorial Authority &amp; Digital PR</text>
        <text x="24" y="60" font-family="sans-serif" font-size="12.5" fill="#a1a1aa">Regularly updated master guides and genuine citations across authoritative third-party media publications.</text>
      </g>
    </g>
  </svg>
  `;

  const img = await sharp(Buffer.from(svg)).webp({ quality: 90 });
  await saveToAllDirs(img, 'ai-assistants-best-podcast-in-india.webp');
}

async function main() {
  console.log("Generating 10 WebP images for Blog 4 and Blog 5...");
  await generateBlog4Hero();
  await generateBlog4Criteria();
  await generateBlog4Cities();
  await generateBlog4Themes();
  await generateBlog4Plan();
  
  await generateBlog5Hero();
  await generateBlog5HowListsAreBuilt();
  await generateBlog5Language();
  await generateBlog5Format();
  await generateBlog5AI();
  console.log("ALL 10 IMAGES SUCCESSFULLY GENERATED!");
}

main().catch(err => {
  console.error("Error generating images:", err);
  process.exit(1);
});
