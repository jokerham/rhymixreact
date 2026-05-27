import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside>
        <nav>
          <a href="/admin">Dashboard</a>
          <a href="/admin/members">Members</a>
          <a href="/admin/documents">Documents</a>
          <a href="/admin/comments">Comments</a>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
