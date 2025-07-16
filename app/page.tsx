import { headers } from 'next/headers'
import fs from 'fs'
import path from 'path'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GraduationCap, Briefcase, GitBranch, Activity } from 'lucide-react'
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

export default async function PortfolioPage() {
  const host = (await headers()).get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`
  const assetsAllImages = getImages()
  const vercelProjects = (await fetch(`${baseUrl}/api/vercel`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error('[API Error]', err)
      return []
    })) satisfies { name: string; url: string; description?: string; createdAt: string; frameworks?: string[] }[]

  const liveProjects = await Promise.all(
    vercelProjects.projects.map(async (project: any) => ({
      title: project.name,
      type: 'project',
      period: `${new Date(project.createdAt).getFullYear()}년 ${new Date(project.createdAt).getMonth() + 1}월 - 현재`,
      role: '기획 및 개발 (개인 프로젝트)',
      description: project.description || 'Vercel에서 호스팅되는 프로젝트입니다. 링크를 확인해주세요.',
      tech: project.frameworks || ['Next.js'],
      link:
        project?.latestDeployments?.[0]?.alias.length > 0
          ? `https://${project?.latestDeployments?.[0]?.alias[0]}`
          : project.url,
    })),
  )
  const inactiveProjects: ProjectProps[] = [
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
                  대학 시절 웹 개발에 흥미를 느껴 군 복무 시절부터 현재까지 풀스택 개발에 집중해왔습니다. 큐빅테크와
                  매니코어소프트를 거쳐 현재 모레(Moreh)에서 풀스택 개발자 및 팀장으로 재직하며, 사내 AI 학습 프레임워크
                  플랫폼 설계 및 개발, Tensor/Operator 시각화 등 다양한 핵심 프로젝트를 주도하고 있습니다. 또한,
                  로스트아크/와우 직업 추천 Big5 심리테스트, 하스스톤 전장 전적 사이트 등 개인 프로젝트를 꾸준히
                  개발하며 실무 경험 이상의 기술 역량을 쌓아왔습니다. Go, Node.js, Next.js, Docker, Kubernetes 등 폭넓은
                  기술 스택을 활용하여 최적의 솔루션을 도출하며, 새로운 기술을 학습하고 가치 있는 서비스를 구현하는 데
                  큰 즐거움을 느낍니다.
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

            <section id="live-projects">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white print:text-black">
                <Activity /> Live Projects
              </h2>
              <div className="space-y-8">
                {liveProjects.map((proj, index) => (
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

            <section id="inactive-projects">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white print:text-black">
                <GitBranch /> Inactive Projects
              </h2>
              <div className="space-y-8">
                {inactiveProjects.map((proj, index) => (
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
