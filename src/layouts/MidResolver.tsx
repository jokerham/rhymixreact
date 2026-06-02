import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../lib/firebase'
import type { ModuleDocument } from '../modules/module/schema/module'

const BoardContentListPage = lazy(() => import('../modules/board/views/BoardContentListPage'))
const PageContentPage = lazy(() => import('../modules/page/views/PageContentPage'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function MidResolver() {
  const { mid } = useParams<{ mid: string }>()
  const [moduleDoc, setModuleDoc] = useState<ModuleDocument | null | undefined>(undefined)

  useEffect(() => {
    if (!mid) {
      Promise.resolve().then(() => setModuleDoc(null))
      return
    }
    getDocs(query(collection(db, 'modules'), where('mid', '==', mid), limit(1)))
      .then((snap) => setModuleDoc(snap.empty ? null : (snap.docs[0].data() as ModuleDocument)))
      .catch(() => setModuleDoc(null))
  }, [mid])

  if (moduleDoc === undefined) return null

  const Component = (() => {
    if (moduleDoc === null) return NotFound
    switch (moduleDoc.module) {
      case 'board': return BoardContentListPage
      case 'page': return PageContentPage
      default: return NotFound
    }
  })()

  return (
    <Suspense fallback={null}>
      <Component moduleDoc={moduleDoc ?? undefined} />
    </Suspense>
  )
}
