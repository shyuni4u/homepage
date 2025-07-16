// app/api/vercel/route.ts
import { NextResponse } from 'next/server'
import { Vercel } from '@vercel/sdk'

const token = process.env.VERCEL_TOKEN
if (!token) {
  throw new Error('Missing VERCEL_TOKEN')
}

const vercel = new Vercel({
  bearerToken: token,
})

export async function GET() {
  try {
    const result = await vercel.projects.getProjects({})

    return NextResponse.json(result)
  } catch (err) {
    console.error('[API Uncaught Error]', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
