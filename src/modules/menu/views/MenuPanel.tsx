import type { ReactNode } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

import { CloseIcon, MenuPanelActions, MenuPanelContent, MenuPanelHeader, MenuPanelRoot, MenuPanelTitle } from './styled'

interface MenuPanelProps {
  title: string
  children: ReactNode
  actions?: ReactNode
  onClose?: () => void
}

export default function MenuPanel({ title, children, actions, onClose }: MenuPanelProps) {
  return (
    <MenuPanelRoot>
      <MenuPanelHeader>
        <MenuPanelTitle>{title}</MenuPanelTitle>
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
