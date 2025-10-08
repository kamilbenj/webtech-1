'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [search, setSearch] = useState('')

  const links = [
    { href: '/', label: 'Discover' },
    { href: '/animation', label: 'Animation' },
    { href: '/branding', label: 'Branding' },
    { href: '/illustration', label: 'Illustration' },
    { href: '/mobile', label: 'Mobile' },
    { href: '/web', label: 'Web Design' },
  ]

  return (
    <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
      {/* === Top Section === */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          MyBlog<span className="text-pink-200">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-200 ${
                pathname === href
                  ? 'text-white font-semibold border-b-2 border-white pb-1'
                  : 'text-pink-100 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="space-x-3 hidden md:flex">
          <button className="text-sm font-medium px-4 py-2 border border-white/30 rounded-md hover:bg-white/10">
            Sign in
          </button>
          <button className="text-sm font-medium px-4 py-2 bg-white text-purple-700 rounded-md hover:bg-pink-100">
            Sign up
          </button>
        </div>
      </div>

      {/* === Search Bar === */}
      <div className="flex flex-col items-center justify-center pb-8 px-4">
        <h1 className="text-3xl font-bold mb-3 text-center">
          Explore the world’s leading design portfolios
        </h1>
        <p className="text-pink-100 mb-6 text-center max-w-xl">
          Millions of creators share their best work here — discover the next big trend.
        </p>

        <div className="flex items-center bg-white rounded-full shadow-md w-full max-w-lg overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="flex-grow px-5 py-3 text-gray-700 outline-none"
          />
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium">
            Search
          </button>
        </div>
      </div>
    </header>
  )
}
