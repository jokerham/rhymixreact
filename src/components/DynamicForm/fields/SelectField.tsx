import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import type { FieldConfig, FieldOption } from '../types';

type Props = {
  config: FieldConfig;
  value: unknown;
  options: FieldOption[];
  onChange: (v: unknown) => void;
  onBlur?: () => void;
  error?: string;
};

export default function SelectField({ config, value, options, onChange, onBlur, error }: Props) {
  const labelId = `df-select-${config.name}`;
  return (
    <FormControl fullWidth variant="outlined" error={!!error}>
      <InputLabel id={labelId}>{config.label}</InputLabel>
      <Select
        labelId={labelId}
        label={config.label}
        value={value ?? ''}
        onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
        onBlur={onBlur}
        required={!!config.mandatory}
      >
        <MenuItem value="">{config.placeholder ?? 'Select...'}</MenuItem>
        {options.map((o) => (
          <MenuItem key={String(o.value)} value={String(o.value)}>{o.label}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{error ?? config.description}</FormHelperText>
    </FormControl>
  );
}
