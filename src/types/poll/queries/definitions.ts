import { deletePollQuery } from './delete-poll'
import { deletePollItemQuery } from './delete-poll-item'
import { deletePollLogQuery } from './delete-poll-log'
import { deletePollTitleQuery } from './delete-poll-title'
import { getMemberbyPollitemQuery } from './get-memberby-pollitem'
import { getPollQuery } from './get-poll'
import { getPollByDeletePollTitleQuery } from './get-poll-by-delete-poll-title'
import { getPollByTargetSrlQuery } from './get-poll-by-target-srl'
import { getPollItemQuery } from './get-poll-item'
import { getPollListQuery } from './get-poll-list'
import { getPollListWithMemberQuery } from './get-poll-list-with-member'
import { getPollLogQuery } from './get-poll-log'
import { getPollTitleQuery } from './get-poll-title'
import { insertPollQuery } from './insert-poll'
import { insertPollItemQuery } from './insert-poll-item'
import { insertPollLogQuery } from './insert-poll-log'
import { insertPollTitleQuery } from './insert-poll-title'
import type { RhymixPollQueryDefinitionMap } from './types'
import { updatePollQuery } from './update-poll'
import { updatePollItemTargetQuery } from './update-poll-item-target'
import { updatePollItemsQuery } from './update-poll-items'
import { updatePollTargetQuery } from './update-poll-target'
import { updatePollTitleQuery } from './update-poll-title'
import { updatePollTitleTargetQuery } from './update-poll-title-target'

export const POLL_QUERY_DEFINITIONS = {
  deletePoll: deletePollQuery,
  deletePollItem: deletePollItemQuery,
  deletePollLog: deletePollLogQuery,
  deletePollTitle: deletePollTitleQuery,
  getMemberbyPollitem: getMemberbyPollitemQuery,
  getPoll: getPollQuery,
  getPollByDeletePollTitle: getPollByDeletePollTitleQuery,
  getPollByTargetSrl: getPollByTargetSrlQuery,
  getPollItem: getPollItemQuery,
  getPollList: getPollListQuery,
  getPollListWithMember: getPollListWithMemberQuery,
  getPollLog: getPollLogQuery,
  getPollTitle: getPollTitleQuery,
  insertPoll: insertPollQuery,
  insertPollItem: insertPollItemQuery,
  insertPollLog: insertPollLogQuery,
  insertPollTitle: insertPollTitleQuery,
  updatePoll: updatePollQuery,
  updatePollItemTarget: updatePollItemTargetQuery,
  updatePollItems: updatePollItemsQuery,
  updatePollTarget: updatePollTargetQuery,
  updatePollTitle: updatePollTitleQuery,
  updatePollTitleTarget: updatePollTitleTargetQuery,
} as const satisfies RhymixPollQueryDefinitionMap

export type PollQueryId = keyof typeof POLL_QUERY_DEFINITIONS

export type PollQueryDefinition = (typeof POLL_QUERY_DEFINITIONS)[PollQueryId]
