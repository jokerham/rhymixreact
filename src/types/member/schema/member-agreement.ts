import type { FirestoreTimestamp } from './common'

export type MemberAgreementDocument = {
  agreementSequence: number
  agreed: boolean
  ipaddress: string
  regdate: FirestoreTimestamp
}

