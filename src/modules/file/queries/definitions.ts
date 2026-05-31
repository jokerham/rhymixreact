import { deleteFileQuery } from './delete-file'
import { deleteFilesQuery } from './delete-files'
import { deleteModuleFilesQuery } from './delete-module-files'
import { getAttachedFileSizeQuery } from './get-attached-file-size'
import { getCoverImageQuery } from './get-cover-image'
import { getFileQuery } from './get-file'
import { getFileListQuery } from './get-file-list'
import { getFileListByTargetStatusQuery } from './get-file-list-by-target-status'
import { getFilesQuery } from './get-files'
import { getFilesCountQuery } from './get-files-count'
import { getFilesCountByGroupValidQuery } from './get-files-count-by-group-valid'
import { getModuleFilesQuery } from './get-module-files'
import { getModuleFilesProperQuery } from './get-module-files-proper'
import { getModuleListQuery } from './get-module-list'
import { getOneFileInDocumentQuery } from './get-one-file-in-document'
import { insertFileQuery } from './insert-file'
import { insertFileChangelogQuery } from './insert-file-changelog'
import type { RhymixFileQueryDefinitionMap } from './types'
import { updateClearCoverImageQuery } from './update-clear-cover-image'
import { updateCoverImageQuery } from './update-cover-image'
import { updateFileQuery } from './update-file'
import { updateFileDownloadCountQuery } from './update-file-download-count'
import { updateFileModuleQuery } from './update-file-module'
import { updateFileModuleCommentQuery } from './update-file-module-comment'
import { updateFileNameQuery } from './update-file-name'
import { updateFileTargetTypeQuery } from './update-file-target-type'
import { updateFileValidQuery } from './update-file-valid'

export const FILE_QUERY_DEFINITIONS = {
  deleteFile: deleteFileQuery,
  deleteFiles: deleteFilesQuery,
  deleteModuleFiles: deleteModuleFilesQuery,
  getAttachedFileSize: getAttachedFileSizeQuery,
  getCoverImage: getCoverImageQuery,
  getFile: getFileQuery,
  getFileList: getFileListQuery,
  getFileListByTargetStatus: getFileListByTargetStatusQuery,
  getFiles: getFilesQuery,
  getFilesCount: getFilesCountQuery,
  getFilesCountByGroupValid: getFilesCountByGroupValidQuery,
  getModuleFiles: getModuleFilesQuery,
  getModuleFilesProper: getModuleFilesProperQuery,
  getModuleList: getModuleListQuery,
  getOneFileInDocument: getOneFileInDocumentQuery,
  insertFile: insertFileQuery,
  insertFileChangelog: insertFileChangelogQuery,
  updateClearCoverImage: updateClearCoverImageQuery,
  updateCoverImage: updateCoverImageQuery,
  updateFile: updateFileQuery,
  updateFileDownloadCount: updateFileDownloadCountQuery,
  updateFileModule: updateFileModuleQuery,
  updateFileModuleComment: updateFileModuleCommentQuery,
  updateFileName: updateFileNameQuery,
  updateFileTargetType: updateFileTargetTypeQuery,
  updateFileValid: updateFileValidQuery,
} as const satisfies RhymixFileQueryDefinitionMap

export type FileQueryId = keyof typeof FILE_QUERY_DEFINITIONS

export type FileQueryDefinition = (typeof FILE_QUERY_DEFINITIONS)[FileQueryId]
