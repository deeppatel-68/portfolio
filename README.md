# Deep Patel — Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [portfolio-kappa-nine-b19kcnl03e.vercel.app](https://portfolio-kappa-nine-b19kcnl03e.vercel.app/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site content (hero copy, about, skills, projects, experience, contact links)
lives in a single file:

```
src/data/portfolioData.ts
```

Edit that file to update the site — no component changes needed for content edits.

### Updating the resume

The resume lives at `public/resume.pdf` and is linked from the hero and
contact sections via `resumeUrl` in `src/data/portfolioData.ts`. Replace the
PDF to update it.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Deployment

Hosted on [Vercel](https://vercel.com) — every push to `main` deploys
automatically. No environment variables or build configuration needed.

## Structure

```
src/
  app/            # Layout, page, global styles
  components/     # One component per section
  data/           # portfolioData.ts — all editable content
```
