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
