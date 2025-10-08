import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Blog</h2>
      <p className="mb-6 text-gray-700">
        Discover articles about web development, tech trends, and programming tips.
      </p>
      <Link
        href="/posts"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Read the posts
      </Link>
    </section>
  )
}
