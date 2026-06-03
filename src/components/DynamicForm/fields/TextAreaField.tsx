import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';

import type { FieldConfig } from '../types';

type Props = {
  config: FieldConfig;
  value: unknown;
  onChange: (v: unknown) => void;
  onBlur?: () => void;
  error?: string;
};

export default function TextAreaField({ config, value, onChange, onBlur, error }: Props) {
  return (
    <Box className="df-field df-textarea">
      <MuiTextField
        label={config.label}
        placeholder={config.placeholder}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        helperText={error ?? config.description}
        error={!!error}
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { maxLength: config.length } }}
        required={!!config.mandatory}
      />
    </Box>
  );
}
