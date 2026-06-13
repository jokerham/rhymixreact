import { ThemeProvider } from '@emotion/react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'
import React, { useState } from 'react'
import { FaHome, FaUser, FaCog, FaStar, FaListUl, FaFileAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { FiTool } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate, useLocation } from 'react-router-dom'

import sidebarTheme from '../theme/sidebarTheme'

interface IMenu {
  id: string
  name: string
  icon?: React.ReactNode
  children?: IMenu[]
  navigateTo?: string
  onClickAction?: (menu: IMenu) => void
  active?: boolean
}

const initialMenuData = [
  { id: 'dashboard', name: 'Dashboard', icon: <FaHome />, children: [], navigateTo: '/admin' },
  {
    id: 'menu',
    name: 'Menu',
    icon: <FaListUl />,
    children: [
      { id: 'menu-editor', name: 'Menu Editor', navigateTo: '/admin/menu-editor' },
      { id: 'site-design', name: 'Site Design', navigateTo: '/admin/site-design' },
      { id: 'layouts', name: 'Layouts', navigateTo: '/admin/layouts' },
    ],
  },
  {
    id: 'member',
    name: 'Member',
    icon: <FaUser />,
    children: [
      { id: 'member-list', name: 'Member List', navigateTo: '/admin/members' },
      { id: 'member-setting', name: 'Member Setting', navigateTo: '/admin/member-setting' },
      { id: 'member-group', name: 'Member Group', navigateTo: '/admin/member-group' },
      { id: 'member-point', name: 'Point', navigateTo: '/admin/point' },
    ],
  },
  {
    id: 'content',
    name: 'Content',
    icon: <FaFileAlt />,
    children: [
      { id: 'post', name: 'Post', navigateTo: '/admin/documents' },
      { id: 'comment', name: 'Comment', navigateTo: '/admin/comments' },
      { id: 'file', name: 'File', navigateTo: '/admin/files' },
      { id: 'poll', name: 'Poll', navigateTo: '/admin/polls' },
      { id: 'language', name: 'Multilingual', navigateTo: '/admin/multilingual' },
      { id: 'trash', name: 'Trash', navigateTo: '/admin/trash' },
      { id: 'spam', name: 'SpamFilter', navigateTo: '/admin/spam-filter' },
    ],
  },
  {
    id: 'favorite',
    name: 'Favorite',
    icon: <FaStar />,
    children: [{ id: '', name: 'No data...' }],
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <FiTool />,
    children: [
      { id: 'setting-general', name: 'General', navigateTo: '/admin/settings/general' },
      { id: 'admin-menu', name: 'Admin Setup', navigateTo: '/admin/settings/admin' },
      { id: 'setting-file', name: 'File Upload', navigateTo: '/admin/settings/file-upload' },
    ],
  },
  { id: 'advanced', name: 'Advanced', icon: <FaCog />, children: [] },
] as IMenu[]

const SideMenuBox = styled(Box)(({ _theme }) => ({
  display: 'inline-block',
  p: '2px',
  borderRadius: '5px',
  boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.2)',
  position: 'relative',
}))

const ToggleIconButton = styled(IconButton)(({ _theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '-10px',
  transform: 'translateY(-50%)',
  height: '50px',
  width: '10px',
  borderRadius: '0 5px 5px 0',
  backgroundColor: '#eeeeee',
  boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}))

export default function AdminSidebar() {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const menuData = React.useMemo(() => {
    const normalizePath = (p: string) => p.replace(/\/+$/, '')
    const updateMenu = (menus: IMenu[]): IMenu[] =>
      menus.map((menu) => ({
        ...menu,
        active:
          normalizePath(menu.navigateTo ?? '') === normalizePath(location.pathname) ||
          menu.children?.some((child) => normalizePath(child.navigateTo ?? '') === normalizePath(location.pathname)),
        children: menu.children ? updateMenu(menu.children) : undefined,
      }))
    return updateMenu(initialMenuData)
  }, [location.pathname])

  const expandIcon = (menu: IMenu) => {
    return (menu.children?.length ?? 0) > 0 ? <IoIosArrowDown /> : null
  }

  const handleAccordionChange = (menu: IMenu) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if ((menu.children?.length ?? 0) > 0) {
      setExpandedMenus((prevExpanded) =>
        prevExpanded.includes(menu.id)
          ? prevExpanded.filter((id) => id !== menu.id)
          : [...prevExpanded, menu.id],
      )
      if (isExpanded) setCollapsed(false)
    } else {
      setCollapsed(false)
    }
  }

  const toggleMenu = () => {
    if (collapsed) {
      const activeMenu = menuData.filter((menu) => menu.active)
      const activeMenuId = activeMenu.map((menu) => menu.id)
      setExpandedMenus(activeMenuId)
    } else {
      setExpandedMenus([])
    }
    setCollapsed(!collapsed)
  }

  const onClick = (menu: IMenu) => {
    if (menu.navigateTo) {
      navigate(menu.navigateTo)
      return
    }
    if (menu.onClickAction) {
      menu.onClickAction(menu)
      return
    }
  }

  return (
    <Box>
      <ThemeProvider theme={sidebarTheme}>
        <SideMenuBox sx={{ width: collapsed ? 40 : 180 }}>
          {/* Toggle Button */}
          <ToggleIconButton onClick={toggleMenu}>
            {collapsed ? <FaChevronRight size={8} /> : <FaChevronLeft size={8} />}
          </ToggleIconButton>

          {/* List of Accordion Menu */}
          {menuData.map((menu) => (
            <Accordion
              key={menu.id}
              disableGutters
              className={menu.active ? 'active' : ''}
              expanded={expandedMenus.includes(menu.id)}
              onChange={handleAccordionChange(menu)}
            >
              <AccordionSummary expandIcon={!collapsed && expandIcon(menu)} onClick={() => onClick(menu)}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                {!collapsed && <ListItemText primary={menu.name} />}
              </AccordionSummary>
              {(menu.children?.length ?? 0) > 0 && (
                <AccordionDetails>
                  <List>
                    {menu.children?.map((child) => (
                      <ListItem key={child.id} onClick={() => onClick(child)}>
                        <ListItemText primary={child.name} className={child.active ? 'active' : ''} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              )}
            </Accordion>
          ))}
        </SideMenuBox>
      </ThemeProvider>
    </Box>
  )
}
