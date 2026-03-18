# Engineering Portfolio & Technical Documentation Hub

**Production Environment:** [iagofernandez.dev](https://iagofernandez.dev)

Source code for a highly optimized, statically generated web architecture. It is designed to showcase system engineering projects, low-level infrastructure implementations, and technical documentation with a strict focus on minimal client-side overhead.

[![Status](https://img.shields.io/badge/status-stable-green?style=flat-square)](https://github.com/iago-fernandez/portfolio-website/releases)
[![Framework](https://img.shields.io/badge/framework-Astro-ff5a1f?style=flat-square)](https://astro.build/)
[![Styling](https://img.shields.io/badge/styling-Tailwind%20CSS-38bdf8?style=flat-square)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/deployment-Cloudflare%20Pages-0051c3?style=flat-square)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)](LICENSE)

## Core Architecture

Designed with a strict focus on temporal efficiency, spatial optimization, and minimal client-side overhead:

* **Static Site Generation (SSG):** Built with Astro to enforce a Zero-JS architecture by default, ensuring pages are fully pre-rendered into static HTML and CSS during the build phase.
* **Styling Engine:** Utilizes Tailwind CSS for utility-first styling, guaranteeing a minimal CSS footprint through automated purging of unused classes.
* **Serverless Backend:** Integrates Cloudflare Workers and Turnstile for secure, edge-computed contact form processing without exposing underlying infrastructure.
* **Performance:** Eliminates client-side hydration delays, achieving maximum Lighthouse scores and optimal time-to-first-byte (TTFB).

## Deployment Topology

The portfolio is engineered as a fully serverless application, entirely hosted and distributed via Cloudflare infrastructure to ensure maximum performance, security, and high availability.

* **Edge Distribution & CI/CD:** The static frontend is deployed via Cloudflare Pages. It utilizes an automated CI/CD pipeline integrated directly with this GitHub repository, triggering seamless builds and zero-downtime deployments to [`iagofernandez.dev`](https://iagofernandez.dev) upon every stable release. Assets are globally cached across the edge network, guaranteeing minimal latency, optimal Core Web Vitals, and enterprise-grade DDoS mitigation.
* **Serverless API:** The contact form functionality is decoupled from the static build and handled by a dedicated Cloudflare Worker. This isolates backend execution to the edge, leveraging Cloudflare Turnstile for secure, bot-protected data routing without the need for traditional server provisioning.

## Project Structure

The repository maintains a clean distinction between static assets, modular components, and routing logic:

```text
portfolio-website/
├── public/                 # Static assets
│   ├── icons/              # Local SVG technology vectors
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── assets/             # Optimized image assets
│   │   └── profile.webp
│   ├── components/         # Reusable UI components (Astro/Tailwind)
│   │   ├── AboutMe.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── layouts/            # Global HTML boilerplate and metadata
│   │   └── Layout.astro
│   ├── pages/              # File-based routing scheme
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── experience.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   └── styles/
│       └── global.css      # Global stylesheet
├── .gitignore              # Version control exclusion rules
├── astro.config.mjs        # Astro framework and Tailwind integration settings
├── CONTRIBUTING.md         # Engineering and pull request standards
├── package.json            # Node.js dependencies and script definitions
├── tsconfig.json           # TypeScript compiler configuration
└── README.md               # Project documentation
````

## Local Development Environment

To run this architecture locally, ensure you have Node.js installed, then execute the following commands from your terminal.

```bash
# Clone the repository
git clone https://github.com/iago-fernandez/portfolio-website

# Navigate into the project directory
cd portfolio-website

# Install dependencies
npm install

# Initialize the local development server
npm run dev
```

The local development server will be accessible at `http://localhost:4321`.

| Command | Action |
| --- | --- |
| `npm run build` | Compile the production-ready static site into the `./dist/` directory. |
| `npm run preview` | Serve the compiled `./dist/` directory locally to verify the production build. |

## Contributing

Contributions must adhere to strict high-performance web engineering standards, focusing on minimal client-side execution and semantic HTML. Please review the [CONTRIBUTING](CONTRIBUTING) file for branching strategies and Conventional Commits guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.