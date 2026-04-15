# Blog Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a MDX-based blog with timeline listing and date-based URL routing to the existing portfolio site.

**Architecture:** MDX files in `content/blog/` are parsed at build time by `next-mdx-remote` + `gray-matter`. Blog list page renders a timeline UI with client-side tag filtering. Individual posts are statically generated via `generateStaticParams` with `rehype-pretty-code` for code highlighting.

**Tech Stack:** next-mdx-remote, gray-matter, @tailwindcss/typography, rehype-pretty-code, shiki

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install production dependencies**

Run:
```bash
npm install next-mdx-remote gray-matter rehype-pretty-code shiki
```

- [ ] **Step 2: Install typography plugin**

Run:
```bash
npm install @tailwindcss/typography
```

- [ ] **Step 3: Add typography plugin to globals.css**

In `app/globals.css`, add the import at the top (after the existing imports):

```css
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";
```

- [ ] **Step 4: Verify dev server starts**

Run:
```bash
npm run dev
```
Expected: Dev server starts without errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json app/globals.css
git commit -m "chore: add blog dependencies (next-mdx-remote, gray-matter, typography, rehype-pretty-code)"
```

---

### Task 2: Blog Utility Functions (`lib/blog.ts`)

**Files:**
- Create: `lib/blog.ts`

- [ ] **Step 1: Create `lib/blog.ts` with types and utility functions**

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMeta = {
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
  published: boolean
}

export type Post = {
  meta: PostMeta
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      return data as PostMeta
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(year: string, month: string, slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const meta = data as PostMeta
    const postDate = new Date(meta.date)
    const postYear = postDate.getFullYear().toString()
    const postMonth = (postDate.getMonth() + 1).toString().padStart(2, '0')

    if (postYear === year && postMonth === month && meta.slug === slug && meta.published) {
      return { meta, content }
    }
  }

  return null
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)))
  return Array.from(tagSet).sort()
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/blog.ts
git commit -m "feat: add blog utility functions (getAllPosts, getPostBySlug, getAllTags)"
```

---

### Task 3: Sample MDX Post

**Files:**
- Create: `content/blog/2026-04-14-hello-world.mdx`

- [ ] **Step 1: Create content directory and sample post**

```bash
mkdir -p content/blog
```

- [ ] **Step 2: Create sample MDX file**

Create `content/blog/2026-04-14-hello-world.mdx`:

```mdx
---
title: "Hello World"
description: "블로그를 시작하며"
date: 2026-04-14
tags: ["일상"]
slug: "hello-world"
published: true
---

# Hello World

블로그의 첫 번째 글입니다.

## 코드 예제

```typescript
const greeting = "Hello, World!"
console.log(greeting)
```

이렇게 코드 블록도 잘 표시됩니다.
```

- [ ] **Step 3: Commit**

```bash
git add content/blog/
git commit -m "feat: add sample blog post"
```

---

### Task 4: MDX Components (`components/blog/mdx-components.tsx`)

**Files:**
- Create: `components/blog/mdx-components.tsx`

- [ ] **Step 1: Create MDX component mapping**

```typescript
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  // typography plugin handles base HTML elements
  // add custom component overrides here as needed
}
```

- [ ] **Step 2: Commit**

```bash
git add components/blog/mdx-components.tsx
git commit -m "feat: add MDX component mapping"
```

---

### Task 5: Blog List Page — Timeline Components

**Files:**
- Create: `components/blog/TimelineItem.tsx`
- Create: `components/blog/TagFilter.tsx`
- Create: `components/blog/Timeline.tsx`

- [ ] **Step 1: Create `components/blog/TimelineItem.tsx`**

