import { Button } from '@mui/material'

import MenuPanel from './MenuPanel'
import { FormContainer, FormField } from './styled'

interface FormData {
  name: string
  module: string
  link: string
}

interface MenuFormPanelProps {
  mode: 'add' | 'edit'
  formData: FormData
  onChange: (data: FormData) => void
  onSubmit: () => void
  onClose: () => void
}

export default function MenuFormPanel({ mode, formData, onChange, onSubmit, onClose }: MenuFormPanelProps) {
  return (
    <MenuPanel
      title={mode === 'add' ? 'Add Menu' : 'Edit Menu'}
      onClose={onClose}
      actions={
        <>
          <Button size="small" variant="outlined" onClick={onClose}>Cancel</Button>
          <Button size="small" variant="contained" onClick={onSubmit}>
            {mode === 'add' ? 'Save' : 'Update'}
          </Button>
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
          value={formData.module}
          onChange={(e) => onChange({ ...formData, module: e.target.value })}
          size="small"
        />
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
