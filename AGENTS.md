# AGENTS.md

This document provides an overview of the TechHouse project for developers and AI agents.

## Project Overview

TechHouse is a premium technology products catalogue and marketing site. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  data/
    products.ts           # Static product catalogue — Product interface + data array
  routes/
    __root.tsx            # Shell layout: Header + Footer on every page
    index.tsx             # Homepage: hero, stats, category pills, product grid, CTA
    products/
      $productId.tsx      # Product detail page
  styles.css              # Global styles + Tailwind import
public/
  favicon.ico
  placeholder.png
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes in `src/routes/`:
- `__root.tsx` — root layout (header/footer shell)
- `index.tsx` — homepage (`/`)
- `products/$productId.tsx` — product detail (`/products/:id`)

### Data Layer

Products are static in `src/data/products.ts`. Each product has: `id`, `name`, `image`, `description`, `shortDescription`, `price`, `category`, and optional `badge`.

To add persistence (cart, orders), use `@netlify/database` (Drizzle ORM + Postgres) — read the `netlify-database` skill.

### Header & Footer

Both live in `__root.tsx` as part of `shellComponent`, so they automatically wrap every page.

## Conventions

- Tailwind CSS utility classes only — no CSS modules or inline styles
- `@/` path alias maps to `src/`
- No comments unless behaviour would surprise a reader
- Product images are Unsplash CDN URLs — replace with hosted assets in production

## Adding Features

| Feature | Action |
|---------|--------|
| New page | Add file to `src/routes/` |
| New product | Append to array in `src/data/products.ts` |
| Persistent data | Read `netlify-database` skill, define schema in `db/schema.ts` |
| Contact/newsletter form | Read `netlify-forms-tanstack` skill |
| Authentication | Read `tanstack-start-identity` skill |
| API endpoint | Read `tanstack-start-api-routes` skill |

## Application Name

The app is called **TechHouse**. The title is set in `src/routes/__root.tsx` (`head()` meta). The nav logo is rendered directly in the `<Header>` function in `__root.tsx`.

