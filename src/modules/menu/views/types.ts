export interface IMenu {
  id: string
  name: string
  menuSrl?: number
  children?: IMenu[]
  active?: boolean
  module?: string
  moduleId?: string
  moduleSrl?: number
  link?: string
  isDefault?: boolean
}

export interface ModuleOption {
  name: string
  title: string
}
