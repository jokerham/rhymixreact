import type { FirestoreTimestamp, GroupId, UnknownRecord } from './common'

export type MemberStatus = 'APPROVED' | 'DENIED' | 'PENDING' | string

export type MemberAccountRecovery = {
  questionId?: number
  answerHash?: string
}

export type MemberProfile = {
  homepage?: string
  blog?: string
  birthday?: string
  description?: string
  extraVars?: UnknownRecord
  legacyExtraVarsRaw?: string
}

export type MemberPreferences = {
  allowMailing: boolean
  allowMessage: boolean
}

export type MemberModeration = {
  isAdmin: boolean
  denied: boolean
  status: MemberStatus
  limitDate?: FirestoreTimestamp
}

export type MemberGroupSummary = {
  groupId: GroupId
  groupSrl: number
  siteSrl: number
  title: string
  isAdmin: boolean
}

export type MemberDocument = {
  memberSrl: number
  userId: string
  normalizedUserId: string
  emailAddress: string
  normalizedEmail: string
  emailId: string
  emailHost?: string
  phoneNumber?: string
  phoneCountry?: string
  phoneType?: string
  phoneKey?: string

  passwordHash: string
  userName: string
  nickName: string
  normalizedNickName: string

  accountRecovery?: MemberAccountRecovery
  profile: MemberProfile
  preferences: MemberPreferences
  moderation: MemberModeration
  groups: MemberGroupSummary[]

  regdate?: FirestoreTimestamp
  ipaddress?: string
  lastLogin?: FirestoreTimestamp
  lastLoginIpaddress?: string
  changePasswordDate?: FirestoreTimestamp
  listOrder: number

  createdAt: FirestoreTimestamp
  updatedAt: FirestoreTimestamp
}