```tsx
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import type { PostMeta } from '@/lib/blog'

export default function TimelineItem({ post }: { post: PostMeta }) {
  const date = new Date(post.date)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate()
  const formattedDate = `${year}년 ${date.getMonth() + 1}월 ${day}일`

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-sky-500 bg-white dark:border-sky-400 dark:bg-slate-900" />
      {/* Timeline line */}
      <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-slate-200 last:hidden dark:bg-slate-700" />

      <Link href={`/blog/${year}/${month}/${post.slug}`} className="group block">
        <time className="text-sm text-slate-500 dark:text-slate-400">{formattedDate}</time>
        <h3 className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
          {post.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{post.description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Create `components/blog/TagFilter.tsx`**

```tsx
'use client'

import { Badge } from '@/components/ui/badge'

type TagFilterProps = {
  tags: string[]
  selectedTag: string | null
  onSelectTag: (tag: string | null) => void
}

export default function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => onSelectTag(null)}>
        <Badge variant={selectedTag === null ? 'default' : 'secondary'}>전체</Badge>
      </button>
      {tags.map((tag) => (
        <button key={tag} onClick={() => onSelectTag(tag === selectedTag ? null : tag)}>
          <Badge variant={tag === selectedTag ? 'default' : 'secondary'}>{tag}</Badge>
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 3: Create `components/blog/Timeline.tsx`**

```tsx
'use client'

import { useState } from 'react'
import type { PostMeta } from '@/lib/blog'
import TimelineItem from './TimelineItem'
import TagFilter from './TagFilter'

type TimelineProps = {
  posts: PostMeta[]
  tags: string[]
}

export default function Timeline({ posts, tags }: TimelineProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag ? posts.filter((post) => post.tags.includes(selectedTag)) : posts

  return (
    <div>
      <div className="mb-8">
        <TagFilter tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      </div>
      <div>
        {filteredPosts.map((post) => (
          <TimelineItem key={post.slug} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-slate-500 dark:text-slate-400">해당 태그의 글이 없습니다.</p>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add components/blog/
git commit -m "feat: add timeline components (TimelineItem, TagFilter, Timeline)"
```

---

### Task 6: Blog List Page (`app/blog/page.tsx`)

**Files:**
- Create: `app/blog/page.tsx`

- [ ] **Step 1: Create blog list page**

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getAllPosts, getAllTags } from '@/lib/blog'
import Timeline from '@/components/blog/Timeline'
import { ThemeToggle } from '@/components/ui/themeToggle'

export const metadata: Metadata = {
  title: '블로그 | 김선우',
  description: '경험, 아이디어, 기술에 대한 기록',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 dark:bg-black dark:text-slate-200">
      <div className="absolute top-4 right-4 z-10 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <main className="container mx-auto max-w-2xl p-4 md:p-8 lg:p-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>

        <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Blog</h1>
        <p className="mb-10 text-lg text-slate-600 dark:text-slate-400">경험, 아이디어, 기술에 대한 기록</p>

        <Timeline posts={posts} tags={tags} />
      </main>
    </div>
  )
}
```

- [ ] **Step 2: Verify blog list page renders**

Run `npm run dev` and navigate to `http://localhost:3000/blog`.
Expected: Timeline with the sample post displayed, tag filter working.

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: add blog list page with timeline layout"
```

---

### Task 7: Blog Post Page (`app/blog/[year]/[month]/[slug]/page.tsx`)

**Files:**
- Create: `components/blog/PostHeader.tsx`
- Create: `components/blog/PostNavigation.tsx`
- Create: `app/blog/[year]/[month]/[slug]/page.tsx`

- [ ] **Step 1: Create `components/blog/PostHeader.tsx`**

```tsx
import { Badge } from '@/components/ui/badge'
import type { PostMeta } from '@/lib/blog'

export default function PostHeader({ meta }: { meta: PostMeta }) {
  const date = new Date(meta.date)
  const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`

  return (
    <div className="mb-8">
      <time className="text-sm text-slate-500 dark:text-slate-400">{formattedDate}</time>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        {meta.title}
      </h1>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{meta.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {meta.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create `components/blog/PostNavigation.tsx`**

```tsx
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { PostMeta } from '@/lib/blog'

type PostNavigationProps = {
  prev: PostMeta | null
  next: PostMeta | null
}

function getPostUrl(post: PostMeta): string {
  const date = new Date(post.date)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  return `/blog/${year}/${month}/${post.slug}`
}

export default function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null

  return (
    <nav className="mt-12 flex justify-between border-t pt-6 dark:border-slate-800">
      {prev ? (
        <Link
          href={getPostUrl(prev)}
          className="group flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={getPostUrl(next)}
          className="group flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
        >
          <span>{next.title}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
```

- [ ] **Step 3: Create `app/blog/[year]/[month]/[slug]/page.tsx`**

```tsx
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import rehypePrettyCode from 'rehype-pretty-code'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { mdxComponents } from '@/components/blog/mdx-components'
import PostHeader from '@/components/blog/PostHeader'
import PostNavigation from '@/components/blog/PostNavigation'
import { ThemeToggle } from '@/components/ui/themeToggle'

type Params = {
  params: Promise<{ year: string; month: string; slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => {
    const date = new Date(post.date)
    return {
      year: date.getFullYear().toString(),
      month: (date.getMonth() + 1).toString().padStart(2, '0'),
      slug: post.slug,
    }
  })
}

export async function generateMetadata({ params }: Params) {
  const { year, month, slug } = await params
  const post = getPostBySlug(year, month, slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.meta.title} | 김선우 블로그`,
    description: post.meta.description,
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { year, month, slug } = await params
  const post = getPostBySlug(year, month, slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.meta.slug)
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 dark:bg-black dark:text-slate-200">
      <div className="absolute top-4 right-4 z-10 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <main className="container mx-auto max-w-2xl p-4 md:p-8 lg:p-12">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
          >
            <ArrowLeft className="h-4 w-4" /> Blog
          </Link>
        </div>

        <PostHeader meta={post.meta} />

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark-default' }]],
              },
            }}
          />
        </article>

        <PostNavigation prev={prev} next={next} />
      </main>
    </div>
  )
}
```

- [ ] **Step 4: Verify post page renders**

Run `npm run dev` and navigate to `http://localhost:3000/blog/2026/04/hello-world`.
Expected: Post renders with title, date, tags, MDX content with syntax highlighting, and navigation.

- [ ] **Step 5: Commit**

```bash
git add components/blog/PostHeader.tsx components/blog/PostNavigation.tsx app/blog/
git commit -m "feat: add blog post page with MDX rendering and post navigation"
```

---

### Task 8: Header Navigation Update

**Files:**
- Modify: `components/atom/Header.tsx`

- [ ] **Step 1: Add blog link to Header**

Add a "Blog" button to the header's button group in `components/atom/Header.tsx`. Add `import Link from 'next/link'` and `import { BookOpen } from 'lucide-react'` at the top, then add the blog button after the GitHub button:

```tsx
<Button
  variant="outline"
  size="sm"
  asChild
  className="bg-transparent dark:border-slate-700 dark:bg-slate-900"
>
  <Link href="/blog" className="flex items-center gap-2">
    <BookOpen className="h-4 w-4" /> Blog
  </Link>
</Button>
```

- [ ] **Step 2: Verify header shows blog link**

Run `npm run dev`, navigate to `http://localhost:3000`. Click the Blog button.
Expected: Navigates to `/blog`.

- [ ] **Step 3: Commit**

```bash
git add components/atom/Header.tsx
git commit -m "feat: add blog link to header navigation"
```

---

### Task 9: Build Verification

- [ ] **Step 1: Run production build**

Run:
```bash
npm run build
```
Expected: Build succeeds with no errors. Blog pages are statically generated.

- [ ] **Step 2: Run lint**

Run:
```bash
npm run lint
```
Expected: No lint errors.

- [ ] **Step 3: Fix any issues and commit if needed**

If there are build/lint errors, fix them and commit the fixes.
