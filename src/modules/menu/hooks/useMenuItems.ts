import { limit, orderBy, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { queryListWhere } from '../../../lib/firestore/executor'
import { getMenuItemsQuery } from '../queries/get-menu-items'
import type { MenuItemDocument } from '../schema/menu-item'

export type NavItem = { label: string; path: string; end: boolean }

const MAIN_MENU_SRL = 1

export function useMenuItems(menuSrl = MAIN_MENU_SRL) {
  const [navItems, setNavItems] = useState<NavItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    queryListWhere<MenuItemDocument>(getMenuItemsQuery, [
      where('menuSrl', '==', menuSrl),
      where('parentSrl', '==', 0),
      orderBy('listorder', 'asc'),
      limit(50),
    ])
      .then((items) => {
        setNavItems(
          items.map((item) => ({
            label: item.name ?? '',
            path: item.url ?? '/',
            end: item.url === '/',
          })),
        )
        setIsLoaded(true)
      })
      .catch((err) => {
        console.error('[useMenuItems] failed to load menu items', err)
        setIsLoaded(true)
      })
  }, [menuSrl])

  return { navItems, isLoaded }
}
