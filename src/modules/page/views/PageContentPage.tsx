import type { ModuleDocument } from '../../module/schema/module'

type Props = {
  moduleDoc?: ModuleDocument
}

export default function PageContentPage({ moduleDoc }: Props) {
  if (!moduleDoc?.content) return null

  return (
    <div
      className="rhymix_content xe_content"
      dangerouslySetInnerHTML={{ __html: moduleDoc.content }}
    />
  )
}
