import { Box } from '@mui/material'
import { serverTimestamp, where } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'

import { queryCreate, queryDelete, queryList, queryListWhere, queryUpdate, stripUndefined } from '../../../lib/firestore/executor'
import { deleteModuleQuery } from '../../module/queries/delete-module'
import { getModuleTypesQuery } from '../../module/queries/get-module-types'
import { getModulesQuery } from '../../module/queries/get-modules'
import { insertModuleQuery } from '../../module/queries/insert-module'
import { updateModuleQuery } from '../../module/queries/update-module'
import type { ModuleDocument } from '../../module/schema/module'
import type { ModuleTypeDocument } from '../../module/schema/module-type'
import { useMenuItems, type MenuNode } from '../hooks/useMenuItems'
import { deleteMenuItemQuery } from '../queries/delete-menu-item'
import { getMenuItemsQuery } from '../queries/get-menu-items'
import { insertMenuItemQuery } from '../queries/insert-menu-item'
import { updateMenuItemQuery } from '../queries/update-menu-item'
import type { MenuItemDocument } from '../schema/menu-item'

import MenuAddFormPanel from './MenuAddFormPanel'
import MenuCommandPanel from './MenuCommandPanel'
import MenuEditFormPanel from './MenuEditFormPanel'
import MenuTreePanel from './MenuTreePanel'
import { MainContainer } from './styled'
import type { IMenu, ModuleOption } from './types'

const ETab = { commands: 'commands', add: 'add', edit: 'edit' } as const
type ETabType = typeof ETab[keyof typeof ETab]

