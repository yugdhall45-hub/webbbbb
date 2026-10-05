# Rivera Studio — Modern Freelance Web Designer & Developer Portfolio

A modern, high-performance, fully responsive website built for freelance website designers and developers who craft bespoke digital experiences for businesses, startups, creators, and professionals.

---

## 🌟 Key Highlights & Features

- **Luxury Studio Aesthetic**: Deep charcoal/obsidian background, refined typography (Plus Jakarta Sans & Inter), subtle gradients, micro-blur glassmorphism, and responsive device mockups.
- **Dynamic Multi-Project Hero Showcase**: Interactive browser frame with switcher tabs to preview multiple projects instantly with micro-animations and floating metric badges.
- **Curated Projects & Prototypes Gallery**:
  - Live filter tabs: `All`, `Business`, `Portfolio`, `Landing Page`, `E-commerce`, `AI`, `Creative`, `Other`
  - High-resolution visual cards with tech badges and hover depth
- **Interactive Live Deployments Hub**:
  - Highlights real live production websites hosted on Vercel and Netlify:
    1. **DukanBook – Smart Business Tracker**: [https://abc-alpha-two.vercel.app/](https://abc-alpha-two.vercel.app/)
    2. **Maison Noir — Elevated Fashion**: [https://super-cranachan-91cbef.netlify.app/](https://super-cranachan-91cbef.netlify.app/)
    3. **Wandershot — Travel Photography**: [https://papaya-cranachan-dbf27d.netlify.app/](https://papaya-cranachan-dbf27d.netlify.app/)
  - Direct live launch buttons + in-browser device simulator launcher!
- **Interactive Multi-Project Hero Showcase**: Browser mockup with live switcher tabs, floating telemetry badges, and hero quick-launch pills with pulsing beacons.
- **Infinite Ambient Marquee Ticker**: Continuous horizontal ribbon showcasing live projects and capabilities.
- **Custom Magnetic Cursor & Spotlight Hover**: High-end boutique agency physics with magnetic follower dot and cards that illuminate with radial gradients following the mouse cursor.
- **Embedded Interactive Device Simulator**: View any live website or prototype directly inside simulated Desktop, Tablet, and Mobile viewports with realistic device bezels!
- **8 Dedicated Services**: Complete with deliverable checkmarks and one-click inquiry links.
- **5-Step Process Timeline**: Discover → Plan → Design → Build → Launch.
- **8 Why Work With Me Bento Cards**: Modern Design, Mobile Responsive, Fast & Optimized, Custom-Built, Clear Communication, Business-Focused, Scalable Architecture, and Post-Launch Support.
- **Technologies & Tools Grid**: HTML5, CSS3, JavaScript, React, Next.js, WordPress, Figma, Canva, GitHub, Vercel, AI Tools, Chatbots, Automation Tools.
- **Client Testimonials**: Realistic feedback, roles, companies, 5-star ratings, and avatars.
- **FAQ Accordion**: Smooth, accessible accordion answering the 8 most critical client questions.
- **Comprehensive Project Inquiry Form**:
  - Name, Email, Phone/WhatsApp, Brand Name
  - Website Type dropdown
  - Interactive Budget Range selection pills
  - Required Features multi-select checklist
  - Direct WhatsApp chat link generator formatting inquiries into pre-filled WhatsApp messages.

---

## 📁 File Structure

```
├── index.html              # Main HTML5 page with all semantic sections & SEO meta
├── css/
│   ├── style.css           # Core design system tokens, typography, navbar, footer
│   ├── components.css      # Hero mockup, project cards, case study & simulator modals, FAQ
│   └── responsive.css     # Mobile, tablet, laptop & desktop breakpoints
├── js/
│   ├── config.js           # Centralized CMS configuration file (Edit all content here!)
│   ├── app.js              # Dynamic rendering engine, filter tabs, modal controls, form
│   └── animations.js       # Scroll reveal observer, sticky blur navbar, 3D mouse tilt
└── assets/
    └── images/             # High-resolution project mockups & client avatars
```

---

## 🛠️ How to Customize Your Website (In 2 Minutes)

All content, personal details, social links, projects, pricing, and FAQs are located in a single file: **`js/config.js`**.

### 1. Update Your Name & Brand
Open `js/config.js` and edit the `brand` object:
```javascript
brand: {
  name: "Your Full Name",
  brandTitle: "YOURNAME.STUDIO",
  role: "Freelance Website Designer & Developer",
  tagline: "Websites That Turn Ideas Into Digital Experiences.",
  bio: "Your custom bio description...",
  availability: "Available for New Projects • Q4 2026",
  statusBadge: "Accepting 2 New Client Projects"
}
```

### 2. Update Contact Details & WhatsApp Number
In `js/config.js`, update `contact`:
```javascript
contact: {
  email: "your-email@domain.com",
  whatsappNumber: "+1234567890", // include country code without spaces
  whatsappDisplay: "+1 (555) 234-5678",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourhandle"
}
```

### 3. Add or Replace Projects & Prototypes
To add a new project, add an entry to the `projects` array in `js/config.js`:
```javascript
{
  id: "my-new-project",
  title: "My Client Website Name",
  category: "Business", // or E-commerce, Portfolio, Landing Page, AI, Creative
  tags: ["Business", "Landing Page"],
  shortDesc: "Short summary of what this website does.",
  thumbnail: "assets/images/my-screenshot.jpg",
  featured: true,
  technologies: ["React", "Next.js", "TailwindCSS"],
  prototypeLink: "https://my-live-demo.vercel.app/",
  liveWebsiteLink: "https://my-live-demo.vercel.app/",
  badge: "Live Production",
  stats: { metric1: "+180%", label1: "Conversion Lift", metric2: "0.4s", label2: "Speed", metric3: "100%", label3: "Mobile Score" },
  caseStudy: {
    client: "Client Name",
    businessType: "Industry Type",
    timeline: "3 Weeks",
    objective: "What we set out to build...",
    problem: "The challenge the client faced...",
    solution: "How we designed and built the solution...",
    designApproach: "Colors, typography, and UX rationale...",
    keyFeatures: ["Feature 1", "Feature 2", "Feature 3"],
    results: "Tangible business metrics achieved..."
  }
}
```

### 4. Edit Pricing & FAQs
You can modify prices, deliverables, and answers directly under `pricing` and `faqs` in `js/config.js`.

---

## 🚀 Deployment (Zero Build Setup Required)

This website uses pure modern standards (HTML5, Vanilla CSS3, ES6+ JavaScript) with zero build or bundler dependencies.

### Deploy to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or push your folder to GitHub.
2. Import the repository in [vercel.com](https://vercel.com).
3. Framework Preset: **Other / None** (Static).
4. Click **Deploy**. Your site will be live on an ultra-fast edge CDN within 10 seconds!

### Deploy to Netlify
1. Drag and drop this folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
2. It's live instantly with custom domain support and free SSL.

### Deploy to GitHub Pages
1. Push to your repository.
2. Go to **Settings > Pages > Branch: main > / (root)** and click **Save**.
