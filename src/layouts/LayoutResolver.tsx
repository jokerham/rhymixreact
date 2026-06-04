import { Box, CircularProgress } from '@mui/material'
import React, { lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useLayoutConfig } from '../lib/layout/LayoutContext'

const layoutGlob = import.meta.glob<{ default: React.ComponentType }>(
  './*/index.tsx',
)

const lazyLayouts: Record<string, React.LazyExoticComponent<React.ComponentType>> =
  Object.fromEntries(
    Object.entries(layoutGlob).map(([path, loader]) => {
      const name = path.match(/^\.\/(.+)\/index\.tsx$/)?.[1] ?? 'default'
      return [name, lazy(loader)]
    }),
  )

const STATIC_PREFIXES = new Set(['member', 'admin', 'notifications'])

function deriveContext(pathname: string): { mid?: string; routeGroup?: string } {
  const first = pathname.split('/').filter(Boolean)[0]
  if (!first) return {}
  if (STATIC_PREFIXES.has(first)) return { routeGroup: first }
  return { mid: first }
}

const spinner = (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <CircularProgress size={32} />
  </Box>
)

export default function LayoutResolver() {
  const location = useLocation()
  const { isReady, fetchModuleLayout, resolveLayoutName } = useLayoutConfig()

  const { mid, routeGroup } = deriveContext(location.pathname)

  useEffect(() => {
    if (mid) fetchModuleLayout(mid)
  }, [mid, fetchModuleLayout])

  if (!isReady) return spinner

  const layoutName = resolveLayoutName(mid, routeGroup)
  const Layout = lazyLayouts[layoutName] ?? lazyLayouts['default']

  return <Suspense fallback={spinner}><Layout /></Suspense>
}
