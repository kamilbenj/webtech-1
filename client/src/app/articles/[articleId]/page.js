export default function Article({ params }) {
  const { articleId } = params;
  const dummyArticles = {
    1: { title: "My First Website", author: "Jean Dupont", content: "I built my first website using HTML and CSS." },
    2: { title: "Learning React", author: "Marie Dubois", content: "I learned how components and props work." },
    3: { title: "Discovering Next.js", author: "Pierre Martin", content: "Next.js makes routing so much easier!" }
  };

  const article = dummyArticles[articleId] || { title: "Article not found", author: "Unknown", content: "No data available." };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{article.title}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p>{article.content}</p>
      <p><em>Article ID: {articleId}</em></p>
    </div>
  );
}