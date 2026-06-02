import { useParams } from 'react-router-dom'

import type { ModuleDocument } from '../../module/schema/module'

type Props = {
  moduleDoc?: ModuleDocument
}

export default function BoardContentListPage({ moduleDoc: _ }: Props) {
  const { mid } = useParams<{ mid: string }>()
  return (
    <div className="page">
      <h1>Board - {mid}</h1>
      {/* dispBoardContentList */}
    </div>
  )
}
