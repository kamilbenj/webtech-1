export default function Header() {
  return (
    <header style={{ backgroundColor: '#0070f3', padding: '1rem', textAlign: 'center' }}>
      <h1>My WebTech Blog</h1>
      <nav>
        <a href="/" style={{ margin: '10px'}}>Home</a>
        <a href="/about" style={{ margin: '10px'}}>About</a>
        <a href="/articles" style={{ margin: '10px'}}>Articles</a>
        <a href="/contacts" style={{ margin: '10px'}}>Contacts</a>
      </nav>
    </header>
  );
}