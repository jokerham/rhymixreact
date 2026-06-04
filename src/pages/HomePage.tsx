import { Navigate } from 'react-router-dom'

import { useLayoutConfig } from '../lib/layout/LayoutContext'

export default function HomePage() {
  const { defaultMid } = useLayoutConfig()

  if (!defaultMid) return null

  return <Navigate to={`/${defaultMid}`} replace />
}
