import type { SxProps, Theme } from '@mui/material'
import { Divider, List, ListItem } from '@mui/material'
import { Fragment } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaCircleChevronRight } from 'react-icons/fa6'

import MenuPanel from './MenuPanel'
import { BaseTypography, SettingButton, SettingText } from './styled'
import type { IMenu } from './types'

interface MenuCommandPanelProps {
  node: IMenu
  onGeneralSettings: () => void
  onAddMenu: () => void
  onCut: () => void
  onCopy: () => void
  onPaste: () => void
  onDelete: () => void
  onSetHomepage: () => void
  onClose: () => void
  sx?: SxProps<Theme>
}

export default function MenuCommandPanel({
  node,
  onGeneralSettings,
  onAddMenu,
  onCut,
  onCopy,
  onPaste,
  onDelete,
  onSetHomepage,
  onClose,
  sx,
}: MenuCommandPanelProps) {
  const commands = [
    { name: 'General Settings', icon: true, action: onGeneralSettings, divide: true },
    { name: 'Add Menu Item', icon: true, action: onAddMenu, divide: true },
    { name: 'Cut', icon: false, action: onCut, divide: false },
    { name: 'Copy', icon: false, action: onCopy, divide: false },
    { name: 'Paste', icon: false, action: onPaste, divide: false },
    { name: 'Delete', icon: false, action: onDelete, divide: true },
    { name: 'Set as Homepage', icon: false, action: onSetHomepage, divide: true, isHomepage: node.isDefault },
  ]

  return (
    <MenuPanel title={node.name} titleLink={node.link} onClose={onClose} sx={sx}>
      {node.module && (
        <BaseTypography>
          <b>Menu Type:</b> {node.module}
        </BaseTypography>
      )}
      <Divider />
      <List sx={{ m: 0, p: 0 }}>
        {commands.map((cmd, index) => (
          <Fragment key={index}>
            <ListItem disablePadding>
              <SettingButton onClick={cmd.isHomepage ? undefined : cmd.action}>
                <SettingText primary={cmd.name} sx={cmd.isHomepage ? { opacity: 0.38, pointerEvents: 'none' } : undefined} />
                {cmd.isHomepage && <FaHome />}
                {!cmd.isHomepage && cmd.icon && <FaCircleChevronRight />}
              </SettingButton>
            </ListItem>
            {cmd.divide && <Divider />}
          </Fragment>
        ))}
      </List>
    </MenuPanel>
  )
}
