import { cache } from 'react'
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

function parseDate(date: string | Date) {
  if (date instanceof Date) {
    return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() }
  }
  const [year, month, day] = date.split('-').map(Number)
  return { year, month, day }
}

function dateToString(date: string | Date): string {
  if (!date) return ''
  if (date instanceof Date) {
    const y = date.getUTCFullYear()
    const m = (date.getUTCMonth() + 1).toString().padStart(2, '0')
    const d = date.getUTCDate().toString().padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  return date
}

export { formatDateKo } from './date'

export const getAllPosts = cache((): PostMeta[] => {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      const meta: PostMeta = {
        title: data.title ?? '',
        description: data.description ?? '',
        date: dateToString(data.date),
        tags: Array.isArray(data.tags) ? data.tags : [],
        slug: data.slug ?? filename.replace(/\.mdx$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
        published: data.published ?? false,
      }
      return meta
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
})

export const getPostBySlug = cache((year: string, month: string, slug: string): Post | null => {
  if (!fs.existsSync(BLOG_DIR)) return null

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const targetMonth = month.padStart(2, '0')

  // Try matching by filename convention first (YYYY-MM-DD-slug.mdx)
  const matchedFile = files.find((f) => f.startsWith(`${year}-${targetMonth}`) && f.endsWith(`${slug}.mdx`))

  const filesToCheck = matchedFile ? [matchedFile] : files

  for (const filename of filesToCheck) {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const meta: PostMeta = {
      title: data.title ?? '',
      description: data.description ?? '',
      date: dateToString(data.date),
      tags: Array.isArray(data.tags) ? data.tags : [],
      slug: data.slug ?? filename.replace(/\.mdx$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
      published: data.published ?? false,
    }
    const { year: postYear, month: postMonth } = parseDate(meta.date)

    if (
      postYear.toString() === year &&
      postMonth.toString().padStart(2, '0') === targetMonth &&
      meta.slug === slug &&
      meta.published
    ) {
      return { meta, content }
    }
  }

  return null
})

export function getAllTags(posts: PostMeta[]): string[] {
  const tagSet = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)))
  return Array.from(tagSet).sort()
}
