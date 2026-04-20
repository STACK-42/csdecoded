import { ReactNode } from "react";

type Tone = "neon" | "orange" | "sky" | "violet" | "mint";

const toneMap: Record<Tone, { bar: string; text: string; bg: string }> = {
  neon:   { bar: "bg-neon",   text: "text-neon",   bg: "bg-neon/10" },
  orange: { bar: "bg-orange", text: "text-orange", bg: "bg-orange/10" },
  sky:    { bar: "bg-sky",    text: "text-sky",    bg: "bg-sky/10" },
  violet: { bar: "bg-violet", text: "text-violet", bg: "bg-violet/10" },
  mint:   { bar: "bg-mint",   text: "text-mint",   bg: "bg-mint/10" },
};

export function Callout({
  tone = "orange",
  label,
  children,
}: {
  tone?: Tone;
  label?: string;
  children: ReactNode;
}) {
  const t = toneMap[tone];
  return (
    <aside className={`my-8 border-l-2 pl-5 py-4 ${t.bg}`} style={{ borderColor: `hsl(var(--${tone === "neon" ? "neon" : tone}))` }}>
      {label && (
        <div className={`eyebrow mb-2 ${t.text}`}>{label}</div>
      )}
      <div className="text-base leading-relaxed text-foreground/90 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

export function PracticalApplication({
  title,
  tool,
  children,
}: {
  title: string;
  tool?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-4 rounded-sm border border-border bg-card p-5 transition hover:border-foreground/30">
      <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
        <h4 className="font-display text-lg font-bold leading-tight">{title}</h4>
        {tool && <span className="eyebrow text-orange">{tool}</span>}
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function Pillar({
  number,
  title,
  origin,
  children,
}: {
  number: string;
  title: string;
  origin?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="my-12 not-prose">
      <div className="mb-4 flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted-foreground tracking-widest">{number}</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {origin && (
        <div className="mb-4 border-l-2 border-orange/60 pl-4 italic text-sm text-muted-foreground">
          <span className="not-italic font-semibold text-foreground">Origin: </span>{origin}
        </div>
      )}
      <div className="grid gap-3 md:grid-cols-2">{children}</div>
    </section>
  );
}

export function ApplicationsGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid gap-3 md:grid-cols-2">{children}</div>;
}
