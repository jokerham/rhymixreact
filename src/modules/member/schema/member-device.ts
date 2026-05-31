import type { FirestoreTimestamp, MemberId } from './common'

export type MemberDeviceDocument = {
  deviceSrl: number
  memberId: MemberId
  memberSrl: number
  deviceTokenHash: string
  deviceToken?: string
  deviceTokenType: string
  deviceKey: string
  deviceType: string
  deviceVersion: string
  deviceModel: string
  deviceDescription?: string
  regdate: FirestoreTimestamp
  lastActiveDate: FirestoreTimestamp
  ipaddress: string
}

