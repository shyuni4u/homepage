import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Mail, Phone, Github, LinkIcon, GraduationCap, Briefcase, Star } from "lucide-react"
import { ThemeToggle } from "@/components/ui/themeToggle"

export default function PortfolioPage() {
  const projects = [
    {
      title: "하스스톤 전장 전적 사이트 (Hearthstone Battlegrounds Stats)",
      period: "2020년 2월 - 2020년 4월",
      role: "기획 및 개발 (개인 프로젝트)",
      description:
        "블리자드에서 제공하는 API가 제한적이라, 덱트래커 플러그인을 직접 개발하여 게임 로그를 수집했습니다. 게임당 10-15MB에 달하는 로그를 5MB로 경량화하고, 서버에서 로그를 분석하여 유저에게 개인/전체 통계 및 그래프를 제공하는 웹 서비스를 구축했습니다.",
      tech: ["C#", "PHP", "Vue.js", "MariaDB", "NginX", "AWS", "Docker"],
      link: "http://battlegroundlab.com/",
      images: [
        "/placeholder.svg?width=800&height=450",
        "/placeholder.svg?width=800&height=450",
        "/placeholder.svg?width=800&height=450",
      ],
    },
    {
      title: "OverCam",
      period: "2019년 8월 - 2019년 11월",
      role: "기획 및 개발 (개인 프로젝트)",
      description:
        "전문 장비 없이도 Before/After 사진을 쉽게 촬영할 수 있는 안드로이드 애플리케이션입니다. 촬영된 사진들을 동영상이나 GIF 파일로 변환하는 기능을 제공합니다.",
      tech: ["Kotlin", "Android"],
      link: "https://play.google.com/store/apps/details?id=com.loenzo.serialtest2",
      images: ["/placeholder.svg?width=800&height=450", "/placeholder.svg?width=800&height=450"],
    },
  ]

  const experiences = [
    {
      company: "큐빅테크 (CubicTech)",
      period: "2016년 11월 - 2019년 6월",
      role: "풀스택 개발자 | 주임",
      description:
        "10여개 업체의 스마트팩토리 MES 및 인트라넷 웹페이지를 개발했습니다. 기존 간트차트의 데이터 처리방식을 변경하여 속도를 개선하고, FANUC 컨트롤러 신호를 직접 취득하는 서비스를 개발하는 등 다양한 기술적 과제를 해결했습니다.",
      tech: ["PHP", "MSSQL", "MariaDB", "NginX", "Apache", "Node.js", "C++", "Docker", "Linux"],
      images: [
        "/placeholder.svg?width=800&height=450",
        "/placeholder.svg?width=800&height=450",
        "/placeholder.svg?width=800&height=450",
      ],
    },
    {
      company: "대한민국 공군 (R.O.K. Air Force)",
      period: "2009년 5월 - 2011년 4월",
      role: "정보체계운용병",
      description:
        "2,700여명이 사용하는 비행단 홈페이지를 유지보수하고, 이발예약시스템, 결재관리시스템, 체력관리시스템 등 부대원의 편의를 위한 다양한 웹 시스템을 개발했습니다.",
      tech: ["JSP", "Oracle"],
      images: ["/placeholder.svg?width=800&height=450", "/placeholder.svg?width=800&height=450"],
    },
  ]

  return (
    <div className="bg-slate-50 dark:bg-black text-slate-800 dark:text-slate-200 min-h-screen font-sans print:bg-white print:text-black relative">
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
        <ThemeToggle />
      </div>
      <main className="container mx-auto p-4 md:p-8 lg:p-12">
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
                  href="https://shyuni4u.github.io/homepage/dist/"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 print:grid-cols-1">
          <div className="lg:col-span-2 space-y-16 print:space-y-8">
            <section id="about">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 print:text-black">About Me</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-lg print:prose-black print:text-base">
                <p>
                  대학 소모임 홈페이지를 관리하며 웹 개발에 대한 흥미를 느끼게 되었습니다. 이후 군 복무부터 현업에
                  이르기까지 웹 개발, 특히 풀스택 개발에 집중해왔습니다. 현업 3년차 개발자이지만, 꾸준히 개인 서비스와
                  애플리케이션을 만들며 실무 경험 이상으로 개발 역량을 쌓아왔습니다. 새로운 기술을 열정적으로 배우고,
                  상황에 맞는 최적의 언어와 도구를 선택하여 개발하는 것을 즐깁니다. 가치 있는 서비스를 만들어 성취감을
                  느끼는 것이 개발자로서 가장 큰 기쁨이라고 생각합니다.
                </p>
              </div>
            </section>

            <section id="experience">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 print:text-black">
                <Briefcase /> Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="dark:bg-slate-900/50 border dark:border-slate-800 shadow-md overflow-hidden print:shadow-none print:border-b print:rounded-none print:p-0 print:bg-transparent"
                  >
                    <CardHeader className="print:p-0 print:mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl print:text-lg">{exp.company}</CardTitle>
                          <CardDescription className="print:text-sm">
                            {exp.role} | {exp.period}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:p-0">
                      <div className="space-y-4">
                        <p className="text-slate-700 dark:text-slate-300 print:text-black print:text-sm">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
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
                      <div className="relative">
                        <Carousel className="rounded-lg overflow-hidden print:hidden">
                          <CarouselContent>
                            {exp.images.map((src, i) => (
                              <CarouselItem key={i}>
                                <Image
                                  src={src || "/placeholder.svg"}
                                  alt={`${exp.company} screenshot ${i + 1}`}
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
                          {exp.images.map((src, i) => (
                            <Image
                              key={i}
                              src={src || "/placeholder.svg"}
                              alt={`${exp.company} screenshot ${i + 1}`}
                              width={400}
                              height={225}
                              className="object-cover w-full rounded-md border"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="projects">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 print:text-black">
                <Star /> Projects
              </h2>
              <div className="space-y-8">
                {projects.map((proj, index) => (
                  <Card
                    key={index}
                    className="dark:bg-slate-900/50 border dark:border-slate-800 shadow-md overflow-hidden print:shadow-none print:border-b print:rounded-none print:p-0 print:bg-transparent"
                  >
                    <CardHeader className="print:p-0 print:mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl print:text-lg">{proj.title}</CardTitle>
                          <CardDescription className="print:text-sm">
                            {proj.role} | {proj.period}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" asChild className="print:hidden">
                          <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={proj.title}>
                            <LinkIcon className="w-5 h-5" />
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:p-0">
                      <div className="space-y-4">
                        <p className="text-slate-700 dark:text-slate-300 print:text-black print:text-sm">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {proj.tech.map((t) => (
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
                      <div className="relative">
                        <Carousel className="rounded-lg overflow-hidden print:hidden">
                          <CarouselContent>
                            {proj.images.map((src, i) => (
                              <CarouselItem key={i}>
                                <Image
                                  src={src || "/placeholder.svg"}
                                  alt={`${proj.title} screenshot ${i + 1}`}
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
                          {proj.images.map((src, i) => (
                            <Image
                              key={i}
                              src={src || "/placeholder.svg"}
                              alt={`${proj.title} screenshot ${i + 1}`}
                              width={400}
                              height={225}
                              className="object-cover w-full rounded-md border"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-10 print:space-y-6">
            <Card className="p-6 dark:bg-slate-900/50 border dark:border-slate-800 print:shadow-none print:border print:p-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 print:text-black print:text-xl">
                Skills
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold mb-2 text-sky-600 dark:text-sky-400 print:text-sky-700">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>PHP</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>NestJS</Badge>
                    <Badge>C#</Badge>
                    <Badge>Java</Badge>
                    <Badge>JSP</Badge>
                    <Badge>C++</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sky-600 dark:text-sky-400 print:text-sky-700">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>Vue.js</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>jQuery Mobile</Badge>
                    <Badge>Sencha Touch</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sky-600 dark:text-sky-400 print:text-sky-700">Desktop</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Electron</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sky-600 dark:text-sky-400 print:text-sky-700">Database</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MariaDB</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>MSSQL</Badge>
                    <Badge>Oracle</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sky-600 dark:text-sky-400 print:text-sky-700">
                    DevOps & Infra
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>NginX</Badge>
                    <Badge>Apache</Badge>
                    <Badge>Linux</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 dark:bg-slate-900/50 border dark:border-slate-800 print:shadow-none print:border print:p-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3 print:text-black print:text-xl">
                <GraduationCap /> Education
              </h2>
              <div className="space-y-2">
                <h3 className="font-bold">동국대학교 (Dongguk University)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">2007년 - 2015년 졸업</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 print:text-black">
                  주요 이수 과목: 인공지능, 알고리즘, 데이터 구조, 네트워크 프로그래밍, 객체지향 프로그래밍
                </p>
              </div>
            </Card>

            <Card className="p-6 dark:bg-slate-900/50 border dark:border-slate-800 print:shadow-none print:border print:p-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 print:text-black print:text-xl">
                Certification
              </h2>
              <div>
                <h3 className="font-bold">정보처리기사</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">2013년 5월 취득</p>
              </div>
            </Card>
          </aside>
        </div>

        <footer className="text-center mt-20 py-6 border-t dark:border-slate-800 print:hidden">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Kim Seon-woo. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}
