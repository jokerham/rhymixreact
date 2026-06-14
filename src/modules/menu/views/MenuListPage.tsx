import { Box } from '@mui/material'
import { useState } from 'react'

import { useMenuItems, type MenuNode } from '../hooks/useMenuItems'

import MenuDetailPanel from './MenuDetailPanel'
import MenuFormPanel from './MenuFormPanel'
import MenuTreePanel from './MenuTreePanel'
import { MainContainer } from './styled'
import type { IMenu } from './types'

const ETab = { menu: 'menu', add: 'add', edit: 'edit' } as const
type ETabType = typeof ETab[keyof typeof ETab]

export default function MenuListPage() {
  const { menuTree } = useMenuItems()
  const toIMenu = (node: MenuNode): IMenu => ({ id: String(node.menuItemSrl), name: node.name ?? '', link: node.url, children: node.children?.map(toIMenu) })
  const menuData = menuTree.map(toIMenu)
  const [selectedNode, setSelectedNode] = useState<IMenu | null>(null)
  const [activeTab, setActiveTab] = useState<ETabType>(ETab.menu)
  const [formData, setFormData] = useState({ name: '', module: '', link: '' })

  const handleSelectNode = (node: IMenu) => {
    setSelectedNode(node)
    setActiveTab(ETab.menu)
  }

  const handleAdd = () => {
    setSelectedNode(null)
    setFormData({ name: '', module: '', link: '' })
    setActiveTab(ETab.add)
  }

  const handleEdit = () => {
    if (selectedNode) {
      setFormData({ name: selectedNode.name, module: selectedNode.module ?? '', link: selectedNode.link ?? '' })
      setActiveTab(ETab.edit)
    }
  }

  const handleDelete = () => {
    if (selectedNode) {
      // TODO: Delete from Firestore
      setSelectedNode(null)
    }
  }

  const handleSubmit = () => {
    // TODO: Save to Firestore
    setActiveTab(ETab.menu)
  }

  const handleClose = () => {
    setActiveTab(ETab.menu)
    setSelectedNode(null)
  }

  return (
    <MainContainer>
      <MenuTreePanel
        menuData={menuData}
        selectedId={selectedNode?.id}
        onSelect={handleSelectNode}
        onAdd={handleAdd}
      />
      <Box sx={{ flex: 1 }}>
        {activeTab === ETab.menu && selectedNode && (
          <MenuDetailPanel node={selectedNode} onEdit={handleEdit} onDelete={handleDelete} onClose={handleClose} />
        )}
        {(activeTab === ETab.add || (activeTab === ETab.edit && selectedNode)) && (
          <MenuFormPanel
            mode={activeTab as 'add' | 'edit'}
            formData={formData}
            onChange={setFormData}
            onSubmit={handleSubmit}
            onClose={handleClose}
          />
        )}
      </Box>
    </MainContainer>
  )
}
