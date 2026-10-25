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

export const profile = {
  name: "Usama Manzoor",
  role: "Software Engineer",
  headline: "Full-stack developer building with Python, Django, Next.js and React.",
  summary:
    "Computer Science graduate and Software Developer Intern who builds full-stack web applications end to end, from Django REST APIs and Postgres schemas to Next.js and React interfaces. I also work with Generative AI, prompt engineering and machine learning, and I'm looking for an entry-level Software Engineer role (backend, full-stack or AI-adjacent) in Lahore, on-site or hybrid.",
  location: "Lahore, Pakistan",
  email: "usamamanzoor0260@gmail.com",
  availability: "Open to entry-level Software Engineer roles",
  resume: "/Usama-Manzoor-Resume.pdf",
  socials: {
    github: "https://github.com/umanzoor02",
    linkedin: "https://www.linkedin.com/in/usamamanzoor02/",
  },
} as const;

export const experience: Experience[] = [
  {
    company: "Bitsclan IT Solutions",
    role: "Software Developer Intern",
    period: "Aug 2026 – Present",
    location: "Lahore",
    stack: ["Python", "Django", "DRF", "Next.js", "React"],
    points: [
      "Build and update backend APIs in Python with Django and Django REST Framework as part of full-stack product work.",
      "Implement UI pages and components in Next.js and React.",
      "Connect the frontend to REST APIs, handle data flow and ship UI updates.",
    ],
  },
  {
    company: "Techlaxis",
    role: "Django Developer Intern",
    period: "May 2026 – Jul 2026",
    location: "Lahore",
    stack: ["Python", "Django", "REST API", "DocuSign"],
    points: [
      "Built and maintained Django web apps across models, views and REST APIs.",
      "Implemented DocuSign embedded signing on a client's owner-facing site so users could sign documents in-app.",
      "Worked on backend logic, database models and third-party API integrations, shipping features on live Django projects.",
    ],
  },
  {
    company: "Motive",
    role: "Data Annotator",
    period: "Nov 2025 – May 2026",
    location: "Lahore",
    stack: ["Computer Vision", "Data Labeling", "QA"],
    points: [
      "Annotated image and video datasets for machine learning models using bounding boxes, segmentation and classification.",
      "Reviewed and validated annotations, corrected labeling errors and kept data quality consistent for model training.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "clan",
    name: "Clan",
    tagline: "Social accountability platform for reaching goals together",
    description:
      "Pick a goal, follow a structured step-by-step plan, upload proof of progress and get support from people on the same path. Admins review evidence, and approved steps award points and move the goal forward.",
    highlights: [
      "Points, progress and goal completion run in Postgres triggers, so clients can never write their own scores; row-level security and column grants enforce it.",
      "Evidence photos are compressed in the browser to about 200 KB WebP, stored in a private bucket and served through signed URLs.",
      "Uploading evidence automatically posts to a community feed, with notifications, profiles and an admin queue for evidence, goal plans and reports.",
      "Google OAuth and email sign-in through Supabase Auth, with Server Actions for every mutation.",
    ],
    stack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    status: "In active development",
    featured: true,
    links: [],
  },
  {
    slug: "nurtureai",
    name: "NurtureAI",
    tagline: "Child development support platform · Final year project",
    description:
      "A full-stack platform that helps parents support their child's mental, educational and physical growth through personalized, data-driven insights.",
    highlights: [
      "Designed the React frontend and Django backend, connected through a RESTful API.",
      "Integrated a custom machine learning model that analyzes user-provided data to flag early signs of anxiety disorders.",
    ],
    stack: ["Python", "Django", "React", "REST API", "Machine Learning"],
    featured: true,
    links: [{ label: "Source", href: "https://github.com/umanzoor02/nurture-project" }],
  },
  {
    slug: "job-email-agent",
    name: "Job Email Agent",
    tagline: "AI agent that surfaces the emails that matter for your job",
    description:
      "Connects to Gmail with read-only OAuth, reads the inbox and runs an email agent that flags job-relevant messages. A React dashboard triggers checks and shows summaries.",
    highlights: [
      "Django handles OAuth2, Gmail API access and the agent logic, with a keyword-heuristic fallback.",
      "React dashboard talks to the API over REST with session cookies.",
    ],
    stack: ["Django", "React", "Gmail API", "OAuth2", "LLM Agents"],
    featured: true,
    links: [{ label: "Source", href: "https://github.com/umanzoor02/emailAgent" }],
  },
  {
    slug: "route-fuel-api",
    name: "Route & Fuel Optimization API",
    tagline: "Route planning with fuel cost optimization",
    description:
      "A Django REST Framework API that plans a route and picks cost-effective fuel stops along it.",
    highlights: [],
    stack: ["Python", "Django REST Framework", "REST API"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/spotter-fuel-api" }],
  },
  {
    slug: "time-off-microservice",
    name: "Time-Off Microservice",
    tagline: "Leave requests with an HCM source of truth",
    description:
      "A NestJS and SQLite service that manages time-off requests, caches leave balances and syncs with a mock HCM, handling failures and concurrent approvals conservatively.",
    highlights: [],
    stack: ["TypeScript", "NestJS", "SQLite"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/time-off-microservice" }],
  },
  {
    slug: "docusign-integration",
    name: "DocuSign Embedded Signing",
    tagline: "In-app document signing with the eSignature API",
    description:
      "Embedded signing flow built on DocuSign's eSignature API, so users sign documents without leaving the app.",
    highlights: [],
    stack: ["Python", "Django", "DocuSign API"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/docusign-integration" }],
  },
  {
    slug: "task-management",
    name: "Task Management App",
    tagline: "Full-stack task tracker",
    description: "A full-stack task manager with a Django REST Framework backend and a Next.js frontend.",
    highlights: [],
    stack: ["Django REST Framework", "Next.js"],
    links: [{ label: "Source", href: "https://github.com/umanzoor02/task-management-app" }],
  },
  {
    slug: "savora",
    name: "Savora",
    tagline: "Recipe and category manager",
    description:
      "Custom Django forms with one-to-one and one-to-many relations, with every recipe organized under a category.",
    highlights: [],
    stack: ["Python", "Django"],
    links: [],
  },
  {
    slug: "quillary",
    name: "Quillary",
    tagline: "Blogging platform",
    description: "A blogging platform with user authentication, pagination and search.",
    highlights: [],
    stack: ["Python", "Django"],
    links: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & Frameworks",
    items: ["Python", "TypeScript", "C++", "Django", "Django REST Framework", "FastAPI", "Next.js", "React", "HTML", "CSS"],
  },
  { group: "Data & Backend", items: ["PostgreSQL", "MySQL", "Supabase", "REST APIs", "Third-party API integrations"] },
  {
    group: "AI",
    items: ["Generative AI", "LLMs", "Conversational AI", "Prompt Engineering", "Machine Learning", "Data Annotation"],
  },
  { group: "Spoken Languages", items: ["English (Full Professional)", "Urdu (Native)"] },
];

export const education = {
  school: "University of Central Punjab, Lahore",
  degree: "B.S. in Computer Science",
  period: "Oct 2021 – Jul 2025",
};

export const certifications = ["AI Fluency Framework", "Claude 101"];

export const navItems: Link[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
