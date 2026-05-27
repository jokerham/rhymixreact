import { useParams } from 'react-router-dom'

export default function UpdateLogPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Update Log - Post {documentSrl} - {mid}</h1>
      {/* dispBoardUpdateLog */}
    </div>
  )
}
