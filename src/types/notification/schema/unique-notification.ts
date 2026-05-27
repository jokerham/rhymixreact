import type { FirestoreTimestamp } from './common'

export interface UniqueNotificationDocument {
  notificationId: string
  id: number
  notify: string
  memberSrl: number
  createdAt: FirestoreTimestamp
}
