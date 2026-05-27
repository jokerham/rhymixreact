import { useParams } from 'react-router-dom'

export default function VoteLogPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Vote Log - Post {documentSrl} - {mid}</h1>
      {/* dispBoardVoteLog */}
    </div>
  )
}
