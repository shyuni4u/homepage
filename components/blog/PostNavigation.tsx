import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { PostMeta } from '@/lib/blog'

type PostNavigationProps = {
  prev: PostMeta | null
  next: PostMeta | null
}

function getPostUrl(post: PostMeta): string {
  const [year, month] = post.date.split('-')
  return `/blog/${year}/${month.padStart(2, '0')}/${post.slug}`
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
