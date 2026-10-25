import type { Project } from "@/data/profile";
import { ArrowUpRightIcon } from "./icons";
import { Tag } from "./section";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        {project.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden />
            {project.status}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      <p className="mt-4 leading-relaxed">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </ul>

      <ProjectLinks project={project} />
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line p-5 transition-colors hover:border-accent/50">
      <h3 className="font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-1 text-xs text-muted">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
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
          className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          {link.label}
          <ArrowUpRightIcon />
          <span className="sr-only">for {project.name} (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
