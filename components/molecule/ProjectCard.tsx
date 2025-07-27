import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { LinkIcon } from 'lucide-react'

export type ProjectProps = {
  title: string
  type: 'project' | 'experience'
  period: string
  role: string
  description: string
  tech: string[]
  link?: string
  images?: string[]
}

export function ProjectCard(props: ProjectProps) {
  const { title, link, period, role, description, tech, images } = props
  const hasImages = images && images.length > 0

  return (
    <Card className="overflow-hidden border shadow-md dark:border-slate-800 dark:bg-slate-900/50 print:rounded-none print:border-b print:bg-transparent print:p-0 print:shadow-none">
      <CardHeader className="print:mb-2 print:p-0">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl print:text-lg">{title}</CardTitle>
            <CardDescription className="print:text-sm">
              {role} | {period}
            </CardDescription>
            {link && <p className="hidden text-xs break-all text-blue-700 print:block">{link}</p>}
          </div>
          {link && (
            <Button variant="ghost" size="icon" asChild className="print:hidden">
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
                <LinkIcon className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          'grid gap-6 print:grid-cols-1 print:p-0',
          hasImages ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1',
        )}
      >
        <div className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 print:text-sm print:text-black">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="dark:bg-slate-800 dark:text-slate-300 print:bg-slate-200 print:text-black"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
        {hasImages && (
          <div className="relative">
            <Carousel className="overflow-hidden rounded-lg print:hidden">
              <CarouselContent>
                {images.map((src, i) => (
                  <CarouselItem key={i}>
                    <a href={src} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={src || '/placeholder.svg'}
                        alt={`${title} screenshot ${i + 1}`}
                        width={800}
                        height={450}
                        className="max-h-[400px] w-full cursor-zoom-in rounded-md object-cover print:max-h-[250px]"
                      />
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="mt-2 hidden grid-cols-3 gap-2 print:grid">
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src || '/placeholder.svg'}
                  alt={`${title} screenshot ${i + 1}`}
                  width={400}
                  height={225}
                  className="w-full rounded-md border object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
