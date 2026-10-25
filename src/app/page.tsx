import {
  certifications,
  education,
  experience,
  profile,
  projects,
  services,
  skills,
  stats,
} from "@/data/profile";
import { Section, Tag } from "@/components/section";
import { FeaturedProject, ProjectCard } from "@/components/project-card";
import { HeroPhoto } from "@/components/hero-photo";
import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const featured = projects.filter((p) => p.featured);
const other = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="about"
        number="01"
        label="Who I am"
        title={
          <>
            Welcome! I&apos;m <strong>{profile.name}</strong>, a <strong>full-stack engineer</strong> who turns
            ideas into dependable software
          </>
        }
      >
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-paper-muted">
            <p>{profile.intro}</p>
            <p>{profile.summary}</p>
          </div>
          <dl className="grid grid-cols-3 gap-3 self-start">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-2xl border border-paper-line p-5 text-center">
                <span className="mb-3 block text-paper-muted" aria-hidden>
                  →
                </span>
                <dt className="order-last mt-1 text-xs text-paper-muted sm:text-sm">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section
        id="services"
        number="02"
        label="Services"
        tone="dark"
        title={
          <>
            How I can <strong>help your business</strong>
          </>
        }
      >
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-ink-line bg-ink-line sm:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.title} className="group bg-ink p-8 transition-colors hover:bg-ink-raised sm:p-10">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-mint">{String(i + 1).padStart(2, "0")}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ink-muted transition-colors group-hover:border-mint group-hover:bg-mint group-hover:text-mint-ink">
                  <ArrowUpRightIcon />
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{s.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <Tag key={t} dark>
                    {t}
                  </Tag>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="work"
        number="03"
        label="Portfolio"
        tone="soft"
        title={
          <>
            Selected <strong>work</strong>
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} index={i} />
          ))}
        </div>
        <h3 className="mt-20 text-2xl font-bold">More projects</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        number="04"
        label="Experience"
        title={
          <>
            Where I&apos;ve <strong>shipped</strong>
          </>
        }
      >
        <ol className="divide-y divide-paper-line border-y border-paper-line">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-4 py-8 md:grid-cols-[260px_1fr]">
              <div>
                <p className="text-sm text-paper-muted">{job.period}</p>
                <h3 className="mt-1 text-xl font-bold">{job.company}</h3>
                <p className="mt-1 inline-block rounded-full bg-mint px-3 py-0.5 text-sm font-semibold text-mint-ink">
                  {job.role}
                </p>
              </div>
              <div>
                <ul className="space-y-2 leading-relaxed text-paper-muted">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-2xl font-bold">Tech stack</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <h4 className="text-sm font-semibold text-paper-muted">{s.group}</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <dl className="space-y-6 self-start rounded-3xl bg-paper-soft p-7">
            <div>
              <dt className="text-sm font-semibold text-paper-muted">Education</dt>
              <dd className="mt-1 font-bold">{education.degree}</dd>
              <dd className="text-paper-muted">
                {education.school} · {education.period}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-paper-muted">Certifications</dt>
              {certifications.map((c) => (
                <dd key={c} className="mt-1 font-medium">
                  {c}
                </dd>
              ))}
            </div>
          </dl>
        </div>
      </Section>

      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-ink text-white">
      <Asterisk className="absolute -right-24 top-10 h-96 w-96 text-white/[0.03]" />
      <Asterisk className="absolute -left-20 bottom-0 h-64 w-64 text-white/[0.03]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 md:grid-cols-[1.3fr_1fr] md:pb-32 md:pt-24">
        <div>
          <h1 id="hero-heading" className="text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block font-light text-ink-muted">{profile.heroLead}</span>
            <span className="block font-bold">{profile.heroHighlight}</span>
          </h1>
          <div className="mt-8 flex items-center gap-2 text-ink-muted" aria-hidden>
            <span className="h-px w-28 border-t border-dashed border-ink-muted" />
            <span>→</span>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{profile.headline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-semibold text-mint-ink transition-colors hover:bg-mint-strong"
            >
              Start a project <ArrowUpRightIcon />
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink-line px-6 py-3 font-semibold transition-colors hover:border-mint hover:text-mint"
            >
              See my work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2">
            <SocialLink href={profile.socials.github} label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href={profile.socials.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon />
            </SocialLink>
          </div>
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-ink text-white">
      <Asterisk className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-white/[0.03]" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">Have a project in mind?</p>
        <h2 id="contact-heading" className="mt-4 text-5xl tracking-tight sm:text-7xl">
          <span className="block font-light">Let&apos;s Work</span>
          <span className="block font-bold">Together</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
          Tell me what you&apos;re building. I&apos;ll reply within a day with questions, a clear plan and an
          estimate.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 font-semibold text-mint-ink transition-colors hover:bg-mint-strong"
          >
            <MailIcon /> Email me
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-line px-7 py-3.5 font-semibold transition-colors hover:border-mint hover:text-mint"
          >
            <LinkedInIcon /> Message on LinkedIn
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-ink-line px-7 py-3.5 font-semibold transition-colors hover:border-mint hover:text-mint"
          >
            <DownloadIcon /> Resume
          </a>
        </div>
        <p className="mt-6 text-sm text-ink-muted">{profile.email}</p>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-ink-muted transition-colors hover:border-mint hover:text-mint"
    >
      {children}
    </a>
  );
}

function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none ${className}`} fill="currentColor" aria-hidden>
      {[0, 60, 120].map((deg) => (
        <rect key={deg} x="42" y="0" width="16" height="100" rx="8" transform={`rotate(${deg} 50 50)`} />
      ))}
    </svg>
  );
}
