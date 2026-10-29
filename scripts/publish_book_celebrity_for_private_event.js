const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
const customPostsFilePath = path.join(__dirname, '..', 'src', 'data', 'custom_posts.json');
const nextConfigFilePath = path.join(__dirname, '..', 'next.config.ts');
const servicesFilePath = path.join(__dirname, '..', 'src', 'app', 'services', 'page.tsx');

// =========================================================================
// BOOK CELEBRITY FOR PRIVATE EVENT ARTICLE OBJECT
// =========================================================================
const privateEventArticle = {
  id: "book-celebrity-for-private-event",
  aliases: [
    "book-celebrity-for-private-events",
    "celebrity-booking-for-private-event",
    "book-celebrity-for-wedding",
    "celebrity-for-birthday-party-india"
  ],
  title: "Book Celebrity for Private Event: Make Your Celebration Unforgettable",
  metaTitle: "Book Celebrity for Private Event in India | Harshita Dagha",
  metaDescription: "Book Celebrity for Private Event in India with professional booking guidance for private parties, weddings, birthdays and exclusive celebrations.",
  ogTitle: "Book Celebrity for Private Event in India | Harshita Dagha",
  ogDescription: "Book Celebrity for Private Event in India with professional booking guidance for private parties, weddings, birthdays and exclusive celebrations.",
  category: "Celebrity Marketing & Brand PR",
  date: "October 29, 2026",
  readTime: "9 min read",
  featured: true,
  excerpt: "Book Celebrity for Private Event in India with professional booking guidance for private parties, weddings, birthdays and exclusive celebrations.",
  image: "/images/blog/book-celebrity-for-private-event.webp",
  imageAlt: "Book Celebrity for Private Event in India for weddings, birthdays, private parties and exclusive celebrations",
  imageTitle: "Book Celebrity for Private Event in India",
  imageCaption: "Celebrity booking guidance for weddings, birthdays, private parties and exclusive celebrations in India.",
  seoFocus: "Book Celebrity for Private Event, Celebrity Booking for Private Event India, Book Celebrity for Wedding, Celebrity for Birthday Party India, Harshita Dagha, Beingblahblah",
  city: "Mumbai (BKC) & Pan-India",
  author: {
    name: "Harshita Dagha",
    role: "Podcast Host | Branding & PR Strategist | Founder, Beingblahblah",
    avatar: "/images/harshita-avatar-main.jpg",
    bio: "Harshita Dagha Maisheri is a Mumbai-based branding expert, PR strategist, podcast host, Generative Engine Optimization (GEO) specialist, and celebrity marketing professional with 16+ years of experience across brand visibility, celebrity marketing, digital PR, and business storytelling at Beingblahblah."
  },
  content: {
    intro: "Planning an extraordinary celebration requires thoughtful arrangements, memorable experiences, and entertainment that reflects the occasion. If you want to [Book Celebrity for Private Event](https://www.harshitadagha.in/) in India, a celebrity appearance can bring excitement, exclusivity, and a distinctive atmosphere to your special gathering. Whether you are organising a birthday celebration, wedding reception, anniversary party, family function, or luxury private gathering, inviting a celebrity can make the experience more memorable for your guests.\n\nA private event is an opportunity to bring family, friends, colleagues, and special guests together in a carefully planned setting. Adding a celebrity appearance can introduce a unique entertainment element and create moments that guests will remember long after the celebration ends. From a welcoming appearance to an interactive session or a special performance, the format can be tailored to the purpose of the occasion and the celebrity's availability.\n\nHowever, successful celebrity booking involves more than selecting a familiar face. You need to consider your event theme, guest profile, budget, location, schedule, and expectations from the appearance. Professional coordination helps you understand these requirements, explore suitable possibilities, and establish clear arrangements before confirming the booking.\n\nHarshita Dagha works across celebrity marketing, branding, digital public relations, and business storytelling through Beingblahblah. With more than 16 years of experience in branding and digital marketing, her professional background provides relevant context for businesses and organisers exploring celebrity-related collaborations. Visit [Harshita Dagha's official website](https://www.harshitadagha.in/) to learn more about her services and discuss your specific inquiry.",
    sections: [
      {
        heading: "Why Book a Celebrity for a Private Event?",
        paragraphs: [
          "Choosing to book a celebrity for a private event can give a celebration a distinctive character. A celebrity guest may create excitement among attendees, provide opportunities for memorable photographs, and contribute to the overall entertainment experience. The impact depends on the celebrity, the event format, and how well the appearance fits the occasion.",
          "For weddings and engagement celebrations, a celebrity appearance can add a special touch to the festivities. For milestone birthdays and anniversaries, an invited celebrity may participate in a planned greeting, presentation, or entertainment segment. The precise involvement should be discussed in advance because appearances, performances, meet-and-greet opportunities, and personal interactions are different arrangements.",
          "Private parties can also benefit from celebrity appearances when the entertainment is selected according to the audience. A music personality may suit an entertainment-focused gathering, while an actor, television personality, sports figure, or recognised public speaker may be appropriate for a different type of celebration. The objective is to identify an appearance that complements the occasion rather than choosing someone solely because of popularity.",
          "Before proceeding, establish what you want your guests to experience. You might prioritise entertainment, a special welcome, a celebratory moment, or a limited interaction with the invited personality. Clear expectations make it easier to communicate requirements, evaluate proposals, and understand which services are available within your budget."
        ],
        bullets: [
          "**Distinctive Experience:** Infusing your personal celebration with exclusivity, memorable moments, and elevated entertainment.",
          "**Celebratory Milestones:** Adding headline glamour to weddings, engagement sangeets, milestone birthdays, and wedding anniversaries.",
          "**Audience-Aligned Talent:** Selecting musicians, Bollywood actors, sports icons, or keynote personalities based on guest demographics.",
          "**Clear Engagement Scopes:** Distinguishing clearly between brief appearances, stage performances, and personal meet-and-greets."
        ]
      },
      {
        heading: "Types of Private Events for Celebrity Booking",
        paragraphs: [
          "When you book celebrity for private event arrangements, the first consideration should be the nature of your celebration. Weddings, receptions, engagement ceremonies, and anniversary parties often involve a carefully planned schedule, making it important to coordinate the appearance with other activities. The celebrity's participation should fit naturally into the event programme.",
          "Birthday parties and milestone celebrations offer another opportunity to explore celebrity appearances. Whether the occasion marks a significant birthday or a family achievement, an invited personality may add an exclusive entertainment element. Depending on the agreed arrangement, the appearance might involve a greeting, a stage moment, photographs, or another specifically confirmed activity.",
          "Luxury private parties and exclusive social gatherings may require additional planning around guest management, privacy, venue access, and security. Organisers should discuss whether photography is permitted, how the celebrity will arrive, who will coordinate with their representatives, and what arrangements are required to maintain a comfortable environment for everyone attending.",
          "Family celebrations, reunion gatherings, and special achievement parties can also be considered for celebrity booking. Every event has different priorities, so the booking request should explain the occasion, approximate guest count, location, date, and desired appearance format. These details help determine whether the proposed engagement is practical and suitable."
        ],
        table: {
          headers: ["Private Event Type", "Ideal Celebrity Category", "Typical Appearance Format"],
          rows: [
            ["Weddings & Receptions", "Bollywood Actors, Top Singers, Popular Anchors", "Grand stage entry, felicitation, live musical performance"],
            ["Milestone Birthdays", "Music Artists, Standup Comedians, TV Stars", "Special birthday greeting, interactive set, cake cutting"],
            ["Anniversary Celebrations", "Renowned Vocalists, Ghazal / Sufi Artists, Public Icons", "Intimate performance, personal congratulations, photo session"],
            ["Luxury Social Parties", "DJs, Digital Creators, Fashion & Film Icons", "VIP presence, DJ sets, curated guest interactions"]
          ]
        }
      },
      {
        heading: "How to Book a Celebrity for a Private Event in India?",
        paragraphs: [
          "The process begins with a clear event brief. Include the date, city, venue, event type, expected attendance, and approximate budget. If you have a preferred celebrity, mention the name; otherwise, describe the entertainment category or personality you would like to invite. Providing this information at the beginning can make initial discussions more focused.",
          "The next step is to enquire about availability and commercial terms. Celebrity fees vary according to public profile, demand, travel requirements, appearance duration, and the nature of the engagement. Request a proposal that explains the expected participation, professional fees, travel and accommodation arrangements, applicable taxes, and any additional production or security requirements.",
          "Once the proposed arrangement meets your expectations, review the agreement carefully. The written terms should specify the date, timing, venue, appearance duration, payment schedule, cancellation provisions, rescheduling conditions, and responsibilities of each party. If photographs, recordings, or promotional materials are planned, confirm the permitted usage rights rather than assuming that every form of recording or publication is automatically included.",
          "Finally, prepare a detailed event schedule and nominate a coordinator to communicate with the relevant representatives. Share arrival instructions, venue access details, stage requirements, and the sequence of activities in advance. Good coordination helps avoid unnecessary delays and gives the event team a clear understanding of the confirmed arrangements."
        ],
        image: {
          src: "/images/blog/private-event-celebrity-booking-process.webp",
          alt: "The 4-step private event celebrity booking process",
          title: "Private Event Celebrity Booking Blueprint",
          caption: "4-step operational process: Event brief, availability & commercial terms, written agreement, and day-of-event coordination."
        }
      },
      {
        heading: "What Determines Celebrity Booking Costs?",
        paragraphs: [
          "The cost to book celebrity for private event appearances depends on several factors, and there is no single price that applies to every celebrity or occasion. Established film personalities, television stars, musicians, athletes, digital creators, and public figures can have substantially different fee structures. Availability and current professional commitments may also influence the final quotation.",
          "The appearance format is another important consideration. A brief guest appearance is different from a live performance, a hosted programme, a formal speech, or an extended meet-and-greet session. Longer engagements and additional deliverables may require different commercial arrangements, so organisers should describe their expectations before requesting a quotation.",
          "Location and logistics can affect the overall budget. Travel, accommodation, local transportation, security, hospitality, technical production, and venue requirements may be charged separately, depending on the agreement. For events outside the celebrity's usual working location, these details should be clarified early to avoid unexpected expenses.",
          "Your budget should also account for any specific recording, photography, promotional, or exclusivity requirements. A private appearance does not automatically include commercial endorsements, social media posts, advertising rights, or permission to use a celebrity's image in promotional campaigns. A detailed quotation and written agreement help establish exactly what is included."
        ],
        image: {
          src: "/images/blog/celebrity-private-event-cost-factors.webp",
          alt: "Core factors determining private event celebrity booking costs",
          title: "Celebrity Booking Cost Factors",
          caption: "Key drivers of booking costs: public stature, appearance format, location riders, and media usage rights."
        }
      },
      {
        heading: "Why Consider Harshita Dagha for Celebrity Marketing Inquiries?",
        paragraphs: [
          "Harshita Dagha is a Mumbai-based podcast host, branding and public relations strategist, and founder of Beingblahblah. Her work includes celebrity marketing, digital PR, brand storytelling, and strategic visibility. These areas are relevant to organisations seeking to connect celebrity engagement with a broader communication or branding objective.",
          "For event organisers, understanding the difference between a private appearance and a commercial celebrity collaboration is important. An appearance focuses on participation in a particular occasion, while a brand collaboration may involve additional commitments, campaign deliverables, usage rights, and a longer engagement period. Defining the intended outcome helps establish the appropriate scope.",
          "Harshita Dagha's professional services include celebrity marketing and strategic PR-related work. If you are exploring a celebrity appearance for a private celebration, you can contact her team to discuss your requirements and confirm whether the requested booking can be supported. Celebrity availability, participation, fees, and booking arrangements must be verified individually.",
          "To make an inquiry, visit or contact the team through the official [contact page](https://www.harshitadagha.in/contact). Share your event details, preferred celebrity category, location, proposed date, and budget range to help the team understand your requirements."
        ],
        internalLink: {
          text: "Contact Harshita Dagha for Celebrity Private Event Inquiries →",
          href: "/contact"
        }
      }
    ],
    conclusion: "When you Book Celebrity for Private Event arrangements, careful planning can help transform an ordinary gathering into a distinctive experience. From weddings and milestone birthdays to exclusive parties and family celebrations, the right appearance should complement your event, suit your audience, and fit your budget. Clear communication, transparent commercial terms, and advance coordination are essential to making the process smoother.\n\nHarshita Dagha's work across celebrity marketing, branding, and digital PR offers a starting point for enquiries involving celebrity-related collaborations. Contact her team through the official website to discuss your event requirements and confirm the services available for your occasion.\n\nMake your next celebration meaningful by planning the details carefully, setting realistic expectations, and choosing an entertainment experience that your guests will remember."
  },
  faqs: [
    {
      question: "How can I book a celebrity for a private event in India?",
      answer: "Start by identifying the occasion, preferred celebrity, event date, location, budget, and desired appearance format. Contact a relevant booking or celebrity marketing service to discuss availability, fees, and the proposed arrangement. Confirm all commercial terms in writing before making final commitments."
    },
    {
      question: "Can I book a Bollywood celebrity for a private party?",
      answer: "You can enquire about Bollywood celebrity appearances for private parties, subject to the individual's availability, professional commitments, event requirements, and commercial terms. The exact appearance format must be confirmed before booking."
    },
    {
      question: "How much does it cost to book a celebrity for a private event?",
      answer: "The cost varies according to the celebrity's profile, demand, appearance duration, event location, travel arrangements, and requested services. Request a personalised quotation that clearly separates the appearance fee from any additional expenses."
    },
    {
      question: "Can I book a celebrity for a wedding or birthday party?",
      answer: "Yes, wedding celebrations, receptions, milestone birthdays, anniversaries, and other private gatherings can be considered for celebrity appearances. Availability and the nature of participation depend on the celebrity and the agreed terms."
    },
    {
      question: "How far in advance should I book a celebrity?",
      answer: "It is sensible to enquire as early as possible, particularly for popular dates, wedding seasons, and celebrities with demanding schedules. Early communication allows more time to check availability, discuss commercial terms, arrange logistics, and prepare the event schedule."
    },
    {
      question: "Does celebrity booking include photographs and meet-and-greet sessions?",
      answer: "Not necessarily. Photographs, guest interactions, performances, interviews, and meet-and-greet sessions depend on the specific agreement. Ask for each requested activity to be clearly documented before confirming the engagement."
    },
    {
      question: "How can I enquire about celebrity booking through Harshita Dagha?",
      answer: "Visit Harshita Dagha's official website or use the official contact page. Provide your event date, location, occasion, preferred celebrity, and budget to discuss the available options and confirm whether the request can be accommodated."
    }
  ]
};

