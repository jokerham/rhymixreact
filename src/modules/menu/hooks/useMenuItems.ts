import { orderBy, type QueryConstraint, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { queryListWhere } from '../../../lib/firestore/executor'
import { getMenuItemsQuery } from '../queries/get-menu-items'
import type { MenuItemDocument } from '../schema/menu-item'

export type NavItem = { label: string; path: string; end: boolean }

// If caller passes a menuSrl -> filter by it. If left undefined -> return all menus.
export type MenuNode = MenuItemDocument & { children?: MenuNode[] }

export function useMenuItems(menuSrl?: number) {
  const [navItems, setNavItems] = useState<NavItem[]>([])
  const [menuTree, setMenuTree] = useState<MenuNode[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const constraints: QueryConstraint[] = [orderBy('parentSrl', 'asc'), orderBy('listorder', 'asc')]
    if (typeof menuSrl === 'number') constraints.unshift(where('menuSrl', '==', menuSrl))

    queryListWhere<MenuItemDocument>(getMenuItemsQuery, constraints)
      .then((items) => {
        // Build map of nodes
        const map = new Map<number, MenuNode>()
        for (const it of items) {
          map.set(it.menuItemSrl, { ...it, children: [] })
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

        // Ensure children are sorted by listorder
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
  }, [menuSrl])

  return { navItems, isLoaded, menuTree }
}
