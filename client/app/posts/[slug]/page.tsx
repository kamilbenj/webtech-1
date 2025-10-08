interface PostProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostProps) {
  const { slug } = params
  return (
    <article>
      <h2 className="text-3xl font-bold mb-4 capitalize">
        {slug.replace('-', ' ')}
      </h2>
      <p className="text-gray-700">
        This is a placeholder page for the article "{slug}".  
        You can later connect this to a CMS or Markdown files.
      </p>
    </article>
  )
}
