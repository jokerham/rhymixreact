import { useParams } from 'react-router-dom'

export default function BoardTagListPage() {
  const { mid } = useParams<{ mid: string }>()
  return (
    <div className="page">
      <h1>Tags - {mid}</h1>
      {/* dispBoardTagList */}
    </div>
  )
}
