# Kuracha Vamsi Krishna — Portfolio

A modern, premium personal portfolio website for **KURACHA VAMSI KRISHNA**, a B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Data Science at Sree Venkateswara College of Engineering (SVCN), Nellore, Andhra Pradesh.

The site communicates: _"This is an ambitious AI & Data Science student who is actively developing into a professional software developer."_

## Sections

- **Home** — Hero with rotating role text, profile photo, CTAs, and social links
- **About** — Profile composition with journey highlights and stats
- **Education** — Vertical timeline (B.Tech 2024–2028, Intermediate 2022–2024, School 2012–2022)
- **Skills** — Programming, Web Development, AI, Cybersecurity & Cloud
- **Projects** — Featured projects area (portfolio in progress)
- **Certifications** — Cybersecurity, AI Tools & ChatGPT Workshop, Full Stack Web Development with AI Training, Cybersecurity Virtual Internship, Zero Trust Cloud Security Virtual Internship
- **What I'm Learning** — Interactive learning roadmap
- **Contact** — Contact form (opens a prefilled email draft) and contact details

## Design

- Dark technology-inspired premium developer aesthetic
- Glassmorphism cards, subtle blue/cyan/purple accents, soft gradients
- Space Grotesk + Outfit typography
- Smooth scrolling, scroll reveals, hover animations
- Fully responsive (desktop, tablet, mobile) with hamburger menu
- Reduced-motion support for accessibility

## Tech Stack

- TanStack Start (React 19, SSR)
- TypeScript
- Tailwind CSS v4
- Vite 7

## Development

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Deploy

### Lovable (one-click)

Publish from the Lovable editor to get a live URL instantly. No external accounts required.

### Self-hosting on Vercel or Render

The build target is configurable via the `NITRO_PRESET` environment variable, so the same codebase deploys to multiple platforms. Lovable publish runs without the variable and keeps its default Cloudflare/Edge preset.

**Vercel** — `vercel.json` is included.

1. Push this repo to GitHub and connect it to Vercel.
2. Framework preset: **Other** (no framework override).
3. Build command: `NITRO_PRESET=vercel npm run build`
4. Output directory: `.output/public`

**Render** — `render.yaml` is included as a blueprint.

1. Push this repo to GitHub.
2. In Render, create a new service from this repository (Render reads `render.yaml` automatically).
3. Build command: `NITRO_PRESET=node-server npm run build`
4. Start command: `node .output/server/index.mjs`

## Built with

Built with [Lovable](https://lovable.dev). This code is yours — push to your repository and changes sync back into Lovable.
