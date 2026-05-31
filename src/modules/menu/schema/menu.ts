import type { FirestoreTimestamp } from './common'

export interface MenuDocument {
  menuSrl: number
  siteSrl: number
  title?: string
  listorder: number
  regdate?: FirestoreTimestamp
}

export type MenuCreate = Omit<MenuDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type MenuUpdate = Pick<MenuDocument, 'title'>
