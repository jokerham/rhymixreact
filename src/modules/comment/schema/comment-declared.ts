export interface CommentDeclaredDocument {
  commentSrl: number
  declaredCount: number
}

export type CommentDeclaredCreate = CommentDeclaredDocument

export type CommentDeclaredUpdate = Partial<Omit<CommentDeclaredDocument, 'commentSrl'>>
