# Chenyi Li — Academic Homepage

Personal academic website for Chenyi Li, a Ph.D. student in Computational
Mathematics at Peking University.

The site highlights research in:

- LLM reasoning and reinforcement learning
- formal theorem proving and Lean 4
- optimization formalization
- efficient generative modeling

## Local preview

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

For the static GitHub Pages export:

```bash
npm run build:github
```

The export is written to `out/`.

## Publish on GitHub Pages

1. Create a public repository named `chenyili0818.github.io`.
2. Push this project to the repository's `main` branch.
3. In repository settings, set **Pages → Build and deployment → Source** to
   **GitHub Actions**.
4. The included workflow publishes the site automatically.

## Content

- Main page: `app/page.tsx`
- Visual design: `app/globals.css`
- Profile and paper imagery: `public/`