export default function MenuListPage() {
  const { menuTree, reload } = useMenuItems()
  const toIMenu = (node: MenuNode): IMenu => ({ id: String(node.menuItemSrl), menuSrl: node.menuSrl, name: node.name ?? '', link: node.url, module: node.moduleInfo?.module, moduleId: node.moduleInfo?.mid, moduleSrl: node.moduleInfo?.moduleSrl, isDefault: node.moduleInfo?.isDefault, children: node.children?.map(toIMenu) })
  const menuData = menuTree.map(toIMenu)
  const [selectedNode, setSelectedNode] = useState<IMenu | null>(null)
  const [activeTab, setActiveTab] = useState<ETabType>(ETab.commands)
  const [formData, setFormData] = useState({ name: '', module: '', link: '' })
  const [moduleTypes, setModuleTypes] = useState<ModuleTypeDocument[]>([])

  useEffect(() => {
    queryList<ModuleTypeDocument>(getModuleTypesQuery)
      .then((types) => setModuleTypes(types.toSorted((a, b) => (a.title || a.name).localeCompare(b.title || b.name))))
      .catch((err) => {
        console.error('[MenuListPage] failed to load module types', err)
      })
  }, [])

  const moduleOptions = useMemo<ModuleOption[]>(() => {
    const options = moduleTypes.map((moduleType) => ({
      name: moduleType.name,
      title: moduleType.title,
    }))

    if (formData.module && !options.some((option) => option.name === formData.module)) {
      return [{ name: formData.module, title: formData.module }, ...options]
    }

    return options
  }, [formData.module, moduleTypes])

  const handleSelectNode = (node: IMenu) => {
    setSelectedNode(node)
    setActiveTab(ETab.commands)
  }

  // Tree panel "Add Menu" button — no selected node context, form shown alone
  const handleAddTopLevel = () => {
    setSelectedNode(null)
    setFormData({ name: '', module: '', link: '' })
    setActiveTab(ETab.add)
  }

  // Command panel "General Settings" — keeps command panel, opens edit form alongside
  const handleGeneralSettings = () => {
    if (selectedNode) {
      setFormData({ name: selectedNode.name, module: selectedNode.module ?? '', link: selectedNode.link ?? '' })
      setActiveTab(ETab.edit)
    }
  }

  // Command panel "Add Menu Item" — keeps command panel, opens add form alongside
  const handleAddChild = () => {
    setFormData({ name: '', module: '', link: '' })
    setActiveTab(ETab.add)
  }

  const handleDelete = async () => {
    if (!selectedNode) return
    try {
      if (selectedNode.moduleSrl) {
        await queryDelete(deleteModuleQuery, { moduleSrl: String(selectedNode.moduleSrl) })
      }
      await queryDelete(deleteMenuItemQuery, { menuItemSrl: selectedNode.id })
      await reload()
      setSelectedNode(null)
      setActiveTab(ETab.commands)
    } catch (err) {
      console.error('[MenuListPage] failed to delete menu item', err)
    }
  }

  const handleSetHomepage = async () => {
    if (!selectedNode?.moduleSrl) return
    try {
      const currentDefaults = await queryListWhere<ModuleDocument>(getModulesQuery, [
        where('isDefault', '==', true),
      ])
      await Promise.all(
        currentDefaults
          .filter((m) => m.moduleSrl !== selectedNode.moduleSrl)
          .map((m) => queryUpdate(updateModuleQuery, { moduleSrl: String(m.moduleSrl) }, { isDefault: false }))
      )
      await queryUpdate(updateModuleQuery, { moduleSrl: String(selectedNode.moduleSrl) }, { isDefault: true })
      setSelectedNode({ ...selectedNode, isDefault: true })
    } catch (err) {
      console.error('[handleSetHomepage]', err)
    }
  }

  const slugify = (value: string) =>
    value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

  const nextSrl = (values: number[]) => values.reduce((max, v) => Math.max(max, v || 0), 0) + 1

  // Create a new menu item (and its bound module, when a module type is chosen)
  const createMenuItem = async () => {
    const [items, modules] = await Promise.all([
      queryList<MenuItemDocument>(getMenuItemsQuery),
      queryList<ModuleDocument>(getModulesQuery),
    ])

    // Add Menu Item (from command panel) nests under the selected node; the
    // tree panel's "Add Menu" adds a top-level item.
    const parentSrl = selectedNode ? Number(selectedNode.id) : 0
    const menuSrl = selectedNode?.menuSrl ?? menuData[0]?.menuSrl ?? items[0]?.menuSrl ?? 1
    const listorder =
      items.filter((it) => it.parentSrl === parentSrl).reduce((m, it) => Math.max(m, it.listorder ?? 0), 0) + 1
    const menuItemSrl = nextSrl(items.map((it) => it.menuItemSrl))

    const useModule = Boolean(formData.module)
    const mid = useModule ? slugify(formData.link || formData.name) || `mid${menuItemSrl}` : ''
    const url = useModule ? `/${mid}` : formData.link
    const isExternal = !useModule && /^https?:\/\//.test(formData.link)

    await queryCreate(
      insertMenuItemQuery,
      { menuItemSrl: String(menuItemSrl) },
      stripUndefined({
        menuItemSrl,
        parentSrl,
        menuSrl,
        name: formData.name,
        url: url || undefined,
        isShortcut: isExternal,
        openWindow: false,
        expand: false,
        listorder,
        regdate: serverTimestamp(),
      }),
    )

    if (useModule) {
      const template = modules[0]
      const moduleSrl = nextSrl(modules.map((m) => m.moduleSrl))
      await queryCreate(
        insertModuleQuery,
        { moduleSrl: String(moduleSrl) },
        stripUndefined({
          moduleSrl,
          module: formData.module,
          mid,
          menuSrl,
          moduleCategorySrl: template?.moduleCategorySrl ?? 0,
          siteSrl: template?.siteSrl ?? 1,
          domainSrl: template?.domainSrl ?? 1,
          layoutSrl: template?.layoutSrl ?? 0,
          mlayoutSrl: template?.mlayoutSrl ?? 0,
          useMobile: false,
          isSkinFix: false,
          isMskinFix: false,
          isDefault: false,
          openRss: false,
          browserTitle: formData.name,
          regdate: serverTimestamp(),
        }),
      )
    }
  }

  // Update name/link on an existing menu item (and its module type, if bound)
  const updateMenuItem = async () => {
    if (!selectedNode) return
    await queryUpdate(
      updateMenuItemQuery,
      { menuItemSrl: selectedNode.id },
      stripUndefined({
        name: formData.name,
        url: selectedNode.module ? undefined : formData.link || undefined,
      }),
    )
    if (formData.module && selectedNode.moduleSrl && formData.module !== selectedNode.module) {
      await queryUpdate(updateModuleQuery, { moduleSrl: String(selectedNode.moduleSrl) }, { module: formData.module })
    }
  }

  const handleSubmit = async () => {
    try {
      if (activeTab === ETab.edit) {
        await updateMenuItem()
      } else {
        await createMenuItem()
      }
      await reload()
      setActiveTab(ETab.commands)
    } catch (err) {
      console.error('[MenuListPage] failed to save menu item', err)
    }
  }

  // X on command panel — deselect and close everything
  const handleClose = () => {
    setSelectedNode(null)
    setActiveTab(ETab.commands)
  }

  // Cancel/close on form panel — return to command panel (keep node selected)
  const handleFormClose = () => {
    if (selectedNode) {
      setActiveTab(ETab.commands)
    } else {
      setSelectedNode(null)
    }
  }

  return (
    <MainContainer>
      <MenuTreePanel
        menuData={menuData}
        selectedId={selectedNode?.id}
        onSelect={handleSelectNode}
        onAdd={handleAddTopLevel}
      />
      <Box sx={{ flex: 1, display: 'flex', gap: '16px' }}>
        {selectedNode && (
          <MenuCommandPanel
            node={selectedNode}
            onGeneralSettings={handleGeneralSettings}
            onAddMenu={handleAddChild}
            onCut={() => {}}
            onCopy={() => {}}
            onPaste={() => {}}
            onDelete={handleDelete}
            onSetHomepage={handleSetHomepage}
            onClose={handleClose}
          />
        )}
        {activeTab === ETab.add && (
          <Box sx={{ flex: 1, height: '100%' }}>
            <MenuAddFormPanel
              formData={formData}
              moduleOptions={moduleOptions}
              onChange={setFormData}
              onSubmit={handleSubmit}
              onClose={handleFormClose}
            />
          </Box>
        )}
        {activeTab === ETab.edit && selectedNode && (
          <Box sx={{ flex: 1, height: '100%' }}>
            <MenuEditFormPanel
              formData={formData}
              moduleOptions={moduleOptions}
              onChange={setFormData}
              onSubmit={handleSubmit}
              onClose={handleFormClose}
            />
          </Box>
        )}
      </Box>
    </MainContainer>
  )
}
