import { orderBy, type QueryConstraint, where } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'

import { queryListWhere } from '../../../lib/firestore/executor'
import { getModulesQuery } from '../../module/queries/get-modules'
import type { ModuleDocument } from '../../module/schema/module'
import { getMenuItemsQuery } from '../queries/get-menu-items'
import type { MenuItemDocument } from '../schema/menu-item'

export type NavItem = { label: string; path: string; end: boolean }

// If caller passes a menuSrl -> filter by it. If left undefined -> return all menus.
export type MenuNode = MenuItemDocument & { children?: MenuNode[]; moduleInfo?: ModuleDocument }

export function useMenuItems(menuSrl?: number) {
  const [navItems, setNavItems] = useState<NavItem[]>([])
  const [menuTree, setMenuTree] = useState<MenuNode[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const reload = useCallback(() => setReloadKey((k) => k + 1), [])

  useEffect(() => {
    const constraints: QueryConstraint[] = [orderBy('parentSrl', 'asc'), orderBy('listorder', 'asc')]
    if (typeof menuSrl === 'number') constraints.unshift(where('menuSrl', '==', menuSrl))

    queryListWhere<MenuItemDocument>(getMenuItemsQuery, constraints)
      .then(async (items) => {
        // isShortcut may be stored as boolean false or string 'N' depending on import source
        const isShortcut = (v: unknown) => v === true || v === 'Y'
        const toMid = (url: string) => url.replace(/^\//, '')

        const uniqueMids = [
          ...new Set(
            items
              .filter((it) => !isShortcut(it.isShortcut) && it.url && !it.url.startsWith('http'))
              .map((it) => toMid(it.url as string)),
          ),
        ]

        // Fetch matching modules by mid and build a mid → ModuleDocument lookup
        const midToModule = new Map<string, ModuleDocument>()
        if (uniqueMids.length > 0) {
          const mods = await queryListWhere<ModuleDocument>(getModulesQuery, [
            where('mid', 'in', uniqueMids),
          ])
          //console.log('[useMenuItems] uniqueMids:', uniqueMids, 'mods:', mods)
          for (const m of mods) midToModule.set(m.mid, m)
        } else {
          // console.log('[useMenuItems] uniqueMids empty — items:', items.map((it) => ({ url: it.url, isShortcut: it.isShortcut })))
        }

        // Build map of nodes, attaching moduleInfo where url matches a module mid
        const map = new Map<number, MenuNode>()
        for (const it of items) {
          const moduleInfo =
            !isShortcut(it.isShortcut) && it.url && !it.url.startsWith('http')
              ? midToModule.get(toMid(it.url))
              : undefined
          map.set(it.menuItemSrl, { ...it, moduleInfo, children: [] })
        }

        const roots: MenuNode[] = []
        for (const node of map.values()) {
          const parent = map.get(node.parentSrl)
          if (parent) {
            parent.children = parent.children ?? []
            parent.children.push(node)
          } else {
            roots.push(node)
          }
        }

        function sortRec(nodes: MenuNode[]) {
          nodes.sort((a, b) => (a.listorder ?? 0) - (b.listorder ?? 0))
          for (const n of nodes) if (n.children && n.children.length) sortRec(n.children)
        }

        sortRec(roots)

        setMenuTree(roots)
        setNavItems(
          roots.map((item) => ({ label: item.name ?? '', path: item.url ?? '/', end: item.url === '/' })),
        )
        setIsLoaded(true)
      })
      .catch((err) => {
        console.error('[useMenuItems] failed to load menu items', err)
        setIsLoaded(true)
      })
  }, [menuSrl, reloadKey])

  return { navItems, isLoaded, menuTree, reload }
}
