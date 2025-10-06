import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/articles">Articles</Link>
      </nav>
    </header>
  );
}
