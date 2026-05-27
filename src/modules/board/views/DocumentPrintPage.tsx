import { useParams } from 'react-router-dom'

export default function DocumentPrintPage() {
  const { mid, documentSrl } = useParams<{ mid: string; documentSrl: string }>()
  return (
    <div className="page">
      <h1>Print - Post {documentSrl} - {mid}</h1>
      {/* dispDocumentPrint */}
    </div>
  )
}