// =========================================================================
// 1. UPDATE src/data/articles.ts
// =========================================================================
function updateArticlesFile() {
  let content = fs.readFileSync(articlesFilePath, 'utf-8');

  if (content.includes(privateEventArticle.id)) {
    console.log('Article already exists in articles.ts, skipping insertion.');
    return;
  }

  const marker = 'export const ARTICLES: Article[] = [';
  if (!content.includes(marker)) {
    console.error('Could not locate ARTICLES marker in articles.ts');
    process.exit(1);
  }

  const articleString = '  ' + JSON.stringify(privateEventArticle, null, 2).replace(/\n/g, '\n  ') + ',\n';
  content = content.replace(marker, marker + '\n' + articleString);

  fs.writeFileSync(articlesFilePath, content, 'utf-8');
  console.log('articles.ts updated successfully with Book Celebrity for Private Event article.');
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

  posts = posts.filter(p => p.id !== privateEventArticle.id);

  let mdContent = `${privateEventArticle.content.intro}\n\n`;
  privateEventArticle.content.sections.forEach(sec => {
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

  mdContent += `### Make Your Private Celebration Memorable\n\n${privateEventArticle.content.conclusion}`;

  const customPostObj = {
    id: privateEventArticle.id,
    type: "article",
    title: privateEventArticle.title,
    metaTitle: privateEventArticle.metaTitle,
    metaDescription: privateEventArticle.metaDescription,
    category: privateEventArticle.category,
    date: privateEventArticle.date,
    readTime: privateEventArticle.readTime,
    excerpt: privateEventArticle.excerpt,
    coverImage: privateEventArticle.image,
    author: privateEventArticle.author,
    tags: [
      "Book Celebrity for Private Event",
      "Celebrity Booking for Private Event India",
      "Book Celebrity for Wedding",
      "Celebrity for Birthday Party India",
      "Harshita Dagha",
      "Beingblahblah"
    ],
    featured: true,
    views: "34.1K views",
    content: mdContent,
    faqs: privateEventArticle.faqs
  };

  posts.unshift(customPostObj);
  fs.writeFileSync(customPostsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
  console.log('custom_posts.json updated successfully with Book Celebrity for Private Event.');
}

// =========================================================================
// 3. UPDATE next.config.ts (Redirects for Root Slugs)
// =========================================================================
function updateNextConfig() {
  let content = fs.readFileSync(nextConfigFilePath, 'utf-8');

  const redirectSnippet = `      {
        source: "/book-celebrity-for-private-event",
        destination: "/blog/book-celebrity-for-private-event",
        permanent: true,
      },
      {
        source: "/book-celebrity-for-private-event/",
        destination: "/blog/book-celebrity-for-private-event",
        permanent: true,
      },`;

  if (!content.includes('/book-celebrity-for-private-event')) {
    const target = 'async redirects() {\n    return [\n';
    content = content.replace(target, target + redirectSnippet + '\n');
    fs.writeFileSync(nextConfigFilePath, content, 'utf-8');
    console.log('next.config.ts redirects updated successfully for book-celebrity-for-private-event.');
  } else {
    console.log('next.config.ts already includes book-celebrity-for-private-event redirects.');
  }
}

// =========================================================================
// 4. CROSS-LINK ON /services
// =========================================================================
function updateCrossLinks() {
  if (fs.existsSync(servicesFilePath)) {
    let sContent = fs.readFileSync(servicesFilePath, 'utf-8');
    if (!sContent.includes('/blog/book-celebrity-for-private-event')) {
      const callout = `            <div className="inline-flex items-center gap-2 p-3 px-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs sm:text-sm text-pink-200">
              <span className="font-semibold text-white">Private Events &amp; Weddings:</span>
              <a 
                href="/blog/book-celebrity-for-private-event"
                className="text-[#f472b6] hover:text-white underline font-medium transition-colors"
              >
                Book Celebrity for Private Event Guide &rarr;
              </a>
            </div>\n`;
      const anchor = 'Podcast Booking for Celebrities Guide &rarr;\n              </a>\n            </div>';
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
  console.log('🎉 Book Celebrity for Private Event publishing script executed successfully!');
}

main();
