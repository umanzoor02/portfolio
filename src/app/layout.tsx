import type { Metadata, Viewport } from "next";
import { Geist_Mono, Urbanist } from "next/font/google";
import { Header } from "@/components/header";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} · ${profile.role}`;
const description =
  "Full-stack software engineer building fast, secure web applications, REST APIs and AI integrations with Python, Django, Next.js and React. Available for new projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Usama Manzoor",
    "Full-Stack Software Engineer",
    "Freelance Web Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "AI Integration",
    "Lahore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    firstName: "Usama",
    lastName: "Manzoor",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#111312",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Central Punjab" },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: ["Python", "Django", "Next.js", "React", "PostgreSQL", "Generative AI"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${urbanist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-mint px-4 py-2 font-semibold text-mint-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-ink-line bg-ink text-ink-muted">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
            <p className="flex items-center gap-2 font-semibold text-white">
              <Logo /> {profile.name}
            </p>
            <p>{profile.role} · Lahore, Pakistan</p>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-bold text-mint-ink">
      U
    </span>
  );
}
