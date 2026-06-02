export interface ModuleMobileSkinVarDocument {
  moduleSrl: number
  name: string
  value?: string
}

export type ModuleMobileSkinVarCreate = ModuleMobileSkinVarDocument

export type ModuleMobileSkinVarUpdate = Partial<
  Omit<ModuleMobileSkinVarDocument, 'moduleSrl' | 'name'>
>
