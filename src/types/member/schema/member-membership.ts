import type { FirestoreTimestamp, GroupId, MemberId } from './common'

export type MemberMembershipDocument = {
  siteSrl: number
  groupId: GroupId
  groupSrl: number
  memberId: MemberId
  memberSrl: number
  regdate?: FirestoreTimestamp
  createdAt: FirestoreTimestamp
}

