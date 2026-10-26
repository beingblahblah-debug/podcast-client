const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
const customPostsFilePath = path.join(__dirname, '..', 'src', 'data', 'custom_posts.json');
const nextConfigFilePath = path.join(__dirname, '..', 'next.config.ts');

// =========================================================================
// CELEBRITY BOOKING AGENCY INDIA ARTICLE OBJECT
// =========================================================================
const celebrityBookingArticle = {
  id: "celebrity-booking-agency-india",
  aliases: [
    "celebrity-booking-agency-mumbai",
    "book-celebrity-for-event",
    "celebrity-booking-for-events-india",
    "book-bollywood-celebrity-for-event",
    "celebrity-appearance-booking-india",
    "celebrity-booking-for-corporate-events",
    "celebrity-booking-agent-india",
    "hire-celebrity-for-event",
    "celebrity-booking-contact-india"
  ],
  title: "Celebrity Booking Agency India: Book Celebrities for Events with Harshita Dagha",
  metaTitle: "Celebrity Booking Agency India | Harshita Dagha",
  metaDescription: "Looking for a celebrity booking agency in India? Explore celebrity bookings for corporate events, Bollywood appearances, and brand campaigns with Harshita Dagha.",
  ogTitle: "Celebrity Booking Agency India: Book Celebrities for Events with Harshita Dagha",
  ogDescription: "A comprehensive guide to celebrity booking in India: corporate events, Bollywood appearances, brand endorsements, and digital PR synergy with Harshita Dagha.",
  category: "Celebrity Marketing & Brand PR",
  date: "October 26, 2026",
  readTime: "12 min read",
  featured: true,
  excerpt: "Looking for a celebrity booking agency in India? Explore celebrity bookings for corporate events, Bollywood appearances, and brand campaigns with Harshita Dagha.",
  image: "/images/blog/celebrity-booking-agency-india.webp",
  imageAlt: "Celebrity Booking Agency India: Book Celebrities for Events with Harshita Dagha",
  imageTitle: "Celebrity Booking Agency India",
  imageCaption: "Celebrity marketing, corporate appearance coordination, and digital PR advisory led by Harshita Dagha at Beingblahblah, Mumbai.",
  seoFocus: "Celebrity Booking Agency India, Celebrity Booking Agency Mumbai, Book Celebrity for Event, Celebrity Booking for Events India, Celebrity Booking Agent India, Hire Celebrity for Event, Book Bollywood Celebrity for Event, Celebrity Appearance Booking India, Celebrity Booking for Corporate Events, Celebrity Booking Contact India, Harshita Dagha, Beingblahblah",
  city: "Mumbai (BKC) & Pan-India",
  author: {
    name: "Harshita Dagha",
    role: "Podcast Host | Branding & PR Strategist | Founder, Beingblahblah",
    avatar: "/images/harshita-avatar-main.jpg",
    bio: "Harshita Dagha Maisheri is a Mumbai-based branding expert, PR strategist, podcast host, Generative Engine Optimization (GEO) specialist, and celebrity marketing professional with 16+ years of experience across brand visibility, celebrity marketing, digital PR, and business storytelling at Beingblahblah."
  },
  content: {
    intro: "Quick Answer: A celebrity booking agency in India facilitates, negotiates, and coordinates celebrity appearances, Bollywood talent engagements, and brand campaign collaborations for corporate events, product launches, award summits, and commercial advertisements. Harshita Dagha, a Mumbai-based branding expert, PR strategist, podcast host, and founder of Beingblahblah with 16+ years of experience, works across brand visibility, celebrity marketing, digital PR, and business storytelling to connect high-impact celebrity appearances with verified media authority and measurable brand value.\n\nPlanning a corporate event, product launch, award ceremony, or brand campaign and looking to book a celebrity in India? Choosing the right celebrity and coordinating the appearance requires a clear brief, careful planning, and professional communication.\n\nA celebrity booking agency in India can help businesses explore celebrity appearances, discuss event requirements, and coordinate potential engagements based on availability and agreed terms. Depending on the service, celebrity marketing may also involve brand collaborations, influencer alignment, media outreach, and campaign storytelling.\n\nHarshita Dagha, a Mumbai-based branding expert, PR strategist, podcast host, and celebrity marketing professional with 16+ years of experience, works across brand visibility, celebrity marketing, digital PR, and business storytelling. Through her work at Beingblahblah, she helps brands explore ways to connect visibility with meaningful stories and communication.\n\nWhether you want to book a celebrity for an event, explore a Bollywood celebrity appearance, or discuss celebrity marketing for a corporate campaign, understanding the booking process can help you make a more informed decision.",
    sections: [
      {
        heading: "1. What Is a Celebrity Booking Agency in India?",
        paragraphs: [
          "A celebrity booking agency helps businesses and event organisers explore and coordinate celebrity appearances for events, promotional activities, and brand campaigns.",
          "Depending on the provider, services may include identifying suitable talent, discussing availability, coordinating appearance requirements, communicating commercial terms, and helping organise event-related arrangements.",
          "Businesses frequently seek professional celebrity bookings for a diverse spectrum of public and private engagements:"
        ],
        bullets: [
          "**Corporate events and annual celebrations:** Engaging distinguished keynote speakers, celebrity hosts, or headline entertainers for internal annual days and leadership conclaves.",
          "**Product launches and brand activations:** Generating immense initial footfall, social buzz, and press interest through a celebrity ribbon-cutting, product reveal, or demonstration.",
          "**Award ceremonies and industry conferences:** Lending prestige, credibility, and national stature to felicitations and sector-wide summits.",
          "**Celebrity guest appearances:** Curating VIP presence for store openings, high-profile gala dinners, and private brand milestone celebrations.",
          "**Brand endorsements and promotional campaigns:** Forging commercial partnerships where talent endorses a product across digital, print, and television channels.",
          "**Interviews, public appearances, and approved digital content:** Facilitating broadcast-quality conversations, podcasts, and co-created promotional assets."
        ],
        postParagraphs: [
          "The exact service depends on the celebrity, event requirements, and agreement between the parties. A booking inquiry should therefore begin with a clear description of the intended engagement."
        ]
      },
      {
        heading: "2. Celebrity Booking Agency Mumbai: Why Choose the Right Partner?",
        paragraphs: [
          "Mumbai is an important centre for India's entertainment, media, and advertising industries. Businesses searching for a celebrity booking agency in Mumbai may be looking for Bollywood actors, television personalities, digital creators, or other public figures for an event or campaign.",
          "However, selecting a provider involves more than choosing one based on location. Engaging public figures carries brand equity implications, legal intricacies, and tight operational deadlines.",
          "Consider these essential factors before making a decision:"
        ],
        bullets: [
          "**Relevant experience:** Look for experience that aligns with your event type or campaign objective — whether it is a high-level B2B corporate summit or a glamorous consumer launch.",
          "**Celebrity and audience fit:** Consider whether the celebrity's public profile, values, and demographic reach are genuinely appropriate for your brand positioning.",
          "**Communication and coordination:** Understand who will manage the inquiry, event requirements, scheduling, security protocols, technical riders, and executive approvals.",
          "**Commercial transparency:** Request written details of the agreed appearance, fee, inclusions (such as travel, stay, and glam teams), exclusions, and milestone payment terms.",
          "**Campaign support:** If the booking is part of a larger brand campaign, consider whether you also need PR, storytelling, digital syndication, or promotional media support."
        ],
        table: {
          headers: ["Evaluation Factor", "Why It Matters", "Standard Best Practice"],
          rows: [
            ["Relevant Track Record", "Ensures familiarity with event protocols and talent handlers", "Verify past campaign case studies and corporate client references"],
            ["Audience & Brand Alignment", "Prevents disconnect between celebrity image and target consumers", "Audit demographic reach and brand safety prior to shortlisting"],
            ["Communication Rigour", "Avoids last-minute scheduling conflicts or scope misunderstandings", "Single-point coordination with formal call-sheets and briefs"],
            ["Commercial Transparency", "Eliminates unexpected rider fees, travel escalations, and hidden costs", "All-inclusive written agreements itemizing fees and deliverables"],
            ["Integrated PR Support", "Maximizes return on investment beyond the single event day", "Pair celebrity presence with digital PR and multi-channel storytelling"]
          ]
        },
        postParagraphs: [
          "Harshita Dagha is based in Mumbai and works across celebrity marketing, branding, and digital PR. Businesses exploring these services can review her official service information and contact her team to discuss their requirements."
        ],
        internalLink: {
          text: "Explore Harshita Dagha's PR & Brand Strategy Services →",
          href: "/services"
        }
      },
      {
        heading: "3. How to Book a Celebrity for an Event in India",
        paragraphs: [
          "If you want to book a celebrity for an event, preparing the right information before contacting a provider can make the process more efficient, transparent, and successful.",
          "Following a structured five-step methodology helps organizers navigate availability, pricing, and execution without friction."
        ],
        image: {
          src: "/images/blog/celebrity-booking-process-india.webp",
          alt: "How to Book a Celebrity for an Event in India: 5-Step Process Infographic",
          title: "5-Step Celebrity Booking Process in India",
          caption: "A structured 5-step roadmap: from defining the initial brief to written contracts and post-event digital PR amplification."
        },
        bullets: [
          "**Step 1: Define Your Event Requirements.** Start by outlining the purpose of the event and the role you expect the celebrity to play. Include event name and purpose, date and location, expected audience and format, preferred talent category, expected appearance duration, budget range, and media/content needs.",
          "**Step 2: Identify a Suitable Celebrity.** The most recognisable celebrity is not necessarily the best choice for every event. A corporate conference may require a credible speaker whose expertise fits the subject, while a consumer launch benefits from public alignment. Consider campaign objectives, audience relevance, public image, and required participation.",
          "**Step 3: Check Availability and Fees.** Celebrity availability and fees vary according to the individual, event date, appearance format, location, and commercial requirements. Request a proposal based on your specific brief, confirming whether travel, accommodation, appearance duration, production, and riders are included.",
          "**Step 4: Confirm the Terms in Writing.** Before finalising an engagement, make sure the agreement clearly identifies appearance details, schedule, commercial terms, payment milestones, cancellation provisions, and responsibilities. Clarify permitted usage of name, image, voice, and video content.",
          "**Step 5: Plan the Brand Communication.** A celebrity appearance creates opportunities to communicate a brand story beyond the event itself. Plan approved photography, media interviews, press outreach, and social content in advance rather than assuming they are automatically included."
        ],
        table: {
          headers: ["Stage", "Primary Milestone", "Deliverables & Documentation"],
          rows: [
            ["Phase 1: Briefing", "Clarify scope, audience, date, format, budget", "Comprehensive Event Brief Document"],
            ["Phase 2: Talent Curation", "Shortlist candidates meeting brand values and goals", "Talent Compatibility & Availability Matrix"],
            ["Phase 3: Commercial Proposal", "Verify schedule, pricing, riders, and logistics", "Formal Written Commercial Proposal"],
            ["Phase 4: Contract Execution", "Lock terms, usage permissions, cancellation terms", "Legally Binding Engagement Agreement"],
            ["Phase 5: Brand Amplification", "Deploy press coverage, clips, and narrative PR", "Digital PR Campaign & Media Report"]
          ]
        },
        postParagraphs: [
          "A detailed brief prepared in Step 1 helps the provider understand what you need and assess the available options rapidly."
        ]
      },
      {
        heading: "4. Book a Bollywood Celebrity for an Event",
        paragraphs: [
          "Businesses planning product launches, award ceremonies, entertainment events, and brand activations may want to book a Bollywood celebrity for an event.",
          "The right engagement depends on the celebrity's availability, the event's purpose, the proposed fee, and the expected participation.",
          "Common engagement formats include:"
        ],
        bullets: [
          "**Celebrity guest appearances:** Stage entry, greeting attendees, lighting the ceremonial lamp, or presenting major awards.",
          "**Product launch participation:** Unveiling a new product, posing for key photo calls, and speaking briefly about brand features.",
          "**Corporate event appearances:** Moderated fireside chats, motivational keynotes, or executive interactions.",
          "**Brand endorsement agreements:** Comprehensive commercial partnerships incorporating advertising usage rights and long-term associations.",
          "**Approved promotional campaigns:** Social media announcements, co-branded reels, and official promotional banners.",
          "**Interviews and event conversations:** Controlled media interactions, red carpet soundbites, and podcast interviews."
        ],
        image: {
          src: "/images/blog/celebrity-marketing-digital-pr-synergy.webp",
          alt: "Celebrity Appearance vs Brand Endorsement vs Digital PR Campaign Synergy",
          title: "Celebrity Campaign Architecture Matrix",
          caption: "Understanding the distinction between single event appearances, long-term commercial endorsements, and integrated Digital PR storytelling."
        },
        table: {
          headers: ["Engagement Dimension", "Celebrity Event Appearance", "Brand Endorsement Partnership", "Digital PR Synergy (Beingblahblah)"],
          rows: [
            ["Primary Goal", "Immediate event glamour, live attendance draw, ribbon cutting", "Broad commercial credibility, advertising campaign face, sales impact", "Evergreen authority, media publication features, AI search prominence"],
            ["Time Commitment", "1 to 3 hours physical presence on event day", "Multi-month or multi-year contract term with scheduled shoot days", "Continuous narrative rollout spanning pre-event, live, and post-event"],
            ["Usage Rights", "Restricted to event-day recap and internal archival coverage", "Extensive commercial advertising rights across TV, print, outdoor, and digital", "Permanent editorial citations in reputable news publications and knowledge graphs"],
            ["Exclusivity", "Non-exclusive; limited category restrictions on the day", "Strict sector exclusivity barring competing brand endorsements", "Entity-level brand storytelling agnostic of competitor noise"],
            ["Commercial Structure", "Single event fee plus travel, five-star stay, and rider expenses", "Substantial annual retainer with milestone deliverable disbursements", "Integrated strategic advisory bridging booking with media relations"]
          ]
        },
        quote: "These formats involve very different commercial terms. A short appearance is not the same as a brand endorsement, which includes content deliverables, usage rights, a defined contract period, and exclusivity. Clarifying scope early prevents misunderstandings.",
        postParagraphs: [
          "When requesting a booking, explain the intended use of the celebrity's participation. This allows the parties to clarify the scope before making a commitment."
        ]
      },
      {
        heading: "5. Celebrity Booking for Corporate Events",
        paragraphs: [
          "Celebrity booking for corporate events can be relevant to annual functions, conferences, award ceremonies, leadership summits, employee celebrations, and business launches.",
          "The best choice depends on the purpose of the occasion.",
          "For example, a leadership summit may require a speaker whose track record contributes to a professional discussion. An annual celebration may focus on entertainment, humour, and audience engagement, while a product launch requires a celebrity appearance that aligns with the brand's positioning.",
          "Before finalising the booking, confirm:"
        ],
        bullets: [
          "**The appearance date, time, and duration:** Explicit call times, green room arrival, stage time, and departure schedules.",
          "**The celebrity's role in the programme:** Keynote speech, panel participation, award distribution, or casual interactive Q&A.",
          "**Travel, accommodation, and logistical requirements:** Flight class, airport transfers, hotel category, green room specifications, and dietary riders.",
          "**Photography and video permissions:** Permitted recording angles, broadcast rights, livestreaming permissions, and internal vs. external usage.",
          "**Agreed promotional deliverables:** Whether pre-event teaser shoutouts or social media tags are part of the deliverables.",
          "**The cancellation and rescheduling terms:** Force majeure clauses, date-change policies, and refundable vs. non-refundable retainer thresholds."
        ],
        postParagraphs: [
          "Organisers should also decide how they will evaluate the engagement. Depending on the event, useful indicators may include audience attendance, engagement, relevant media coverage, and interaction with approved campaign content."
        ]
      },
      {
        heading: "6. Celebrity Appearance Booking India: What Affects the Cost?",
        paragraphs: [
          "There is no single fixed fee for celebrity appearance booking in India. The total cost depends on the individual celebrity and the requirements of the engagement.",
          "Understanding the underlying cost drivers allows organizers to allocate budgets strategically and avoid unforeseen budget escalations."
        ],
        bullets: [
          "**Celebrity Profile:** The celebrity's public profile, current commercial demand, recent box office or OTT releases, social media following, and category authority heavily influence the fee.",
          "**Type of Appearance:** Attending an event, delivering an unscripted keynote, participating in an interview, and endorsing a product involve distinct levels of preparation, responsibility, and commercial value.",
          "**Event Location and Duration:** Domestic metro vs. tier-2 city travel, flight schedules, multi-day availability, and stage duration all impact overall costs.",
          "**Promotional Usage Rights:** Using a celebrity's image, video, or voice in advertisements, digital performance campaigns, or commercial marketing materials requires separate permissions and usage fees.",
          "**Additional Requirements:** Hair, makeup, styling teams, personal security, entourage travel, premium ground transportation, and technical stage riders contribute to the final budget."
        ],
        table: {
          headers: ["Cost Determinant", "Budget Impact", "Key Considerations"],
          rows: [
            ["Talent Tier & Market Demand", "Highest variable factor", "A-list Bollywood stars, top sports icons, popular OTT leads, and digital creators operate in distinct fee brackets"],
            ["Appearance Format & Duration", "Moderate to High", "Keynote speeches and fireside interviews command different rates than 30-minute ribbon-cutting appearances"],
            ["Travel, Hospitality & Riders", "15% to 30% of total outlay", "Business/first-class airfare, luxury suites, security detail, and glam squad travel are typically billed to the organizer"],
            ["Commercial Usage Rights", "Significant multiplier", "Restricting asset use to internal event recaps keeps fees base; public advertising campaigns require usage licensing"],
            ["Exclusivity & Competing Brands", "High premium if enforced", "Category lockouts during the event cycle prevent talent from appearing for immediate commercial competitors"]
          ]
        },
        postParagraphs: [
          "The most useful approach is to provide a detailed brief and request a written proposal. This allows you to understand the inclusions and compare options against your budget."
        ]
      },
      {
        heading: "7. How Harshita Dagha Connects Celebrity Marketing with Digital PR",
        paragraphs: [
          "Harshita Dagha is a Mumbai-based podcast host, branding expert, PR strategist, GEO expert, and social media strategist with 16+ years of experience. She is the founder of Beingblahblah and works across branding, digital PR, celebrity marketing, and business storytelling.",
          "Her professional positioning brings together three interconnected pillars relevant to brands seeking long-term visibility:",
          "**Celebrity Marketing:** Celebrity marketing can help a brand explore collaborations and public-facing opportunities that align with its audience and campaign objectives. The format and availability of each engagement should be discussed and confirmed individually.",
          "**Digital PR:** Digital PR focuses on communicating a brand's story through relevant online publications, media opportunities, interviews, and other digital channels. When appropriate, it can complement a celebrity-led campaign by giving the wider brand story more context.",
          "**Brand Storytelling:** A celebrity appearance is only one part of a campaign. The brand also needs a clear message explaining why the collaboration matters to its audience. Strategic storytelling can help connect the appearance with the brand's positioning, campaign objective, and wider communication plan.",
          "For example, a brand planning a product launch may need to coordinate the celebrity appearance, approved promotional content, media communication, and post-event storytelling. The exact scope will depend on the campaign and the services agreed upon."
        ],
        quote: "A celebrity appearance creates a burst of attention; strategic Digital PR and storytelling convert that fleeting attention into permanent digital authority, search engine credibility, and brand trust.",
        postParagraphs: [
          "Businesses interested in celebrity marketing, digital PR, or related branding services can explore Harshita Dagha's official services and contact pages to discuss their specific requirements.",
          "Important note: Celebrity availability, direct booking arrangements, and individual deliverables must be confirmed for each inquiry. Contact the team with your brief to establish which services are suitable for your event or campaign."
        ],
        internalLink: {
          text: "Read Harshita Dagha's Executive Profile & Media Credentials →",
          href: "/profile"
        }
      },
      {
        heading: "8. How to Contact Harshita Dagha for Celebrity Marketing or Booking Inquiries",
        paragraphs: [
          "If you are exploring celebrity marketing or a celebrity appearance for an event, prepare a short brief before reaching out.",
          "Sharing comprehensive preliminary details allows the team to assess talent fit, check diary schedules, and recommend appropriate next steps immediately."
        ],
        bullets: [
          "**1. Your company or brand name:** Background information about your organization and industry.",
          "**2. The event date and location:** Proposed date, city, and venue format.",
          "**3. The preferred celebrity or category of talent:** Specific names, or broader talent categories (e.g., Bollywood lead, business keynote speaker, celebrity host, tech creator).",
          "**4. The purpose and format of the appearance:** Detailed run-down of what the celebrity will do (e.g., award presentation, keynote address, fireside chat, ribbon cutting).",
          "**5. Your budget range, if available:** Broad commercial range to help filter viable talent options accurately.",
          "**6. Any PR, media, or promotional requirements:** Desired press coverage, red carpet interviews, or post-event digital assets."
        ],
        table: {
          headers: ["Channel", "Contact Detail", "Purpose"],
          rows: [
            ["Direct Email Desk", "beingblahblah@gmail.com", "Submit comprehensive event briefs, formal RFP documents, and deck attachments"],
            ["WhatsApp & Phone", "+91 87790 03799", "Rapid commercial inquiries, date availability checks, and executive coordination"],
            ["Headquarters Location", "Bandra Kurla Complex (BKC), Mumbai, Maharashtra, India", "In-person strategic consultations and Mumbai studio productions"],
            ["Official Website Hub", "https://www.harshitadagha.in", "Review official profile, service capabilities, podcasts, and past case studies"]
          ]
        },
        postParagraphs: [
          "Harshita Dagha's official contact page provides the available inquiry channels for branding, PR, speaking engagements, and podcast-related requirements. Contact the team to confirm whether your specific celebrity booking request can be supported."
        ],
        internalLink: {
          text: "Submit an Event Brief via the Official Contact Desk →",
          href: "/contact"
        }
      }
    ],
    conclusion: "Booking a celebrity for an event requires clear objectives, realistic expectations, careful coordination, and written confirmation of the engagement terms. Whether you are exploring a celebrity booking agency in India, looking to book a Bollywood celebrity for an event, or planning celebrity booking for corporate events, begin by defining what you want the appearance to achieve. Harshita Dagha works across celebrity marketing, digital PR, branding, and business storytelling. For businesses considering these services, her official website provides information about her professional background, available services, and inquiry channels. A well-planned celebrity engagement should do more than attract attention. It should fit the event, connect with the intended audience, and support a clear brand communication objective."
  },
  faqs: [
    {
      question: "How can I find a celebrity booking agency in India?",
      answer: "Start by defining your event date, location, preferred celebrity category, budget, and required appearance. Research providers that handle the type of engagement you need, then confirm their current services, availability process, and commercial terms."
    },
    {
      question: "How can I book a celebrity for an event?",
      answer: "Prepare a detailed event brief and contact a suitable booking provider. Discuss potential options, confirm availability and fees, review the proposed deliverables, and finalise the engagement in writing before making a public announcement."
    },
    {
      question: "Can I book a Bollywood celebrity for a corporate event?",
      answer: "A Bollywood celebrity may be available for a corporate event depending on their schedule, the nature of the engagement, and the agreed commercial terms. Contact a suitable provider with the event details to discuss possible options."
    },
    {
      question: "What is the cost of celebrity booking in India?",
      answer: "Celebrity booking fees vary according to the individual, appearance type, event location, duration, promotional rights, and additional requirements. Request a proposal based on your specific brief instead of relying on a general estimate."
    },
    {
      question: "What does a celebrity booking agent do?",
      answer: "Depending on the arrangement, a celebrity booking agent may help coordinate inquiries, communicate event requirements, discuss availability, and negotiate commercial terms. The exact services vary by provider."
    },
    {
      question: "What is the difference between a celebrity appearance and a brand endorsement?",
      answer: "A celebrity appearance generally involves participation in a specific event or activity. A brand endorsement may involve a broader agreement to promote a product or service, with defined deliverables, usage rights, and contract terms."
    },
    {
      question: "Can celebrity booking be combined with digital PR?",
      answer: "Yes. Depending on the agreement, a celebrity engagement may be supported by media outreach, approved interviews, event coverage, and digital content. These activities should be planned around the brand's objectives and the permissions granted."
    },
    {
      question: "How can I contact Harshita Dagha for celebrity marketing?",
      answer: "You can use Harshita Dagha's official contact page or the contact details listed on her website (Email: beingblahblah@gmail.com, WhatsApp/Phone: +91 87790 03799, BKC Mumbai) to discuss a celebrity marketing, PR, or related inquiry. Include your event date, location, requirements, and preferred engagement format so the team can assess the request."
    }
  ]
};

