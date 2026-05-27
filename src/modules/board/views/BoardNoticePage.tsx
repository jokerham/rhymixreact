import { useParams } from 'react-router-dom'

export default function BoardNoticePage() {
  const { mid } = useParams<{ mid: string }>()
  return (
    <div className="page">
      <h1>Notices - {mid}</h1>
      {/* dispBoardNoticeList */}
    </div>
  )
}
