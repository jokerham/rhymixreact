export interface MessageConfigDocument {
  module: 'message'
  skin?: string
  colorset?: string
  mskin?: string
  mcolorset?: string
}

export type MessageConfigUpdate = Partial<Omit<MessageConfigDocument, 'module'>>
