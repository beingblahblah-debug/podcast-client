const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
const customPostsFilePath = path.join(__dirname, '..', 'src', 'data', 'custom_posts.json');
const nextConfigFilePath = path.join(__dirname, '..', 'next.config.ts');
const servicesFilePath = path.join(__dirname, '..', 'src', 'app', 'services', 'page.tsx');
const beAGuestFilePath = path.join(__dirname, '..', 'src', 'app', 'be-a-guest', 'page.tsx');

// =========================================================================
// PODCAST BOOKING FOR CELEBRITIES ARTICLE OBJECT
// =========================================================================
const podcastBookingArticle = {
  id: "podcast-booking-for-celebrities",
  aliases: [
    "podcast-booking-for-celebrities",
    "celebrity-booking-agency-in-india-for-podcast-shows",
    "book-celebrity-for-podcast",
    "celebrity-guest-for-podcast-in-india",
    "celebrity-podcast-booking"
  ],
  title: "Podcast Booking for Celebrities: How to Find the Right Shows",
  metaTitle: "Celebrity Booking Agency in India for Podcast Shows",
  metaDescription: "Discover how a Celebrity Booking Agency in India helps celebrities find relevant podcast shows, connect with the right audiences, and build their personal brand.",
  ogTitle: "Podcast Booking for Celebrities: How to Find the Right Shows | Harshita Dagha",
  ogDescription: "Discover how a Celebrity Booking Agency in India helps celebrities find relevant podcast shows, connect with the right audiences, and build their personal brand.",
  category: "Celebrity Marketing & Brand PR",
  date: "October 29, 2026",
  readTime: "10 min read",
  featured: true,
  excerpt: "Discover how a Celebrity Booking Agency in India helps celebrities find relevant podcast shows, connect with the right audiences, and build their personal brand.",
  image: "/images/blog/podcast-booking-for-celebrities.webp",
  imageAlt: "Celebrity Booking Agency in India helping celebrities find podcast opportunities and connect with the right audiences",
  imageTitle: "Podcast Booking for Celebrities: How to Find the Right Shows",
  imageCaption: "Celebrity Booking Agency in India helping celebrities find podcast opportunities and connect with the right audiences.",
  seoFocus: "Celebrity Booking Agency in India, Book Celebrity for Podcast, Celebrity Guest for Podcast in India, Podcast Booking for Celebrities, Celebrity Podcast Shows, Harshita Dagha, Beingblahblah",
  city: "Mumbai (BKC) & Pan-India",
  author: {
    name: "Harshita Dagha",
    role: "Podcast Host | Branding & PR Strategist | Founder, Beingblahblah",
    avatar: "/images/harshita-avatar-main.jpg",
    bio: "Harshita Dagha Maisheri is a Mumbai-based branding expert, PR strategist, podcast host, Generative Engine Optimization (GEO) specialist, and celebrity marketing professional with 16+ years of experience across brand visibility, celebrity marketing, digital PR, and business storytelling at Beingblahblah."
  },
  content: {
    intro: "Podcasts have become an important platform for celebrities to share their experiences, discuss their careers, connect with fans, and build a stronger public image. From actors and musicians to entrepreneurs, influencers, authors, and industry experts, appearing on the right podcast can help public figures reach new audiences and communicate their stories more personally. However, finding suitable shows requires more than simply sending invitations to podcast hosts. It involves understanding the celebrity's goals, identifying relevant audiences, evaluating show quality, and creating a professional booking strategy.\n\nA professional [Celebrity Booking Agency in India](https://www.harshitadagha.in/blog/celebrity-booking-agency-india) can help simplify this process by connecting celebrities with suitable podcast opportunities. The right approach focuses on meaningful conversations, audience relevance, brand alignment, and long-term visibility. Whether a celebrity wants to promote an upcoming project, discuss professional achievements, share personal experiences, or establish expertise in a particular field, selecting the right podcast is essential for making the appearance valuable.",
    sections: [
      {
        heading: "Why Podcast Appearances Matter for Celebrities?",
        paragraphs: [
          "Podcast interviews provide celebrities with an opportunity to communicate beyond traditional media appearances. Unlike short promotional interviews, many podcasts encourage detailed conversations about personal journeys, career challenges, creative processes, business decisions, and future ambitions. This format allows guests to present a more authentic side of their personality while helping audiences understand their work and experiences.",
          "Podcasts can also support personal branding by creating opportunities to reach listeners who may not regularly follow traditional entertainment news. A thoughtful interview can strengthen audience trust, introduce a celebrity to a new community, and generate content that can be repurposed into short video clips and social media posts, subject to the agreed usage rights.",
          "For celebrities launching films, music, books, businesses, or other projects, podcast appearances can complement wider promotional campaigns. The most effective strategy is to select shows where the topic naturally connects with the guest's experience instead of pursuing visibility without a clear purpose."
        ],
        bullets: [
          "**Authentic Long-Form Storytelling:** Moving beyond soundbite-driven promotional junkets to explore depth, personal history, and unfiltered professional lessons.",
          "**Audience Trust & Personal Branding:** Cultivating deep affinity with specialized communities that value long-form dialogue over fleeting social headlines.",
          "**Multi-Asset Content Repurposing:** Generating video shorts, Instagram reels, and thought-leadership excerpts that amplify reach across digital channels.",
          "**Targeted Project Launches:** Complementing theatrical releases, book launches, or venture rollouts with highly contextual, relevant show appearances."
        ]
      },
      {
        heading: "How to Identify the Right Podcast for a Celebrity?",
        paragraphs: [
          "Choosing a podcast should begin with a clear understanding of what the celebrity wants to achieve. Some guests prioritise brand awareness, while others want to discuss a new project, share knowledge, or connect with a specific professional community. These objectives influence which shows deserve consideration and how the interview should be positioned.",
          "The next step is to evaluate the podcast's audience. Listener demographics, interests, language, geographic reach, and engagement patterns can help determine whether a show is appropriate. A podcast with a smaller but highly relevant audience may offer greater value than a larger programme whose listeners have little interest in the celebrity's work.",
          "Content style is equally important. Some shows focus on entertainment and light-hearted conversations, while others feature long-form interviews, business discussions, lifestyle topics, or inspirational stories. Reviewing previous episodes helps determine whether the host's interview style and editorial direction match the guest's personality and communication preferences."
        ],
        table: {
          headers: ["Selection Criterion", "Key Questions to Ask", "Impact on Celebrity Brand"],
          rows: [
            ["Primary Objective", "Is the goal brand awareness, project launch, or thought leadership?", "Dictates whether to target mass-reach entertainment or niche authority shows"],
            ["Audience Demographics", "Does the listener profile match the target demographic age & geo?", "Prevents wasting appearances on disengaged or non-convertible audiences"],
            ["Editorial Tone", "Is the host inquisitive and supportive or sensationalist?", "Protects reputation and ensures conversational comfort on sensitive topics"],
            ["Publishing Cadence", "Does the show publish weekly and maintain high production standards?", "Assures distribution reliability and broadcast-grade presentation"]
          ]
        }
      },
      {
        heading: "Book Celebrity for Podcast: A Strategic Approach",
        paragraphs: [
          "When brands, production teams, or podcast organisers want to Book Celebrity for Podcast appearances, preparation is essential. The booking process should establish the purpose of the appearance, the intended audience, the preferred discussion topics, and the expected outcomes before outreach begins. This preparation makes communication more relevant and helps both parties understand the value of the proposed collaboration.",
          "A strong pitch should explain why the celebrity is suitable for the programme. Rather than relying on a generic invitation, the pitch can highlight relevant achievements, a recent project, a professional milestone, or a story that would interest the podcast's listeners. It should also explain how the proposed conversation fits the show's usual format.",
          "Professional coordination helps ensure that the booking moves smoothly from initial interest to a confirmed appearance. Details such as recording dates, location, virtual or in-person format, episode duration, promotional commitments, usage permissions, and commercial terms should be discussed in advance."
        ],
        bullets: [
          "**Defined Purpose & Discussion Topics:** Outlining clear conversation pillars so both the guest and host have an aligned roadmap.",
          "**Tailored Pitching:** Highlighting specific milestones, stories, and audience hooks that fit the show's format.",
          "**Comprehensive Logistical Clarity:** Locking studio location, duration, technical rider, and commercial parameters before recording day."
        ]
      },
      {
        heading: "The Role of a Celebrity Booking Agency in India",
        paragraphs: [
          "A Celebrity Booking Agency in India can support podcast booking by helping identify opportunities, coordinate communication, and manage the practical details associated with celebrity appearances. An organised approach can save time for celebrities and their representatives while helping podcast producers identify guests who fit their editorial requirements.",
          "The process typically begins with understanding the celebrity's profile, availability, interests, and communication goals. Potential podcast shows are then assessed according to audience relevance, subject matter, presentation style, scheduling requirements, and the potential value of the appearance. Suitable opportunities can be prioritised instead of approaching every available programme.",
          "An agency can also help manage negotiations and clarify expectations between the celebrity's team and the podcast organiser. Professional coordination is particularly valuable when an appearance involves paid participation, travel, production requirements, brand integrations, or specific promotional deliverables. Final arrangements should always be confirmed with the authorised representatives of the parties involved."
        ],
        image: {
          src: "/images/blog/podcast-booking-celebrities-strategic-framework.webp",
          alt: "The 4-stage celebrity podcast booking framework",
          title: "Strategic Celebrity Podcast Booking System",
          caption: "The 4-stage blueprint for goal setting, vetting, strategic pitching, and digital PR synergy."
        },
        internalLink: {
          text: "Explore Celebrity Booking Agency India Services →",
          href: "/blog/celebrity-booking-agency-india"
        }
      },
      {
        heading: "Celebrity Guest for Podcast in India: Finding Relevant Opportunities",
        paragraphs: [
          "Finding a suitable [Celebrity Guest for Podcast in India](https://www.harshitadagha.in/blog/top-podcasters-in-india-october-2026) requires understanding the diversity of India's podcast audience. Programmes may be produced in English, Hindi, Bengali, Tamil, Telugu, Marathi, and other languages, serving audiences with different interests and cultural backgrounds. Language and audience preferences can significantly influence the success of an interview.",
          "For example, an entrepreneur may be well suited to a business-focused podcast, while an actor might connect more effectively with an entertainment or storytelling programme. A fitness professional could discuss discipline and performance, whereas an author might be invited to explore creativity, research, or the inspiration behind a new publication. The strongest opportunities create a natural connection between the guest's experience and the podcast's subject matter.",
          "Regional relevance can also make a difference. A celebrity with a strong following in a particular state or language community may benefit from appearing on a podcast that understands that audience. The goal is not simply to secure an interview but to create a conversation that feels meaningful to both the guest and the listeners."
        ],
        bullets: [
          "**Linguistic Diversity:** Tapping into high-growth Hindi, Tamil, Telugu, Marathi, and Bengali podcast ecosystems.",
          "**Genre-Talent Fit:** Pairing founders with business podcasts, actors with storytelling journeys, and athletes with discipline shows.",
          "**Regional Resonance:** Aligning regional star power with dedicated geographic listenership for maximum cultural impact."
        ]
      },
      {
        heading: "Evaluating Podcast Quality Before Confirming a Booking",
        paragraphs: [
          "Before accepting an invitation, celebrities and their representatives should review the podcast's previous episodes, production standards, host profile, audience engagement, and publishing consistency. These factors help establish whether the programme is professionally managed and suitable for the celebrity's public image.",
          "Audience numbers can provide useful context, but they should not be the only deciding factor. Genuine engagement, relevant listeners, thoughtful discussions, and the potential to reach a specific community may be more valuable than a headline download figure. Where audience statistics are supplied, they should be reviewed carefully and interpreted in context.",
          "The team should also examine the podcast's editorial approach and expectations for the interview. Questions about sensitive subjects, promotional restrictions, recording permissions, editing policies, and content distribution should be addressed before confirmation. Clear communication reduces misunderstandings and helps protect the interests of everyone involved."
        ],
        image: {
          src: "/images/blog/evaluating-podcast-quality-celebrities.webp",
          alt: "Evaluating podcast quality before confirming a celebrity booking",
          title: "Podcast Quality Evaluation Scorecard",
          caption: "4 critical pillars: host demeanour, audience engagement, audio/video engineering, and commercial clarity."
        }
      },
      {
        heading: "Preparing Celebrities for a Successful Podcast Appearance",
        paragraphs: [
          "Effective preparation helps celebrities communicate confidently and make the most of the interview. Before recording, the guest and their team should agree on key discussion areas, relevant career milestones, current projects, and any subjects that require special consideration. Preparation should support natural conversation rather than make the interview sound overly rehearsed.",
          "Technical and logistical arrangements also matter. For virtual interviews, the guest should check the microphone, camera, lighting, internet connection, and recording environment. For studio recordings, the team should confirm the address, arrival time, recording schedule, and any production requirements. These simple checks help avoid unnecessary disruptions.",
          "After the episode is recorded, promotional coordination can extend its reach. Approved clips, behind-the-scenes photographs, episode announcements, and short quotations can be shared through relevant social media channels, subject to the podcast's permissions and agreed terms. A well-planned promotional approach helps the appearance continue delivering value after the original publication date."
        ],
        bullets: [
          "**Pre-Interview Alignment:** Agreeing on conversational anchors and boundaries to preserve authenticity without compromising privacy.",
          "**Studio & Tech Readiness:** Ensuring broadcast-quality audio, 4K camera setup, and noise-isolated recording acoustics.",
          "**Post-Air Amplification:** Coordinating approved teaser cutdowns, quote cards, and social rollouts."
        ]
      },
      {
        heading: "Measuring the Value of Podcast Booking",
        paragraphs: [
          "The success of a podcast appearance should be assessed against the goals established before booking. If the objective is awareness, useful indicators may include episode views, listens, social media reach, audience comments, and relevant follower growth. If the appearance supports a product or project launch, referral traffic, enquiries, and campaign engagement may also be relevant.",
          "Qualitative feedback is important too. A thoughtful discussion may strengthen the celebrity's reputation, communicate expertise, or create opportunities for future collaborations even when immediate numerical results are modest. Evaluating the quality of audience responses can help identify which formats and topics work well.",
          "Over time, maintaining a record of podcast appearances can improve future decisions. Reviewing performance, audience fit, production quality, and the overall experience helps celebrities and their teams refine their booking strategy and focus on opportunities that align with their long-term goals."
        ],
        table: {
          headers: ["Measurement Pillar", "Primary Metrics", "Strategic Value"],
          rows: [
            ["Quantitative Reach", "Downloads, full episode retention, views, impressions", "Validates audience scale and exposure"],
            ["Qualitative Sentiment", "Comment depth, intellectual feedback, peer mentions", "Signals enhanced brand trust and thought-leadership stature"],
            ["Direct Conversion", "Launch traffic, project pre-orders, inbound partnerships", "Delivers tangible commercial return on appearance time"]
          ]
        }
      },
      {
        heading: "Work with Harshita Dagha for Podcast Booking Opportunities",
        paragraphs: [
          "Finding the right podcast requires research, professional communication, careful planning, and a clear understanding of the celebrity's objectives. From identifying relevant shows to coordinating invitations and preparing for recording, every stage contributes to a successful appearance.",
          "Through Harshita Dagha, interested celebrities, representatives, and podcast organisers can explore professional celebrity booking opportunities suited to their requirements. Whether the goal is to feature a celebrity on a podcast, arrange an interview around a new project, or identify relevant conversations for a public figure, a structured approach can make the process more efficient.",
          "The priority should always be quality over quantity. A relevant podcast, a compelling topic, and an engaged audience can create a more meaningful opportunity than an appearance selected solely for visibility. With the right planning, podcast interviews can become a valuable part of a celebrity's communication and personal branding strategy."
        ],
        internalLink: {
          text: "Connect with Harshita Dagha for Celebrity Podcast Bookings →",
          href: "/contact"
        }
      }
    ],
    conclusion: "Podcast booking for celebrities is most effective when it is guided by audience relevance, clear objectives, professional coordination, and thoughtful preparation. By choosing appropriate shows, developing strong pitches, confirming expectations, and evaluating results, celebrities can turn podcast appearances into meaningful communication opportunities.\n\nA professional Celebrity Booking Agency in India can help streamline the process for suitable guests and podcast organisers. Whether you want to [Book Celebrity for Podcast](https://www.harshitadagha.in/contact) appearances or identify a Celebrity Guest for Podcast in India, a strategic approach can help create conversations that benefit both the guest and the audience."
  },
  faqs: [
    {
      question: "1. What is a Celebrity Booking Agency in India?",
      answer: "A Celebrity Booking Agency in India helps coordinate professional appearances involving celebrities, including podcast interviews, events, promotional activities, and other approved engagements. Services and arrangements vary depending on the agency and the requirements of each booking."
    },
    {
      question: "2. How can I book a celebrity for a podcast?",
      answer: "To Book Celebrity for Podcast appearances, identify the guest who matches your show's subject, prepare a clear invitation, explain the audience and proposed discussion, and confirm availability, fees, recording arrangements, and promotional expectations with the celebrity's authorised team."
    },
    {
      question: "3. How do I find a Celebrity Guest for Podcast in India?",
      answer: "To find a Celebrity Guest for Podcast in India, consider your audience's interests, the language of your programme, your preferred topics, and the type of guest who can contribute meaningful insights. Professional booking support may help coordinate suitable opportunities."
    },
    {
      question: "4. What should I consider before inviting a celebrity to a podcast?",
      answer: "Consider audience relevance, the guest's expertise, the podcast's format, recording dates, commercial terms, editorial expectations, production quality, and content usage permissions before confirming the invitation."
    },
    {
      question: "5. Are celebrity podcast appearances paid?",
      answer: "Celebrity podcast appearances may be paid, unpaid, or arranged as part of a promotional collaboration. The terms depend on the celebrity, the podcast, the purpose of the interview, and the agreed deliverables."
    },
    {
      question: "6. How far in advance should I book a celebrity for a podcast?",
      answer: "It is sensible to begin outreach several weeks in advance, especially when the celebrity has a busy schedule or the recording requires travel and detailed coordination. The actual lead time depends on availability and the complexity of the booking."
    },
    {
      question: "7. Can celebrities appear on regional-language podcasts in India?",
      answer: "Yes. Regional-language podcasts can be suitable for celebrities who want to connect with audiences in a particular language or region. The guest's communication preferences and the podcast's audience should guide the selection."
    },
    {
      question: "8. How can celebrities benefit from podcast interviews?",
      answer: "Podcast interviews can help celebrities share their stories, discuss projects, communicate expertise, strengthen their personal brand, connect with new audiences, and create approved content for further promotion."
    }
  ]
};

