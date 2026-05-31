import type { FirestoreTimestamp, GroupId, MemberId } from './common'

export type MemberGroupDocument = {
  siteSrl: number
  groupSrl: number
  listOrder: number
  title: string
  regdate?: FirestoreTimestamp
  isDefault: boolean
  isAdmin: boolean
  imageMark?: string
  description?: string
  memberCount?: number
  createdAt: FirestoreTimestamp
  updatedAt: FirestoreTimestamp
}

export type GroupMemberDocument = {
  memberId: MemberId
  memberSrl: number
  siteSrl: number
  groupId: GroupId
  groupSrl: number
  regdate?: FirestoreTimestamp

  userId: string
  userName: string
  nickName: string
  emailAddress: string
  status: string
  denied: boolean
  isAdmin: boolean
  listOrder: number
}

