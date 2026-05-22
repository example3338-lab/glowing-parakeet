# TechHouse

A premium technology products marketing and catalogue site built with TanStack Start and Tailwind CSS, deployed on Netlify.

## What it is

TechHouse showcases a curated selection of high-end tech products — laptops, monitors, audio equipment, peripherals, and accessories — with a product listing page and individual product detail pages.

## Key Technologies

| Technology | Purpose |
|---|---|
| [TanStack Start](https://tanstack.com/start) | Full-stack React framework with file-based routing |
| [TanStack Router](https://tanstack.com/router) | Type-safe client-side routing |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Vite](https://vitejs.dev) | Development server and bundler |
| [Netlify](https://netlify.com) | Hosting and serverless functions |

## Running Locally

```bash
npm install
npm run dev
```

The development server starts at [http://localhost:3000](http://localhost:3000).

To use Netlify features locally (edge functions, forms, etc.):

```bash
netlify dev
```

This starts on port 8888 with full Netlify platform emulation.

## Project Structure

```
src/
  data/products.ts      # Product catalogue data
  routes/
    __root.tsx          # Root layout (header + footer)
    index.tsx           # Homepage — hero, categories, product grid
    products/
      $productId.tsx    # Individual product detail page
  styles.css            # Global styles + Tailwind import
```
