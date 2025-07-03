import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github } from "lucide-react"

export default function Header() {
  return (
        <header className="flex flex-col md:flex-row items-center gap-8 mb-16 print:mb-8">
          <Avatar className="w-36 h-36 border-4 border-white dark:border-slate-800 shadow-xl print:shadow-none">
            <AvatarImage src="/placeholder.svg?height=144&width=144" alt="김선우" />
            <AvatarFallback>김선우</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight print:text-black">
              김선우
            </h1>
            <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold mt-2 print:text-sky-700">
              Full-Stack Developer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5 print:hidden">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="dark:bg-slate-900 dark:border-slate-700 bg-transparent"
              >
                <a href="mailto:shyuniz@naver.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> shyuniz@naver.com
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="dark:bg-slate-900 dark:border-slate-700 bg-transparent"
              >
                <a href="tel:010-5112-2940" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 010-5112-2940
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="dark:bg-slate-900 dark:border-slate-700 bg-transparent"
              >
                <a
                  href="https://github.com/shyuni4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </header>
  )
}