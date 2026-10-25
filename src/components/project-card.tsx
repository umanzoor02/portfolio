import type { Project } from "@/data/profile";
import { ArrowUpRightIcon } from "./icons";
import { Tag } from "./section";

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const lead = index === 0;
  return (
    <article
      className={`flex flex-col rounded-3xl p-7 sm:p-9 ${
        lead ? "bg-ink text-white md:col-span-2" : "border border-paper-line bg-paper"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`font-mono text-sm ${lead ? "text-mint" : "text-paper-muted"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-mint-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-ink motion-safe:animate-pulse" aria-hidden />
            {project.status}
          </span>
        )}
      </div>
      <h3 className={`mt-6 font-bold tracking-tight ${lead ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{project.name}</h3>
      <p className={`mt-1 ${lead ? "text-mint" : "text-paper-muted"}`}>{project.tagline}</p>

      <div className={lead ? "mt-6 grid gap-8 md:grid-cols-2" : "mt-5"}>
        <p className={`leading-relaxed ${lead ? "text-lg text-ink-muted" : "text-paper-muted"}`}>
          {project.description}
        </p>
        {project.highlights.length > 0 && (
          <ul className={`space-y-3 text-sm leading-relaxed ${lead ? "text-ink-muted" : "mt-5 text-paper-muted"}`}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto pt-7">
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((s) => (
            <Tag key={s} dark={lead}>
              {s}
            </Tag>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-paper-line bg-paper p-6 transition-shadow hover:shadow-lg">
      <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
      <p className="mt-0.5 text-sm text-paper-muted">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </ul>
      <ProjectLinks project={project} />
    </article>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) return null;
  return (
    <div className="mt-5 flex gap-4">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-current px-3 py-1 text-sm font-semibold transition-colors hover:bg-mint hover:text-mint-ink hover:border-mint"
        >
          {link.label}
          <ArrowUpRightIcon />
          <span className="sr-only">for {project.name} (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-mint-strong"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
