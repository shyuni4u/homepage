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
- MDX 볼드 작성 시 `**"text"**` 금지 — 따옴표가 `**` 바로 옆에 오면 MDX 파서가 볼드로 인식하지 못함. `"**text**"` 형태로 따옴표를 바깥에 배치할 것
- MDX 날짜 처리 시 `new Date().getMonth()` 등 로컬 메서드 금지 — gray-matter가 YAML date를 Date 객체로 자동 변환하므로, `dateToString()`으로 정규화 후 문자열 split 방식 사용

## Commands

```bash
npm run dev     # Start dev server (Turbopack)
npm run build   # Production build
npm run lint    # ESLint
```
