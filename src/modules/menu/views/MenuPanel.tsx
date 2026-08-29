import type { SxProps, Theme } from '@mui/material'
import type { ReactNode } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'

import { CloseIcon, MenuPanelActions, MenuPanelContent, MenuPanelHeader, MenuPanelRoot, MenuPanelTitle } from './styled'

interface MenuPanelProps {
  title: string
  titleLink?: string
  children: ReactNode
  actions?: ReactNode
  onClose?: () => void
  sx?: SxProps<Theme>
}

export default function MenuPanel({ title, titleLink, children, actions, onClose, sx }: MenuPanelProps) {
  return (
    <MenuPanelRoot sx={sx}>
      <MenuPanelHeader>
        <MenuPanelTitle sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {title}
          {titleLink && (
            <CloseIcon href={titleLink} target="_blank" rel="noopener noreferrer" sx={{ fontSize: '14px', marginLeft: 0 }}>
              <FiExternalLink />
            </CloseIcon>
          )}
        </MenuPanelTitle>
        {onClose && (
          <CloseIcon onClick={onClose}>
            <IoCloseSharp />
          </CloseIcon>
        )}
      </MenuPanelHeader>
      <MenuPanelContent>{children}</MenuPanelContent>
      {actions && <MenuPanelActions>{actions}</MenuPanelActions>}
    </MenuPanelRoot>
  )
}
