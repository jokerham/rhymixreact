import { Box, Button, IconButton, TextField } from '@mui/material'
import { FaChevronRight, FaPlusCircle, FaSearch } from 'react-icons/fa'

import MenuPanel from './MenuPanel'
import TreeNode from './TreeNode'
import type { IMenu } from './types'

interface MenuTreePanelProps {
  menuData: IMenu[]
  selectedId?: string | null
  onSelect: (node: IMenu) => void
  onAdd: () => void
}

export default function MenuTreePanel({ menuData, selectedId, onSelect, onAdd }: MenuTreePanelProps) {
  return (
    <MenuPanel
      title="Menu Editor"
      actions={
        <Button size="small" variant="contained" startIcon={<FaPlusCircle />} onClick={onAdd} sx={{ fontSize: '12px' }}>
          Add Menu
        </Button>
      }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
        <TextField
          placeholder="Search..."
          size="small"
          sx={{ flex: 1, '& .MuiOutlinedInput-root': { height: '28px', fontSize: '12px', backgroundColor: '#fff' } }}
        />
        <IconButton size="small" sx={{ border: '1px solid #bbb', borderRadius: '4px', padding: 0, width: '28px', height: '28px', backgroundColor: '#fff', '&:hover': { backgroundColor: '#e0e0e0' } }}>
          <FaSearch size={11} />
        </IconButton>
        <IconButton size="small" sx={{ border: '1px solid #bbb', borderRadius: '4px', padding: 0, width: '28px', height: '28px', backgroundColor: '#fff', '&:hover': { backgroundColor: '#e0e0e0' } }}>
          <FaChevronRight size={11} />
        </IconButton>
      </Box>
      {menuData.map((menu) => (
        <TreeNode key={menu.id} node={menu} selectedId={selectedId} onSelect={onSelect} />
      ))}
    </MenuPanel>
  )
}
