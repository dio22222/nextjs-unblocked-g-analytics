"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Next.js / Google Analytics testing grounds</h1>
      <p>All pages are Client Side Rendered so we can test how well GA work with client side routing.</p>
      <Link className='text-sky-400' href='/second-page'>Navigate to the second page to test it yourself</Link>
    </main>
  )
}
