import Link from 'next/link'

const posts = [
  { slug: 'nextjs-tutorial', title: 'Getting Started with Next.js', excerpt: 'Learn how to build your first Next.js app.' },
  { slug: 'typescript-tips', title: 'TypeScript Tips for Beginners', excerpt: 'Make your TypeScript code cleaner and safer.' },
  { slug: 'react-hooks', title: 'Understanding React Hooks', excerpt: 'Master useState and useEffect easily.' },
]

export default function PostsPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <article key={post.slug} className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
