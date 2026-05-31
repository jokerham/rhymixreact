import type { FirestoreTimestamp } from './common'

export type MemberLoginCountDocument = {
  ipaddress: string
  count: number
  regdate?: FirestoreTimestamp
  lastUpdate?: FirestoreTimestamp
}

