import type { ComponentType } from "react";

// Lesson MDX modules (eagerly loaded so we can render synchronously)
import TocIntro from "@/content/theory-of-computation/01-intro.mdx";
import TocAutomata from "@/content/theory-of-computation/02-automata.mdx";
import LitTyping from "@/content/computer-literacy/01-physical-layer.mdx";
import LitLanguage from "@/content/computer-literacy/02-language-layer.mdx";
import LitSystems from "@/content/computer-literacy/03-systems-layer.mdx";

export type Lesson = {
  slug: string;
  title: string;
  duration: string; // e.g. "8 min"
  Component: ComponentType<Record<string, unknown>>;
};

export type Module = {
  title: string;
  blurb?: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accent: "neon" | "orange" | "sky" | "violet" | "mint";
  status: "available" | "coming-soon";
  number: string; // "01"
  modules: Module[];
};

export const courses: Course[] = [
  {
    slug: "theory-of-computation",
    title: "Theory of Computation",
    tagline: "What machines can fundamentally compute — and why it matters in 2026.",
    description:
      "The 1930s mathematicians who built this field weren't writing apps. They were asking 'what is computable?' That question quietly produced regex, parsers, CPUs, cryptography, and the limits of antivirus software. This course decodes each abstraction into the tool you already use.",
    accent: "neon",
    status: "available",
    number: "01",
    modules: [
      {
        title: "Foundations",
        blurb: "Why this course exists and how to read it.",
        lessons: [
          { slug: "intro", title: "The Abstraction Gap", duration: "5 min", Component: TocIntro },
        ],
      },
      {
        title: "Automata & Languages",
        blurb: "From finite-state machines to the regex bar in your editor.",
        lessons: [
          { slug: "automata", title: "Finite Automata → Regex Engines", duration: "9 min", Component: TocAutomata },
        ],
      },
    ],
  },
  {
    slug: "computer-literacy",
    title: "Computer Literacy",
    tagline: "The fluency layer most people never name.",
    description:
      "Everything about computing is interaction. The more precise your way of speaking to the machine, the more effective you become. Three layers: physical, language, systems. Built from years of observation about what separates fluent users from frustrated ones.",
    accent: "orange",
    status: "available",
    number: "02",
    modules: [
      {
        title: "The Three Layers of Fluency",
        blurb: "Each layer removes friction between intention and execution.",
        lessons: [
          { slug: "physical-layer", title: "The Physical Layer", duration: "6 min", Component: LitTyping },
          { slug: "language-layer", title: "The Language Layer", duration: "7 min", Component: LitLanguage },
          { slug: "systems-layer",  title: "The Systems Layer",  duration: "7 min", Component: LitSystems },
        ],
      },
    ],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    tagline: "The principles behind why senior code looks different.",
    description:
      "Coupling, cohesion, abstraction layers, the patterns nobody told you have names. Coming soon.",
    accent: "sky",
    status: "coming-soon",
    number: "03",
    modules: [],
  },
  {
    slug: "operating-systems",
    title: "Operating Systems",
    tagline: "The invisible layer that makes everything work.",
    description:
      "Processes, memory, file systems, schedulers — and where each shows up the moment something goes wrong. Coming soon.",
    accent: "violet",
    status: "coming-soon",
    number: "04",
    modules: [],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    tagline: "Statistics with a marketing budget — decoded honestly.",
    description:
      "What ML actually is underneath the hype, what it's good at, what it isn't, and the engineering tradeoffs that matter. Coming soon.",
    accent: "mint",
    status: "coming-soon",
    number: "05",
    modules: [],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return null;
  for (const m of course.modules) {
    const lesson = m.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { course, module: m, lesson };
  }
  return null;
}

export function flattenLessons(course: Course): Lesson[] {
  return course.modules.flatMap((m) => m.lessons);
}

export function lessonNeighbors(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return { prev: null, next: null };
  const flat = flattenLessons(course);
  const idx = flat.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
