import fs from 'fs'
import path from 'path'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GraduationCap, Briefcase, Star } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/themeToggle'
import { ProjectProps, ProjectCard } from '@/components/molecule/ProjectCard'
import Footer from '@/components/atom/Footer'
import Header from '@/components/atom/Header'

const getImages = (subDir = ''): string[] => {
  const basePath = path.join(process.cwd(), 'public/assets', subDir)
  const entries = fs.readdirSync(basePath, { withFileTypes: true })

  let results: string[] = []

  for (const entry of entries) {
    const entryPath = path.join(subDir, entry.name)

    if (entry.isDirectory()) {
      results = results.concat(getImages(entryPath))
    } else if (/\.(png|jpg|jpeg|webp|svg|gif)$/i.test(entry.name)) {
      results.push(`/assets/${entryPath.replace(/\\/g, '/')}`)
    }
  }

  return results
}

export default function PortfolioPage() {
  const assetsAllImages = getImages()

  const projects: ProjectProps[] = [
    {
      title: 'Big5 심리테스트를 통한 로스트아크 직업 추천',
      type: 'project',
      period: '2021년 6월 - 2021년 11월',
      role: '기획 및 개발 (개인 프로젝트)',
      description:
        '로스트아크 직업 추천을 위한 Big5 심리테스트 웹 애플리케이션입니다. 사용자가 테스트를 완료하면, 결과에 따라 최적의 직업을 추천합니다.',
      tech: ['TypeScript', 'AWS', 'MariaDB'],
      images: assetsAllImages.filter((img) => img.includes('big5_lostark')),
      link: 'http://lostark.enzo.kr/',
    },
    {
      title: 'Big5 심리테스트를 통한 와우 직업 추천',
      type: 'project',
      period: '2020년 9월 - 2021년 11월',
      role: '기획 및 개발 (개인 프로젝트)',
      description:
        '와우 직업 추천을 위한 Big5 심리테스트 웹 애플리케이션입니다. 사용자가 테스트를 완료하면, 결과에 따라 최적의 직업을 추천합니다.',
      tech: ['TypeScript', 'AWS', 'MariaDB'],
      images: assetsAllImages.filter((img) => img.includes('big5_wow')),
      link: 'http://wow.enzo.kr/',
    },
    {
      title: '하스스톤 전장 전적 사이트 (Hearthstone Battlegrounds Stats)',
      type: 'project',
      period: '2020년 2월 - 2020년 4월',
      role: '기획 및 개발 (개인 프로젝트)',
      description:
        '블리자드에서 제공하는 API가 제한적이라, 덱트래커 플러그인을 직접 개발하여 게임 로그를 수집했습니다. 게임당 10-15MB에 달하는 로그를 5MB로 경량화하고, 서버에서 로그를 분석하여 유저에게 개인/전체 통계 및 그래프를 제공하는 웹 서비스를 구축했습니다.',
      tech: ['C#', 'PHP', 'Vue.js', 'MariaDB', 'NginX', 'AWS', 'Docker'],
      images: assetsAllImages.filter((img) => img.includes('hearthstone_bglab')),
    },
    {
      title: 'OverCam',
      type: 'project',
      period: '2019년 8월 - 2019년 11월',
      role: '기획 및 개발 (개인 프로젝트)',
      description:
        '전문 장비 없이도 Before/After 사진을 쉽게 촬영할 수 있는 안드로이드 애플리케이션입니다. 촬영된 사진들을 동영상이나 GIF 파일로 변환하는 기능을 제공합니다.',
      tech: ['Kotlin', 'Android'],
      images: assetsAllImages.filter((img) => img.includes('overcam')),
    },
  ]

  const experiences: ProjectProps[] = [
    {
      title: '모레 (Moreh)',
      type: 'experience',
      period: '2020년 10월 - 현재',
      role: '풀스택 개발자 | 팀장',
      description:
        '사내용 웹 및 봇 개발, 학습과정 디버깅을 위한 Tensor, Operator 시각화 개발, 사내 AI 학습 프레임워크 플랫폼(MCP, PCS, MoAI) 설계 및 개발, Modelhub 초기버전 개발, AMD prometheus exporter addon 개발, Keycloak 적용으로 인증 및 권한 관리 통합 등의 다양한 프로젝트를 수행했습니다. 또한, 사내 개발 문화 개선을 위한 다양한 활동을 주도하고 있습니다.',
      tech: ['Go', 'Node.js', 'Next.js', 'NestJS', 'MariaDB', 'MongoDB', 'NginX', 'Docker', 'Kubernetes'],
    },
    {
      title: '매니코어소프트 (Manycoresoft)',
      type: 'experience',
      period: '2020년 6월 - 2020년 10월',
      role: '웹앱 개발자',
      description: '신용정보를 이용한 학습 관리 웹 애플리케이션 (IML)을 일렉트론으로 개발했습니다.',
      tech: ['React', 'Electron'],
    },
    {
      title: '큐빅테크 (CubicTech)',
      type: 'experience',
      period: '2016년 11월 - 2019년 6월',
      role: '풀스택 개발자 | 주임',
      description:
        '10여개 업체의 스마트팩토리 MES 및 인트라넷 웹페이지를 개발했습니다. 기존 간트차트의 데이터 처리방식을 변경하여 속도를 개선하고, FANUC 컨트롤러 신호를 직접 취득하는 서비스를 개발하는 등 다양한 기술적 과제를 해결했습니다.',
      tech: ['PHP', 'MSSQL', 'MariaDB', 'NginX', 'Apache', 'Node.js', 'C++', 'Docker', 'Linux'],
      images: assetsAllImages.filter((img) => img.includes('smart_factory')),
    },
    {
      title: '대한민국 공군 (R.O.K. Air Force)',
      type: 'experience',
      period: '2009년 5월 - 2011년 4월',
      role: '정보체계운용병',
      description:
        '2,700여명이 사용하는 비행단 홈페이지를 유지보수하고, 이발예약시스템, 결재관리시스템, 체력관리시스템 등 부대원의 편의를 위한 다양한 웹 시스템을 개발했습니다.',
      tech: ['JSP', 'Oracle'],
    },
  ]

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 dark:bg-black dark:text-slate-200 print:bg-white print:text-black">
      <div className="absolute top-4 right-4 z-10 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <main className="container mx-auto p-4 md:p-8 lg:p-12">
        {/* Header */}
        <Header />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 print:grid-cols-1">
          {/* Main Content */}
          <div className="space-y-16 lg:col-span-2 print:space-y-8">
            <section id="about">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white print:text-black">About Me</h2>
              <div className="prose prose-slate dark:prose-invert print:prose-black max-w-none text-lg print:text-base">
                <p>
                  대학 소모임 홈페이지를 관리하며 웹 개발에 대한 흥미를 느끼게 되었습니다. 이후 군 복무부터 현업에
                  이르기까지 웹 개발, 특히 풀스택 개발에 집중해왔습니다. 꾸준히 개인 서비스와 애플리케이션을 만들며 실무
                  경험 이상으로 개발 역량을 쌓아왔습니다. 새로운 기술을 열정적으로 배우고, 상황에 맞는 최적의 언어와
                  도구를 선택하여 개발하는 것을 즐깁니다. 가치 있는 서비스를 만들어 성취감을 느끼는 것이 개발자로서 가장
                  큰 기쁨이라고 생각합니다.
                </p>
              </div>
            </section>

            <section id="experience">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white print:text-black">
                <Briefcase /> Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <ProjectCard
                    key={index}
                    title={exp.title}
                    type={exp.type}
                    period={exp.period}
                    role={exp.role}
                    description={exp.description}
                    tech={exp.tech}
                    images={exp.images}
                    link={exp.link}
                  />
                ))}
              </div>
            </section>

            <section id="projects">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white print:text-black">
                <Star /> Projects
              </h2>
              <div className="space-y-8">
                {projects.map((proj, index) => (
                  <ProjectCard
                    key={index}
                    title={proj.title}
                    type={proj.type}
                    period={proj.period}
                    role={proj.role}
                    description={proj.description}
                    tech={proj.tech}
                    images={proj.images}
                    link={proj.link}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 print:space-y-6">
            <Card className="border p-6 dark:border-slate-800 dark:bg-slate-900/50 print:border print:p-4 print:shadow-none">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white print:text-xl print:text-black">
                Skills
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-sky-600 dark:text-sky-400 print:text-sky-700">Backend</h3>
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
                  <h3 className="mb-2 font-semibold text-sky-600 dark:text-sky-400 print:text-sky-700">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>Vue.js</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>jQuery Mobile</Badge>
                    <Badge>Sencha Touch</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-sky-600 dark:text-sky-400 print:text-sky-700">Desktop</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Electron</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-sky-600 dark:text-sky-400 print:text-sky-700">Database</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MariaDB</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>MSSQL</Badge>
                    <Badge>Oracle</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-sky-600 dark:text-sky-400 print:text-sky-700">
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

            <Card className="border p-6 dark:border-slate-800 dark:bg-slate-900/50 print:border print:p-4 print:shadow-none">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white print:text-xl print:text-black">
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

            <Card className="border p-6 dark:border-slate-800 dark:bg-slate-900/50 print:border print:p-4 print:shadow-none">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white print:text-xl print:text-black">
                Certification
              </h2>
              <div>
                <h3 className="font-bold">정보처리기사</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">2013년 5월 취득</p>
              </div>
            </Card>
          </aside>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
