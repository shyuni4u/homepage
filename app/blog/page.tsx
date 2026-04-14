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
