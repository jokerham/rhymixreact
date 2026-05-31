export interface NotificationTypeDocument {
  notifyTypeSrl: number
  notifyTypeId: string
  notifyTypeArgs?: string
  notifyString: string
}

export type NotificationTypeCreate = NotificationTypeDocument

export type NotificationTypeUpdate = Partial<Omit<NotificationTypeDocument, 'notifyTypeSrl'>>
