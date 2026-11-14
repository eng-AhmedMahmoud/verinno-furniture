# Verinno Furniture

Marketing site for Verinno Furniture (Next.js, App Router).

```bash
npm ci
npm run dev
```

## Hosting

Production is a static export (`output: "export"` in `next.config.mjs`) on the
Cloudflare Pages project `verinno-furniture` (https://verinno-furniture.pages.dev),
serving `verinno-furniture.devya-solutions.com` through a CNAME at Hostinger. The
site left Vercel after the account pause of 2026-11-13.

- Merge gate: Jenkins `continuous-integration/jenkins/pr-head`, which runs
  `bash scripts/ci-local.sh` (clean install, build). Run the same script locally
  when Jenkins is down.
- Deploy: `npm run deploy` (`scripts/deploy.sh`) from a clean `main`. A push does
  not deploy.
