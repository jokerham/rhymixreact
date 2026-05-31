import type { FirestoreTimestamp, MemberId } from './common'

export type UniqueIdentityDocument = {
  memberId: MemberId
  memberSrl: number
  createdAt: FirestoreTimestamp
}

export type UniqueUserIdDocument = UniqueIdentityDocument

export type UniqueEmailDocument = UniqueIdentityDocument

export type UniquePhoneDocument = UniqueIdentityDocument

export type UniqueNicknameDocument = UniqueIdentityDocument

export type UniqueDeviceTokenDocument = UniqueIdentityDocument & {
  deviceId: string
  deviceSrl: number
  tokenHash: string
}
