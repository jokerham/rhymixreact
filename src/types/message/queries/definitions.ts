import type { RhymixMessageQueryDefinitionMap } from './types'

export const MESSAGE_QUERY_DEFINITIONS = {} as const satisfies RhymixMessageQueryDefinitionMap

export type MessageQueryId = keyof typeof MESSAGE_QUERY_DEFINITIONS

export type MessageQueryDefinition = (typeof MESSAGE_QUERY_DEFINITIONS)[MessageQueryId]
