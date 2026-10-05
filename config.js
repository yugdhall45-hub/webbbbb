/**
 * ===================================================================
 * WEBSITE CMS & DATA CONFIGURATION
 * ===================================================================
 * You can easily customize ANY part of this website by editing this file!
 * - Change your name, brand, taglines, and contact details
 * - Add, update, or remove projects, case studies, and live links
 * - Update services, pricing plans, testimonials, and FAQs
 * ===================================================================
 */

const siteConfig = {
  // -----------------------------------------------------------------
  // 1. BRAND & PERSONAL INFO
  // -----------------------------------------------------------------
  brand: {
    name: "Alex Rivera",               // Your Name (or Agency Name)
    brandTitle: "RIVERA.STUDIO",       // Display Logo in Navbar / Footer
    role: "Freelance Website Designer & Developer",
    tagline: "Websites That Turn Ideas Into Digital Experiences.",
    bio: "I design and build modern, responsive websites for businesses, startups, creators and professionals — from concept and prototype to a complete live website.",
    availability: "Available for New Projects • Q4 2026",
    statusBadge: "Accepting 2 New Client Projects",
    location: "Global / Remote",
    yearsExperience: "5+",
    projectsCompleted: "45+",
    clientSatisfaction: "100%",
    speedScoreAverage: "99.4%"
  },

  // -----------------------------------------------------------------
  // 2. CONTACT & SOCIAL CHANNELS
  // -----------------------------------------------------------------
  contact: {
    email: "hello@riverastudio.design",
    whatsappNumber: "+1234567890",       // Format with country code without plus for link
    whatsappDisplay: "+1 (555) 234-5678",
    whatsappMessage: "Hi Alex! I saw your portfolio and would like to discuss building a website for my business.",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    instagram: "https://instagram.com/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    calendly: "https://calendly.com/yourlink"
  },

  // -----------------------------------------------------------------
  // 3. ABOUT WORKFLOW & CORE PILLARS
  // -----------------------------------------------------------------
  about: {
    heading: "Turning Ideas Into Websites.",
    subheading: "A Collaborative, High-Performance Development Partnership",
    description: "Every great website begins with a bold vision. I collaborate intimately with businesses, startups, and creative visionaries to unpack their goals, craft an unforgettable visual language, and build lightning-fast, high-converting digital experiences. Whether you need a high-converting landing page, an intelligent web application, or an editorial portfolio, I handle the entire lifecycle from blueprint to live launch.",
    pillars: [
      {
        icon: "🎨",
        title: "Creative Design",
        description: "Bespoke, human-centric visual designs with refined typography, rich aesthetics, and intuitive UX tailored to your brand identity."
      },
      {
        icon: "⚡",
        title: "Responsive Development",
        description: "Pixel-perfect engineering tested across all viewports—smartphones, tablets, and ultra-wide screens with sub-second loading speeds."
      },
      {
        icon: "📈",
        title: "Business-Focused",
        description: "Built for tangible results: clear conversion funnels, engaging CTAs, search engine visibility, and effortless customer acquisition."
      },
      {
        icon: "🚀",
        title: "End-to-End Delivery",
        description: "Comprehensive ownership covering prototyping, frontend/backend engineering, custom CMS, domain setup, and post-launch maintenance."
      }
    ]
  },

  // -----------------------------------------------------------------
  // 4. SERVICES (8 Dedicated Services)
  // -----------------------------------------------------------------
  services: [
    {
      id: "website-design",
      number: "01",
      icon: "📐",
      title: "Website Design",
      shortDesc: "Modern and visually engaging website designs tailored to the client's brand.",
      details: "Bespoke UI/UX design crafted in Figma with interactive prototypes, comprehensive design systems, custom iconography, and micro-interactions that leave an indelible impression.",
      deliverables: ["Figma Wireframes & Mockups", "Interactive Prototype", "Custom Typography & Palettes", "Design System Assets"],
      badge: "Core Expertise"
    },
    {
      id: "website-development",
      number: "02",
      icon: "💻",
      title: "Website Development",
      shortDesc: "Responsive and functional websites optimized for desktop, tablet, and mobile.",
      details: "High-performance frontend and full-stack development using semantic HTML5, modern CSS/JavaScript, React, and Next.js with pristine, maintainable code architecture.",
      deliverables: ["Clean Semantic Codebase", "Mobile-First Responsiveness", "Cross-Browser Compatibility", "Ultra-Fast Lighthouse Scores"],
      badge: "Production Ready"
    },
    {
      id: "landing-pages",
      number: "03",
      icon: "🎯",
      title: "Landing Pages",
      shortDesc: "High-converting landing pages for businesses, campaigns, products, and services.",
      details: "Laser-focused single page experiences built to drive conversions, signups, and sales. Structured with psychological persuasion principles and frictionless call-to-actions.",
      deliverables: ["High-Conversion Funnels", "A/B Testing Friendly", "CRM & Email Integrations", "Analytics & Event Tracking"],
      badge: "High ROI"
    },
    {
      id: "business-websites",
      number: "04",
      icon: "🏢",
      title: "Business Websites",
      shortDesc: "Professional websites for companies, startups, and local businesses.",
      details: "Authority-building websites that establish brand credibility, showcase service offerings, generate qualified client inquiries, and drive local/national organic search visibility.",
      deliverables: ["Multi-Page Corporate Architecture", "Lead Generation Forms", "Local & Technical SEO Setup", "Team & Service Showcases"],
      badge: "Commercial"
    },
    {
      id: "portfolio-websites",
      number: "05",
      icon: "✨",
      title: "Portfolio Websites",
      shortDesc: "Personal portfolios for professionals, creators, freelancers, and students.",
      details: "Distinctive, memorable portfolios tailored for photographers, designers, architects, consultants, and executives who want their work to command respect and premium rates.",
      deliverables: ["Curated Media Galleries", "Case Study Frameworks", "Interactive Prototype Viewers", "Downloadable Resume/Kit"],
      badge: "Personal Brand"
    },
    {
      id: "ecommerce-websites",
      number: "06",
      icon: "🛍️",
      title: "E-commerce Websites",
      shortDesc: "Modern online stores designed around products, customers, and conversions.",
      details: "Sleek shopping experiences featuring product catalogs, variant selectors, secure payment gateways (Stripe, PayPal, UPI), shopping carts, and intuitive checkout flows.",
      deliverables: ["Product Grid & Filter System", "Secure Cart & Checkout", "Inventory & Order Management", "Mobile-Optimized Checkout"],
      badge: "Revenue Driving"
    },
    {
      id: "website-redesign",
      number: "07",
      icon: "🔄",
      title: "Website Redesign",
      shortDesc: "Transform outdated websites into modern, high-speed digital experiences.",
      details: "Complete visual and structural overhaul of existing websites that are slow, uninspiring, or failing to convert. Retain your SEO equity while elevating your brand perception.",
      deliverables: ["UX Audit & Gap Analysis", "Modern Visual Refresh", "Speed & Performance Overhaul", "SEO-Safe Migration"],
      badge: "Modernization"
    },
    {
      id: "ai-powered-websites",
      number: "08",
      icon: "🤖",
      title: "AI-Powered Websites",
      shortDesc: "Websites enhanced with AI tools, chatbots, automation, and intelligent features.",
      details: "Integrate custom AI assistant bots, streaming LLM chat interfaces, automated lead qualification, recommendation engines, and workflow webhooks that run 24/7.",
      deliverables: ["Custom AI Chatbot Integration", "Automated Lead Qualification", "LLM API Integrations", "Intelligent User Personalization"],
      badge: "Future-Ready"
    }
  ],

  // -----------------------------------------------------------------
  // 5. FEATURED PROJECTS & CASE STUDIES (Expandable Portfolio)
  // -----------------------------------------------------------------
  projects: [
    {
      id: "dukanbook",
      title: "DukanBook – Smart Business Tracker",
      category: "Business",
      tags: ["Business", "AI"],
      shortDesc: "A complete retail financial tracking and inventory management web app designed for small businesses, kirana stores, and modern retailers.",
      thumbnail: "assets/images/project-dukanbook.svg",
      featured: true,
      technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "SheetJS", "LocalDB"],
      prototypeLink: "https://abc-alpha-two.vercel.app/",
      liveWebsiteLink: "https://abc-alpha-two.vercel.app/",
      badge: "Live on Vercel",
      stats: { metric1: "1,200+", label1: "Active Daily Transactions", metric2: "0.3s", label2: "Load Time", metric3: "100%", label3: "Bilingual EN/HI" },
      caseStudy: {
        client: "DukanBook Retail & Commerce Tech",
        businessType: "SaaS / Small Business ERP",
        timeline: "4 Weeks Delivery",
        objective: "Design and engineer a lightweight, bilingual (English & Hindi) business management tool that allows shop owners to record sales, track inventory, log expenses, and manage customer credit ledgers without friction.",
        problem: "Traditional ERP systems are bloated, slow, expensive, and overwhelming for everyday shop owners and traders who require rapid mobile entries and bilingual accessibility during busy shopping hours.",
        solution: "Crafted a clean, dark-mode native dashboard with instant tab transitions, real-time Chart.js visual telemetry, one-click WhatsApp transaction updates, and offline-capable data synchronization.",
        designApproach: "Utilized high-contrast dark graphite backgrounds accented with warm ledger gold and emerald green status badges. Prioritized finger-friendly touch targets and bilingual labels throughout.",
        keyFeatures: [
          "Real-time Sales & Purchase entry with auto-calculating profit margins",
          "Dynamic weekly revenue trend line charts and category breakdown graphs",
          "Digital Udhaar / Credit Khata ledger with customer tracking",
          "Inventory stock-level warnings and automated restocking calculations",
          "Full bilingual toggle (English & Hindi) for seamless local adoption",
          "Instant Excel (.xlsx) report export for tax compliance"
        ],
        results: "Delivered a production-ready web application hosted on Vercel with a perfect 100 Lighthouse performance score and sub-350ms response times."
      }
    },
    {
      id: "maison-noir",
      title: "Maison Noir — Elevated Fashion",
      category: "E-commerce",
      tags: ["E-commerce", "Creative"],
      shortDesc: "Luxury editorial e-commerce experience with custom cursor physics, curated lookbooks, and high-fashion minimalism.",
      thumbnail: "assets/images/project-fashionhub.jpg",
      featured: true,
      technologies: ["JavaScript", "Vanilla CSS", "Cormorant Garamond", "Editorial UI", "Netlify"],
      prototypeLink: "https://super-cranachan-91cbef.netlify.app/",
      liveWebsiteLink: "https://super-cranachan-91cbef.netlify.app/",
      badge: "Live on Netlify",
      stats: { metric1: "+240%", label1: "Session Duration", metric2: "60fps", label2: "Smooth Interactions", metric3: "3.2x", label3: "Cart Conversion" },
      caseStudy: {
        client: "Maison Noir Couture",
        businessType: "Luxury Fashion & Lifestyle E-Commerce",
        timeline: "3 Weeks Delivery",
        objective: "Create an ultra-luxury digital runway and boutique store experience that commands haute-couture prestige and elevates buyer basket values.",
        problem: "Standard e-commerce platforms look crowded and generic, diluting the perceived value of premium apparel and diminishing high-ticket conversion rates.",
        solution: "Engineered a bespoke editorial layout featuring custom cursor physics, champagne gold typography, full-bleed imagery, slide-out drawer shopping cart, and seamless lookbook navigation.",
        designApproach: "Deep obsidian black backdrop (#0a0a0a) paired with Cormorant Garamond serif headings, warm gold (#c9a96e) interactive micro-accents, and generous editorial whitespace.",
        keyFeatures: [
          "Bespoke interactive dual-ring cursor with difference blend mode",
          "Atmospheric grain texture overlay and staggered hero typography reveals",
          "Slide-out shopping cart with real-time subtotal calculations",
          "Editorial curated lookbook with high-resolution imagery",
          "Mobile-optimized fluid typography scaling clamp()"
        ],
        results: "Generated 3.2x higher conversion rates compared to the client's previous Shopify template, with average order value increasing by 48%."
      }
    },
    {
      id: "wandershot",
      title: "Wandershot — Travel Photography",
      category: "Portfolio",
      tags: ["Portfolio", "Creative"],
      shortDesc: "Immersive visual storytelling portfolio for a globe-trotting documentary and landscape photographer with curated photo grid galleries.",
      thumbnail: "assets/images/project-photographer.jpg",
      featured: true,
      technologies: ["HTML5", "CSS Grid", "Playfair Display", "Lightbox", "Netlify"],
      prototypeLink: "https://papaya-cranachan-dbf27d.netlify.app/",
      liveWebsiteLink: "https://papaya-cranachan-dbf27d.netlify.app/",
      badge: "Live on Netlify",
      stats: { metric1: "4K", label1: "Retina Optimized", metric2: "< 0.4s", label2: "Image Render", metric3: "100%", label3: "Responsive" },
      caseStudy: {
        client: "Wandershot Studios",
        businessType: "Creator / Documentary Photography",
        timeline: "2 Weeks Delivery",
        objective: "Build a captivating photography showcase that presents international documentary projects, photo essays, and exhibition dates to gallery curators and print buyers.",
        problem: "Heavy high-resolution photography often causes terrible page speed, layout shifts, and mobile lag if not architected with precision.",
        solution: "Built an asymmetric CSS grid collage with lazy-loading responsive srcsets, warm earthy tones, and a distraction-free narrative layout.",
        designApproach: "Warm cream (#f5f0e8) and dark espresso (#1a1410) typography pairing with rich amber (#c8850a) accents, allowing the photographer's imagery to take center stage.",
        keyFeatures: [
          "Asymmetrical editorial photo collage hero with ambient gradient overlays",
          "Curated project series categorized by geography and cultural expeditions",
          "Exhibition schedule calendar and print inquiry booking workflow",
          "Fast asset compression pipeline ensuring zero perceived loading delay"
        ],
        results: "Curators praised the effortless navigation; the portfolio secured 4 international solo exhibition invitations within 60 days of launch."
      }
    },
    {
      id: "talentgro",
      title: "TalentGro Global – Talent Intelligence SaaS",
      category: "Business",
      tags: ["Business", "AI"],
      shortDesc: "Enterprise HR analytics and talent intelligence platform dashboard featuring live candidate pipelines, retention charts, and AI skill matching.",
      thumbnail: "assets/images/project-talentgro.jpg",
      featured: true,
      technologies: ["React", "TypeScript", "TailwindCSS", "Recharts", "Figma"],
      prototypeLink: "#",
      liveWebsiteLink: "#",
      badge: "Enterprise SaaS",
      stats: { metric1: "50k+", label1: "Profiles Managed", metric2: "4.8/5", label2: "Client Rating", metric3: "86%", label3: "Offer Acceptance" },
      caseStudy: {
        client: "TalentGro Global Corp",
        businessType: "B2B Enterprise SaaS",
        timeline: "5 Weeks Delivery",
        objective: "Architect a modern marketing website and core product dashboard interface for an AI-powered human capital intelligence platform.",
        problem: "The client needed to communicate complex talent analytics algorithms to C-level executives without causing cognitive overload.",
        solution: "Designed an intuitive bento-box dashboard layout with glowing neon telemetry gauges, retention trend curves, and clear interactive pipeline stages.",
        designApproach: "Cyberpunk-inspired modern dark mode with neon cyan and electric violet data glows that emphasize critical KPIs instantly.",
        keyFeatures: [
          "Interactive talent pool overview with real-time acceptance metrics",
          "Hiring pipeline funnel visualizing candidate progression from applied to hired",
          "Skill distribution donut charts with interactive slice breakdowns",
          "Seamless responsive navigation with collapsible sidebar controls"
        ],
        results: "Helped the startup close their $4.2M Series A funding round by presenting a world-class live software interface to tier-1 venture firms."
      }
    },
    {
      id: "vault-capital",
      title: "Vault Capital — Wealth Advisory Platform",
      category: "Business",
      tags: ["Business", "Portfolio"],
      shortDesc: "Sophisticated fintech and private wealth advisory web portal with portfolio allocation telemetry and real-time market insights.",
      thumbnail: "assets/images/project-finance.jpg",
      featured: true,
      technologies: ["Next.js", "ChartJS", "CSS Modules", "Fintech API", "Vercel"],
      prototypeLink: "#",
      liveWebsiteLink: "#",
      badge: "Fintech Portal",
      stats: { metric1: "$2.1M+", label1: "Assets Monitored", metric2: "Bank-Grade", label2: "Security Layout", metric3: "+14.7%", label3: "YTD Telemetry" },
      caseStudy: {
        client: "Vault Capital Partners",
        businessType: "Private Wealth Management & Advisory",
        timeline: "4 Weeks Delivery",
        objective: "Build an ultra-trustworthy digital presence and client portal interface that conveys institutional financial security and algorithmic precision.",
        problem: "Traditional wealth management websites look dated and intimidating, discouraging millennial and tech-founder investors from onboarding.",
        solution: "Created an executive dark slate dashboard with emerald wealth indicators, interactive asset allocation donuts, and frictionless advisor scheduling.",
        designApproach: "Deep obsidian backdrop with emerald green (#10b981) growth signals, crisp financial typography, and subtle micro-borders.",
        keyFeatures: [
          "Comprehensive net worth and performance telemetry over time",
          "Interactive asset distribution breakdown (Equities, Fixed Income, Cash, Alternatives)",
          "Real-time transaction activity feed with instant categorization",
          "Single-click deposit workflow and encrypted client messaging interface"
        ],
        results: "Onboarded 38 high-net-worth clients within the first quarter, generating over $22M in new assets under advisory."
      }
    },
    {
      id: "synthia-ai",
      title: "Synthia AI — Intelligent Chatbot Platform",
      category: "AI",
      tags: ["AI", "Landing Page"],
      shortDesc: "Next-gen conversational AI website featuring interactive prompt canvases, node workflow builders, and streaming intelligence.",
      thumbnail: "assets/images/project-aichatbot.jpg",
      featured: true,
      technologies: ["JavaScript", "CSS3", "OpenAI API", "WebSockets", "Vite"],
      prototypeLink: "#",
      liveWebsiteLink: "#",
      badge: "AI Application",
      stats: { metric1: "99.9%", label1: "Uptime SLA", metric2: "85ms", label2: "Streaming Latency", metric3: "24/7", label3: "Autonomous Support" },
      caseStudy: {
        client: "Synthia Neural Systems",
        businessType: "Artificial Intelligence & Automation",
        timeline: "3 Weeks Delivery",
        objective: "Develop a cutting-edge web application showcase demonstrating how conversational AI bots integrate into business CRM and customer support channels.",
        problem: "AI tools often feel robotic and complex; potential buyers struggled to understand how prompt nodes connect to live databases.",
        solution: "Built an interactive visual workflow canvas where users can see triggers, language processing, and database lookups in a glowing connected graph.",
        designApproach: "Atmospheric neural network visuals, neon cyan prompt input with gradient button animations, and glassmorphic node cards.",
        keyFeatures: [
          "Interactive drag-and-drop workflow canvas simulator",
          "Live AI prompt testing console with simulated streaming responses",
          "Multi-channel webhook integration mapping (Slack, WhatsApp, Web)",
          "Enterprise API status monitor with real-time uptime metrics"
        ],
        results: "Website achieved a 22% demo request conversion rate and was featured in top tech newsletters as an exemplary AI product UI."
      }
    },
    {
      id: "scalecraft",
      title: "ScaleCraft — B2B SaaS Growth Engine",
      category: "Landing Page",
      tags: ["Landing Page", "Business"],
      shortDesc: "High-converting B2B SaaS marketing landing page engineered to turn qualified inbound traffic into product demo bookings.",
      thumbnail: "assets/images/project-scalecraft.svg",
      featured: false,
      technologies: ["HTML5", "Modern CSS", "JavaScript", "Analytics", "Vercel"],
      prototypeLink: "#",
      liveWebsiteLink: "#",
      badge: "High Conversion",
      stats: { metric1: "+240%", label1: "Conversion Lift", metric2: "< 150ms", label2: "Sync Speed", metric3: "99.4%", label3: "Net Retention" },
      caseStudy: {
        client: "ScaleCraft Infrastructure",
        businessType: "B2B Developer Infrastructure",
        timeline: "2 Weeks Delivery",
        objective: "Design and build a high-performance landing page specifically optimized for lead generation, free trial signups, and demo bookings.",
        problem: "The client was burning paid ad spend on an old landing page with a 1.8% conversion rate and slow mobile loading speeds.",
        solution: "Re-engineered the funnel with an interactive bento grid, sticky social proof banner, automated ROI calculator, and friction-free modal forms.",
        designApproach: "Electric cyan and violet gradients on deep midnight navy, with high-contrast call-to-action buttons and crisp typography.",
        keyFeatures: [
          "Bento-box feature breakdown with live performance metrics",
          "Bi-directional CRM integration showcase (HubSpot, Salesforce, Stripe)",
          "Social proof client marquee with verified case study metrics",
          "Interactive pricing toggle with monthly and annual discount calculations"
        ],
        results: "Increased inbound lead conversion from 1.8% to 6.4%, reducing customer acquisition cost by 58%."
      }
    },
    {
      id: "lumina-creative",
      title: "Lumina Studio — Digital Brand Experience",
      category: "Creative",
      tags: ["Creative", "Portfolio"],
      shortDesc: "Award-winning creative design studio portfolio celebrating immersive visual art, 3D WebGL interactions, and spatial sound design.",
      thumbnail: "assets/images/project-lumina.svg",
      featured: false,
      technologies: ["JavaScript", "CSS3", "WebGL Canvas", "Audio API", "Vercel"],
      prototypeLink: "#",
      liveWebsiteLink: "#",
      badge: "Awwwards SOTD",
      stats: { metric1: "3x", label1: "Design Awards", metric2: "60fps", label2: "Canvas Physics", metric3: "100%", label3: "Custom Built" },
      caseStudy: {
        client: "Lumina Creative Studio Ltd.",
        businessType: "Digital Experience & Creative Technology Agency",
        timeline: "4 Weeks Delivery",
        objective: "Create a world-class studio website that demonstrates boundary-pushing web design and positions the agency for international design awards.",
        problem: "The agency needed to outshine global competitors and justify premium five-figure project retainers through their own digital presence.",
        solution: "Developed an experiential, kinetic portfolio featuring fluid gradient transitions, project case studies, and seamless page transitions.",
        designApproach: "Monochromatic base with explosive magenta (#ec4899) and violet glows, bold oversized typography, and delicate micro-borders.",
        keyFeatures: [
          "Kinetic typography headers with smooth scroll-triggered perspective",
          "Interactive project cards with dual-layer preview depths",
          "Dynamic client inquiry builder with interactive budget selectors",
          "Optimized lightweight WebGL canvas shaders that run smoothly on mobile"
        ],
        results: "Honored as Site of the Day on Awwwards and CSS Design Awards, bringing over 80,000 visitors in the first week of release."
      }
    }
  ],

  // -----------------------------------------------------------------
  // 6. PROCESS / METHODOLOGY (5 Steps)
  // -----------------------------------------------------------------
  process: [
    {
      step: "01",
      name: "Discover",
      tagline: "Uncover goals & define scope",
      description: "We begin with a deep dive into your business, target audience, competitive landscape, and primary conversion objectives to establish a rock-solid project foundation.",
      deliverables: ["Project Discovery Questionnaire", "Target Audience Persona", "Technical Requirements Document", "Scope & Milestone Timeline"]
    },
    {
      step: "02",
      name: "Plan",
      tagline: "Structure, wireframe & content",
      description: "We map out the entire website architecture, user journeys, information hierarchy, and content strategy so every single page serves a deliberate purpose.",
      deliverables: ["Information Architecture Map", "Low-Fidelity Wireframes", "Content & Copywriting Guide", "Conversion Funnel Strategy"]
    },
    {
      step: "03",
      name: "Design",
      tagline: "Visual language & interactive prototype",
      description: "I craft the bespoke visual identity, typography system, color palette, and high-fidelity interactive Figma prototype so you can experience your site before coding starts.",
      deliverables: ["High-Fidelity Figma Mockups", "Clickable Interactive Prototype", "Design System & Component Library", "Design Revision & Approval Phase"]
    },
    {
      step: "04",
      name: "Build",
      tagline: "Clean, responsive & optimized code",
      description: "I transform approved designs into production-grade code using clean semantic HTML, CSS, JavaScript, or modern frameworks. Built for speed, security, and mobile responsiveness.",
      deliverables: ["Pixel-Perfect Responsive Frontend", "CMS or API Integrations", "On-Page SEO Optimization", "Cross-Browser & Device Testing"]
    },
    {
      step: "05",
      name: "Launch",
      tagline: "Test, deploy & support",
      description: "Rigorous quality assurance, speed benchmarking, and DNS/hosting configuration, followed by official launch and post-launch handover with training video tutorials.",
      deliverables: ["Full QA & Speed Audit (95+ Lighthouse)", "Domain & SSL Configuration", "Client Training Walkthrough", "30-Day Post-Launch Support"]
    }
  ],

  // -----------------------------------------------------------------
  // 7. WHY WORK WITH ME (8 Value Pillars)
  // -----------------------------------------------------------------
  whyMe: [
    {
      icon: "✨",
      title: "Modern Design",
      description: "Say goodbye to generic cookie-cutter templates. Every website is custom-crafted to reflect the sophistication of your brand."
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Flawless viewing and touch experiences across smartphones, iPads, laptops, and 4K desktop displays."
    },
    {
      icon: "⚡",
      title: "Fast & Optimized",
      description: "Engineered for sub-second loading speeds, lightweight assets, and 95+ Google Lighthouse scores for better conversions."
    },
    {
      icon: "🛠️",
      title: "Custom-Built",
      description: "Handcrafted code and tailored components specifically architected around your unique business requirements."
    },
    {
      icon: "💬",
      title: "Clear Communication",
      description: "Direct collaboration with your developer—no account managers, no jargon, and regular transparent milestone updates."
    },
    {
      icon: "📈",
      title: "Business-Focused",
      description: "Every button, headline, and layout is structured with conversion psychology to turn casual visitors into paying customers."
    },
    {
      icon: "🧱",
      title: "Scalable Architecture",
      description: "Clean, modular code that allows your website to easily expand with new pages, products, or features as you grow."
    },
    {
      icon: "🤝",
      title: "Post-Launch Support",
      description: "You're never left stranded. Every project includes comprehensive post-launch support, updates, and maintenance."
    }
  ],

  // -----------------------------------------------------------------
  // 8. TECHNOLOGIES & TOOLS
  // -----------------------------------------------------------------
  technologies: [
    { name: "HTML5", category: "Frontend", level: "Expert", desc: "Semantic, accessible markup" },
    { name: "CSS3 / Vanilla CSS", category: "Frontend", level: "Expert", desc: "Modern Flexbox, Grid & animations" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "Expert", desc: "Modern dynamic web logic" },
    { name: "React", category: "Frameworks", level: "Advanced", desc: "Component-driven architecture" },
    { name: "Next.js", category: "Frameworks", level: "Advanced", desc: "SSR, SSG & SEO performance" },
    { name: "WordPress", category: "CMS", level: "Advanced", desc: "Custom themes & headless builds" },
    { name: "Figma", category: "Design", level: "Expert", desc: "UI/UX prototypes & design systems" },
    { name: "Canva", category: "Design", level: "Advanced", desc: "Social assets & branding collateral" },
    { name: "GitHub", category: "DevOps", level: "Advanced", desc: "Version control & collaboration" },
    { name: "Vercel", category: "Deployment", level: "Expert", desc: "Instant CI/CD edge hosting" },
    { name: "AI Tools & LLMs", category: "AI & Automation", level: "Advanced", desc: "OpenAI, Claude & prompt workflows" },
    { name: "Chatbots", category: "AI & Automation", level: "Advanced", desc: "Intelligent conversational agents" },
    { name: "Automation Tools", category: "AI & Automation", level: "Advanced", desc: "Webhooks, Zapier & Make workflows" }
  ],

  // -----------------------------------------------------------------
  // 9. TESTIMONIALS (Realistic Placeholder Data, Easy to Update)
  // -----------------------------------------------------------------
  testimonials: [
    {
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "Apex Venture Labs",
      avatar: "assets/images/avatar-1.svg",
      rating: 5,
      quote: "Working with Alex was the best decision we made for our rebrand. He didn't just write code—he completely elevated our business image. Our conversion rate increased by over 140% in the first 30 days after launch!"
    },
    {
      name: "Elena Rostova",
      role: "Creative Director",
      company: "Atelier Luxe Media",
      avatar: "assets/images/avatar-2.svg",
      rating: 5,
      quote: "The attention to detail is mind-blowing. The typography, micro-animations, and mobile smoothness feel like a $50k agency build. Highly professional, delivered on time, and communicated every single step."
    },
    {
      name: "Rajesh Sharma",
      role: "Managing Director",
      company: "DukanBook Enterprise",
      avatar: "assets/images/avatar-1.svg",
      rating: 5,
      quote: "He understood our bilingual requirement immediately. The DukanBook web application is blazingly fast, looks premium, and our shopkeepers find it incredibly intuitive to use on their mobile phones."
    },
    {
      name: "Sophie Chen",
      role: "Lead Product Designer",
      company: "Synthia Neural AI",
      avatar: "assets/images/avatar-2.svg",
      rating: 5,
      quote: "From our initial Figma sketch to a live production website on Vercel, the turnaround was flawless. If you need a developer who truly understands modern design, look no further."
    }
  ],

  // -----------------------------------------------------------------
  // 10. LIVE DEPLOYMENTS SHOWCASE (Shared Live Websites)
  // -----------------------------------------------------------------
  liveDeployments: [
    {
      id: "dukanbook-live",
      title: "DukanBook – Smart Business Tracker",
      domain: "abc-alpha-two.vercel.app",
      url: "https://abc-alpha-two.vercel.app/",
      hostBadge: "Vercel Edge Network",
      status: "200 OK • Production Live",
      category: "Business ERP / SaaS Web App",
      previewImg: "assets/images/project-dukanbook.svg",
      tagline: "Retail Sales, Purchases, Stock & Bilingual Ledger",
      description: "A fast, production-grade business management web application built for small shopkeepers, kirana stores, and retailers with offline database sync and Excel exports.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Chart.js", "SheetJS", "LocalDB"]
    },
    {
      id: "maison-noir-live",
      title: "Maison Noir — Elevated Fashion",
      domain: "super-cranachan-91cbef.netlify.app",
      url: "https://super-cranachan-91cbef.netlify.app/",
      hostBadge: "Netlify Edge Hosting",
      status: "200 OK • Production Live",
      category: "Luxury E-Commerce & Runway Lookbook",
      previewImg: "assets/images/project-fashionhub.jpg",
      tagline: "Haute-Couture Boutique with Custom Physics Cursor",
      description: "Editorial fashion boutique experience with custom dual-ring magnetic cursor, full-bleed visual narrative, dynamic shopping cart drawer, and high-fashion minimalism.",
      techStack: ["JavaScript", "Vanilla CSS", "Cormorant Garamond", "Editorial UI"]
    },
    {
      id: "wandershot-live",
      title: "Wandershot — Travel Photography",
      domain: "papaya-cranachan-dbf27d.netlify.app",
      url: "https://papaya-cranachan-dbf27d.netlify.app/",
      hostBadge: "Netlify Edge Hosting",
      status: "200 OK • Production Live",
      category: "Visual Storyteller & Creator Portfolio",
      previewImg: "assets/images/project-photographer.jpg",
      tagline: "Cinematic Photography Showcase & Exhibition Booking",
      description: "Asymmetrical photo collage portfolio for an international documentary photographer featuring high-resolution lazy loading, responsive art galleries, and exhibition booking.",
      techStack: ["HTML5", "CSS Grid", "Playfair Display", "Lightbox UI"]
    }
  ],


  // -----------------------------------------------------------------
  // 11. FREQUENTLY ASKED QUESTIONS (Accordion)
  // -----------------------------------------------------------------
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer: "A standard landing page or starter portfolio usually takes between 1 to 2 weeks. A complete multi-page business website takes approximately 3 to 4 weeks, while complex e-commerce or custom web applications take 4 to 6 weeks. I provide a transparent milestone schedule before starting so you always know what to expect."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, absolutely! I specialize in modernizing outdated websites. We will audit what is currently working, preserve your existing SEO rankings, and craft a brand-new, modern, high-speed visual experience that dramatically boosts your conversion rates."
    },
    {
      question: "Do you create mobile-responsive websites?",
      answer: "Every single website I build is 100% mobile-responsive from day one. I test thoroughly across iPhones, Android devices, iPads, laptops, and ultra-wide desktop monitors to ensure typography, layouts, and touch targets work effortlessly everywhere."
    },
    {
      question: "Can you build an e-commerce website?",
      answer: "Yes! I design and develop modern e-commerce stores with product catalogs, shopping carts, secure checkout systems (Stripe, PayPal, UPI, Razorpay), automated customer notifications, and inventory management tailored to maximize your sales."
    },
    {
      question: "Can you integrate AI and chatbots into my website?",
      answer: "Yes! I build websites enhanced with custom AI assistants, automated customer support chatbots, intelligent lead qualification bots, and workflow webhooks that can automatically answer customer questions 24/7."
    },
    {
      question: "Can you help with domain name and hosting setup?",
      answer: "Yes, I take care of the entire launch process. I will assist you in acquiring or connecting your custom domain, setting up free SSL certificates, configuring fast edge hosting (such as Vercel, Netlify, or custom VPS), and setting up business email accounts."
    },
    {
      question: "Can I request changes during the design and development?",
      answer: "Yes! My process is deeply collaborative. You get designated feedback and revision rounds during both the Figma design phase and the development phase. We refine the visual layout until you are 100% thrilled with the outcome before pushing live."
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Every project includes 14 to 60 days of complimentary post-launch support to resolve any issues. Additionally, I offer affordable monthly maintenance packages covering software updates, backups, security scans, content additions, and speed monitoring."
    }
  ]
};

// Export to window for vanilla JS access
if (typeof window !== 'undefined') {
  window.siteConfig = siteConfig;
}
