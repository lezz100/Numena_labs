# Numena Labs — Marketing Site

Marketing and case study site for Numena Labs, an AI automation and operational systems studio based in Eldoret, Kenya.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Space Grotesk (via next/font)

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for `metadataBase` (canonical URLs, OG tags) and the JSON-LD `@id`. Required before deploying to production.

## Key directories

```
src/app/          Pages and layouts (App Router)
src/components/   UI and section components
src/data/         Content — services, industries, case studies, navigation
public/images/    Photography (see images/CREDITS.md for licences)
```

## Image credits

See [`images/CREDITS.md`](images/CREDITS.md). The two active photos (`hero-operations.jpg`, `afyahero-context.jpg`) are pending credit attribution — trace their source before launch.
