import { useParams } from 'react-router-dom'

export default function AdminBoardPage() {
  const { mid } = useParams<{ mid: string }>()
  return (
    <div className="page">
      <h1>Board Management - {mid}</h1>
      {/* dispBoardAdminContent */}
    </div>
  )
}
