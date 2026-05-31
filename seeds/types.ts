export interface Seed {
  name: string
  up: () => Promise<void>
  down: () => Promise<void>
}
