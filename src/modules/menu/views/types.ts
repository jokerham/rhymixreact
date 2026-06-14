export interface IMenu {
  id: string
  name: string
  children?: IMenu[]
  active?: boolean
  module?: string
  moduleId?: string
  link?: string
}
