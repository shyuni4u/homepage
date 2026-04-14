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
