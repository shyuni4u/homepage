# CLAUDE.md

## Project Overview

Next.js 15 App Router 기반 포트폴리오/이력서 사이트. 블로그 기능 포함.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript 5
- **UI**: shadcn/ui (New York style) + Radix UI
- **Styling**: Tailwind CSS v4 + `@tailwindcss/typography`
- **Icons**: lucide-react
- **Blog**: MDX (next-mdx-remote + gray-matter + rehype-pretty-code + shiki)
- **Theme**: next-themes (light/dark/system)

## Project Structure

```
app/                     # App Router pages
  blog/                  # Blog feature
    page.tsx             # Blog list (timeline)
    [year]/[month]/[slug]/
      page.tsx           # Individual post
  api/vercel/            # Vercel API integration
components/
  atom/                  # Basic components (Header, Footer)
  molecule/              # Compound components (ProjectCard)
  blog/                  # Blog components (Timeline, TagFilter, etc.)
  ui/                    # shadcn/ui primitives
content/blog/            # MDX blog posts
lib/
  utils.ts               # cn() helper
  blog.ts                # Blog utilities (getAllPosts, getPostBySlug, etc.)
```

## Conventions

- Component organization: atom/ (basic) → molecule/ (compound) → ui/ (shadcn primitives)
- Path alias: `@/*` maps to project root
- Styling: Tailwind utility classes, `cn()` for conditional classes
- Blog posts: MDX files in `content/blog/` with `YYYY-MM-DD-slug.mdx` naming

## Commands

```bash
npm run dev     # Start dev server (Turbopack)
npm run build   # Production build
npm run lint    # ESLint
```
