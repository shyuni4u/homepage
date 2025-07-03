import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
  const { title, period, role, description, tech, images } = props
  return (
    <Card
      className="dark:bg-slate-900/50 border dark:border-slate-800 shadow-md overflow-hidden print:shadow-none print:border-b print:rounded-none print:p-0 print:bg-transparent"
    >
      <CardHeader className="print:p-0 print:mb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl print:text-lg">{title}</CardTitle>
            <CardDescription className="print:text-sm">
              {role} | {period}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:p-0">
        <div className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 print:text-black print:text-sm">
            {description}
          </p>
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
        {images && images.length > 0 && (
        <div className="relative">
          <Carousel className="rounded-lg overflow-hidden print:hidden">
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={i}>
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${title} screenshot ${i + 1}`}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="hidden print:grid grid-cols-2 gap-2 mt-2">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src || "/placeholder.svg"}
                alt={`${title} screenshot ${i + 1}`}
                width={400}
                height={225}
                className="object-cover w-full rounded-md border"
              />
            ))}
          </div>
        </div>
        )}
      </CardContent>
    </Card>
  )
}