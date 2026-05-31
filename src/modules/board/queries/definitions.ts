import { getAllBoardQuery } from './get-all-board'
import { getBoardListQuery } from './get-board-list'
import type { RhymixBoardQueryDefinitionMap } from './types'

export const BOARD_QUERY_DEFINITIONS = {
  getAllBoard: getAllBoardQuery,
  getBoardList: getBoardListQuery,
} as const satisfies RhymixBoardQueryDefinitionMap

export type BoardQueryId = keyof typeof BOARD_QUERY_DEFINITIONS

export type BoardQueryDefinition = (typeof BOARD_QUERY_DEFINITIONS)[BoardQueryId]
