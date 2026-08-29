import { Button, MenuItem } from '@mui/material'

import MenuPanel from './MenuPanel'
import { FormContainer, FormField } from './styled'
import type { ModuleOption } from './types'

interface FormData {
  name: string
  module: string
  link: string
}

interface MenuEditFormPanelProps {
  formData: FormData
  moduleOptions: ModuleOption[]
  onChange: (data: FormData) => void
  onSubmit: () => void
  onClose: () => void
}

export default function MenuEditFormPanel({ formData, moduleOptions, onChange, onSubmit, onClose }: MenuEditFormPanelProps) {
  return (
    <MenuPanel
      title="General Settings"
      onClose={onClose}
      actions={
        <>
          <Button size="small" variant="outlined" onClick={onClose}>Cancel</Button>
          <Button size="small" variant="contained" onClick={onSubmit}>Update</Button>
        </>
      }
    >
      <FormContainer>
        <FormField
          label="Menu Name"
          value={formData.name}
          onChange={(e) => onChange({ ...formData, name: e.target.value })}
          size="small"
        />
        <FormField
          label="Module"
          select
          value={formData.module}
          onChange={(e) => onChange({ ...formData, module: e.target.value })}
          size="small"
        >
          <MenuItem value="">Select a module</MenuItem>
          {moduleOptions.map((moduleOption) => (
            <MenuItem key={moduleOption.name} value={moduleOption.name}>
              {moduleOption.title || moduleOption.name}
            </MenuItem>
          ))}
        </FormField>
        <FormField
          label="Link"
          value={formData.link}
          onChange={(e) => onChange({ ...formData, link: e.target.value })}
          size="small"
        />
      </FormContainer>
    </MenuPanel>
  )
}
