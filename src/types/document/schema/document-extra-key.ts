export interface DocumentExtraKey {
  moduleSrl: number
  varIdx: number
  varName: string
  varType: string
  varIsRequired: boolean
  varIsStrict: boolean
  varSearch: boolean
  varDefault?: string
  varOptions?: string
  varDesc?: string
  eid?: string
}

export type DocumentExtraKeyCreate = DocumentExtraKey

export type DocumentExtraKeyUpdate = Partial<Omit<DocumentExtraKey, 'moduleSrl' | 'varIdx'>>
