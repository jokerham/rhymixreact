import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import AdminLayout from './AdminLayout'

const AdminDashboard = lazy(() => import('./views/AdminDashboard'))
const AdminMemberListPage = lazy(() => import('./views/AdminMemberListPage'))
const AdminMemberInfoPage = lazy(() => import('./views/AdminMemberInfoPage'))
const AdminBoardPage = lazy(() => import('./views/AdminBoardPage'))
const AdminDocumentListPage = lazy(() => import('./views/AdminDocumentListPage'))
const AdminCommentListPage = lazy(() => import('./views/AdminCommentListPage'))

export const adminRoutes: RouteObject[] = [
  {
    path: 'admin',
    element: createElement(AdminLayout),
    children: [
      { index: true, element: createElement(AdminDashboard) },
      { path: 'members', element: createElement(AdminMemberListPage) },
      { path: 'members/:memberSrl', element: createElement(AdminMemberInfoPage) },
      { path: 'board/:mid', element: createElement(AdminBoardPage) },
      { path: 'documents', element: createElement(AdminDocumentListPage) },
      { path: 'comments', element: createElement(AdminCommentListPage) },
    ],
  },
]
