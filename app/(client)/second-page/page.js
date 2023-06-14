"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Second Page</h1>
      <Link className='text-sky-400' href='/'>Go back</Link>
    </main>
  )
}
