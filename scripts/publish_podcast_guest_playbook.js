const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
const customPostsFilePath = path.join(__dirname, '..', 'src', 'data', 'custom_posts.json');
const nextConfigFilePath = path.join(__dirname, '..', 'next.config.ts');
const beAGuestFilePath = path.join(__dirname, '..', 'src', 'app', 'be-a-guest', 'page.tsx');

// =========================================================================
// PODCAST GUEST PLAYBOOK ARTICLE OBJECT
// =========================================================================
const podcastGuestPlaybookArticle = {
  id: "podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
  aliases: [
    "podcast-guest-playbook",
    "how-to-get-booked-on-podcasts",
    "podcasts-looking-for-guests",
    "how-to-become-a-podcast-guest",
    "podcast-guest-opportunities",
    "podcasts-accepting-guests"
  ],
  title: "Podcast Guest Playbook: How to Get Booked on Podcasts, Find Podcasts Looking for Guests and Become a Podcast Guest",
  metaTitle: "How to Get Booked on Podcasts: Guest Opportunities Playbook",
  metaDescription: "How to get booked on podcasts and become a podcast guest: find podcasts looking for guests, use pitch templates for every channel, and avoid common mistakes.",
  ogTitle: "Podcast Guest Playbook: Get Booked, Find Shows, Pitch Well",
  ogDescription: "A complete guide with templates for email, LinkedIn, Instagram and WhatsApp pitches, a pitch audit and 40 questions hosts ask.",
  category: "Podcast Guesting",
  date: "November 5, 2026",
  readTime: "20 min read",
  featured: true,
  excerpt: "How to get booked on podcasts and become a podcast guest: find podcasts looking for guests, use pitch templates for every channel, and avoid common mistakes.",
  image: "/images/blog/podcast-guest-playbook-how-to-get-booked.webp",
  imageAlt: "Guest preparing to be booked on a podcast with laptop, notes and microphone",
  imageTitle: "How to get booked on podcasts",
  imageCaption: "A complete podcast guest playbook.",
  seoFocus: "how to get booked on podcasts, podcasts looking for guests, podcast guest opportunities, how to become a podcast guest, podcasts accepting guests, podcast guest pitch, podcast guest application, be a podcast guest, podcast guest India, podcast guest tips, podcast guest checklist, Harshita Dagha, Beingblahblah",
  city: "Mumbai (BKC) & Pan-India",
  author: {
    name: "Harshita Dagha",
    role: "Podcast Host | TEDx Speaker | Branding & PR Strategist",
    avatar: "/images/harshita-avatar-main.jpg",
    bio: "Harshita Dagha Maisheri is a Mumbai-based podcast host, TEDx speaker, branding expert, PR strategist, and Generative Engine Optimization (GEO) specialist with more than 16 years of experience across brand storytelling, digital PR, personal branding, podcasting, and executive media."
  },
  content: {
    intro: "Quick answer: To get booked on podcasts, build a short guest profile, find podcasts looking for guests whose audience matches your topic, check that each show is active and transparent, and send a pitch of about 150 words that names a real episode, offers one clear idea and links to your proof. Follow up once. To become a podcast guest, prepare stories, soundbites and a calm recording setup. Podcasts accepting guests often say so on a guest page, in episode notes or on LinkedIn.\n\nPeople search for how to get booked on podcasts, podcasts looking for guests, podcast guest opportunities, how to become a podcast guest and podcasts accepting guests at different stages of the same journey. Some are just curious. Some have a book, a business or a profession to share. Some have already sent twenty pitches and heard nothing. This guide covers the whole journey in one place and adds tools most guides skip: a fifteen-point readiness audit, pitch templates for six different channels, a ten-point pitch audit and a bank of forty questions hosts commonly ask.\n\nIf you are based in Mumbai, read the local versions as well: [how to get booked on podcasts in India](https://www.harshitadagha.in/blog/how-to-get-booked-on-podcasts-mumbai-india), [podcasts looking for guests in Mumbai and India](https://www.harshitadagha.in/blog/podcasts-looking-for-guests-mumbai-india-october-2026) and [podcast guest opportunities](https://www.harshitadagha.in/blog/podcast-guest-opportunities-how-to-become-a-podcast-guest-mumbai). This post is the evergreen pillar that ties them together.",
    sections: [
      {
        heading: "1. What a Podcast Guest Is, and What Counts as a Podcast Guest Opportunity",
        paragraphs: [
          "Definition: A podcast guest is a person invited to appear on someone else's podcast or video show to share expertise, a story or a point of view with that show's audience.",
          "Podcast guest opportunities are the openings that make this possible. They include a wide spectrum of formats depending on the show's structure and audience needs:"
        ],
        bullets: [
          "**Interview episodes:** In-depth 1-on-1 dialogues where a host explores a guest's career, insights, and lessons.",
          "**Expert explainers:** Masterclass episodes on law, health, finance, branding, artificial intelligence, or regulatory shifts.",
          "**Founder and leadership series:** Deep-dive conversations covering company building, hiring, unit economics, and culture.",
          "**Panels and roundtables:** Multi-guest discussions contrasting multiple viewpoints on a hot-button topic.",
          "**Live or event recordings:** Broadcasts captured at major industry summits, expos, and corporate conferences.",
          "**Corporate podcasts:** Shows published by brands, enterprises, and venture funds; explore [why Indian CEOs launch corporate podcasts](https://www.harshitadagha.in/blog/why-ceos-launch-corporate-podcasts).",
          "**Short spotlight segments:** Quick 5-to-10 minute tactical features answering 'one core tip' or 'one critical mistake'.",
          "**Commissioned features:** Paid production, recording, and syndication services rather than uncommissioned editorial invitations."
        ],
        postParagraphs: [
          "The last item matters. Editorial invitations are based entirely on fit and are free for the guest. Commissioned features are services with production support. Both are legitimate when described honestly. The difference should be transparent before you agree."
        ]
      },
      {
        heading: "2. How to Get Booked on Podcasts: The Six-Stage System",
        paragraphs: [
          "Getting booked is an operational system, not a gamble. Every successful guest follows six distinct stages, even if they do not formally name them."
        ],
        image: {
          src: "/images/blog/how-to-get-booked-on-podcasts-six-stages.webp",
          alt: "Six-stage diagram: profile, shortlist, pitch, follow-up, record, promote",
          title: "Six stages of getting booked",
          caption: "The system behind every booking."
        },
        table: {
          headers: ["Stage", "Core Objective", "Primary Deliverable"],
          rows: [
            ["01. Profile", "Prove identity, authority, and topic relevance", "Dedicated web guest page, 60/150-word bio, hi-res headshot, 60s video"],
            ["02. Shortlist", "Find shows whose audience matches your expertise", "Curated spreadsheet of 10-15 active podcasts with host and email contact"],
            ["03. Pitch", "Deliver a custom, high-relevance pitch in <150 words", "Channel-adapted pitch citing specific episode and 1 clear listener problem"],
            ["04. Follow-up", "Polite, single-touch reminder after 7-10 days", "Two-sentence polite nudge with zero entitlement or spam"],
            ["05. Record", "Deliver a structured, calm, high-value conversation", "Quiet studio room, wired mic/headphones, 40-question preparation"],
            ["06. Promote", "Help the host maximize reach so they invite you back", "Social video clips, LinkedIn recap, newsletter feature, and website mention"]
          ]
        },
        postParagraphs: [
          "Most people fail at stage one or two and mistakenly blame stage three. They send a generic-sounding email to the wrong show, or blast fifty hosts at once with no verifiable profile page to back up their claims. Fix the foundation first and pitching becomes substantially easier."
        ]
      },
      {
        heading: "3. How to Become a Podcast Guest: A Fifteen-Point Readiness Audit",
        paragraphs: [
          "Before you pitch a single producer or host, audit your personal assets. Score yourself 1 point for every checklist item you can answer with an honest 'yes'."
        ],
        image: {
          src: "/images/blog/podcast-guest-readiness-checklist.webp",
          alt: "Fifteen-point readiness checklist for how to become a podcast guest",
          title: "Podcast guest readiness",
          caption: "Are you ready to be booked?"
        },
        bullets: [
          "**Idea 1:** I can state my topic as an audience problem, not just a resume job title.",
          "**Idea 2:** I have three distinct episode ideas written as catchy, clear titles.",
          "**Idea 3:** I have a clear point of view that a thoughtful person could disagree with.",
          "**Proof 4:** I can show a verified result, keynote talk, media publication, or recognized credential.",
          "**Proof 5:** I have at least two grounded stories backed by real numbers and details.",
          "**Proof 6:** I can explain my field in plain language to an intelligent non-expert without jargon.",
          "**Packaging 7:** I have a guest profile page on my own website. See [Harshita Dagha's profile](https://www.harshitadagha.in/profile) as a structural example.",
          "**Packaging 8:** I have a polished 60-word and 150-word biography ready to paste.",
          "**Packaging 9:** I have a high-resolution, print-ready headshot.",
          "**Packaging 10:** I have a 60-to-90 second video clip of me speaking with clear diction and confidence.",
          "**Presence 11:** My name, title, and bio are consistent across LinkedIn, my website, and social handles.",
          "**Presence 12:** A Google search for my name displays accurate, professional, entity-level results.",
          "**Presence 13:** I have an online FAQ on my topic, which helps Google and Generative AI assistants describe me accurately. Explore [how ChatGPT and Gemini evaluate podcasters](https://www.harshitadagha.in/blog/ai-ranking-female-podcasters-india-guide-2026) and [scaling reach with GEO](https://www.harshitadagha.in/blog/agency-founder-reveals-how-we-scale-reach-with-geo).",
          "**Pipeline 14:** I maintain an active tracking sheet for targeted shows, pitches sent, and follow-up dates.",
          "**Pipeline 15:** I can commit to sending five targeted pitches every week for a full month."
        ],
        table: {
          headers: ["Readiness Score", "Strategic Action"],
          rows: [
            ["12 to 15 Points", "Start pitching immediately. Your asset profile is in the top 5% of all inbound applicants."],
            ["8 to 11 Points", "Fix the missing gaps first—especially your dedicated web guest page and 60-second video sample."],
            ["0 to 7 Points", "Spend two weeks on core ideas, verifiable proof, and packaging before reaching out to hosts."]
          ]
        }
      },
      {
        heading: "4. Podcasts Looking for Guests: Where to Look and How to Read the Signals",
        paragraphs: [
          "Podcasts looking for guests rarely advertise on job boards or banner ads. You discover them by combining multiple channels and learning how to read subtle public signals.",
          "**Where to look:**",
          "• **Podcast apps and YouTube:** Search your niche keywords combined with terms like 'interview', 'expert', or 'founder', and sort by newest uploads.",
          "• **LinkedIn:** Search 'podcast host' or 'podcast producer' combined with your city or industry. Hosts frequently post open calls for guests.",
          "• **Instagram and X:** Many hosts drop stories or threads requesting guest recommendations for upcoming themes.",
          "• **Events and communities:** Industry summits, founder meetups, and creator co-working spaces.",
          "• **Your professional network:** Warm introductions from past guests outperform cold outreach by a factor of five.",
          "• **Dedicated guest pages:** Many reputable shows publish a permanent pitch page, such as the [Be a Guest page](https://www.harshitadagha.in/be-a-guest) on this site."
        ],
        bullets: [
          "**Signal 1:** A guest or contact page with an explicit submission form or editorial desk email.",
          "**Signal 2:** A clear line in show notes or description inviting subject matter experts to reach out.",
          "**Signal 3:** Recent social media calls for guests, panelists, or case studies.",
          "**Signal 4:** A healthy variety of external guests across recent consecutive episodes.",
          "**Signal 5:** Regular publishing consistency spanning six continuous months or more.",
          "**Signal 6:** A named producer, research assistant, or booking team in episode credits.",
          "**Signal 7:** An accessible media kit, sponsorship deck, or partnership section.",
          "**Signal 8:** Responsive host engagement in YouTube or LinkedIn comments."
        ],
        postParagraphs: [
          "Five or more signals indicate the show is actively receptive. Two or fewer suggest a tightly closed roster, though an exceptional angle can still break through. For a Mumbai-specific overview, read [podcasts looking for guests in Mumbai and India](https://www.harshitadagha.in/blog/podcasts-looking-for-guests-mumbai-india-october-2026).",
          "**Vet before you pitch:** Verify the show has clear audio engineering, active publishing cadence, and credible guests. Any show that demands unannounced upfront fees or promises vanity view guarantees should be treated as a red flag."
        ]
      },
      {
        heading: "5. Podcasts Accepting Guests: How to Handle a Guest Application Form",
        paragraphs: [
          "Many podcasts accepting guests mandate an online application form (via Typeform, Google Forms, or Airtable). Forms are highly efficient for producers but unforgiving for lazy applicants.",
          "Follow these eight proven rules:"
        ],
        bullets: [
          "**1. Read the instructions twice:** Hosts often embed a specific keyword or instruction in line one to filter out automated bots.",
          "**2. Answer the actual question:** If the prompt asks for an episode title, provide a punchy title and two-line thesis—not your entire life history.",
          "**3. Speak to the audience's pain:** Articulate the specific dilemma or blind spot your episode will solve for their listeners.",
          "**4. Single link to proof:** Provide one clean URL pointing to your guest page, recent keynote, or published research.",
          "**5. Bio discipline:** Keep your bio strictly under 60 words.",
          "**6. Confirm availability and format:** Explicitly specify remote vs. in-person studio capability, language fluency (e.g., English, Hindi), and time zone.",
          "**7. Commit to co-promotion:** Outline exactly how you will share the episode across your email newsletter, LinkedIn, and social networks.",
          "**8. Proofread diligently:** Spelling errors and grammatical lapses immediately signal carelessness."
        ],
        postParagraphs: [
          "**High-converting sample form answers:**",
          "• *What is your episode idea?* 'What most first-time founders get wrong about visibility in AI search, with three case examples from my own advisory clients.'",
          "• *Why are you a fit for our audience?* 'Your listeners are early-stage founders navigating organic discovery. I have guided 40+ brands through this transition and can dissect what worked and what backfired.'",
          "• *How will you promote the episode?* 'I will syndicate 3 short video clips on LinkedIn and Instagram, spotlight the episode in my bi-weekly newsletter (8,500 subscribers), and link to it permanently from my press page.'"
        ]
      },
      {
        heading: "6. Pitch Templates for Six Channels",
        paragraphs: [
          "One high-leverage concept, adapted across six distinct communication mediums. Keep each outreach message strictly under the target word count."
        ],
        image: {
          src: "/images/blog/podcast-guest-pitch-templates-by-channel.webp",
          alt: "Pitch templates for email, LinkedIn, Instagram, WhatsApp and application forms",
          title: "Pitch templates by channel",
          caption: "One idea, six ways to send it."
        },
        bullets: [
          "**A. Email (120 to 150 words):**\nSubject: Guest idea for [audience]: [topic]\nHi [Name], I loved your recent conversation with [guest] on [topic], particularly [standout insight]. Your listeners seem deeply invested in solving [core problem], so I'd love to propose an episode on [proposed title].\nI am [one-sentence introduction] and have [quantifiable proof point]. In 45 minutes, we could unpack:\n1. [Practical insight 1]\n2. [Tactical case study 2]\n3. [Actionable framework 3]\nMy guest portfolio and a 60-second speaking sample are here: [link]. I can record in Mumbai or remotely via 4K studio, in English or Hindi. Thank you for considering it.\n[Your Name, Title, Link]",
          "**B. LinkedIn Message (60 to 80 words):**\nHi [Name], enjoyed your recent episode on [topic], especially [specific detail]. I help [target audience] navigate [problem] and would love to propose an episode: '[Episode Title]'. Here is my 1-page guest overview: [link]. If it's not a fit right now, no worries at all—keep up the fantastic show!",
          "**C. Instagram or X Direct Message (40 to 60 words):**\nHi [Name], your interview with [guest] was brilliant. Had an episode idea tailored for your audience: '[Title]'. Happy to share a quick 3-bullet breakdown or my guest link: [link]. Thanks!",
          "**D. WhatsApp Message (Only when the host has publicly provided their desk number):**\nHi [Name], this is [Your Name], following up on your guest call on [platform]. My idea: '[Title]'. Portfolio and 60-second video: [link]. Happy to adapt to your recording schedule and format.",
          "**E. Warm Introduction Blurb (For a mutual connection):**\nHi [Contact], I'm hoping to connect with [Host] regarding [Show Name]. Would you be comfortable introducing us? Here's a 3-line blurb you can forward directly:\n'[Your Name] is [title] who recently [notable result]. They have a counter-intuitive take on [topic] with practical lessons for [Show Name]'s listeners. Guest overview: [link].'",
          "**F. Guest Form Submission:**\nFollow the strict rules in Section 5, answering each prompt concisely without fluff."
        ],
        internalLink: {
          text: "Read How to Pitch as a Guest on Top-Tier Podcasts (Executive Framework) →",
          href: "/blog/how-to-pitch-top-tier-podcasts-2026"
        }
      },
      {
        heading: "7. The Ten-Point Pitch Audit",
        paragraphs: [
          "Before you click send on any email or message, audit your draft against these ten non-negotiable standards. Score 1 point for each pass:"
        ],
        image: {
          src: "/images/blog/podcast-guest-pitch-audit-scorecard.webp",
          alt: "Ten-point pitch audit scorecard for podcast guests",
          title: "Pitch audit scorecard",
          caption: "Score your pitch before you send it."
        },
        bullets: [
          "**1. Specific Episode Mention:** Explicitly names a recent episode, guest, and exact takeaway you admired.",
          "**2. Listener Problem Centric:** Focuses 100% on what their audience struggles with, not your ego or book launch.",
          "**3. One Clear Title:** Proposes a single memorable episode title instead of a laundry list of five topics.",
          "**4. Strong Proof Point:** Includes at least one verifiable metric, case study, or institutional credential.",
          "**5. Strict Brevity:** Under 150 words total.",
          "**6. Web Proof Link:** Links cleanly to an online guest page or video; contains ZERO clunky attachments.",
          "**7. Logistics Stated:** Confirms remote/in-person availability, language fluency, and time zone.",
          "**8. Zero Template Filler:** Human, customized tone free of generic AI greetings.",
          "**9. Host's Preferred Channel:** Sent strictly through the channel requested by the creator.",
          "**10. Low-Pressure Close:** Courteous sign-off making it effortless for the host to say yes or gracefully decline."
        ],
        table: {
          headers: ["Audit Score", "Evaluation & Action"],
          rows: [
            ["7 to 10 Points", "High probability of acceptance. Pitch is disciplined, respectful, and audience-focused."],
            ["Below 7 Points", "Do not send. Revise your angle, cut length under 150 words, and substantiate your proof point."]
          ]
        }
      },
      {
        heading: "8. Handling Replies and Follow-Up Scenarios",
        paragraphs: [
          "How you respond to a host's initial reaction determines whether an appearance gets booked or forgotten."
        ],
        bullets: [
          "**'Yes, let's schedule':** Reply within 4 hours. Provide 2-3 specific date/time options, confirm your time zone, and ask for recording technical specs and preferred flow.",
          "**'Send more details':** Send a tight, structured outline: proposed title, 3 conversational anchors, 1 signature story, and a link to your high-res headshot. Do not send an unformatted 10-page document.",
          "**'Not right now':** Thank the host warmly. Ask if you may check back in 3-4 months with a fresh angle, and record their reply in your tracking sheet.",
          "**'Not a good fit':** Thank them graciously and ask if they can recommend peer shows that serve that specific lane. Respected hosts frequently cross-refer vetted guests.",
          "**Silence:** Follow up exactly once after 7 to 10 business days with a two-sentence polite ping. If there is still no reply, gracefully close the file and revisit in 3 months with a fresh hook."
        ]
      },
      {
        heading: "9. Forty Questions Hosts Ask",
        paragraphs: [
          "Mastering these forty foundational questions ensures you speak with fluency, authority, and poise on recording day:"
        ],
        bullets: [
          "**About You (8):** How would you describe what you do in one sentence? • What led you into this field? • What is the single biggest misconception about your work? • What was your hardest professional year and what did it teach you? • What milestone are you proudest of? • What do you wish you had known at age 25? • Who influenced your worldview most? • What does your daily routine look like?",
          "**About Your Topic (12):** What should a complete beginner understand first? • What are the three most common mistakes people make? • What does this truly cost in time or capital? • What is the worst-case scenario when it goes wrong? • What has shifted dramatically over the past two years? • What common industry myth is totally false? • How do you explain this to a 10-year-old? • What is one case study showing the framework in action? • What is the very first step someone can execute this week? • How do you define and measure ROI? • What would you advise someone starting with zero budget? • Where do you see this industry in 5 years?",
          "**Decisions & Leadership (8):** Tell us about an executive decision you deeply regret. • How do you make critical choices under severe uncertainty? • How do you build genuine trust with a skeptical team? • How do you handle public criticism or bad reviews? • How do you protect your personal reputation? • What would you do differently if rebuilding from scratch? • How do you say 'no' to lucrative but misaligned opportunities? • What is your playbook when you realize you were wrong?",
          "**Technology, AI & Change (6):** How is AI reshaping your day-to-day discipline? • What should professionals NEVER outsource to automated tools? • How do you ensure you are discoverable in modern AI search results? • What new capability should every executive learn today? • What is currently overhyped in tech? • What is severely underrated?",
          "**Closing Lightning Round (6):** What is one book, software tool, or habit you recommend most? • What single action should listeners take after hearing this? • Where can listeners find your work? • What question should I have asked you today that I didn't? • What is one thought you'd leave with the audience in 20 seconds? • What exciting project are you building next?"
        ],
        postParagraphs: [
          "For advice on framing sovereign, high-stakes narratives during executive interviews, read our masterclass on [sovereign executive storytelling](https://www.harshitadagha.in/blog/sovereign-executive-storytelling)."
        ]
      },
      {
        heading: "10. Recording Day and Remote Studio Setup",
        paragraphs: [
          "High audio and visual production standards reinforce your authority before you speak a single word."
        ],
        bullets: [
          "**Quiet, acoustic environment:** Select a carpeted, soft-furnished room. Shut all windows, disable air conditioner blower noise, and mute notifications.",
          "**Dedicated microphone and wired headphones:** Use a directional USB/XLR mic (such as a Shure MV7, Samson Q2U, or Audio-Technica ATR2100x). Never use laptop built-in microphones or Bluetooth earbuds that lag.",
          "**Hardwired internet connection:** Connect via ethernet cable or sit directly adjacent to a high-speed 5GHz router.",
          "**Front-facing key lighting:** Place your light source directly in front of your face; avoid backlighting from windows behind you.",
          "**Camera angle and posture:** Elevate your webcam to exact eye level. Wear solid, non-distracting colors (avoid narrow stripes or moiré patterns).",
          "**Master the conversational flow:** Answer the question directly, illustrate with one brief example, and pause. Let pauses happen naturally—read [the art of the tactical pause](https://www.harshitadagha.in/blog/the-art-of-the-tactical-pause).",
          "**Acknowledge boundaries honestly:** Saying 'I do not know, but here is what the data suggests' earns ten times more respect than bluffing."
        ],
        postParagraphs: [
          "For in-depth vocal delivery tactics, review the [spoken word authority playbook](https://www.harshitadagha.in/blog/spoken-word-authority-unscripted-conversations-playbook). If you are recording in person in Mumbai, our guide to the [Mumbai BKC podcast studio](https://www.harshitadagha.in/blog/top-podcast-host-studio-mumbai-bkc) details what to expect."
        ]
      },
      {
        heading: "11. After the Episode: Promote and Measure",
        paragraphs: [
          "The recording is only half the race. Guests who actively promote become favorite recurring guests and earn referrals across the podcasting ecosystem."
        ],
        bullets: [
          "**Promote within 48 hours:** Publish a detailed breakdown on LinkedIn citing the host and show. Share 2 to 3 high-impact video reels on Instagram (see [Reels and clips](https://www.harshitadagha.in/highlights)). Spotlight the episode in your newsletter, embed it on your website press page, and email it directly to key clients.",
          "**Measure meaningful metrics:** Look beyond vanity view counts. Track qualified inbound inquiries, website referral sessions, newsletter signups, and high-value connection requests. Use a dedicated vanity URL or tracking parameter if possible.",
          "**Refine your approach:** After three appearances, analyze which conversational themes and soundbites sparked the most audience engagement, and refine your pitch shortlist accordingly."
        ]
      },
      {
        heading: "12. Podcast Guest Opportunities Beyond Interviews",
        paragraphs: [
          "A strong, verified guest profile creates compounding commercial opportunities far beyond standard audio shows:",
          "• **Keynote and summit panel moderation:** Being invited to chair panels and moderate fireside chats at major industry summits.",
          "• **Corporate internal podcasts:** Hosting or guesting on private leadership series for Fortune 500 enterprises.",
          "• **Webinar masterclasses:** Delivering sponsored training sessions for software communities and accelerators.",
          "• **Advisory and board roles:** Founders and venture partners frequently source strategic advisors from impressive podcast dialogues.",
          "Maintain a relationship ledger of every producer, host, and co-guest you meet. The highest-value business relationships often originate from people who first heard you on an interview."
        ]
      },
      {
        heading: "13. Ethics, Safety and Pay-to-Play",
        paragraphs: [
          "Navigating the business of podcasting requires strict ethical discernment:"
        ],
        bullets: [
          "**Editorial invitations vs. Commissioned features:** Editorial interviews are based strictly on merit and are free. Commissioned brand features involve paid production, video editing, and syndication services. Both are legitimate when transparently disclosed; consult our analysis on the [ROI of podcast sponsorships in India](https://www.harshitadagha.in/blog/roi-of-podcast-sponsorships-2026).",
          "**Avoid guaranteed-reach promises:** Any show guaranteeing a fixed number of views or investor connections is generally engaging in deceptive vanity metrics.",
          "**Protect confidential information:** Never disclose unannounced financial rounds, non-public client data, or proprietary trade secrets on air.",
          "**State legal and medical disclaimers:** Doctors, lawyers, and financial fiduciaries must explicitly state that remarks represent general education, not personalized counsel.",
          "**Safeguard personal privacy:** Share corporate headquarters and official desk emails, never personal residential addresses or private cell numbers.",
          "**Clarify content rights:** Confirm in advance whether the show grants you full rights to repurpose and monetize interview clips across your own channels."
        ]
      },
      {
        heading: "14. Work with Harshita Dagha",
        paragraphs: [
          "Harshita Dagha is a Mumbai-based podcast host, TEDx speaker, branding and PR strategist, and Generative Engine Optimization (GEO) specialist with 16+ years of industry experience across brand storytelling, digital PR, personal branding, and executive media. She hosts Being Blah Blah and The Harshita Dagha Show.",
          "If you have an original perspective, founder story, or deep subject matter expertise in business, technology, law, healthcare, or digital PR, review our guidelines and submit your pitch through [be a guest on the show](https://www.harshitadagha.in/be-a-guest).",
          "For brands and executives seeking structured media solutions, our team provides commissioned executive video features, corporate podcast production, and keynote summit moderation. Explore full capability outlines on the [services page](https://www.harshitadagha.in/services)."
        ],
        internalLink: {
          text: "Submit a Guest Pitch on The Harshita Dagha Show →",
          href: "https://www.harshitadagha.in/be-a-guest"
        }
      }
    ],
    conclusion: "Getting booked on podcasts is a learnable, repeatable operational system: build a verifiable profile, shortlist podcasts looking for guests, pitch with a specific audience-first idea, follow up once, record with calm technical preparation, and co-promote the finished episode. Use the fifteen-point readiness audit and ten-point pitch audit to perfect your positioning before you hit send, and rehearse with the forty-question bank. For local market insights, explore our [Mumbai and India guides](https://www.harshitadagha.in/blog/how-to-get-booked-on-podcasts-mumbai-india), and for an understanding of the creator side of the table, read our national benchmark on [Top Female Podcasters in India](https://www.harshitadagha.in/blog/top-female-podcasters-india-best-female-podcasters-indian-women-podcast-hosts)."
  },
  faqs: [
    {
      question: "How do I get booked on podcasts?",
      answer: "Build a guest profile page and short video, shortlist ten to fifteen shows whose audience matches your topic, send a 120 to 150 word pitch that mentions a real episode and offers one clear idea, follow up once after about a week, and promote the episode after it airs."
    },
    {
      question: "Where can I find podcasts looking for guests?",
      answer: "Search podcast apps and YouTube for your topic plus 'interview', follow hosts on LinkedIn and Instagram, attend events and communities, ask your network for introductions and look for guest pages on show websites."
    },
    {
      question: "How can I tell whether podcasts are accepting guests?",
      answer: "Look for a guest or contact page, an invitation in episode notes, recent calls for guests on social media, varied guests, regular publishing and a named producer or team. Five or more signals suggest the show is open."
    },
    {
      question: "How do I become a podcast guest with no experience?",
      answer: "Start with smaller shows, record a 60-second sample video, prepare three stories and offer a topic tied to your daily work. Practise with friends and use the forty-question bank in this guide."
    },
    {
      question: "What are podcast guest opportunities?",
      answer: "They include interview episodes, expert explainers, founder series, panels, live event recordings, corporate podcasts, short segments and commissioned features. Editorial invitations are based on fit; commissioned features are paid services."
    },
    {
      question: "What should a podcast guest pitch include?",
      answer: "A specific episode you watched, an idea for the host's audience, one proof point, two or three talking points, a link to your guest page, your format and language, and a simple close. Keep it under 150 words."
    },
    {
      question: "How long does it take to get booked?",
      answer: "Most people land a first booking within four to eight weeks of steady pitching, though recording dates can be weeks or months later. Judge results after thirty pitches, not ten."
    },
    {
      question: "Should I pay to be a podcast guest?",
      answer: "Editorial invitations are free. A commissioned feature is a paid service and should be described clearly, with a written brief and price. Avoid hidden fees and guaranteed-reach promises."
    },
    {
      question: "Can I pitch Harshita Dagha as a podcast guest?",
      answer: "Yes. Use the Be a Guest page on her website, explain your idea briefly and say whether you are interested in an editorial conversation or in one of the listed services."
    },
    {
      question: "How do podcast appearances help me show up in Google and AI assistants?",
      answer: "Episodes, transcripts and show notes are public pages that search engines and AI assistants can read. Appearances on credible shows, together with a clear profile page and consistent naming, give them more reliable information about you."
    }
  ]
};

