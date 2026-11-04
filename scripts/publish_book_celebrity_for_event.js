const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
const customPostsFilePath = path.join(__dirname, '..', 'src', 'data', 'custom_posts.json');
const nextConfigFilePath = path.join(__dirname, '..', 'next.config.ts');
const servicesFilePath = path.join(__dirname, '..', 'src', 'app', 'services', 'page.tsx');

// =========================================================================
// BOOK CELEBRITY FOR EVENT ARTICLE OBJECT
// =========================================================================
const bookCelebrityForEventArticle = {
  id: "book-celebrity-for-event",
  aliases: [
    "celebrity-booking-for-events-india",
    "hire-celebrity-for-event",
    "book-bollywood-celebrity-for-event",
    "celebrity-appearance-booking-india",
    "celebrity-booking-for-corporate-events",
    "celebrity-booking-contact-india"
  ],
  title: "Book Celebrity for Event: A Complete Guide to Planning Celebrity Appearances in India",
  metaTitle: "Book Celebrity for Event in India | Harshita Dagha",
  metaDescription: "Want to book a celebrity for an event in India? Explore celebrity appearances, corporate event bookings, Bollywood celebrity options, costs, and planning tips.",
  ogTitle: "Book Celebrity for Event in India | Complete Planning Guide",
  ogDescription: "Want to book a celebrity for an event in India? Explore corporate event bookings, Bollywood celebrity options, appearance formats, fees, and planning tips.",
  category: "Celebrity Marketing & Brand PR",
  date: "November 2, 2026",
  readTime: "11 min read",
  featured: true,
  excerpt: "Want to book a celebrity for an event in India? Explore celebrity appearances, corporate event bookings, Bollywood celebrity options, costs, and planning tips.",
  image: "/images/blog/book-celebrity-for-event.webp",
  imageAlt: "Book Celebrity for Event in India - Complete guide to corporate appearances, Bollywood bookings and planning tips",
  imageTitle: "Book Celebrity for Event in India",
  imageCaption: "A complete guide to booking celebrities for corporate events, product launches, award ceremonies, and brand campaigns in India.",
  seoFocus: "Book Celebrity for Event, Celebrity Booking for Events India, Hire Celebrity for Event, Book Bollywood Celebrity for Event, Celebrity Appearance Booking India, Celebrity Booking for Corporate Events, Celebrity Booking Contact India, Harshita Dagha, Beingblahblah",
  city: "Mumbai (BKC) & Pan-India",
  author: {
    name: "Harshita Dagha",
    role: "Podcast Host | Branding & PR Strategist | Founder, Beingblahblah",
    avatar: "/images/harshita-avatar-main.jpg",
    bio: "Harshita Dagha Maisheri is a Mumbai-based branding expert, PR strategist, podcast host, Generative Engine Optimization (GEO) specialist, and celebrity marketing professional with 16+ years of experience across brand visibility, celebrity marketing, digital PR, and business storytelling at Beingblahblah."
  },
  content: {
    intro: "A celebrity appearance can make an event more engaging, create excitement among attendees, and give a brand or organisation an opportunity to strengthen its public visibility. From corporate gatherings and product launches to award ceremonies and promotional campaigns, businesses increasingly consider celebrity participation as part of their event planning and marketing strategies.\n\nHowever, arranging a celebrity appearance involves more than selecting a popular personality. Event organisers need to consider the celebrity's suitability, availability, appearance format, budget, travel requirements, and promotional expectations. If you are planning to [Book Celebrity for Event](https://www.harshitadagha.in/) appearances in India, having a clear understanding of the booking process can help you make informed decisions and avoid last-minute complications.\n\nHarshita Dagha works across celebrity marketing, branding, digital PR, and brand storytelling. These areas can be relevant to businesses exploring celebrity engagement as part of a wider promotional or brand communication strategy. This guide explains how celebrity event booking works, what to consider before making an enquiry, and how to plan an appearance that aligns with your event objectives.",
    sections: [
      {
        heading: "Why Book a Celebrity for an Event?",
        paragraphs: [
          "Celebrity appearances can serve different purposes depending on the event format and the audience. The right celebrity association may help create a memorable experience while supporting the event's communication goals.",
          "Here are some common reasons businesses and organisers consider celebrity appearances across India:"
        ],
        bullets: [
          "**1. Create More Interest Around an Event:** A recognised personality can attract attention and give attendees an additional reason to participate in an event. This can be relevant for award functions, entertainment programmes, public gatherings, and special celebrations.",
          "**2. Support Brand Awareness:** Brands may invite celebrities to participate in product launches, promotional activities, and marketing events. A suitable association can help introduce a brand or campaign to an audience that relates to the celebrity's public profile.",
          "**3. Make Product Launches More Engaging:** A celebrity appearance can be included in a product launch through activities such as unveiling a product, interacting with guests, participating in interviews, or creating agreed promotional content. The appearance should complement the product's positioning rather than feel disconnected from the brand.",
          "**4. Enhance Corporate Events:** Companies may consider celebrities, public figures, or industry personalities for conferences, annual celebrations, employee engagement programmes, and corporate award ceremonies. The selection should reflect the event's theme, professional environment, and audience expectations.",
          "**5. Create Promotional Opportunities:** Depending on the agreement, a celebrity appearance may be accompanied by media interactions, photographs, interviews, or social media content. These activities can provide additional promotional opportunities, provided the required permissions are secured."
        ]
      },
      {
        heading: "Types of Events Where You Can Book a Celebrity",
        paragraphs: [
          "Before starting the booking process, identify the type of appearance your event requires. Different event formats involve different expectations, schedules, and deliverables."
        ],
        bullets: [
          "**Celebrity Booking for Corporate Events:** Corporate events may include conferences, business meetings, annual functions, award ceremonies, employee engagement activities, and company celebrations. Businesses can explore celebrity appearances for guest interactions, award presentations, motivational sessions, event inaugurations, or other agreed activities. When planning celebrity booking for corporate events, consider the audience profile, event theme, venue, schedule, and expected role of the guest.",
          "**Celebrity Booking for Product Launches:** A celebrity can be invited to participate in a product unveiling, brand presentation, promotional activity, or media interaction. For a product launch, organisers should decide whether they require a simple appearance or a more extensive promotional association. Any use of the celebrity's name, photographs, videos, or endorsement must be covered by the appropriate agreement.",
          "**Book a Bollywood Celebrity for an Event:** Bollywood celebrities may be considered for entertainment programmes, award functions, private celebrations, brand launches, and corporate gatherings. The availability and commercial terms of each personality can vary. The final choice should be based on the event's budget, audience, theme, and the celebrity's suitability. Organisers should also verify that the person handling the booking is authorised to coordinate the proposed appearance.",
          "**Celebrity Appearance for Award Functions:** Award ceremonies often involve guest appearances, award presentations, stage interactions, and special introductions. The event schedule should clearly specify the celebrity's expected participation, arrival time, appearance duration, and stage requirements.",
          "**Celebrity Appearances for Brand Promotions:** Brands may explore celebrity collaborations for promotional campaigns, advertising activities, media events, and social media communication. These engagements can involve additional requirements, such as content approvals, campaign duration, platform-specific permissions, and usage rights."
        ],
        table: {
          headers: ["Event Category", "Recommended Celebrity Profile", "Typical Engagement Format"],
          rows: [
            ["Corporate Conferences & Summits", "Industry Icons, Global Keynote Speakers, Authors", "Keynote address, panel moderation, fireside chat"],
            ["Annual Corporate Celebrations", "Renowned Comedians, Bollywood Hosts, Musicians", "Stage anchoring, employee interaction, live performance"],
            ["Product Launches & Brand Activations", "Film Stars, Trending Digital Creators, Athletes", "Ribbon cutting, product unveiling, media soundbites"],
            ["Prestigious Award Ceremonies", "Veteran Bollywood Actors, Sports Legends, VIPs", "Stage felicitations, trophy presentations, red carpet walk"],
            ["Brand Commercial Campaigns", "Pan-India Film Celebrities, Top Digital Influencers", "TVC, social media reels, digital PR syndication"]
          ]
        }
      },
      {
        heading: "How to Book a Celebrity for an Event in India",
        paragraphs: [
          "The booking process becomes easier to manage when event organisers prepare their requirements in advance. The following steps can help you plan a celebrity appearance more effectively."
        ],
        bullets: [
          "**Step 1: Define Your Event Requirements:** Start by preparing the basic information about your event: event name and purpose, proposed date and location, venue and event format, expected audience size, preferred celebrity or talent category, required appearance duration, and approximate budget. A clear event brief helps the booking professional understand what you are looking for.",
          "**Step 2: Identify the Right Celebrity:** Choosing a celebrity should involve more than popularity. Consider whether the personality is relevant to your audience, event theme, and brand positioning. For example, a business conference may require a different type of personality from an entertainment event or a fashion launch. Evaluate the celebrity's public profile, professional background, audience relevance, and suitability for the proposed activity.",
          "**Step 3: Check Availability and Booking Fees:** Once you have shortlisted suitable options, the next step is to check availability for your proposed date. Celebrity fees may vary depending on popularity, demand, event location, appearance format, duration, and additional promotional requirements. Request a clear proposal explaining the fee structure and what is included.",
          "**Step 4: Finalise the Appearance Format:** Clearly communicate what you expect the celebrity to do during the event. Possible formats include guest appearance, event inauguration, award presentation, stage interaction, hosting or anchoring, performance, product unveiling, media interaction, or promotional content. Not every celebrity offers every format. Confirm the specific deliverables before proceeding.",
          "**Step 5: Discuss Travel and Event Arrangements:** For events outside the celebrity's regular location, travel and hospitality arrangements may need additional planning. Discuss transportation, accommodation, local transfers, security, venue access, technical requirements, and the event schedule in advance.",
          "**Step 6: Confirm the Booking in Writing:** Before making final commitments, ensure that all important details are documented. The agreement should cover confirmed appearance date and location, appearance duration and activities, total fees and payment schedule, travel and hospitality responsibilities, cancellation and postponement terms, promotional and image usage permissions, and responsibilities of the organiser and representatives. Written confirmation helps establish clear expectations for everyone involved."
        ],
        image: {
          src: "/images/blog/how-to-book-celebrity-for-event-in-india.webp",
          alt: "The 6-step blueprint on how to book a celebrity for an event in India",
          title: "6-Step Celebrity Event Booking Blueprint",
          caption: "End-to-end framework: Define brief, audit talent, verify availability, lock format, finalize travel riders, and execute legal agreements."
        }
      },
      {
        heading: "How Much Does It Cost to Book a Celebrity for an Event?",
        paragraphs: [
          "One of the most common questions event organisers ask is about celebrity booking fees. There is no fixed price for every celebrity appearance. The cost depends on the individual, the type of engagement, and the requirements of the event.",
          "Here are the major factors that influence the overall budget across the Indian market:"
        ],
        bullets: [
          "**Celebrity Popularity and Demand:** Well-known celebrities and personalities with high public visibility may have different commercial fees from emerging talent or industry professionals. Availability and demand around particular dates can also affect the proposed fee.",
          "**Type of Appearance:** A short guest appearance, stage interaction, performance, hosting assignment, and brand endorsement involve different responsibilities. A promotional campaign may require additional approvals and deliverables beyond the event appearance itself.",
          "**Event Location and Duration:** The event city, travel distance, required stay, and time commitment can affect the overall cost. An appearance involving extensive travel or multiple event activities may require additional arrangements.",
          "**Promotional and Usage Rights:** If a brand wants to use a celebrity's photographs, videos, name, or likeness in advertising, the agreement should clearly define the permitted usage. The duration, platforms, territory, and nature of the campaign may affect the commercial terms.",
          "**Additional Event Requirements:** Production arrangements, hospitality, accommodation, security, and technical support may add to the event budget. For this reason, it is better to request a customised quotation based on the complete event brief instead of relying on a general online estimate."
        ],
        image: {
          src: "/images/blog/celebrity-event-booking-cost-factors.webp",
          alt: "Key commercial factors determining celebrity appearance fees in India",
          title: "Celebrity Event Booking Cost Factors",
          caption: "Commercial evaluation: Popularity & demand, appearance format, event location & riders, and promotional rights."
        }
      },
      {
        heading: "How to Choose the Right Celebrity for Your Event",
        paragraphs: [
          "The right celebrity is not necessarily the most famous one. The best choice is the personality whose profile, audience, and participation fit your event objectives. Consider these factors before making a decision:"
        ],
        bullets: [
          "**Understand Your Target Audience:** Think about the people attending your event. Their interests, age groups, professional backgrounds, and expectations can help determine which type of celebrity would be relevant.",
          "**Match the Celebrity with Your Event Theme:** A celebrity's public image and professional background should complement the event's purpose. For example, a business-focused programme may benefit from an industry personality or experienced speaker, while an entertainment event may require a performer or film personality.",
          "**Consider Your Budget:** Shortlist options that fit your budget rather than selecting a celebrity based only on popularity. Remember to include additional costs such as travel, accommodation, production, and promotional rights.",
          "**Evaluate the Expected Deliverables:** Decide what you want to achieve from the appearance. If you require a stage interaction, interview, social media post, or promotional video, discuss these requirements before confirming the engagement.",
          "**Verify Booking Details:** Confirm the availability, authorised representatives, commercial terms, and written agreement before announcing the celebrity's participation."
        ]
      },
      {
        heading: "Celebrity Booking for Events in India: Common Mistakes to Avoid",
        paragraphs: [
          "A successful appearance depends on planning and clear communication. Avoiding common mistakes can help event organisers manage the process more efficiently:"
        ],
        bullets: [
          "**1. Starting the Process Too Late:** High-demand celebrities may have busy schedules. Begin enquiries as early as possible, especially for major events and fixed-date programmes.",
          "**2. Choosing a Celebrity Without Understanding the Audience:** A celebrity may be popular but not necessarily relevant to your event. Consider audience expectations and the purpose of the appearance.",
          "**3. Not Defining the Appearance Format:** A guest appearance and a promotional endorsement are different engagements. Clearly document the activities and deliverables you require.",
          "**4. Ignoring Additional Costs:** Travel, accommodation, hospitality, security, and production requirements should be considered when preparing the total budget.",
          "**5. Making Public Announcements Before Confirmation:** Do not announce a celebrity's participation until the relevant representatives have confirmed the arrangement and the necessary agreement is in place.",
          "**6. Overlooking Promotional Usage Rights:** Permission to attend an event does not automatically mean permission to use a celebrity's image in advertisements or future campaigns. Clarify usage rights separately."
        ]
      },
      {
        heading: "How Harshita Dagha Connects Celebrity Marketing with Brand Visibility",
        paragraphs: [
          "Celebrity engagement can be more meaningful when it is connected to a brand's larger communication objectives.",
          "Harshita Dagha works across celebrity marketing, branding, digital PR, and brand storytelling. These areas can help businesses consider how promotional collaborations fit into their overall brand positioning and visibility strategy."
        ],
        bullets: [
          "**Celebrity Marketing:** Celebrity marketing involves evaluating how a public personality's profile and audience relate to a brand, product, or campaign. The objective is to explore relevant associations rather than selecting a celebrity simply because of popularity.",
          "**Digital PR:** Digital PR focuses on online visibility through relevant media opportunities, editorial coverage, and strategic brand communication. When appropriate, it can complement a celebrity-led event or promotional campaign.",
          "**Brand Strategy and Storytelling:** A clear brand story helps businesses communicate their identity, values, and purpose. When celebrity engagement is part of a campaign, the messaging should remain consistent with the brand's positioning and target audience."
        ],
        postParagraphs: [
          "Businesses interested in these areas can explore [Harshita Dagha's services](https://www.harshitadagha.in/services) and contact her to discuss their specific requirements."
        ],
        internalLink: {
          text: "Explore Harshita Dagha's Services & Advisory →",
          href: "/services"
        }
      },
      {
        heading: "What Information Should You Share When Enquiring About Celebrity Booking?",
        paragraphs: [
          "If you are planning to hire a celebrity for an event, preparing a detailed enquiry can help the booking discussion move forward more efficiently.",
          "Share the following details when contacting a booking professional:"
        ],
        table: {
          headers: ["Information", "What to Include"],
          rows: [
            ["Event Type", "Corporate event, product launch, award function, private event, etc."],
            ["Event Date", "Confirmed date or preferred date range"],
            ["Event Location", "City, venue, and event address"],
            ["Celebrity Preference", "Preferred personality or talent category"],
            ["Appearance Format", "Guest appearance, hosting, performance, interaction, etc."],
            ["Budget", "Approximate budget range"],
            ["Audience", "Expected attendance and audience profile"],
            ["Additional Requirements", "Travel, accommodation, media interaction, social media content, etc."]
          ]
        },
        postParagraphs: [
          "The more clearly you explain your requirements, the easier it becomes to understand the scope of the proposed engagement."
        ]
      }
    ],
    conclusion: "Planning to book a celebrity for an event requires a clear understanding of your objectives, audience, budget, and expected appearance format. From selecting a suitable personality to confirming availability, fees, logistics, and promotional permissions, every stage deserves careful attention.\n\nWhether you are organising a corporate function, product launch, award ceremony, or brand promotion, a well-planned celebrity association can complement the event experience and support your wider communication goals.\n\nHarshita Dagha's work across celebrity marketing, digital PR, branding, and brand storytelling offers a relevant starting point for businesses exploring promotional collaborations. Planning a celebrity appearance or brand campaign? Visit [Harshita Dagha's Services page](https://www.harshitadagha.in/services) to explore the available services and use the official [Contact page](https://www.harshitadagha.in/contact) to discuss your requirements."
  },
  faqs: [
    {
      question: "1. How can I book a celebrity for an event in India?",
      answer: "Start by deciding your event date, location, budget, preferred celebrity, and appearance format. Contact an appropriate booking professional or authorised representative, check availability, discuss fees, and review the written agreement before confirming the booking."
    },
    {
      question: "2. How much does it cost to hire a celebrity for an event?",
      answer: "The cost depends on the celebrity's profile, popularity, event location, appearance duration, and required activities. Travel, accommodation, promotional content, and image usage rights may involve additional charges. Request a quotation based on your specific requirements."
    },
    {
      question: "3. Can I book a Bollywood celebrity for a corporate event?",
      answer: "Yes, Bollywood celebrities may be considered for corporate events, depending on their availability, the event format, and the agreed commercial terms. The organiser should confirm participation through the appropriate authorised representatives."
    },
    {
      question: "4. How early should I book a celebrity for an event?",
      answer: "It is advisable to start the process as early as possible. Popular personalities may have busy schedules, and large events often require additional coordination for travel, production, and approvals."
    },
    {
      question: "5. What details are required for celebrity booking?",
      answer: "You should provide the event date, location, type of event, preferred celebrity, appearance format, expected audience, budget, and any additional promotional requirements."
    },
    {
      question: "6. Can I book a celebrity for a product launch?",
      answer: "Yes, subject to availability and agreed terms. A celebrity may participate in a product unveiling, guest appearance, media interaction, or promotional activity. Any endorsement or advertising usage should be covered by a separate, clearly defined agreement where required."
    },
    {
      question: "7. Is celebrity appearance booking different from brand endorsement?",
      answer: "Yes. A celebrity appearance generally involves attending or participating in a particular event. A brand endorsement involves an agreement to promote or represent a product or business, often with defined campaign deliverables and usage rights."
    },
    {
      question: "8. Can a celebrity booking include social media promotion?",
      answer: "It may be possible if the celebrity agrees to the required promotional deliverables. The number of posts, platforms, content format, publishing schedule, approvals, and usage permissions should be discussed and documented separately."
    },
    {
      question: "9. What should I check before paying a celebrity booking advance?",
      answer: "Verify the identity and authority of the person handling the booking. Review the written agreement, confirmed deliverables, payment schedule, cancellation policy, and payment recipient details before transferring funds."
    },
    {
      question: "10. How can I contact Harshita Dagha for celebrity marketing requirements?",
      answer: "You can visit the official Harshita Dagha website and explore the Services page. Use the official Contact page to share your event or brand requirements and confirm the availability of the specific assistance you need."
    }
  ]
};

