export interface NotificationUnsubscribeDocument {
  unsubscribeSrl: number
  memberSrl: number
  text: string
  targetSrl: number
  unsubscribeType: string
}

export type NotificationUnsubscribeCreate = NotificationUnsubscribeDocument
