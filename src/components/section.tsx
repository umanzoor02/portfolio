import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  tone?: "light" | "soft" | "dark";
  children: ReactNode;
};

const tones = {
  light: "bg-paper text-text",
  soft: "bg-paper-soft text-text",
  dark: "bg-ink text-white",
};

// Template-style section: a small numbered label on the left, a large centred heading.
export function Section({ id, number, label, title, tone = "light", children }: SectionProps) {
  const headingId = `${id}-heading`;
  const dark = tone === "dark";
  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-16 py-20 sm:py-28 ${tones[tone]}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-4 md:grid-cols-[180px_1fr_180px]">
          <p className={`flex items-center gap-3 text-sm ${dark ? "text-ink-muted" : "text-paper-muted"}`}>
            <span className="font-mono">{number}</span>
            <span className={`h-px w-8 ${dark ? "bg-ink-line" : "bg-paper-line"}`} aria-hidden />
            {label}
          </p>
          <h2
            id={headingId}
            className="text-3xl font-light leading-tight tracking-tight sm:text-5xl md:text-center [&_strong]:font-bold"
          >
            {title}
          </h2>
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        dark ? "border border-ink-line text-ink-muted" : "bg-paper-soft text-paper-muted"
      }`}
    >
      {children}
    </li>
  );
}
