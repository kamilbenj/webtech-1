export default function Footer() {
  return (
    <footer style={{ padding: "1rem 2rem", borderTop: "1px solid #eee", marginTop: "2rem" }}>
      <p>© {new Date().getFullYear()} My Blog — built with Next.js</p>
    </footer>
  );
}
