export interface MemberPointDocument {
  memberSrl: number
  point: number
}

export type MemberPointCreate = MemberPointDocument

export type MemberPointUpdate = Partial<Omit<MemberPointDocument, 'memberSrl'>>
