import { useParams } from 'react-router-dom'

export default function CommentListPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Comments - Post {documentSrl} - {mid}</h1>
      {/* dispBoardContentCommentList */}
    </div>
  )
}
