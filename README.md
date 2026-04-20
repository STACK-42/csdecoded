
# Decoded 

Decoded is a platform designed to bridge the gap between computer science theory and real-world application. most CS curricula teach abstract concepts without showing how they power the tools and technologies we use every day. Decoded makes those connections explicit, helping you see the practical skills and industry relevance behind every course topic.

## Problem Statement: The Abstraction Gap in CS Education

Many students struggle to see the real-world value of theoretical computer science courses. for example, Theory of Computation often feels abstract and disconnected from practice, DFAs Transisation graphs, langauge, and accepted langauge, they make no sense regarding the real world, yet its core ideas underpin everything from regex engines to compilers and cybersecurity. The problem is not the theory itself, but the lack of a clear map from "what you learn" to "what you can do with it."

**Decoded solves the Curriculum-to-Practice Mapping problem:**

> "How does this theory translate into practical skills, tools, and technologies I’ll actually use?"

### Why This Matters

Understanding the bridge between theory and practice is a career superpower. It’s the difference between knowing how to use a tool and understanding why it works. Decoded helps you extract the set of practical skills, abstractions, and job-relevant knowledge from any CS course.

### Example: Theory of Computation → Real-World Skills

- **Finite Automata** → Regex engines (search, validation, text editors)
- **Pushdown Automata** → Parsers (compilers, browsers)
- **Turing Machines** → Conceptual model for all CPUs
- **Decidability** → Limits of malware detection, program analysis
- **Complexity Classes** → Foundations of cryptography, security

Decoded provides a topic-by-topic map of these connections, making every lesson actionable and relevant.

---

## Website Features

- **Content-first:** No login required. All content is open and accessible.
- **Progress tracking:** Your lesson progress is saved locally (per device) — no account needed.
- **Practical focus:** Each course highlights the real-world applications and skills behind the theory.
- **Modern design:** Inspired by theodinproject.com, with a hybrid dark/light reading experience.
- **Typography:** Uses Syne, IBM Plex Mono, and Lora for a clean, readable interface.

---

src/
## Development

See [docs/development.md](docs/development.md) for setup, local development, and directory structure.

---

## How It Works

### Routing
See `src/App.tsx` for route definitions:
- `/` — landing
- `/courses` — all courses
- `/courses/:courseSlug` — course overview
- `/courses/:courseSlug/:lessonSlug` — single lesson

### Content System
Lessons are written in MDX and compiled to React components. See `src/content/` and `src/content/registry.ts` for course and lesson structure.

### Progress Tracking
Your progress is saved in `localStorage` per device. No login or backend required.

---



## Roadmap

- Expand Theory of Computation content
- Add "resume where you left off" widget
- Add interactive DFA visualizer
- Add lesson search
- Add more courses: Software Engineering, Operating Systems, Machine Learning