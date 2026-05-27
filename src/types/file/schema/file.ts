import type { FirestoreTimestamp } from './common'

export type UploadTargetType = 'document' | 'comment' | string

export interface FileDocument {
  fileSrl: number
  uploadTargetSrl: number
  uploadTargetType?: UploadTargetType
  sid?: string
  moduleSrl: number
  memberSrl: number
  downloadCount: number
  directDownload: boolean
  sourceFilename?: string
  uploadedFilename?: string
  thumbnailFilename?: string
  fileSize: number
  mimeType: string
  originalType?: string
  width?: number
  height?: number
  duration?: number
  comment?: string
  isvalid: boolean
  coverImage: boolean
  regdate?: FirestoreTimestamp
  ipaddress: string
}

export type FileCreate = Omit<
  FileDocument,
  'downloadCount' | 'isvalid' | 'coverImage' | 'regdate'
> & {
  downloadCount?: number
  isvalid?: boolean
  coverImage?: boolean
  regdate?: FirestoreTimestamp
}

export type FileUpdate = Partial<
  Omit<FileDocument, 'fileSrl' | 'memberSrl' | 'regdate' | 'ipaddress'>
>
