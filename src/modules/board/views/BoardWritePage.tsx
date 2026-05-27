import { useParams } from 'react-router-dom'

export default function BoardWritePage() {
  const { mid } = useParams<{ mid: string }>()
  return (
    <div className="page">
      <h1>Write Post - {mid}</h1>
      {/* dispBoardWrite */}
    </div>
  )
}