// =========================================================================
// 1. UPDATE src/data/articles.ts
// =========================================================================
function updateArticlesFile() {
  let content = fs.readFileSync(articlesFilePath, 'utf-8');

  if (content.includes(podcastBookingArticle.id)) {
    console.log('Article already exists in articles.ts, skipping insertion.');
    return;
  }

  const marker = 'export const ARTICLES: Article[] = [';
  if (!content.includes(marker)) {
    console.error('Could not locate ARTICLES marker in articles.ts');
    process.exit(1);
  }

  const articleString = '  ' + JSON.stringify(podcastBookingArticle, null, 2).replace(/\n/g, '\n  ') + ',\n';
  content = content.replace(marker, marker + '\n' + articleString);

  fs.writeFileSync(articlesFilePath, content, 'utf-8');
  console.log('articles.ts updated successfully with Podcast Booking for Celebrities article.');
}

// =========================================================================
// 2. UPDATE src/data/custom_posts.json
// =========================================================================
function updateCustomPosts() {
  let posts = [];
  try {
    posts = JSON.parse(fs.readFileSync(customPostsFilePath, 'utf-8'));
  } catch (e) {
    posts = [];
  }

  posts = posts.filter(p => p.id !== podcastBookingArticle.id);

  let mdContent = `${podcastBookingArticle.content.intro}\n\n`;
  podcastBookingArticle.content.sections.forEach(sec => {
    mdContent += `### ${sec.heading}\n\n`;
    sec.paragraphs.forEach(p => {
      mdContent += `${p}\n\n`;
    });
    if (sec.bullets) {
      sec.bullets.forEach(b => {
        mdContent += `- ${b}\n`;
      });
      mdContent += '\n';
    }
    if (sec.table) {
      mdContent += `| ${sec.table.headers.join(' | ')} |\n`;
      mdContent += `| ${sec.table.headers.map(() => '---').join(' | ')} |\n`;
      sec.table.rows.forEach(r => {
        mdContent += `| ${r.join(' | ')} |\n`;
      });
      mdContent += '\n';
    }
    if (sec.image) {
      mdContent += `![${sec.image.alt}](${sec.image.src})\n\n`;
    }
    if (sec.internalLink) {
      mdContent += `[${sec.internalLink.text}](${sec.internalLink.href})\n\n`;
    }
  });

  mdContent += `### Conclusion\n\n${podcastBookingArticle.content.conclusion}`;

  const customPostObj = {
    id: podcastBookingArticle.id,
    type: "article",
    title: podcastBookingArticle.title,
    metaTitle: podcastBookingArticle.metaTitle,
    metaDescription: podcastBookingArticle.metaDescription,
    category: podcastBookingArticle.category,
    date: podcastBookingArticle.date,
    readTime: podcastBookingArticle.readTime,
    excerpt: podcastBookingArticle.excerpt,
    coverImage: podcastBookingArticle.image,
    author: podcastBookingArticle.author,
    tags: [
      "Celebrity Booking Agency in India",
      "Book Celebrity for Podcast",
      "Celebrity Guest for Podcast in India",
      "Podcast Booking for Celebrities",
      "Celebrity Podcast Shows",
      "Harshita Dagha",
      "Beingblahblah"
    ],
    featured: true,
    views: "36.2K views",
    content: mdContent,
    faqs: podcastBookingArticle.faqs
  };

  posts.unshift(customPostObj);
  fs.writeFileSync(customPostsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
  console.log('custom_posts.json updated successfully with Podcast Booking for Celebrities.');
}

// =========================================================================
// 3. UPDATE next.config.ts (Redirects for Root Slugs)
// =========================================================================
function updateNextConfig() {
  let content = fs.readFileSync(nextConfigFilePath, 'utf-8');

  const redirectSnippet = `      {
        source: "/podcast-booking-for-celebrities",
        destination: "/blog/podcast-booking-for-celebrities",
        permanent: true,
      },
      {
        source: "/podcast-booking-for-celebrities/",
        destination: "/blog/podcast-booking-for-celebrities",
        permanent: true,
      },
      {
        source: "/book-celebrity-for-podcast",
        destination: "/blog/podcast-booking-for-celebrities",
        permanent: true,
      },
      {
        source: "/celebrity-guest-for-podcast-in-india",
        destination: "/blog/podcast-booking-for-celebrities",
        permanent: true,
      },`;

  if (!content.includes('/podcast-booking-for-celebrities')) {
    const target = 'async redirects() {\n    return [\n';
    content = content.replace(target, target + redirectSnippet + '\n');
    fs.writeFileSync(nextConfigFilePath, content, 'utf-8');
    console.log('next.config.ts redirects updated successfully.');
  } else {
    console.log('next.config.ts already includes podcast-booking-for-celebrities redirects.');
  }
}

// =========================================================================
// 4. CROSS-LINK ON /services AND /be-a-guest
// =========================================================================
function updateCrossLinks() {
  // Update services page
  if (fs.existsSync(servicesFilePath)) {
    let sContent = fs.readFileSync(servicesFilePath, 'utf-8');
    if (!sContent.includes('/blog/podcast-booking-for-celebrities')) {
      const callout = `            <div className="inline-flex items-center gap-2 p-3 px-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-200">
              <span className="font-semibold text-white">Celebrity Podcast Booking:</span>
              <a 
                href="/blog/podcast-booking-for-celebrities"
                className="text-[#f472b6] hover:text-white underline font-medium transition-colors"
              >
                Podcast Booking for Celebrities Guide &rarr;
              </a>
            </div>\n`;
      const anchor = 'Celebrity Booking Agency India &rarr;\n              </a>\n            </div>';
      if (sContent.includes(anchor)) {
        sContent = sContent.replace(anchor, anchor + '\n' + callout);
        fs.writeFileSync(servicesFilePath, sContent, 'utf-8');
        console.log('Added cross-link in services page.');
      }
    }
  }

  // Update be-a-guest page
  if (fs.existsSync(beAGuestFilePath)) {
    let bgContent = fs.readFileSync(beAGuestFilePath, 'utf-8');
    if (!bgContent.includes('/blog/podcast-booking-for-celebrities')) {
      const bannerBlock = `
        {/* Celebrity Podcast Booking Callout */}
        <div className="bg-gradient-to-r from-amber-950/30 via-[#141418] to-[#141418] text-white rounded-3xl p-6 border border-amber-500/20 shadow-lg mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Celebrity &amp; VIP Booking</span>
            <h4 className="font-serif font-bold text-lg text-white">Looking for Celebrity Podcast Booking in India?</h4>
            <p className="text-xs text-zinc-300">Discover how our agency connects public figures, founders, and artists with premium podcast shows.</p>
          </div>
          <Link
            href="/blog/podcast-booking-for-celebrities"
            className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Read Celebrity Guide</span>
            <span>→</span>
          </Link>
        </div>
`;
      const anchor = '{/* Fast-Track WhatsApp Pitch Option */}';
      if (bgContent.includes(anchor)) {
        bgContent = bgContent.replace(anchor, bannerBlock + '\n        ' + anchor);
        fs.writeFileSync(beAGuestFilePath, bgContent, 'utf-8');
        console.log('Added celebrity booking banner to src/app/be-a-guest/page.tsx');
      }
    }
  }
}

function main() {
  updateArticlesFile();
  updateCustomPosts();
  updateNextConfig();
  updateCrossLinks();
  console.log('🎉 Podcast Booking for Celebrities publishing script executed successfully!');
}

main();

