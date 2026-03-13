# VELURE Store - Project Instructions

## Project Overview

VELURE is a premium skincare and haircare ecommerce store built as a headless Shopify storefront using Next.js 15. The project follows a monorepo structure managed with Turborepo and pnpm workspaces.

The storefront fetches product data, collections, and cart operations from Shopify's Storefront API via GraphQL, and renders a fully custom frontend with the VELURE brand identity.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS v4 (import-based: `@import "tailwindcss"`)
- **Internationalization:** next-intl (EN, ES, PT)
- **Data layer:** Shopify Storefront API via graphql-request
- **Monorepo:** Turborepo + pnpm workspaces
- **Package manager:** pnpm

## Brand Guide

### Colors
| Token         | Hex       | Usage                        |
|---------------|-----------|------------------------------|
| Deep Teal     | `#1A5653` | Primary brand, buttons, text |
| Teal Dark     | `#133F3D` | Hover states                 |
| Teal Light    | `#237370` | Accents                      |
| Warm Cream    | `#F5F0E8` | Backgrounds                  |
| Cream Dark    | `#E8E0D2` | Borders, subtle backgrounds  |
| Soft Gold     | `#C9A96E` | CTAs, accents, sale badges   |
| Gold Dark     | `#B8954F` | Hover state for gold         |
| Gold Light    | `#D4BA87` | Highlights                   |

### Typography
- **Headings:** Playfair Display (serif) - elegant, editorial feel
- **Body text:** DM Sans (sans-serif) - clean, modern readability
- CSS variables: `--font-heading`, `--font-sans`

### Tone of Voice
- Sophisticated but approachable
- Clean and confident - avoid over-promising language
- Use "you/your" to speak directly to the customer
- Emphasize quality ingredients and self-care rituals

## Coding Standards

- **TypeScript strict mode** - no `any` types, use proper interfaces
- **Functional components only** - no class components
- **`use client`** directive only where truly needed (state, effects, browser APIs)
- **Tailwind CSS** for all styling - no CSS modules or styled-components
- **CSS custom properties** for brand tokens (defined in `app/globals.css`)
- Use `@/` path alias for imports (maps to project root)
- Prefer named exports for utilities, default exports for components
- Use `interface` over `type` for object shapes
- Keep components focused - extract sub-components when a file exceeds ~150 lines

## Directory Structure

```
velure-store/
├── apps/
│   └── storefront/           # Next.js storefront application
│       ├── app/              # App Router pages and layouts
│       │   ├── globals.css   # Global styles + Tailwind + brand tokens
│       │   ├── layout.tsx    # Root layout
│       │   └── page.tsx      # Homepage
│       ├── components/
│       │   ├── layout/       # Header, Footer
│       │   ├── product/      # ProductCard, ProductGrid
│       │   ├── cart/         # CartDrawer
│       │   └── ui/           # Button, Input, and other primitives
│       ├── lib/
│       │   └── shopify/      # Shopify API client, queries, types
│       └── public/           # Static assets
├── packages/                 # Shared packages (if any)
├── docs/                     # Project documentation
├── turbo.json
└── pnpm-workspace.yaml
```

## Running the Dev Server

```bash
# From the monorepo root
pnpm install
pnpm dev

# Or from apps/storefront directly
cd apps/storefront
pnpm dev
```

The dev server runs on `http://localhost:3000` by default.

## Shopify API Notes

- Uses the **Storefront API** (not Admin API) for all customer-facing data
- Authentication via `SHOPIFY_STOREFRONT_ACCESS_TOKEN` header (`X-Shopify-Storefront-Access-Token`)
- Store domain set in `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
- GraphQL endpoint: `https://${STORE_DOMAIN}/api/2024-01/graphql.json`
- Types are defined in `lib/shopify/types.ts`
- All API calls should handle errors gracefully and return typed responses
- Product images come from Shopify CDN - use `next/image` with appropriate `sizes` prop

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```
SHOPIFY_STOREFRONT_ACCESS_TOKEN=...
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=...
```

## Key Conventions

- Colors are referenced as CSS variables: `var(--color-teal)`, `var(--color-cream)`, etc.
- The `@theme inline` block in globals.css registers these as Tailwind theme values
- Responsive breakpoints follow Tailwind defaults: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Max content width: `max-w-7xl` (1280px)
- All interactive elements must have proper `aria-label` attributes
- Images must use `next/image` with explicit `sizes` for performance
