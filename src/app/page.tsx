import { certifications, education, experience, profile, projects, skills } from "@/data/profile";
import { Section, Tag } from "@/components/section";
import { FeaturedProject, ProjectCard } from "@/components/project-card";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";

const featured = projects.filter((p) => p.featured);
const other = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="about" eyebrow="01 · About" title="A bit about me">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <dl className="space-y-5 rounded-xl border border-line bg-surface p-6 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Education</dt>
              <dd className="mt-1 font-medium">{education.degree}</dd>
              <dd className="text-muted">{education.school}</dd>
              <dd className="text-muted">{education.period}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Certifications</dt>
              {certifications.map((c) => (
                <dd key={c} className="mt-1">
                  {c}
                </dd>
              ))}
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Based in</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section id="experience" eyebrow="02 · Experience" title="Where I've worked">
        <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent sm:-left-[37px]"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="projects" eyebrow="03 · Projects" title="Things I've built">
        <div className="space-y-6">
          {featured.map((p) => (
            <FeaturedProject key={p.slug} project={p} />
          ))}
        </div>
        <h3 className="mt-16 text-lg font-semibold">More projects</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="04 · Skills" title="Tools I work with">
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="text-sm font-semibold">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="05 · Contact" title="Let's work together">
        <div className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
          <p className="mx-auto max-w-xl text-lg text-muted">
            I&apos;m looking for an entry-level Software Engineer role in Lahore (on-site or hybrid). If you have
            a role, a project or just a question, my inbox is open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MailIcon /> Say hello
          </a>
          <p className="mt-4 font-mono text-sm text-muted">{profile.email}</p>
        </div>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pb-16 pt-20 sm:pb-24 sm:pt-32">
      <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
        {profile.availability}
      </p>
      <h1 id="hero-heading" className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-2xl font-medium tracking-tight text-muted sm:text-3xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.headline}</p>
      <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
        <MapPinIcon /> {profile.location}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <DownloadIcon /> Download resume
        </a>
        <div className="ml-1 flex items-center gap-1">
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground"
    >
      {children}
    </a>
  );
}
