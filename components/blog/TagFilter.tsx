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
