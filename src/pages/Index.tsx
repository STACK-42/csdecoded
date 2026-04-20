import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteHeader, SiteFooter } from "@/components/layout/SiteChrome";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/content/registry";

export default function Index() {
  useEffect(() => {
    document.title = "Decoded — CS Theory to Real-World Skills";
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground relative">
      {/* grid texture */}
      <div className="grid-noise pointer-events-none fixed inset-0 z-0" aria-hidden />

      <SiteHeader variant="dark" />

      {/* HERO */}
      <section className="relative z-10 border-b border-border">
        <div className="container py-20 md:py-28 max-w-4xl">
          <div className="eyebrow text-neon mb-5">CS Theory · Real-world skills extraction</div>
          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
            Computer science,
            <br />
            <span className="text-neon">decoded</span> into the
            <br />
            tools you already use.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground italic font-body leading-relaxed">
            Every abstraction in a CS curriculum maps to something engineers use daily — they just never told you that.
            This is the layer that bridges the gap.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/courses/theory-of-computation"
              className="inline-flex items-center gap-2 bg-neon text-background px-5 py-3 font-mono text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition"
            >
              Start with Theory of Computation
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-foreground/40 transition"
            >
              Browse all tracks
            </Link>
          </div>

          {/* Legend */}
          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] text-muted-foreground tracking-widest">
            <Legend dot="bg-neon" label="Available" />
            <Legend dot="bg-orange" label="Available" />
            <Legend dot="bg-sky/60" label="Coming soon" />
            <Legend dot="bg-violet/60" label="Coming soon" />
            <Legend dot="bg-mint/60" label="Coming soon" />
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="relative z-10 border-b border-border">
        <div className="container py-16 md:py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            The problem nobody names
          </h2>
          <div className="font-body text-lg leading-relaxed text-foreground/80 space-y-5">
            <p>
              Most CS courses teach you the mathematical scaffolding that practitioners use without
              knowing they're using it. Theory of Computation is the perfect example —
              built by Turing, Church, and Kleene to answer one question:
              <em> what can a machine fundamentally compute?</em>
            </p>
            <p>
              That question quietly produced regex, parsers, every CPU ever made, the limits of
              antivirus software, and the cryptography that protects your bank account. Most
              syllabi never make those connections explicit.
            </p>
            <p className="text-neon">
              Decoded does. One topic at a time.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE GRID */}
      <section id="courses" className="relative z-10">
        <div className="container py-20 max-w-5xl">
          <div className="flex items-baseline justify-between mb-10 gap-4 flex-wrap">
            <div>
              <div className="eyebrow text-muted-foreground mb-2">Tracks</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Choose where to start.</h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              {courses.filter((c) => c.status === "available").length} of {courses.length} available
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((c) => (
              <CourseCard key={c.slug} slug={c.slug} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter variant="dark" />
    </div>
  );
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden />
      {label}
    </span>
  );
}
