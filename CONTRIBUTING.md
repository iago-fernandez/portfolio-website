# Contributing

This repository strictly adheres to high-performance web engineering standards. The focus is on minimal client-side execution, semantic HTML, and rigorous version control.

## Engineering Standards

To maintain perfect Lighthouse performance scores and architectural cleanliness, all contributions must adhere to the following:

* **Zero-JS Philosophy:** Do not introduce client-side JavaScript unless strictly necessary for interactive components. Rely on standard HTML forms, CSS transitions, and Astro's static generation.
* **Styling Guidelines:** Custom CSS files are prohibited. All styling must be executed via Tailwind CSS utility classes directly within the component markup.
* **Component Modularity:** Break down complex interfaces into atomic, reusable `.astro` components.
* **Type Safety:** Enforce strict TypeScript interfaces for all component properties (`Props`).

## Development Workflow

1. **Branching Strategy:**
   * `feat/`: New pages, sections, or UI components.
   * `fix/`: Resolution of layout shifts, hydration errors, or typos.
   * `refactor/`: Component extraction or Tailwind class optimization.
   * `docs/`: Content updates to technical write-ups.
2. **Validation:** Ensure the project compiles flawlessly using `npm run build` before pushing any code to the remote repository.

## Commit Guidelines

We use **Conventional Commits** to maintain a semantic and readable version history:

* `feat(ui): implement project showcase grid`
* `fix(layout): correct mobile viewport overflow`
* `refactor(core): extract navigation bar into global component`
* `docs(content): update c engine performance metrics`

## Pull Request Process

* Provide a clear description of the UI modifications or content updates using infinitives.
* Squash intermediate commits to keep the repository history linear.