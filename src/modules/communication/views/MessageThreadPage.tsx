import { useParams } from 'react-router-dom'

export default function MessageThreadPage() {
  const { boxSrl } = useParams<{ boxSrl: string }>()
  return (
    <div className="page">
      <h1>Message Thread {boxSrl}</h1>
      {/* dispCommunicationMessages */}
    </div>
  )
}