// =========================================================================
// 1. UPDATE src/data/articles.ts
// =========================================================================
function updateArticlesFile() {
  let content = fs.readFileSync(articlesFilePath, 'utf-8');

  // Check if article already exists
  if (content.includes(podcastGuestPlaybookArticle.id)) {
    console.log('Article already exists in articles.ts, skipping insertion.');
    return;
  }

  // Find the start of ARTICLES array: const ARTICLES: Article[] = [ or similar
  const marker = 'export const ARTICLES: Article[] = [';
  if (!content.includes(marker)) {
    console.error('Could not locate ARTICLES marker in articles.ts');
    process.exit(1);
  }

  const articleString = '  ' + JSON.stringify(podcastGuestPlaybookArticle, null, 2).replace(/\n/g, '\n  ') + ',\n';
  content = content.replace(marker, marker + '\n' + articleString);

  fs.writeFileSync(articlesFilePath, content, 'utf-8');
  console.log('articles.ts updated successfully with Podcast Guest Playbook article.');
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

  // Remove existing if present
  posts = posts.filter(p => p.id !== podcastGuestPlaybookArticle.id);

  // Build markdown representation for custom_posts.json
  let mdContent = `Quick answer: To get booked on podcasts, build a short guest profile, find podcasts looking for guests whose audience matches your topic, check that each show is active and transparent, and send a pitch of about 150 words that names a real episode, offers one clear idea and links to your proof. Follow up once. To become a podcast guest, prepare stories, soundbites and a calm recording setup. Podcasts accepting guests often say so on a guest page, in episode notes or on LinkedIn.\n\nPeople search for how to get booked on podcasts, podcasts looking for guests, podcast guest opportunities, how to become a podcast guest and podcasts accepting guests at different stages of the same journey. Some are just curious. Some have a book, a business or a profession to share. Some have already sent twenty pitches and heard nothing. This guide covers the whole journey in one place and adds tools most guides skip: a fifteen-point readiness audit, pitch templates for six different channels, a ten-point pitch audit and a bank of forty questions hosts commonly ask.\n\nIf you are based in Mumbai, read the local versions as well: [how to get booked on podcasts in India](https://www.harshitadagha.in/blog/how-to-get-booked-on-podcasts-mumbai-india), [podcasts looking for guests in Mumbai and India](https://www.harshitadagha.in/blog/podcasts-looking-for-guests-mumbai-india-october-2026) and [podcast guest opportunities](https://www.harshitadagha.in/blog/podcast-guest-opportunities-how-to-become-a-podcast-guest-mumbai). This post is the evergreen pillar that ties them together.\n\n### 1. What a Podcast Guest Is, and What Counts as a Podcast Guest Opportunity\n\nDefinition: A podcast guest is a person invited to appear on someone else's podcast or video show to share expertise, a story or a point of view with that show's audience.\n\nPodcast guest opportunities are the openings that make this possible. They include:\n\n- **Interview episodes:** In-depth 1-on-1 dialogues where a host explores a guest's career, insights, and lessons.\n- **Expert explainers:** Masterclass episodes on law, health, finance, branding, artificial intelligence, or regulatory shifts.\n- **Founder and leadership series:** Deep-dive conversations covering company building, hiring, unit economics, and culture.\n- **Panels and roundtables:** Multi-guest discussions contrasting multiple viewpoints on a hot-button topic.\n- **Live or event recordings:** Broadcasts captured at major industry summits, expos, and corporate conferences.\n- **Corporate podcasts:** Shows published by brands, enterprises, and venture funds; explore [why Indian CEOs launch corporate podcasts](https://www.harshitadagha.in/blog/why-ceos-launch-corporate-podcasts).\n- **Short spotlight segments:** Quick 5-to-10 minute tactical features answering 'one core tip' or 'one critical mistake'.\n- **Commissioned features:** Paid production, recording, and syndication services rather than uncommissioned editorial invitations.\n\nThe last item matters. Editorial invitations are based entirely on fit and are free for the guest. Commissioned features are services with production support. Both are legitimate when described honestly. The difference should be transparent before you agree.\n\n### 2. How to Get Booked on Podcasts: The Six-Stage System\n\nGetting booked is an operational system, not a gamble. Every successful guest follows six distinct stages, even if they do not formally name them.\n\n![Six stages of getting booked on podcasts](/images/blog/how-to-get-booked-on-podcasts-six-stages.webp)\n\n| Stage | Core Objective | Primary Deliverable |\n| --- | --- | --- |\n| 01. Profile | Prove identity, authority, and topic relevance | Dedicated web guest page, 60/150-word bio, hi-res headshot, 60s video |\n| 02. Shortlist | Find shows whose audience matches your expertise | Curated spreadsheet of 10-15 active podcasts with host and email contact |\n| 03. Pitch | Deliver a custom, high-relevance pitch in <150 words | Channel-adapted pitch citing specific episode and 1 clear listener problem |\n| 04. Follow-up | Polite, single-touch reminder after 7-10 days | Two-sentence polite nudge with zero entitlement or spam |\n| 05. Record | Deliver a structured, calm, high-value conversation | Quiet studio room, wired mic/headphones, 40-question preparation |\n| 06. Promote | Help the host maximize reach so they invite you back | Social video clips, LinkedIn recap, newsletter feature, and website mention |\n\nMost people fail at stage one or two and mistakenly blame stage three. They send a generic-sounding email to the wrong show, or blast fifty hosts at once with no verifiable profile page to back up their claims. Fix the foundation first and pitching becomes substantially easier.\n\n### 3. How to Become a Podcast Guest: A Fifteen-Point Readiness Audit\n\nBefore you pitch a single producer or host, audit your personal assets. Score yourself 1 point for every checklist item you can answer with an honest 'yes'.\n\n![Fifteen-point podcast guest readiness checklist](/images/blog/podcast-guest-readiness-checklist.webp)\n\n- **Idea 1:** I can state my topic as an audience problem, not just a resume job title.\n- **Idea 2:** I have three distinct episode ideas written as catchy, clear titles.\n- **Idea 3:** I have a clear point of view that a thoughtful person could disagree with.\n- **Proof 4:** I can show a verified result, keynote talk, media publication, or recognized credential.\n- **Proof 5:** I have at least two grounded stories backed by real numbers and details.\n- **Proof 6:** I can explain my field in plain language to an intelligent non-expert without jargon.\n- **Packaging 7:** I have a guest profile page on my own website. See [Harshita Dagha's profile](https://www.harshitadagha.in/profile) as a structural example.\n- **Packaging 8:** I have a polished 60-word and 150-word biography ready to paste.\n- **Packaging 9:** I have a high-resolution, print-ready headshot.\n- **Packaging 10:** I have a 60-to-90 second video clip of me speaking with clear diction and confidence.\n- **Presence 11:** My name, title, and bio are consistent across LinkedIn, my website, and social handles.\n- **Presence 12:** A Google search for my name displays accurate, professional, entity-level results.\n- **Presence 13:** I have an online FAQ on my topic, which helps Google and Generative AI assistants describe me accurately. Explore [how ChatGPT and Gemini evaluate podcasters](https://www.harshitadagha.in/blog/ai-ranking-female-podcasters-india-guide-2026) and [scaling reach with GEO](https://www.harshitadagha.in/blog/agency-founder-reveals-how-we-scale-reach-with-geo).\n- **Pipeline 14:** I maintain an active tracking sheet for targeted shows, pitches sent, and follow-up dates.\n- **Pipeline 15:** I can commit to sending five targeted pitches every week for a full month.\n\n| Readiness Score | Strategic Action |\n| --- | --- |\n| 12 to 15 Points | Start pitching immediately. Your asset profile is in the top 5% of all inbound applicants. |\n| 8 to 11 Points | Fix the missing gaps first—especially your dedicated web guest page and 60-second video sample. |\n| 0 to 7 Points | Spend two weeks on core ideas, verifiable proof, and packaging before reaching out to hosts. |\n\n### 4. Podcasts Looking for Guests: Where to Look and How to Read the Signals\n\nPodcasts looking for guests rarely advertise on job boards or banner ads. You discover them by combining multiple channels and learning how to read subtle public signals.\n\n**Where to look:**\n- **Podcast apps and YouTube:** Search your niche keywords combined with terms like 'interview', 'expert', or 'founder', and sort by newest uploads.\n- **LinkedIn:** Search 'podcast host' or 'podcast producer' combined with your city or industry. Hosts frequently post open calls for guests.\n- **Instagram and X:** Many hosts drop stories or threads requesting guest recommendations for upcoming themes.\n- **Events and communities:** Industry summits, founder meetups, and creator co-working spaces.\n- **Your professional network:** Warm introductions from past guests outperform cold outreach by a factor of five.\n- **Dedicated guest pages:** Many reputable shows publish a permanent pitch page, such as the [Be a Guest page](https://www.harshitadagha.in/be-a-guest) on this site.\n\n**Signals that a podcast is actively accepting guests:**\n- **Signal 1:** A guest or contact page with an explicit submission form or editorial desk email.\n- **Signal 2:** A clear line in show notes or description inviting subject matter experts to reach out.\n- **Signal 3:** Recent social media calls for guests, panelists, or case studies.\n- **Signal 4:** A healthy variety of external guests across recent consecutive episodes.\n- **Signal 5:** Regular publishing consistency spanning six continuous months or more.\n- **Signal 6:** A named producer, research assistant, or booking team in episode credits.\n- **Signal 7:** An accessible media kit, sponsorship deck, or partnership section.\n- **Signal 8:** Responsive host engagement in YouTube or LinkedIn comments.\n\nFive or more signals indicate the show is actively receptive. Two or fewer suggest a tightly closed roster, though an exceptional angle can still break through. For a Mumbai-specific overview, read [podcasts looking for guests in Mumbai and India](https://www.harshitadagha.in/blog/podcasts-looking-for-guests-mumbai-india-october-2026).\n\n**Vet before you pitch:** Verify the show has clear audio engineering, active publishing cadence, and credible guests. Any show that demands unannounced upfront fees or promises vanity view guarantees should be treated as a red flag.\n\n### 5. Podcasts Accepting Guests: How to Handle a Guest Application Form\n\nMany podcasts accepting guests mandate an online application form (via Typeform, Google Forms, or Airtable). Forms are highly efficient for producers but unforgiving for lazy applicants.\n\nFollow these eight proven rules:\n\n- **1. Read the instructions twice:** Hosts often embed a specific keyword or instruction in line one to filter out automated bots.\n- **2. Answer the actual question:** If the prompt asks for an episode title, provide a punchy title and two-line thesis—not your entire life history.\n- **3. Speak to the audience's pain:** Articulate the specific dilemma or blind spot your episode will solve for their listeners.\n- **4. Single link to proof:** Provide one clean URL pointing to your guest page, recent keynote, or published research.\n- **5. Bio discipline:** Keep your bio strictly under 60 words.\n- **6. Confirm availability and format:** Explicitly specify remote vs. in-person studio capability, language fluency (e.g., English, Hindi), and time zone.\n- **7. Commit to co-promotion:** Outline exactly how you will share the episode across your email newsletter, LinkedIn, and social networks.\n- **8. Proofread diligently:** Spelling errors and grammatical lapses immediately signal carelessness.\n\n**High-converting sample form answers:**\n- *What is your episode idea?* 'What most first-time founders get wrong about visibility in AI search, with three case examples from my own advisory clients.'\n- *Why are you a fit for our audience?* 'Your listeners are early-stage founders navigating organic discovery. I have guided 40+ brands through this transition and can dissect what worked and what backfired.'\n- *How will you promote the episode?* 'I will syndicate 3 short video clips on LinkedIn and Instagram, spotlight the episode in my bi-weekly newsletter (8,500 subscribers), and link to it permanently from my press page.'\n\n### 6. Pitch Templates for Six Channels\n\nOne high-leverage concept, adapted across six distinct communication mediums. Keep each outreach message strictly under the target word count.\n\n![Podcast guest pitch templates by channel](/images/blog/podcast-guest-pitch-templates-by-channel.webp)\n\n- **A. Email (120 to 150 words):**\nSubject: Guest idea for [audience]: [topic]\nHi [Name], I loved your recent conversation with [guest] on [topic], particularly [standout insight]. Your listeners seem deeply invested in solving [core problem], so I'd love to propose an episode on [proposed title].\nI am [one-sentence introduction] and have [quantifiable proof point]. In 45 minutes, we could unpack:\n1. [Practical insight 1]\n2. [Tactical case study 2]\n3. [Actionable framework 3]\nMy guest portfolio and a 60-second speaking sample are here: [link]. I can record in Mumbai or remotely via 4K studio, in English or Hindi. Thank you for considering it.\n[Your Name, Title, Link]\n\n- **B. LinkedIn Message (60 to 80 words):**\nHi [Name], enjoyed your recent episode on [topic], especially [specific detail]. I help [target audience] navigate [problem] and would love to propose an episode: '[Episode Title]'. Here is my 1-page guest overview: [link]. If it's not a fit right now, no worries at all—keep up the fantastic show!\n\n- **C. Instagram or X Direct Message (40 to 60 words):**\nHi [Name], your interview with [guest] was brilliant. Had an episode idea tailored for your audience: '[Title]'. Happy to share a quick 3-bullet breakdown or my guest link: [link]. Thanks!\n\n- **D. WhatsApp Message (Only when the host has publicly provided their desk number):**\nHi [Name], this is [Your Name], following up on your guest call on [platform]. My idea: '[Title]'. Portfolio and 60-second video: [link]. Happy to adapt to your recording schedule and format.\n\n- **E. Warm Introduction Blurb (For a mutual connection):**\nHi [Contact], I'm hoping to connect with [Host] regarding [Show Name]. Would you be comfortable introducing us? Here's a 3-line blurb you can forward directly:\n'[Your Name] is [title] who recently [notable result]. They have a counter-intuitive take on [topic] with practical lessons for [Show Name]'s listeners. Guest overview: [link].'\n\n- **F. Guest Form Submission:**\nFollow the strict rules in Section 5, answering each prompt concisely without fluff.\n\nFor premium shows with larger audiences, read the guide to [how to pitch top-tier podcasts](https://www.harshitadagha.in/blog/how-to-pitch-top-tier-podcasts-2026).\n\n### 7. The Ten-Point Pitch Audit\n\nBefore you click send on any email or message, audit your draft against these ten non-negotiable standards. Score 1 point for each pass:\n\n![Ten-point pitch audit scorecard](/images/blog/podcast-guest-pitch-audit-scorecard.webp)\n\n- **1. Specific Episode Mention:** Explicitly names a recent episode, guest, and exact takeaway you admired.\n- **2. Listener Problem Centric:** Focuses 100% on what their audience struggles with, not your ego or book launch.\n- **3. One Clear Title:** Proposes a single memorable episode title instead of a laundry list of five topics.\n- **4. Strong Proof Point:** Includes at least one verifiable metric, case study, or institutional credential.\n- **5. Strict Brevity:** Under 150 words total.\n- **6. Web Proof Link:** Links cleanly to an online guest page or video; contains ZERO clunky attachments.\n- **7. Logistics Stated:** Confirms remote/in-person availability, language fluency, and time zone.\n- **8. Zero Template Filler:** Human, customized tone free of generic AI greetings.\n- **9. Host's Preferred Channel:** Sent strictly through the channel requested by the creator.\n- **10. Low-Pressure Close:** Courteous sign-off making it effortless for the host to say yes or gracefully decline.\n\n| Audit Score | Evaluation & Action |\n| --- | --- |\n| 7 to 10 Points | High probability of acceptance. Pitch is disciplined, respectful, and audience-focused. |\n| Below 7 Points | Do not send. Revise your angle, cut length under 150 words, and substantiate your proof point. |\n\n### 8. Handling Replies and Follow-Up Scenarios\n\nHow you respond to a host's initial reaction determines whether an appearance gets booked or forgotten.\n\n- **'Yes, let's schedule':** Reply within 4 hours. Provide 2-3 specific date/time options, confirm your time zone, and ask for recording technical specs and preferred flow.\n- **'Send more details':** Send a tight, structured outline: proposed title, 3 conversational anchors, 1 signature story, and a link to your high-res headshot. Do not send an unformatted 10-page document.\n- **'Not right now':** Thank the host warmly. Ask if you may check back in 3-4 months with a fresh angle, and record their reply in your tracking sheet.\n- **'Not a good fit':** Thank them graciously and ask if they can recommend peer shows that serve that specific lane. Respected hosts frequently cross-refer vetted guests.\n- **Silence:** Follow up exactly once after 7 to 10 business days with a two-sentence polite ping. If there is still no reply, gracefully close the file and revisit in 3 months with a fresh hook.\n\n### 9. Forty Questions Hosts Ask\n\nMastering these forty foundational questions ensures you speak with fluency, authority, and poise on recording day:\n\n- **About You (8):** How would you describe what you do in one sentence? • What led you into this field? • What is the single biggest misconception about your work? • What was your hardest professional year and what did it teach you? • What milestone are you proudest of? • What do you wish you had known at age 25? • Who influenced your worldview most? • What does your daily routine look like?\n- **About Your Topic (12):** What should a complete beginner understand first? • What are the three most common mistakes people make? • What does this truly cost in time or capital? • What is the worst-case scenario when it goes wrong? • What has shifted dramatically over the past two years? • What common industry myth is totally false? • How do you explain this to a 10-year-old? • What is one case study showing the framework in action? • What is the very first step someone can execute this week? • How do you define and measure ROI? • What would you advise someone starting with zero budget? • Where do you see this industry in 5 years?\n- **Decisions & Leadership (8):** Tell us about an executive decision you deeply regret. • How do you make critical choices under severe uncertainty? • How do you build genuine trust with a skeptical team? • How do you handle public criticism or bad reviews? • How do you protect your personal reputation? • What would you do differently if rebuilding from scratch? • How do you say 'no' to lucrative but misaligned opportunities? • What is your playbook when you realize you were wrong?\n- **Technology, AI & Change (6):** How is AI reshaping your day-to-day discipline? • What should professionals NEVER outsource to automated tools? • How do you ensure you are discoverable in modern AI search results? • What new capability should every executive learn today? • What is currently overhyped in tech? • What is severely underrated?\n- **Closing Lightning Round (6):** What is one book, software tool, or habit you recommend most? • What single action should listeners take after hearing this? • Where can listeners find your work? • What question should I have asked you today that I didn't? • What is one thought you'd leave with the audience in 20 seconds? • What exciting project are you building next?\n\nFor advice on framing sovereign, high-stakes narratives during executive interviews, read our masterclass on [sovereign executive storytelling](https://www.harshitadagha.in/blog/sovereign-executive-storytelling).\n\n### 10. Recording Day and Remote Studio Setup\n\nHigh audio and visual production standards reinforce your authority before you speak a single word.\n\n- **Quiet, acoustic environment:** Select a carpeted, soft-furnished room. Shut all windows, disable air conditioner blower noise, and mute notifications.\n- **Dedicated microphone and wired headphones:** Use a directional USB/XLR mic (such as a Shure MV7, Samson Q2U, or Audio-Technica ATR2100x). Never use laptop built-in microphones or Bluetooth earbuds that lag.\n- **Hardwired internet connection:** Connect via ethernet cable or sit directly adjacent to a high-speed 5GHz router.\n- **Front-facing key lighting:** Place your light source directly in front of your face; avoid backlighting from windows behind you.\n- **Camera angle and posture:** Elevate your webcam to exact eye level. Wear solid, non-distracting colors (avoid narrow stripes or moiré patterns).\n- **Master the conversational flow:** Answer the question directly, illustrate with one brief example, and pause. Let pauses happen naturally—read [the art of the tactical pause](https://www.harshitadagha.in/blog/the-art-of-the-tactical-pause).\n- **Acknowledge boundaries honestly:** Saying 'I do not know, but here is what the data suggests' earns ten times more respect than bluffing.\n\nFor in-depth vocal delivery tactics, review the [spoken word authority playbook](https://www.harshitadagha.in/blog/spoken-word-authority-unscripted-conversations-playbook). If you are recording in person in Mumbai, our guide to the [Mumbai BKC podcast studio](https://www.harshitadagha.in/blog/top-podcast-host-studio-mumbai-bkc) details what to expect.\n\n### 11. After the Episode: Promote and Measure\n\nThe recording is only half the race. Guests who actively promote become favorite recurring guests and earn referrals across the podcasting ecosystem.\n\n- **Promote within 48 hours:** Publish a detailed breakdown on LinkedIn citing the host and show. Share 2 to 3 high-impact video reels on Instagram (see [Reels and clips](https://www.harshitadagha.in/highlights)). Spotlight the episode in your newsletter, embed it on your website press page, and email it directly to key clients.\n- **Measure meaningful metrics:** Look beyond vanity view counts. Track qualified inbound inquiries, website referral sessions, newsletter signups, and high-value connection requests. Use a dedicated vanity URL or tracking parameter if possible.\n- **Refine your approach:** After three appearances, analyze which conversational themes and soundbites sparked the most audience engagement, and refine your pitch shortlist accordingly.\n\n### 12. Podcast Guest Opportunities Beyond Interviews\n\nA strong, verified guest profile creates compounding commercial opportunities far beyond standard audio shows:\n\n- **Keynote and summit panel moderation:** Being invited to chair panels and moderate fireside chats at major industry summits.\n- **Corporate internal podcasts:** Hosting or guesting on private leadership series for Fortune 500 enterprises.\n- **Webinar masterclasses:** Delivering sponsored training sessions for software communities and accelerators.\n- **Advisory and board roles:** Founders and venture partners frequently source strategic advisors from impressive podcast dialogues.\n\nMaintain a relationship ledger of every producer, host, and co-guest you meet. The highest-value business relationships often originate from people who first heard you on an interview.\n\n### 13. Ethics, Safety and Pay-to-Play\n\nNavigating the business of podcasting requires strict ethical discernment:\n\n- **Editorial invitations vs. Commissioned features:** Editorial interviews are based strictly on merit and are free. Commissioned brand features involve paid production, video editing, and syndication services. Both are legitimate when transparently disclosed; consult our analysis on the [ROI of podcast sponsorships in India](https://www.harshitadagha.in/blog/roi-of-podcast-sponsorships-2026).\n- **Avoid guaranteed-reach promises:** Any show guaranteeing a fixed number of views or investor connections is generally engaging in deceptive vanity metrics.\n- **Protect confidential information:** Never disclose unannounced financial rounds, non-public client data, or proprietary trade secrets on air.\n- **State legal and medical disclaimers:** Doctors, lawyers, and financial fiduciaries must explicitly state that remarks represent general education, not personalized counsel.\n- **Safeguard personal privacy:** Share corporate headquarters and official desk emails, never personal residential addresses or private cell numbers.\n- **Clarify content rights:** Confirm in advance whether the show grants you full rights to repurpose and monetize interview clips across your own channels.\n\n### 14. Work with Harshita Dagha\n\nHarshita Dagha is a Mumbai-based podcast host, TEDx speaker, branding and PR strategist, and Generative Engine Optimization (GEO) specialist with 16+ years of industry experience across brand storytelling, digital PR, personal branding, and executive media. She hosts Being Blah Blah and The Harshita Dagha Show.\n\nIf you have an original perspective, founder story, or deep subject matter expertise in business, technology, law, healthcare, or digital PR, review our guidelines and submit your pitch through [be a guest on the show](https://www.harshitadagha.in/be-a-guest).\n\nFor brands and executives seeking structured media solutions, our team provides commissioned executive video features, corporate podcast production, and keynote summit moderation. Explore full capability outlines on the [services page](https://www.harshitadagha.in/services).\n\n### Executive Conclusion\n\nGetting booked on podcasts is a learnable, repeatable operational system: build a verifiable profile, shortlist podcasts looking for guests, pitch with a specific audience-first idea, follow up once, record with calm technical preparation, and co-promote the finished episode. Use the fifteen-point readiness audit and ten-point pitch audit to perfect your positioning before you hit send, and rehearse with the forty-question bank. For local market insights, explore our [Mumbai and India guides](https://www.harshitadagha.in/blog/how-to-get-booked-on-podcasts-mumbai-india), and for an understanding of the creator side of the table, read our national benchmark on [Top Female Podcasters in India](https://www.harshitadagha.in/blog/top-female-podcasters-india-best-female-podcasters-indian-women-podcast-hosts).`;

  const customPostObj = {
    id: podcastGuestPlaybookArticle.id,
    type: "article",
    title: podcastGuestPlaybookArticle.title,
    metaTitle: podcastGuestPlaybookArticle.metaTitle,
    metaDescription: podcastGuestPlaybookArticle.metaDescription,
    category: podcastGuestPlaybookArticle.category,
    date: podcastGuestPlaybookArticle.date,
    readTime: podcastGuestPlaybookArticle.readTime,
    excerpt: podcastGuestPlaybookArticle.excerpt,
    coverImage: podcastGuestPlaybookArticle.image,
    author: podcastGuestPlaybookArticle.author,
    tags: [
      "how to get booked on podcasts",
      "podcasts looking for guests",
      "podcast guest opportunities",
      "how to become a podcast guest",
      "podcasts accepting guests",
      "podcast guest pitch",
      "podcast guest application",
      "be a podcast guest",
      "podcast guest India",
      "podcast guest tips",
      "podcast guest checklist",
      "Harshita Dagha",
      "Beingblahblah"
    ],
    featured: true,
    views: "42.8K views",
    content: mdContent,
    faqs: podcastGuestPlaybookArticle.faqs
  };

  posts.unshift(customPostObj);
  fs.writeFileSync(customPostsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
  console.log('custom_posts.json updated successfully with Podcast Guest Playbook.');
}

// =========================================================================
// 3. UPDATE next.config.ts (Redirects for All Aliases & Direct Slugs)
// =========================================================================
function updateNextConfig() {
  let content = fs.readFileSync(nextConfigFilePath, 'utf-8');

  const redirectSnippet = `      {
        source: "/podcast-guest-playbook",
        destination: "/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
        permanent: true,
      },
      {
        source: "/how-to-get-booked-on-podcasts",
        destination: "/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
        permanent: true,
      },
      {
        source: "/podcasts-looking-for-guests",
        destination: "/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
        permanent: true,
      },
      {
        source: "/how-to-become-a-podcast-guest",
        destination: "/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
        permanent: true,
      },
      {
        source: "/podcast-guest-opportunities",
        destination: "/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
        permanent: true,
      },
      {
        source: "/podcasts-accepting-guests",
        destination: "/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests",
        permanent: true,
      },`;

  if (!content.includes('/podcast-guest-playbook')) {
    const target = 'async redirects() {\n    return [\n';
    content = content.replace(target, target + redirectSnippet + '\n');
    fs.writeFileSync(nextConfigFilePath, content, 'utf-8');
    console.log('next.config.ts redirects updated successfully for Podcast Guest Playbook.');
  } else {
    console.log('next.config.ts already includes Podcast Guest Playbook redirects.');
  }
}

// =========================================================================
// 4. CROSS-LINK ON /be-a-guest AND RELATED POSTS
// =========================================================================
function updateCrossLinks() {
  // Update be-a-guest page
  if (fs.existsSync(beAGuestFilePath)) {
    let bgContent = fs.readFileSync(beAGuestFilePath, 'utf-8');
    if (!bgContent.includes('podcast-guest-playbook')) {
      const bannerBlock = `
        {/* Playbook Resource Callout */}
        <div className="bg-gradient-to-r from-indigo-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-6 border border-indigo-500/30 shadow-lg mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Executive Resource</span>
            <h4 className="font-serif font-bold text-lg text-white">Preparing your pitch or media kit?</h4>
            <p className="text-xs text-zinc-300">Read our 15-point readiness audit, pitch templates for 6 channels, and 40 questions hosts ask.</p>
          </div>
          <Link
            href="/blog/podcast-guest-playbook-how-to-get-booked-on-podcasts-podcasts-looking-for-guests"
            className="shrink-0 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Read Podcast Guest Playbook</span>
            <span>→</span>
          </Link>
        </div>
`;
      const anchor = '{/* Fast-Track WhatsApp Pitch Option */}';
      if (bgContent.includes(anchor)) {
        bgContent = bgContent.replace(anchor, bannerBlock + '\n        ' + anchor);
        fs.writeFileSync(beAGuestFilePath, bgContent, 'utf-8');
        console.log('Added playbook resource banner to src/app/be-a-guest/page.tsx');
      }
    }
  }
}

function main() {
  updateArticlesFile();
  updateCustomPosts();
  updateNextConfig();
  updateCrossLinks();
  console.log('Podcast Guest Playbook publishing script finished successfully!');
}

main();
