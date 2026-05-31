import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { create } from 'zustand'

import { db } from '../lib/firebase'

const DEFAULT_LAYOUT = 'default'

// Mirrors Rhymix's `layouts` table
interface LayoutDef {
  layout_srl: number
  layout: string
  extra_vars?: Record<string, unknown>
}

// Mirrors Rhymix's `files/site_design/design_0.php`
// layout_srl        → site-wide default (same as Rhymix layout_srl = -1 fallback)
// route_layouts     → per-route-group overrides for non-mid paths (member, admin, notifications…)
interface SiteDesignConfig {
  layout_srl: number
  route_layouts: Record<string, number>
}

interface LayoutState {
  isReady: boolean
  siteConfig: SiteDesignConfig
  layoutDefs: Record<number, LayoutDef>
  // Cached per-mid layout_srl values (mirrors modules.layout_srl)
  // undefined = not yet fetched, -1 = use site default, 0 = no layout
  moduleLayouts: Record<string, number>
  init: () => Promise<void>
  fetchModuleLayout: (mid: string) => Promise<void>
  resolveLayoutName: (mid?: string, routeGroup?: string) => string
}

export const useLayoutStore = create<LayoutState>((set, get) => ({
  isReady: false,
  siteConfig: { layout_srl: 0, route_layouts: {} },
  layoutDefs: {},
  moduleLayouts: {},

  init: async () => {
    try {
      const [designSnap, layoutsSnap] = await Promise.all([
        getDoc(doc(db, 'settings', 'design')),
        getDocs(collection(db, 'layouts')),
      ])

      const siteConfig: SiteDesignConfig = designSnap.exists()
        ? (designSnap.data() as SiteDesignConfig)
        : { layout_srl: 0, route_layouts: {} }

      const layoutDefs: Record<number, LayoutDef> = {}
      layoutsSnap.forEach((snap) => {
        const data = snap.data() as LayoutDef
        layoutDefs[data.layout_srl] = data
      })

      set({ isReady: true, siteConfig, layoutDefs })
    } catch (err) {
      console.error('[layoutStore] Failed to load layout config:', err)
      set({ isReady: true })
    }
  },

  fetchModuleLayout: async (mid: string) => {
    if (mid in get().moduleLayouts) return

    try {
      const snap = await getDoc(doc(db, 'modules', mid))
      // Default to -1 (use site default) if document missing or field absent
      const layout_srl: number = snap.exists() ? ((snap.data().layout_srl as number) ?? -1) : -1
      set((state) => ({ moduleLayouts: { ...state.moduleLayouts, [mid]: layout_srl } }))
    } catch {
      set((state) => ({ moduleLayouts: { ...state.moduleLayouts, [mid]: -1 } }))
    }
  },

  resolveLayoutName: (mid?: string, routeGroup?: string): string => {
    const { siteConfig, layoutDefs, moduleLayouts } = get()

    let layout_srl: number

    if (mid) {
      const cached = moduleLayouts[mid]
      if (cached === undefined) {
        // Not yet fetched — use site default while fetch is in-flight
        layout_srl = siteConfig.layout_srl
      } else if (cached === 0) {
        return DEFAULT_LAYOUT
      } else if (cached === -1) {
        layout_srl = siteConfig.layout_srl
      } else {
        layout_srl = cached
      }
    } else if (routeGroup) {
      // Check route_layouts first, then fall back to site default
      layout_srl = siteConfig.route_layouts[routeGroup] ?? siteConfig.layout_srl
    } else {
      // Homepage or unknown path — use site default
      layout_srl = siteConfig.layout_srl
    }

    return layoutDefs[layout_srl]?.layout ?? DEFAULT_LAYOUT
  },
}))
