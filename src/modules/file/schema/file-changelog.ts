import type { FirestoreTimestamp } from './common'

export type FileChangeType = 'I' | 'U' | 'D' | string

export interface FileChangelogDocument {
  id: number
  changeType: FileChangeType
  fileSrl: number
  fileSize: number
  uploadedFilename: string
  previousFilename?: string
  regdate: FirestoreTimestamp
}

export type FileChangelogCreate = Omit<FileChangelogDocument, 'id'> & {
  id?: number
}
