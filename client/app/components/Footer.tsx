export default function Footer() {
  return (
    <footer className="text-center py-6 border-t mt-8 text-gray-500 bg-white">
      © {new Date().getFullYear()} My Blog · Built with Next.js + TypeScript
    </footer>
  )
}
