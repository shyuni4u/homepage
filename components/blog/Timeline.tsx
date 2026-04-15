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
        {filteredPosts.map((post, index) => (
          <TimelineItem key={post.slug} post={post} isLast={index === filteredPosts.length - 1} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-slate-500 dark:text-slate-400">해당 태그의 글이 없습니다.</p>
        )}
      </div>
    </div>
  )
}
