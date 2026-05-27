import { useParams } from 'react-router-dom'

export default function BoardCategoryPage() {
  const { mid, categorySrl } = useParams<{ mid: string; categorySrl: string }>()
  return (
    <div className="page">
      <h1>Category {categorySrl} - {mid}</h1>
      {/* dispBoardCategory */}
    </div>
  )
}
