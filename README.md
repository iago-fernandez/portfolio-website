# Engineering Portfolio & Technical Documentation Hub

A highly optimized, statically generated web architecture designed to showcase system engineering projects, low-level infrastructure implementations, and technical documentation.

[![Status](https://img.shields.io/badge/status-stable-green?style=flat-square)](https://github.com/iago-fernandez/portfolio-website/releases)
[![Framework](https://img.shields.io/badge/framework-Astro-ff5a1f?style=flat-square)](https://astro.build/)
[![Styling](https://img.shields.io/badge/styling-Tailwind%20CSS-38bdf8?style=flat-square)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/deployment-Cloudflare%20Pages-f38020?style=flat-square)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/license-MIT-orange?style=flat-square)](LICENSE)

## Core Architecture

Designed with a strict focus on temporal efficiency, spatial optimization, and minimal client-side overhead:

* **Static Site Generation (SSG):** Built with Astro to enforce a Zero-JS architecture by default, ensuring pages are fully pre-rendered into static HTML and CSS during the build phase.
* **Styling Engine:** Utilizes Tailwind CSS for utility-first styling, guaranteeing a minimal CSS footprint through automated purging of unused classes.
* **Performance:** Eliminates client-side hydration delays, achieving perfect Lighthouse scores and millisecond load times.

## Deployment Topology



The infrastructure is designed for absolute separation of concerns between public web presence and private self-hosted services.

* **Edge Distribution:** Configured for seamless continuous deployment to Cloudflare Pages. Static assets are distributed across a global edge network for maximum cache hit ratios and DDoS mitigation.
* **Network Isolation:** Hosting the static site entirely on the edge ensures that local homelab services (such as Wireguard, Seafile, and Jellyfin) remain completely unexposed. By relying on Cloudflare for the public domain, local network services are safely secured behind a reverse proxy on port 80, keeping port 443 free and preventing public web traffic from reaching private infrastructure.

## Project Structure

The repository maintains a clean distinction between static assets, components, and routing logic:

```text
portfolio-website/
├── public/                 # Static assets (fonts, icons, raw images)
├── src/
│   ├── components/         # Reusable UI components (Astro/Tailwind)
│   ├── layouts/            # Global page wrappers and HTML boilerplate
│   └── pages/              # File-based routing scheme
│       └── index.astro     # Main entry point (/)
├── .gitignore              # Version control exclusion rules
├── astro.config.mjs        # Astro framework and Tailwind integration settings
├── CONTRIBUTING.md         # Engineering and pull request standards
├── package.json            # Node.js dependencies and script definitions
└── README.md               # Project documentation

```

## Local Development Environment

All commands must be executed from the root directory of the repository.

| Command | Action |
| --- | --- |
| `npm install` | Resolve and install all framework dependencies. |
| `npm run dev` | Initialize the local development server at `localhost:4321`. |
| `npm run build` | Compile the production-ready static site into the `./dist/` directory. |
| `npm run preview` | Serve the compiled `./dist/` directory locally to verify the production build. |

## Contributing

Contributions must adhere to strict high-performance web engineering standards, focusing on minimal client-side execution and semantic HTML. Please review the [CONTRIBUTING](CONTRIBUTING.md) file for branching strategies and Conventional Commits guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.