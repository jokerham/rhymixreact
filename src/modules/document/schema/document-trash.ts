import type { FirestoreTimestamp } from './common'

export interface DocumentTrash {
  trashSrl: number
  documentSrl: number
  moduleSrl: number
  trashDate?: FirestoreTimestamp
  description?: string
  ipaddress: string
  userId?: string
  userName: string
  nickName: string
  memberSrl: number
}

export type DocumentTrashCreate = Omit<DocumentTrash, 'trashSrl' | 'trashDate'> & {
  trashDate?: FirestoreTimestamp
}
