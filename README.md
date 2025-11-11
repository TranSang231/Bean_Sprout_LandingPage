# Landing Page Vite + React (demo)

Folder: `landing-page-vite`

Quick start (PowerShell):

```powershell
cd f:\TMDT\landing-page-vite
npm install
npm run dev
```

Notes:
- This is a minimal demo scaffold. It includes components for each section under `src/components`.
- To use Tailwind in this Vite project, I can add Tailwind setup (postcss/config) — nói tôi biết nếu bạn muốn.
Tailwind setup:

This project is already prepared to use Tailwind + PostCSS. After you run `npm install`, start dev and Vite will process Tailwind:

```powershell
cd f:\TMDT\landing-page-vite
npm install
npm run dev
```

Files added for Tailwind:
- `tailwind.config.cjs` — Tailwind configuration (content paths)
- `postcss.config.cjs` — PostCSS config with Tailwind + Autoprefixer
- `src/styles.css` — Tailwind entry (`@tailwind base; @tailwind components; @tailwind utilities;`)

Important:
- If you don't have Node.js/npm installed, install it first.
- The Tailwind directives will be processed by PostCSS when running Vite. If you see raw `@tailwind` in the browser, ensure dependencies were installed.

Next steps I can do for you:
- Add Tailwind forms/typography plugins and refine spacing/colors.
- Configure and bundle assets (optimise SVGs, add favicons).
- Add a deploy script and example GitHub Actions workflow to build & publish.
