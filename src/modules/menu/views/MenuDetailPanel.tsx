import { Box, Button, Typography } from '@mui/material'
import { FaEdit, FaTrash } from 'react-icons/fa'

import MenuPanel from './MenuPanel'
import type { IMenu } from './types'

interface MenuDetailPanelProps {
  node: IMenu
  onEdit: () => void
  onDelete: () => void
  onClose: () => void
}

export default function MenuDetailPanel({ node, onEdit, onDelete, onClose }: MenuDetailPanelProps) {
  return (
    <MenuPanel
      title="Menu Details"
      onClose={onClose}
      actions={
        <>
          <Button size="small" variant="outlined" startIcon={<FaEdit />} onClick={onEdit}>Edit</Button>
          <Button size="small" variant="outlined" color="error" startIcon={<FaTrash />} onClick={onDelete}>Delete</Button>
        </>
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Box>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>Name</Typography>
          <Typography>{node.name}</Typography>
        </Box>
        {node.module && (
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 600 }}>Module</Typography>
            <Typography>{node.module}</Typography>
          </Box>
        )}
        {node.link && (
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 600 }}>Link</Typography>
            <Typography>{node.link}</Typography>
          </Box>
        )}
      </Box>
    </MenuPanel>
  )
}
