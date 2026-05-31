import { Box, CircularProgress } from '@mui/material'
import React, { lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useLayoutStore } from '../stores/layoutStore'

// Auto-discover all layouts under src/layouts/*/index.tsx at build time.
// Each entry's key is the relative path; the value is a dynamic import function
// compatible with React.lazy.
const layoutGlob = import.meta.glob<{ default: React.ComponentType }>(
  './*/index.tsx',
)

// Build a stable map of lazy components once at module load time so React
// never sees a new component reference on re-renders.
const lazyLayouts: Record<string, React.LazyExoticComponent<React.ComponentType>> =
  Object.fromEntries(
    Object.entries(layoutGlob).map(([path, loader]) => {
      // path is e.g. "./default/index.tsx" → name is "default"
      const name = path.match(/^\.\/(.+)\/index\.tsx$/)?.[1] ?? 'default'
      return [name, lazy(loader)]
    }),
  )

// First path segments that are fixed route groups (not dynamic :mid values).
// Add new entries here when a new non-mid module route is registered.
// Mirrors Rhymix's route_layouts keys in settings/design.
const STATIC_PREFIXES = new Set(['member', 'admin', 'notifications'])

function deriveContext(pathname: string): { mid?: string; routeGroup?: string } {
  const first = pathname.split('/').filter(Boolean)[0]
  if (!first) return {}
  if (STATIC_PREFIXES.has(first)) return { routeGroup: first }
  return { mid: first }
}

export default function LayoutResolver() {
  const location = useLocation()
  const { isReady, fetchModuleLayout, resolveLayoutName } = useLayoutStore()

  const { mid, routeGroup } = deriveContext(location.pathname)

  useEffect(() => {
    if (mid) fetchModuleLayout(mid)
  }, [mid, fetchModuleLayout])

  if (!isReady) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <CircularProgress size={32} />
      </Box>
    )
  }

  const layoutName = resolveLayoutName(mid, routeGroup)
  const Layout = lazyLayouts[layoutName] ?? lazyLayouts['default']

  return (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <CircularProgress size={32} />
        </Box>
      }
    >
      <Layout />
    </Suspense>
  )
}
