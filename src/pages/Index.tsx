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
    <div className="min-h-screen bg-background text-foreground relative">
      {/* grid texture */}
      <div className="grid-noise pointer-events-none fixed inset-0 z-0" aria-hidden />

      <SiteHeader />

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

      {/* THE STORY */}
      <section className="relative z-10 border-t border-border bg-black/20">
        <div className="container py-24 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow text-neon mb-4">Our Origin</div>
              <h2 className="font-display text-4xl font-bold leading-tight mb-6">
                Born from the frustration of "Magic Boxes"
              </h2>
              <div className="font-body text-lg text-foreground/70 space-y-4">
                <p>
                  Most engineers spend years using tools like Docker, Regex, and Compilers without 
                  truly understanding the mathematical foundations that make them possible. 
                  We call these "magic boxes."
                </p>
                <p>
                  Decoded was started to peel back the layers. We believe that when you understand 
                  the <em>Theory of Computation</em>, you don't just learn a tool—you learn how 
                  computing itself works.
                </p>
              </div>
            </div>
            <div className="relative aspect-square border border-border bg-muted/5 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 grid-noise opacity-20" />
               <div className="relative z-10 text-center p-8">
                 <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Core Philosophy</div>
                 <div className="font-display text-2xl italic leading-relaxed">
                   "Complexity is just layers of simple abstractions."
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CREATORS */}
      <section className="relative z-10 border-t border-border">
        <div className="container py-24 max-w-5xl">
          <div className="text-center mb-16">
            <div className="eyebrow text-muted-foreground mb-3">The People</div>
            <h2 className="font-display text-4xl font-bold">The Minds Behind Decoded</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
             <CreatorCard 
               name="Ahmed Alghali" 
               role="Architect & Lead" 
               bio="Obsessed with bridge-building between abstract math and deployable code. Usually found in a debugger or a whitepaper."
               image="https://github.com/stack-42.png"
             />
             <div className="flex flex-col items-center justify-center border border-dashed border-border p-8 text-center bg-muted/5">
                <div className="h-16 w-16 rounded-full bg-border/20 mb-4 animate-pulse" />
                <div className="font-display font-bold text-muted-foreground">Join the Team</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">Open Source</div>
             </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function CreatorCard({ name, role, bio, image }: { name: string; role: string; bio: string; image: string }) {
  return (
    <div className="group border border-border bg-muted/5 p-6 hover:border-neon/40 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="h-14 w-14 rounded-full border border-border grayscale group-hover:grayscale-0 transition-all" 
        />
        <div>
          <div className="font-display font-bold text-lg">{name}</div>
          <div className="font-mono text-[10px] text-neon uppercase tracking-widest">{role}</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed font-body italic">
        "{bio}"
      </p>
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
