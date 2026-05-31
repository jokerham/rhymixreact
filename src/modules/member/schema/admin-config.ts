import type { FirestoreTimestamp } from './common'

export type DeniedUserIdDocument = {
  userId: string
  normalizedUserId: string
  regdate?: FirestoreTimestamp
  description?: string
  listOrder: number
}

export type DeniedNicknameDocument = {
  nickName: string
  normalizedNickName: string
  regdate?: FirestoreTimestamp
  description?: string
}

export type ManagedEmailHostDocument = {
  emailHost: string
  regdate?: FirestoreTimestamp
  description?: string
}

export type MemberJoinFormDocument = {
  memberJoinFormSrl: number
  columnType: string
  columnName: string
  columnTitle: string
  required: boolean
  defaultValue?: unknown
  options?: unknown
  isActive: boolean
  description?: string
  listOrder: number
  regdate?: FirestoreTimestamp
}

