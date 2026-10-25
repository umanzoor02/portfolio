# Usama Manzoor · Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. The page is fully static, so it's fast and costs nothing to host on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): bio, experience, projects, skills and links. To replace the resume, swap `public/Usama-Manzoor-Resume.pdf`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New → Project**, import the repo and click **Deploy**. No settings or env vars are required.
3. Optional: after adding a custom domain, set `NEXT_PUBLIC_SITE_URL` (for example `https://usamamanzoor.dev`) under **Settings → Environment Variables** and redeploy, so canonical URLs, the sitemap and social previews use your domain.

## What's included

- SEO: metadata, Open Graph and Twitter cards, a generated social share image, `sitemap.xml`, `robots.txt` and Person structured data (JSON-LD)
- Accessibility: semantic landmarks, skip link, visible focus styles, labelled icon links, reduced-motion support
- Light and dark themes that follow the visitor's system setting
- Security headers and no `X-Powered-By` header
- Responsive layout from phone to desktop
