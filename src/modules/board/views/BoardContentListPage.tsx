import { useParams } from 'react-router-dom'

export default function BoardContentListPage() {
  const { mid } = useParams<{ mid: string }>()
  return (
    <div className="page">
      <h1>Board - {mid}</h1>
      {/* dispBoardContentList */}
    </div>
  )
}
