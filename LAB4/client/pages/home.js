import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Lab 4</h1>
      <p>This is the home page for the lab 4. Use the navigation to browse pages.</p>
      <p>
        Want to read articles ? <Link href="/article">Go to Articles</Link>
      </p>
    </div>
  );
}
