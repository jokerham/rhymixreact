import { useParams } from 'react-router-dom'

export default function UpdateLogViewPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string; logSrl: string }>()
  return (
    <div className="page">
      <h1>Update Log Detail - Post {documentSrl} - {mid}</h1>
      {/* dispBoardUpdateLogView */}
    </div>
  )
}
