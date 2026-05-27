import type { FirestoreTimestamp } from './common'

export interface NotificationUserSettingDocument {
  memberSrl: number
  commentNotify: string
  commentCommentNotify: string
  mentionNotify: string
  voteNotify: string
  scrapNotify: string
  messageNotify: string
  regdate?: FirestoreTimestamp
}

export type NotificationUserSettingCreate = Omit<NotificationUserSettingDocument, 'regdate'> & {
  regdate?: FirestoreTimestamp
}

export type NotificationUserSettingUpdate = Partial<
  Omit<NotificationUserSettingDocument, 'memberSrl'>
>
