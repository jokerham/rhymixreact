import Button from '@mui/material/Button';

import type { ActionConfig } from './types';

type Props = {
  config: ActionConfig;
  onClick?: () => void;
  disabled?: boolean;
};

export default function ActionButton({ config, onClick, disabled }: Props) {
  const variant = config.style === 'secondary' ? 'outlined' : 'contained';
  const color = config.style === 'danger' ? 'error' : 'primary';
  return (
    <Button
      type={config.submit ? 'submit' : 'button'}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      sx={{ mr: 1 }}
    >
      {config.label}
    </Button>
  );
}
