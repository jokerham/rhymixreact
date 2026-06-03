import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import type { FieldConfig } from '../types';

type Props = {
  config: FieldConfig;
  value: boolean;
  onChange: (v: boolean) => void;
  error?: string;
};

export default function CheckboxField({ config, value, onChange, error }: Props) {
  return (
    <Box className="df-field df-checkbox">
      <FormControlLabel
        control={<Checkbox checked={!!value} onChange={(e) => onChange(e.target.checked)} />}
        label={config.label}
      />
      {(error ?? config.description) && (
        <FormHelperText error={!!error}>{error ?? config.description}</FormHelperText>
      )}
    </Box>
  );
}
