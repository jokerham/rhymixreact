import { Suspense, Outlet } from 'react-router-dom'

function LoadingFallback() {
  return <div className="loading">Loading...</div>
}

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/member/login">Login</a>
          <a href="/search">Search</a>
        </nav>
      </header>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <p>© 2025 Rhymix CMS</p>
      </footer>
    </div>
  )
}
