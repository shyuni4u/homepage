import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { formatDateKo } from '@/lib/date'
import type { PostMeta } from '@/lib/blog'

export default function TimelineItem({ post, isLast }: { post: PostMeta; isLast: boolean }) {
  const [year, month] = post.date.split('-')
  const paddedMonth = month.padStart(2, '0')
  const formattedDate = formatDateKo(post.date)

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-sky-500 bg-white dark:border-sky-400 dark:bg-slate-900" />
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
      )}

      <Link href={`/blog/${year}/${paddedMonth}/${post.slug}`} className="group block">
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
