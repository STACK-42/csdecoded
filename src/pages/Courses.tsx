import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "@/components/layout/SiteChrome";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/content/registry";

export default function Courses() {
  useEffect(() => {
    document.title = "All Tracks — Decoded";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader variant="light" />
      <main className="flex-1">
        <div className="container py-14 md:py-20 max-w-5xl">
          <div className="eyebrow text-muted-foreground mb-3">All Tracks</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">
            Every CS course,<br />decoded.
          </h1>
          <p className="font-body text-lg text-muted-foreground italic max-w-2xl mb-12">
            Each track pairs the formal idea with the modern tool, the job, and the failure mode you've already seen.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((c) => (
              <CourseCard key={c.slug} slug={c.slug} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter variant="light" />
    </div>
  );
}
