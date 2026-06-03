export type InputType = 'text' | 'textarea' | 'select' | 'checkbox' | 'date' | 'number';

export type FieldOption = {
  label: string;
  value: string | number | boolean;
};

export type ValidationConfig = {
  required?: boolean | string;
  min?: { value: number; message?: string };
  max?: { value: number; message?: string };
  minLength?: { value: number; message?: string };
  maxLength?: { value: number; message?: string };
  pattern?: { value: string; flags?: string; message?: string };
  email?: boolean | string;
  url?: boolean | string;
};

export type FieldConfig = {
  label: string;
  description?: string;
  name: string;
  type: InputType;
  placeholder?: string;
  length?: number;
  mandatory?: boolean;
  options?: FieldOption[];
  optionsRef?: string;
  default?: unknown;
  validation?: ValidationConfig;
};

export type ActionConfig = {
  label: string;
  handler: string;
  style?: 'primary' | 'secondary' | 'danger';
  submit?: boolean;
};

export type FormConfig = {
  id?: string;
  title?: string;
  description?: string;
  ui?: string;
  fields: FieldConfig[];
  actions?: ActionConfig[];
};

export type FetcherMap = Record<string, (arg?: unknown) => Promise<FieldOption[]>>;

export type ActionHandlers = Record<string, (formValues: Record<string, unknown>) => void | Promise<void>>;

export type FieldChangeHandler = (name: string, value: unknown, full: Record<string, unknown>) => void;
