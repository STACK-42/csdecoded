import { Link, useLocation } from "react-router-dom";

export function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className="relative z-10 bg-background text-foreground border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-extrabold tracking-tight">Decoded</span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:inline">
            cs → real world
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <Link
            to="/"
            className={`transition-colors hover:text-foreground ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`transition-colors hover:text-foreground ${pathname.startsWith("/courses") ? "text-foreground" : "text-muted-foreground"}`}
          >
            Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        <span>Decoded — built for bridging the abstraction gap</span>
        <nav className="flex items-center gap-6">
          <Link to="/courses" className="hover:text-foreground transition-colors">Courses</Link>
          <Link to="/team" className="hover:text-foreground transition-colors">Team</Link>
        </nav>
        <span>v0.1 · Progress saved on this device</span>
      </div>
    </footer>
  );
}
