import { useParams } from 'react-router-dom'

export default function BoardEditPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Edit Post {documentSrl} - {mid}</h1>
      {/* Edit document */}
    </div>
  )
}
