import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import type { RouteGroup } from '../../types/route'

const BoardContentListPage = lazy(() => import('./views/BoardContentListPage'))
const BoardPostPage = lazy(() => import('./views/BoardPostPage'))
const BoardWritePage = lazy(() => import('./views/BoardWritePage'))
const BoardEditPage = lazy(() => import('./views/BoardEditPage'))
const BoardCategoryPage = lazy(() => import('./views/BoardCategoryPage'))
const BoardTagListPage = lazy(() => import('./views/BoardTagListPage'))
const BoardNoticePage = lazy(() => import('./views/BoardNoticePage'))
const CommentListPage = lazy(() => import('./views/CommentListPage'))
const DocumentPrintPage = lazy(() => import('./views/DocumentPrintPage'))
const DocumentPreviewPage = lazy(() => import('./views/DocumentPreviewPage'))
const UpdateLogPage = lazy(() => import('./views/UpdateLogPage'))
const UpdateLogViewPage = lazy(() => import('./views/UpdateLogViewPage'))
const VoteLogPage = lazy(() => import('./views/VoteLogPage'))

const boardRoutes: RouteObject[] = [
  {
    path: ':mid',
    children: [
      { index: true, element: createElement(BoardContentListPage) },
      { path: 'write', element: createElement(BoardWritePage) },
      { path: 'notices', element: createElement(BoardNoticePage) },
      { path: 'tags', element: createElement(BoardTagListPage) },
      { path: 'category/:categorySrl', element: createElement(BoardCategoryPage) },
      {
        path: ':documentSrl',
        children: [
          { index: true, element: createElement(BoardPostPage) },
          { path: 'edit', element: createElement(BoardEditPage) },
          { path: 'print', element: createElement(DocumentPrintPage) },
          { path: 'preview', element: createElement(DocumentPreviewPage) },
          { path: 'comments', element: createElement(CommentListPage) },
          { path: 'update-log', element: createElement(UpdateLogPage) },
          { path: 'update-log/:logSrl', element: createElement(UpdateLogViewPage) },
          { path: 'vote-log', element: createElement(VoteLogPage) },
        ],
      },
    ],
  },
]

export const routeGroups: RouteGroup[] = [
  { guard: 'last', routes: boardRoutes },
]
