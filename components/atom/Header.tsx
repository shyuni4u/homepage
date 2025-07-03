import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="mb-16 flex flex-col items-center gap-8 md:flex-row print:mb-8">
      <Avatar className="h-36 w-36 border-4 border-white shadow-xl dark:border-slate-800 print:shadow-none">
        <AvatarImage src="/assets/240221_me.jpg" alt="김선우" />
        <AvatarFallback>김선우</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white print:text-black">
          김선우
        </h1>
        <p className="mt-2 text-xl font-semibold text-sky-600 dark:text-sky-400 print:text-sky-700">
          Full-Stack Developer
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start print:hidden">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-transparent dark:border-slate-700 dark:bg-slate-900"
          >
            <a href="mailto:shyuniz@naver.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> shyuniz@naver.com
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-transparent dark:border-slate-700 dark:bg-slate-900"
          >
            <a href="tel:010-5112-2940" className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 010-5112-2940
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-transparent dark:border-slate-700 dark:bg-slate-900"
          >
            <a
              href="https://github.com/shyuni4u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
