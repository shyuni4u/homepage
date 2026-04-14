# Blog Feature Design Spec

## Overview

포트폴리오 홈페이지에 `/blog` 페이지를 추가하여 경험, 아이디어, 기술 글을 타임라인 형태로 기록하는 블로그 기능.

## Content Management

- **방식**: MDX 파일 기반 (`next-mdx-remote`)
- **위치**: `content/blog/` 폴더
- **파일명 규칙**: `YYYY-MM-DD-slug.mdx` (예: `2026-04-14-first-post.mdx`)
- **콘텐츠 유형**: 텍스트 + 코드 블록 혼합 (회고, 아이디어, 기술 글)

### Frontmatter Schema

```yaml
---
title: string        # 글 제목
description: string  # 짧은 요약
date: YYYY-MM-DD     # 작성일
tags: string[]       # 태그 목록 (예: ["회고", "개발"])
slug: string         # URL 슬러그
published: boolean   # false면 목록에서 숨김
---
```

## Routing

| 경로 | 설명 |
|------|------|
| `/blog` | 글 목록 (타임라인) |
| `/blog/[year]/[month]/[slug]` | 개별 글 |

### App Router 구조

```
app/
  blog/
    page.tsx                        # 목록 페이지 (SSG)
    [year]/[month]/[slug]/
      page.tsx                      # 개별 글 페이지 (SSG)
```

두 페이지 모두 `generateStaticParams`로 빌드 타임에 정적 생성.

## Blog List Page (`/blog`)

### 타임라인 레이아웃
- 왼쪽 세로 선(타임라인) + 각 글을 최신순으로 나열
- 각 항목: 날짜 + 제목 + 설명 + 태그 배지
- 기존 포트폴리오 Experience 섹션과 유사한 톤

### 태그 필터
- 타임라인 상단에 전체 태그를 배지로 표시
- 클릭 시 해당 태그 글만 필터링 (클라이언트 사이드 토글)
- 별도 `/blog/tag/[tag]` 라우트 없음

### 헤더 네비게이션
- 기존 Header 컴포넌트에 `/blog` 링크 추가

## Blog Post Page (`/blog/[year]/[month]/[slug]`)

### 레이아웃
- **상단**: 제목, 날짜, 태그 배지
- **본문**: MDX 렌더링 (`@tailwindcss/typography` prose 스타일링)
- **하단**: 이전 글 / 다음 글 네비게이션

### 코드 하이라이팅
- `rehype-pretty-code` + `shiki` 사용

### MDX 커스텀 컴포넌트
- `components/blog/mdx-components.tsx`에서 매핑
- 기본 HTML 요소는 typography 플러그인이 처리
- 필요시 커스텀 컴포넌트 추가 가능한 구조

## Dependencies (추가)

| 패키지 | 용도 |
|--------|------|
| `next-mdx-remote` | MDX 파싱/렌더링 |
| `gray-matter` | frontmatter 파싱 |
| `@tailwindcss/typography` | prose 스타일링 |
| `rehype-pretty-code` | 코드 하이라이팅 |
| `shiki` | 코드 하이라이팅 엔진 |

## Utility Functions (`lib/blog.ts`)

- `getAllPosts()` — content/blog/ 폴더의 모든 MDX 파일 읽기, frontmatter 파싱, 날짜순 정렬, published 필터링
- `getPostBySlug(year, month, slug)` — 특정 글 조회 (MDX 소스 + frontmatter 반환)
- `getAllTags()` — 전체 태그 목록 추출

## Component Structure

```
components/
  blog/
    Timeline.tsx          # 타임라인 목록 컴포넌트
    TimelineItem.tsx      # 개별 타임라인 항목
    TagFilter.tsx         # 태그 필터 (client component)
    PostHeader.tsx        # 글 상단 (제목, 날짜, 태그)
    PostNavigation.tsx    # 이전/다음 글
    mdx-components.tsx    # MDX 커스텀 컴포넌트 매핑
```

## Design Decisions

1. **next-mdx-remote 선택 이유**: 동적 라우팅(날짜 기반 URL) + frontmatter 파싱 + 커스텀 컴포넌트 지원이 가장 자연스러움
2. **태그 필터는 클라이언트 사이드**: 글 수가 적을 때 별도 라우트보다 간단하고 빠름. 글이 많아지면 서버 사이드 라우트로 전환 가능
3. **타임라인 UI**: 경험 기록 목적에 맞고, 기존 포트폴리오의 Experience 섹션과 시각적 일관성 유지
4. **published 플래그**: 작성 중인 글을 숨기면서도 Git에는 보관 가능
