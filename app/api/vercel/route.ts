// app/api/vercel/route.ts
import { NextResponse } from 'next/server'
import { Vercel } from '@vercel/sdk'

export async function GET() {
  try {
    const token = process.env.VERCEL_TOKEN
    if (!token) {
      return NextResponse.json({ projects: [] })
    }

    const vercel = new Vercel({
      bearerToken: token,
    })

    const result = await vercel.projects.getProjects({})

    return NextResponse.json(result)
  } catch (err) {
    console.error('[API Uncaught Error]', err)
    return NextResponse.json({ projects: [] }, { status: 500 })
  }
}
