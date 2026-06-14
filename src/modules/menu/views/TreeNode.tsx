import { Box, styled } from '@mui/material'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'

import type { IMenu } from './types'

const TreeNodeRowBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  margin: '1px 0',
  padding: '1px 1px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
})

const TreeNodeLabel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '13px',
  flex: 1,
  borderRadius: '5px',
  padding: '1px 8px',
  transition: 'background-color 0.2s ease',
  '&:hover': { backgroundColor: '#e0e0e0' },
  '&.active': { backgroundColor: '#333', color: '#fff' },
})

interface TreeNodeProps {
  node: IMenu
  level?: number
  selectedId?: string | null
  onSelect: (node: IMenu) => void
}

export default function TreeNode({ node, level = 0, selectedId, onSelect }: TreeNodeProps) {
  const hasChildren = (node.children?.length ?? 0) > 0
  const icon = !hasChildren ? <FaFolder /> : <FaFolderOpen />

  return (
    <Box>
      <TreeNodeRowBox onClick={() => onSelect(node)} sx={{ paddingLeft: `${level * 20}px` }}>
        <TreeNodeLabel className={selectedId === node.id ? 'active' : ''}>
          {icon}
          <span>{node.name}</span>
        </TreeNodeLabel>
      </TreeNodeRowBox>
      {hasChildren &&
        node.children?.map((child) => (
          <TreeNode key={child.id} node={child} level={level + 1} selectedId={selectedId} onSelect={onSelect} />
        ))}
    </Box>
  )
}
