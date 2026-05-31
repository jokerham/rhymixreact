import { collection, getDocs, query, where } from 'firebase/firestore'
import { create } from 'zustand'

import { db } from '../lib/firebase'
import { getMenuItemsQuery } from '../modules/menu/queries/get-menu-items'
import type { MenuItemDocument } from '../modules/menu/schema'

const COL_MENU_ITEMS = getMenuItemsQuery.targets[0].collection

export interface NavItem {
  label: string
  path: string
  end: boolean
}

interface MenuState {
  navItems: NavItem[]
  isLoaded: boolean
  fetchMenu: (menuSrl: number) => Promise<void>
}

export const useMenuStore = create<MenuState>((set, get) => ({
  navItems: [],
  isLoaded: false,

  fetchMenu: async (menuSrl: number) => {
    if (get().isLoaded) return
    try {
      const q = query(
        collection(db, COL_MENU_ITEMS),
        where('menuSrl', '==', menuSrl),
      )
      const snapshot = await getDocs(q)
      const navItems = snapshot.docs
        .map((d) => d.data() as MenuItemDocument)
        .filter((item) => item.parentSrl === 0)
        .sort((a, b) => a.listorder - b.listorder)
        .map((item) => ({
          label: item.name ?? '',
          path: item.url ?? '/',
          end: item.url === '/',
        }))
      set({ navItems, isLoaded: true })
    } catch (err) {
      console.error('[menuStore] Failed to fetch menu items:', err)
    }
  },
}))
