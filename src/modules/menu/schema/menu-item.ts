import type { FirestoreTimestamp } from './common'

export interface MenuItemDocument {
  menuItemSrl: number
  parentSrl: number
  menuSrl: number
  name?: string
  icon?: string
  class?: string
  desc?: string
  url?: string
  isShortcut: boolean
  openWindow: boolean
  expand: boolean
  normalBtn?: string
  hoverBtn?: string
  activeBtn?: string
  groupSrls?: string
  listorder: number
  regdate?: FirestoreTimestamp
}

export type MenuItemCreate = Omit<MenuItemDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type MenuItemUpdate = Partial<Omit<MenuItemDocument, 'menuItemSrl' | 'regdate'>>

export type MenuItemNodeUpdate = Pick<MenuItemDocument, 'menuSrl' | 'parentSrl' | 'listorder'>

export type MenuItemParentUpdate = Pick<MenuItemDocument, 'parentSrl' | 'listorder'>
