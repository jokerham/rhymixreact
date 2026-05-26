import type { FirestoreTimestamp, MemberId } from './common'

export type ScrapDocumentDocument = {
  memberId: MemberId
  memberSrl: number
  documentSrl: number
  folderId?: string
  folderSrl?: number
  title?: string
  userId?: string
  userName: string
  nickName: string
  targetMemberSrl: number
  regdate?: FirestoreTimestamp
  listOrder: number
}

