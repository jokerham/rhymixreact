export interface ModuleSkinVarDocument {
  moduleSrl: number
  name: string
  value?: string
}

export type ModuleSkinVarCreate = ModuleSkinVarDocument

export type ModuleSkinVarUpdate = Partial<
  Omit<ModuleSkinVarDocument, 'moduleSrl' | 'name'>
>
