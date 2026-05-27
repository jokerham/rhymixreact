import { useParams } from 'react-router-dom'

export default function DocumentPreviewPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Preview - Post {documentSrl} - {mid}</h1>
      {/* dispDocumentPreview */}
    </div>
  )
}
