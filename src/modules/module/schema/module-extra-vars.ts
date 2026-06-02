export interface ModuleExtraVarsDocument {
  moduleSrl: number
  name: string
  value?: string
}

export type ModuleExtraVarsCreate = ModuleExtraVarsDocument

export type ModuleExtraVarsUpdate = Partial<
  Omit<ModuleExtraVarsDocument, 'moduleSrl' | 'name'>
>
