import type { FirestoreTimestamp, MemberId } from './common'

export type ScrapFolderDocument = {
  folderSrl: number
  memberId: MemberId
  memberSrl: number
  name?: string
  regdate?: FirestoreTimestamp
  listOrder: number
}

