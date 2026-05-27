import { useParams } from 'react-router-dom'

export default function BoardPostPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Post {documentSrl} in {mid}</h1>
      {/* dispBoardContentView */}
    </div>
  )
}
