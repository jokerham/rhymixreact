import { Navigate } from 'react-router-dom'

import { useLayoutStore } from '../stores/layoutStore'

export default function HomePage() {
  const defaultMid = useLayoutStore((state) => state.defaultMid)

  if (!defaultMid) return null

  return <Navigate to={`/${defaultMid}`} replace />
}