// =========================================================================
// 1. UPDATE src/data/articles.ts
// =========================================================================
function updateArticlesFile() {
  let content = fs.readFileSync(articlesFilePath, 'utf-8');

  // Remove "book-celebrity-for-event" from celebrity-booking-agency-india aliases if present
  content = content.replace(
    /("id":\s*"celebrity-booking-agency-india",[\s\S]*?"aliases":\s*\[)([\s\S]*?)(\])/,
    (match, p1, p2, p3) => {
      const aliases = p2
        .split('\n')
        .filter(line => !line.includes('"book-celebrity-for-event"'))
        .join('\n');
      return `${p1}${aliases}${p3}`;
    }
  );

  // Check if article already exists
  if (content.includes(`"id": "${bookCelebrityForEventArticle.id}"`)) {
    console.log('Article already exists in articles.ts, skipping insertion.');
    fs.writeFileSync(articlesFilePath, content, 'utf-8');
    return;
  }

  const marker = 'export const ARTICLES: Article[] = [';
  if (!content.includes(marker)) {
    console.error('Could not locate ARTICLES marker in articles.ts');
    process.exit(1);
  }

  const articleString = '  ' + JSON.stringify(bookCelebrityForEventArticle, null, 2).replace(/\n/g, '\n  ') + ',\n';
  content = content.replace(marker, marker + '\n' + articleString);

  fs.writeFileSync(articlesFilePath, content, 'utf-8');
  console.log('articles.ts updated successfully with Book Celebrity for Event article.');
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

  posts = posts.filter(p => p.id !== bookCelebrityForEventArticle.id);

  let mdContent = `${bookCelebrityForEventArticle.content.intro}\n\n`;
  bookCelebrityForEventArticle.content.sections.forEach(sec => {
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
    if (sec.postParagraphs) {
      sec.postParagraphs.forEach(p => {
        mdContent += `${p}\n\n`;
      });
    }
    if (sec.image) {
      mdContent += `![${sec.image.alt}](${sec.image.src})\n\n`;
    }
    if (sec.internalLink) {
      mdContent += `[${sec.internalLink.text}](${sec.internalLink.href})\n\n`;
    }
  });

  mdContent += `### Final Thoughts\n\n${bookCelebrityForEventArticle.content.conclusion}`;

  const customPostObj = {
    id: bookCelebrityForEventArticle.id,
    type: "article",
    title: bookCelebrityForEventArticle.title,
    metaTitle: bookCelebrityForEventArticle.metaTitle,
    metaDescription: bookCelebrityForEventArticle.metaDescription,
    category: bookCelebrityForEventArticle.category,
    date: bookCelebrityForEventArticle.date,
    readTime: bookCelebrityForEventArticle.readTime,
    excerpt: bookCelebrityForEventArticle.excerpt,
    coverImage: bookCelebrityForEventArticle.image,
    author: bookCelebrityForEventArticle.author,
    tags: [
      "Book Celebrity for Event",
      "Celebrity Booking for Events India",
      "Hire Celebrity for Event",
      "Book Bollywood Celebrity for Event",
      "Celebrity Appearance Booking India",
      "Celebrity Booking for Corporate Events",
      "Celebrity Booking Contact India",
      "Harshita Dagha",
      "Beingblahblah"
    ],
    featured: true,
    views: "38.5K views",
    content: mdContent,
    faqs: bookCelebrityForEventArticle.faqs
  };

  posts.unshift(customPostObj);
  fs.writeFileSync(customPostsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
  console.log('custom_posts.json updated successfully with Book Celebrity for Event.');
}

// =========================================================================
// 3. UPDATE next.config.ts (Redirects for Root Slugs)
// =========================================================================
function updateNextConfig() {
  let content = fs.readFileSync(nextConfigFilePath, 'utf-8');

  // Change old destination of /book-celebrity-for-event to /blog/book-celebrity-for-event
  content = content.replace(
    /\{\s*source:\s*"\/book-celebrity-for-event",\s*destination:\s*"\/blog\/celebrity-booking-agency-india",\s*permanent:\s*true,?\s*\}/g,
    `{\n        source: "/book-celebrity-for-event",\n        destination: "/blog/book-celebrity-for-event",\n        permanent: true,\n      },\n      {\n        source: "/book-celebrity-for-event/",\n        destination: "/blog/book-celebrity-for-event",\n        permanent: true,\n      }`
  );

  // If /book-celebrity-for-event wasn't replaced, ensure it's at the top
  if (!content.includes('destination: "/blog/book-celebrity-for-event"')) {
    const redirectSnippet = `      {
        source: "/book-celebrity-for-event",
        destination: "/blog/book-celebrity-for-event",
        permanent: true,
      },
      {
        source: "/book-celebrity-for-event/",
        destination: "/blog/book-celebrity-for-event",
        permanent: true,
      },`;
    const target = 'async redirects() {\n    return [\n';
    content = content.replace(target, target + redirectSnippet + '\n');
  }

  // Also update /celebrity-booking-for-events-india and related aliases to point to this new guide
  content = content.replace(
    /source:\s*"\/celebrity-booking-for-events-india",\s*destination:\s*"\/blog\/celebrity-booking-agency-india"/g,
    'source: "/celebrity-booking-for-events-india",\n        destination: "/blog/book-celebrity-for-event"'
  );
  content = content.replace(
    /source:\s*"\/hire-celebrity-for-event",\s*destination:\s*"\/blog\/celebrity-booking-agency-india"/g,
    'source: "/hire-celebrity-for-event",\n        destination: "/blog/book-celebrity-for-event"'
  );
  content = content.replace(
    /source:\s*"\/book-bollywood-celebrity-for-event",\s*destination:\s*"\/blog\/celebrity-booking-agency-india"/g,
    'source: "/book-bollywood-celebrity-for-event",\n        destination: "/blog/book-celebrity-for-event"'
  );

  fs.writeFileSync(nextConfigFilePath, content, 'utf-8');
  console.log('next.config.ts redirects updated successfully for book-celebrity-for-event.');
}

// =========================================================================
// 4. CROSS-LINK ON /services
// =========================================================================
function updateCrossLinks() {
  if (fs.existsSync(servicesFilePath)) {
    let sContent = fs.readFileSync(servicesFilePath, 'utf-8');
    if (!sContent.includes('/blog/book-celebrity-for-event')) {
      const callout = `            <div className="inline-flex items-center gap-2 p-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-200">
              <span className="font-semibold text-white">Event Appearances:</span>
              <a 
                href="/blog/book-celebrity-for-event"
                className="text-[#34d399] hover:text-white underline font-medium transition-colors"
              >
                Book Celebrity for Event Guide &rarr;
              </a>
            </div>\n`;
      const anchor = 'Book Celebrity for Private Event Guide &rarr;\n              </a>\n            </div>';
      if (sContent.includes(anchor)) {
        sContent = sContent.replace(anchor, anchor + '\n' + callout);
        fs.writeFileSync(servicesFilePath, sContent, 'utf-8');
        console.log('Added cross-link in services page.');
      }
    }
  }
}

function main() {
  updateArticlesFile();
  updateCustomPosts();
  updateNextConfig();
  updateCrossLinks();
  console.log('🎉 Book Celebrity for Event publishing script executed successfully!');
}

main();

