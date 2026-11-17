// Single source of truth for portfolio content. Edit this file to update the site.

export type Link = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  points: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status?: string;
  featured?: boolean;
  links: Link[];
};

export type Service = {
  title: string;
  description: string;
  stack: string[];
};

export const profile = {
  name: "Usama Manzoor",
  firstName: "Usama",
  role: "Full-Stack Software Engineer",
  heroLead: "Looking for a",
  heroHighlight: "Reliable Full-Stack Engineer?",
  headline:
    "I design and build fast, secure web applications and APIs, from the database to the interface, so your product ships on time and keeps working as it grows.",
  intro:
    "I'm a full-stack software engineer working with Python, Django, Next.js and React. I build products end to end: clean REST APIs, well-modelled Postgres databases, and polished interfaces your users enjoy.",
  summary:
    "I care about the details that keep software dependable after launch: security rules enforced in the database, typed code, sensible caching and interfaces that work on every screen. Alongside web development I build AI features with LLMs, agents and machine learning, so your product can do more than store and display data.",
  location: "Lahore, Pakistan",
  email: "usamamanzoor0260@gmail.com",
  availability: "Available for new projects",
  resume: "/Usama-Manzoor-Resume.pdf",
  // Circular portrait with a transparent background, shown once in the hero.
  photo: "/images/profile.webp",
  socials: {
    github: "https://github.com/umanzoor02",
    linkedin: "https://www.linkedin.com/in/usamamanzoor02/",
  },
} as const;

export const stats: { value: string; label: string }[] = [
  { value: "12+", label: "Projects built" },
  { value: "4", label: "Core services" },
  { value: "15+", label: "Technologies" },
];

export const services: Service[] = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Complete products built end to end: authentication, dashboards, admin panels and responsive interfaces, deployed and ready for real users.",
    stack: ["Next.js", "React", "Django", "PostgreSQL"],
  },
  {
    title: "Backend & REST APIs",
    description:
      "Well-structured APIs with clear data models, validation and permissions, ready for your web app, mobile app or partners to build on.",
    stack: ["Django REST Framework", "FastAPI", "PostgreSQL"],
  },
  {
    title: "AI & LLM Integrations",
    description:
      "Practical AI features such as smart assistants, email and document agents, and ML models wired into your existing product.",
    stack: ["LLMs", "Prompt Engineering", "Machine Learning"],
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect your product to the services it depends on: e-signatures, Google and Gmail APIs, OAuth sign-in, storage and more.",
    stack: ["DocuSign", "Google APIs", "OAuth2", "Supabase"],
  },
];

