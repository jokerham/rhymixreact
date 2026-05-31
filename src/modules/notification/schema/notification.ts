import type { FirestoreTimestamp } from './common'

export type NotificationReadState = boolean
export type NotificationTargetKind = string
export type NotificationEventKind = string

export interface NotificationDocument {
  id: number
  notify: string
  srl: number
  targetSrl: number
  targetPSrl: number
  type: NotificationTargetKind
  targetType: NotificationEventKind
  notifyType?: number
  memberSrl: number
  targetMemberSrl: number
  targetNickName: string
  targetUserId: string
  targetEmailAddress: string
  targetBrowser?: string
  targetSummary?: string
  targetBody?: string
  targetUrl: string
  data?: string
  readed: NotificationReadState
  regdate?: FirestoreTimestamp
}

export type NotificationCreate = Omit<NotificationDocument, 'id' | 'readed' | 'regdate'> & {
  id?: number
  readed?: NotificationReadState
  regdate?: FirestoreTimestamp
}

export type NotificationUpdate = Partial<
  Pick<NotificationDocument, 'readed' | 'data' | 'targetUrl'>
>
