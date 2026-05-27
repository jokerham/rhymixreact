export interface PollItemDocument {
  pollItemSrl: number
  pollSrl: number
  pollIndexSrl: number
  uploadTargetSrl: number
  title: string
  pollCount: number
  addUserSrl: number
}

export type PollItemCreate = Omit<PollItemDocument, 'pollCount' | 'addUserSrl'> & {
  pollCount?: number
  addUserSrl?: number
}

export type PollItemUpdate = Partial<Omit<PollItemDocument, 'pollItemSrl' | 'pollSrl'>>
