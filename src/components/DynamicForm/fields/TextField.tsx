import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';

import type { FieldConfig } from '../types';

type Props = {
  config: FieldConfig;
  value: unknown;
  onChange: (v: unknown) => void;
  onBlur?: () => void;
  error?: string;
  size?: 'small' | 'medium';
};

export default function TextField({ config, value, onChange, onBlur, error, size }: Props) {
  return (
    <Box className="df-field df-text">
      <MuiTextField
        label={config.label}
        placeholder={config.placeholder}
        type={config.type === 'number' ? 'number' : config.type === 'date' ? 'date' : config.type === 'password' ? 'password' : 'text'}
        autoComplete={config.type === 'password' ? 'new-password' : undefined}
        slotProps={{ htmlInput: { maxLength: config.length } }}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        helperText={error ?? config.description}
        error={!!error}
        fullWidth
        variant="outlined"
        size={size}
        required={!!config.mandatory}
      />
    </Box>
  );
}