export const experience: Experience[] = [
  {
    company: "Bitsclan IT Solutions",
    role: "Software Developer",
    period: "Aug 2026 – Present",
    location: "Lahore",
    stack: ["Python", "Django", "DRF", "Next.js", "React"],
    points: [
      "Build and extend backend APIs with Django and Django REST Framework for client products.",
      "Ship UI pages and components in Next.js and React.",
      "Connect frontends to REST APIs, manage data flow and deliver UI updates to production.",
    ],
  },
  {
    company: "Techlaxis",
    role: "Django Developer",
    period: "May 2026 – Jul 2026",
    location: "Lahore",
    stack: ["Python", "Django", "REST API", "DocuSign"],
    points: [
      "Built and maintained Django applications across models, views and REST APIs.",
      "Delivered DocuSign embedded signing on a client's owner-facing site so users sign documents without leaving the app.",
      "Owned backend logic, database models and third-party API integrations on live client projects.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "clan",
    name: "Build Clan",
    tagline: "Social goal-tracking app that turns goals into action, together",
    description:
      "Members pick from 15 research-based goal plans, such as landing a job, learning a skill, fixing their sleep or building savings. Each plan is broken into milestones and small steps. When members finish a step, they reflect on what they did, what got in the way and how they got past it, and their journey is shared in a community feed where others like, comment, follow and help.",
    highlights: [
      "Structured goal plans with milestones, steps, points and progress tracking.",
      "\"Ask for help\" on any step alerts other members working on the same goal.",
      "Real-time social feed with live likes, comments and a new-posts alert.",
      "Private messaging with online status, typing indicators and read receipts, plus live notifications, search, profiles and followers.",
      "Security reviewed: row-level security on every table, rate limits, private photo storage and security headers.",
      "Google sign-in, admin panel for goals, reports and feedback, and a responsive monochrome design.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Realtime", "Vercel"],
    featured: true,
    links: [{ label: "Live site", href: "https://build-clan.vercel.app/" }],
  },
  {
    slug: "nurturenani",
    name: "NurtureNani",
    tagline: "Parenting companion for first-time parents: a wise Nani in your pocket",
    description:
      "Everyday baby and child care from newborn to 5 years, based on WHO and AAP guidance. Built as a monorepo with a parent app, a doctor consultation app and a governance console where clinical and legal reviewers approve content before parents see it.",
    highlights: [
      "Parent app with symptom checks, care guides, feeding plans, milestones and vaccine schedules, with red flags, first aid and emergency numbers that work offline.",
      "Triage engine that stores symptom guides as data and gates releases on a red-flag test suite.",
      "NestJS API with password plus mandatory two-factor sign-in, role-based access and an append-only, hash-chained audit log.",
      "Next.js console for admins, clinical reviewers, consulting doctors and per-country legal reviewers.",
    ],
    stack: ["TypeScript", "React Native (Expo)", "Next.js", "NestJS", "PostgreSQL", "Monorepo"],
    status: "In active development",
    featured: true,
    links: [{ label: "Live site", href: "https://nurture-nani-parent.vercel.app/" }],
  },
  {
    slug: "job-hunter",
    name: "Job Hunter",
    tagline: "Automated job search and application assistant",
    description:
      "A Python automation tool that runs every morning: it collects about 1,500 job listings a day from 10+ sources, ranks them against a candidate profile and applies by email or by filling in online application forms in a real browser.",
    highlights: [
      "Pulls from job boards, company career pages on Greenhouse, Lever, Ashby and Workable, Hacker News, and LinkedIn and Indeed alert emails.",
      "Scores each job against skills, seniority and location (local, remote or visa-sponsored abroad).",
      "Sends tailored email applications, or uses Playwright to upload the resume, fill each field from truthful answer rules and submit, handing the form to a person only when a CAPTCHA appears.",
      "A local LLM (Qwen3 via Ollama) screens out jobs with unmet requirements, and rule-based checks confirm every reason against the ad so the model can't invent blockers.",
      "Progress dashboard with daily charts, plus a summary email after every run.",
    ],
    stack: ["Python", "Playwright", "Web Scraping", "SQLite", "Ollama", "LLM Integration", "Automation"],
    featured: true,
    links: [],
  },
  {
    slug: "desi-cravings",
    name: "Desi Cravings",
    tagline: "Storefront redesign concept for a Lahore home-food brand",
    description:
      "A design concept pitched to a homemade achar and masala brand: a premium, handmade feel in place of a generic theme, with the founder's story up front and ordering built around how the store actually sells.",
    highlights: [
      "Custom design system with hand-written CSS, responsive from phone to desktop.",
      "Catalogue of 18 products in 5 categories, with product, category and shop pages.",
      "Cart, checkout and order tracking, with WhatsApp ordering and 50% advance plus cash-on-delivery payment.",
      "Founder story, how-to-order steps and an FAQ on delivery and payments.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Design concept",
    featured: true,
    links: [{ label: "Live site", href: "https://desi-cravings-concept.vercel.app/" }],
  },
  {
    slug: "nurtureai",
    name: "NurtureAI",
    tagline: "AI-assisted child development platform",
    description:
      "A full-stack platform that helps parents support their child's mental, educational and physical growth with personalized, data-driven insights.",
    highlights: [
      "React frontend and Django backend connected through a REST API.",
      "A custom machine learning model analyzes user-provided data to flag early signs of anxiety disorders.",
    ],
    stack: ["Python", "Django", "React", "REST API", "Machine Learning"],
    featured: true,
    links: [{ label: "Source", href: "https://github.com/umanzoor02/nurture-project" }],
  },
  {
    slug: "job-email-agent",
    name: "Job Email Agent",
    tagline: "AI agent that surfaces the emails that matter",
    description:
      "Connects to Gmail with read-only OAuth, reads the inbox and runs an agent that flags important job-related messages, with summaries in a React dashboard.",
    highlights: [
      "Django handles OAuth2, Gmail API access and agent logic, with a keyword fallback.",
      "React dashboard talks to the API over REST with session cookies.",
    ],
    stack: ["Django", "React", "Gmail API", "OAuth2", "LLM Agents"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/emailAgent" }],
  },
  {
    slug: "route-fuel-api",
    name: "Route & Fuel Optimization API",
    tagline: "Route planning with fuel cost optimization",
    description: "A Django REST Framework API that plans a route and picks cost-effective fuel stops along it.",
    highlights: [],
    stack: ["Python", "Django REST Framework"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/spotter-fuel-api" }],
  },
  {
    slug: "time-off-microservice",
    name: "Time-Off Microservice",
    tagline: "Leave management with an HR system of record",
    description:
      "A NestJS and SQLite service that manages time-off requests, caches leave balances and syncs with an HR system, handling failures and concurrent approvals safely.",
    highlights: [],
    stack: ["TypeScript", "NestJS", "SQLite"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/time-off-microservice" }],
  },
  {
    slug: "docusign-integration",
    name: "DocuSign Embedded Signing",
    tagline: "In-app document signing",
    description: "Embedded signing built on DocuSign's eSignature API, so users sign documents without leaving the app.",
    highlights: [],
    stack: ["Python", "Django", "DocuSign API"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/docusign-integration" }],
  },
  {
    slug: "task-management",
    name: "Task Management App",
    tagline: "Full-stack task tracker",
    description: "A task manager with a Django REST Framework backend and a Next.js frontend.",
    highlights: [],
    stack: ["Django REST Framework", "Next.js"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/task-management-app" }],
  },
  {
    slug: "savora",
    name: "Savora",
    tagline: "Recipe and category manager",
    description: "Recipe management with custom forms and relational data, every recipe organized under a category.",
    highlights: [],
    stack: ["Python", "Django"],
    links: [],
  },
  {
    slug: "quillary",
    name: "Quillary",
    tagline: "Blogging platform",
    description: "A blogging platform with user accounts, pagination and search.",
    highlights: [],
    stack: ["Python", "Django"],
    links: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Python", "Django", "Django REST Framework", "FastAPI", "NestJS", "C++"],
  },
  { group: "Data & Cloud", items: ["PostgreSQL", "MySQL", "Supabase", "Vercel", "REST APIs", "OAuth2"] },
  {
    group: "AI",
    items: ["Generative AI", "LLMs", "Conversational AI", "Prompt Engineering", "Machine Learning"],
  },
];

export const education = {
  school: "University of Central Punjab, Lahore",
  degree: "B.S. in Computer Science",
  period: "2021 – 2025",
};

export const certifications = ["AI Fluency Framework", "Claude 101"];

export const navItems: Link[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];