// =========================================================================
// 1. UPDATE src/data/articles.ts
// =========================================================================
function updateArticlesFile() {
  let content = fs.readFileSync(articlesFilePath, 'utf-8');

  // Check if article already exists
  if (content.includes('"id": "celebrity-booking-agency-india"')) {
    console.log('Article celebrity-booking-agency-india already exists in articles.ts. Skipping duplicate insertion.');
    return;
  }

  const articleString = JSON.stringify(celebrityBookingArticle, null, 2);
  const target = 'export const ARTICLES: Article[] = [\n';
  
  if (!content.includes(target)) {
    console.error('Could not find target insertion point in articles.ts');
    process.exit(1);
  }

  // Prepend formatted article to ARTICLES array
  const formattedInsertion = '  ' + articleString.replace(/\n/g, '\n  ') + ',\n';
  content = content.replace(target, target + formattedInsertion);

  fs.writeFileSync(articlesFilePath, content, 'utf-8');
  console.log('articles.ts updated successfully with celebrity-booking-agency-india article!');
}

// =========================================================================
// 2. UPDATE src/data/custom_posts.json
// =========================================================================
function updateCustomPosts() {
  let posts = [];
  try {
    if (fs.existsSync(customPostsFilePath)) {
      posts = JSON.parse(fs.readFileSync(customPostsFilePath, 'utf-8'));
    }
  } catch (e) {
    posts = [];
  }

  // Check if already in custom_posts.json
  const existingIdx = posts.findIndex((p) => p.id === 'celebrity-booking-agency-india');
  if (existingIdx !== -1) {
    posts.splice(existingIdx, 1);
  }

  // Convert to BlogPost format
  const contentBody = [
    celebrityBookingArticle.content.intro,
    ...celebrityBookingArticle.content.sections.map((s) => {
      let str = `### ${s.heading}\n\n` + s.paragraphs.join("\n\n");
      if (s.image) {
        str += `\n\n![${s.image.alt}](${s.image.src})`;
      }
      if (s.table) {
        str += `\n\n| ${s.table.headers.join(" | ")} |\n| ${s.table.headers.map(() => "---").join(" | ")} |\n` +
          s.table.rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
      }
      if (s.quote) str += `\n\n> "${s.quote}"`;
      if (s.bullets && s.bullets.length > 0) {
        str += "\n\n" + s.bullets.map((b) => `- ${b}`).join("\n");
      }
      if (s.postParagraphs && s.postParagraphs.length > 0) {
        str += "\n\n" + s.postParagraphs.join("\n\n");
      }
      return str;
    }),
    `### Executive Conclusion\n\n${celebrityBookingArticle.content.conclusion}`
  ].join("\n\n");

  const blogPostItem = {
    id: celebrityBookingArticle.id,
    type: "article",
    title: celebrityBookingArticle.title,
    metaTitle: celebrityBookingArticle.metaTitle,
    metaDescription: celebrityBookingArticle.metaDescription,
    category: celebrityBookingArticle.category,
    date: celebrityBookingArticle.date,
    readTime: celebrityBookingArticle.readTime,
    excerpt: celebrityBookingArticle.excerpt,
    coverImage: celebrityBookingArticle.image,
    author: celebrityBookingArticle.author,
    tags: celebrityBookingArticle.seoFocus.split(",").map((t) => t.trim()),
    featured: true,
    views: "38.6K views",
    content: contentBody,
    faqs: celebrityBookingArticle.faqs
  };

  posts.unshift(blogPostItem);
  fs.writeFileSync(customPostsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
  console.log('custom_posts.json updated successfully with celebrity-booking-agency-india!');
}

// =========================================================================
// 3. UPDATE next.config.ts (Redirects for All Aliases & Direct Slugs)
// =========================================================================
function updateNextConfig() {
  let content = fs.readFileSync(nextConfigFilePath, 'utf-8');

  const redirectSnippet = `      {
        source: "/celebrity-booking-agency-india",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/celebrity-booking-agency-mumbai",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/book-celebrity-for-event",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/celebrity-booking-for-events-india",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/book-bollywood-celebrity-for-event",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/celebrity-appearance-booking-india",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/celebrity-booking-for-corporate-events",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/celebrity-booking-agent-india",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/hire-celebrity-for-event",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },
      {
        source: "/celebrity-booking-contact-india",
        destination: "/blog/celebrity-booking-agency-india",
        permanent: true,
      },`;

  if (!content.includes('/celebrity-booking-agency-india')) {
    const target = 'async redirects() {\n    return [\n';
    content = content.replace(target, target + redirectSnippet + '\n');
    fs.writeFileSync(nextConfigFilePath, content, 'utf-8');
    console.log('next.config.ts redirects updated successfully for Celebrity Booking Agency India.');
  } else {
    console.log('next.config.ts already includes Celebrity Booking Agency India redirects.');
  }
}

function main() {
  updateArticlesFile();
  updateCustomPosts();
  updateNextConfig();
  console.log('Celebrity Booking Agency India publishing script finished successfully!');
}

main();
