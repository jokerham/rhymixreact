/* eslint-disable react-refresh/only-export-components */
import { limit, where } from 'firebase/firestore'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

import { getLayoutListQuery } from '../../modules/layout/queries/get-layout-list'
import { getDefaultModulesQuery } from '../../modules/module/queries/get-default-modules'
import { getModuleByMidQuery } from '../../modules/module/queries/get-module-by-mid'
import { queryList, queryListWhere, queryRead } from '../firestore/executor'
import type { RhymixQueryDefinition } from '../firestore/types'

const DEFAULT_LAYOUT = 'default'

interface LayoutDef {
  layout_srl: number
  layout: string
}

interface SiteDesignConfig {
  layout_srl: number
  route_layouts: Record<string, number>
}

// Inline query definition for the settings/design document
const getSettingsDesignQuery: RhymixQueryDefinition = {
  id: 'getSettingsDesign',
  rhymixAction: 'select',
  firestoreOperation: 'read',
  sourceTables: ['settings'],
  targets: [{ collection: 'settings', pathPattern: 'settings/design', purpose: 'primary' }],
  requiresTransaction: false,
  notes: ['Site-wide layout configuration document.'],
}

type LayoutContextValue = {
  isReady: boolean
  defaultMid: string | null
  fetchModuleLayout: (mid: string) => Promise<void>
  resolveLayoutName: (mid?: string, routeGroup?: string) => string
}

const LayoutContext = createContext<LayoutContextValue>({
  isReady: false,
  defaultMid: null,
  fetchModuleLayout: async () => {},
  resolveLayoutName: () => DEFAULT_LAYOUT,
})

const STATIC_PREFIXES = new Set(['member', 'admin', 'notifications'])

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const [defaultMid, setDefaultMid] = useState<string | null>(null)
  const [siteConfig, setSiteConfig] = useState<SiteDesignConfig>({ layout_srl: 0, route_layouts: {} })
  const [layoutDefs, setLayoutDefs] = useState<Record<number, LayoutDef>>({})
  const moduleLayouts = useRef<Record<string, number>>({})

  useEffect(() => {
    Promise.all([
      queryRead<SiteDesignConfig>(getSettingsDesignQuery, {}),
      queryList<LayoutDef>(getLayoutListQuery),
      queryListWhere<{ mid?: string; isDefault?: boolean }>(getDefaultModulesQuery, [
        where('isDefault', '==', true),
        limit(1),
      ]),
    ])
      .then(([design, layouts, defaultModules]) => {
        setSiteConfig(design ?? { layout_srl: 0, route_layouts: {} })

        const defs: Record<number, LayoutDef> = {}
        layouts.forEach((l) => { defs[l.layout_srl] = l })
        setLayoutDefs(defs)

        setDefaultMid(defaultModules[0]?.mid ?? null)
        setIsReady(true)
      })
      .catch((err) => {
        console.error('[LayoutContext] init failed', err)
        setIsReady(true)
      })
  }, [])

  const fetchModuleLayout = useCallback(async (mid: string) => {
    if (mid in moduleLayouts.current) return
    try {
      const results = await queryListWhere<{ mid?: string; layoutSrl?: number }>(
        getModuleByMidQuery,
        [where('mid', '==', mid), limit(1)],
      )
      moduleLayouts.current[mid] = results[0]?.layoutSrl ?? -1
    } catch {
      moduleLayouts.current[mid] = -1
    }
  }, [])

  const resolveLayoutName = useCallback((mid?: string, routeGroup?: string): string => {
    let layout_srl: number

    if (mid) {
      if (STATIC_PREFIXES.has(mid)) {
        layout_srl = siteConfig.route_layouts[mid] ?? siteConfig.layout_srl
      } else {
        const cached = moduleLayouts.current[mid]
        layout_srl = cached === undefined ? siteConfig.layout_srl
          : cached === 0 ? -999
          : cached === -1 ? siteConfig.layout_srl
          : cached
        if (layout_srl === -999) return DEFAULT_LAYOUT
      }
    } else if (routeGroup) {
      layout_srl = siteConfig.route_layouts[routeGroup] ?? siteConfig.layout_srl
    } else {
      layout_srl = siteConfig.layout_srl
    }

    return layoutDefs[layout_srl]?.layout ?? DEFAULT_LAYOUT
  }, [siteConfig, layoutDefs])

  return (
    <LayoutContext.Provider value={{ isReady, defaultMid, fetchModuleLayout, resolveLayoutName }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayoutConfig(): LayoutContextValue {
  return useContext(LayoutContext)
}
