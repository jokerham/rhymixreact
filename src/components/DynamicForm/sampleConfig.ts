import type { FormConfig } from './types';

export const sampleFormConfig: FormConfig = {
  id: 'user-create',
  title: 'Create User',
  description: 'Form driven from JSON config. Options can be fetched from storage via `optionsRef`.',
  ui: 'default',
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter username',
      length: 50,
      validation: {
        required: 'Username is required',
        minLength: { value: 3, message: 'At least 3 characters' },
        pattern: { value: '^[a-zA-Z0-9_]+$', message: 'Only letters, numbers and underscores' },
      },
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'user@example.com',
      validation: {
        required: 'Email is required',
        email: 'Enter a valid email address',
      },
    },
    {
      name: 'displayName',
      label: 'Display Name',
      type: 'text',
      placeholder: 'Full name',
      validation: {
        maxLength: { value: 100 },
      },
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      placeholder: 'Short bio',
      validation: {
        maxLength: { value: 500, message: 'Bio must be 500 characters or fewer' },
      },
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      validation: {
        min: { value: 14, message: 'Must be at least 14' },
        max: { value: 120 },
      },
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      optionsRef: 'roles',
      placeholder: 'Select role',
      validation: { required: 'Please select a role' },
    },
    {
      name: 'isAdmin',
      label: 'Admin',
      type: 'checkbox',
      default: false,
    },
  ],
  actions: [
    { label: 'Save', handler: 'saveUser', style: 'primary', submit: true },
    { label: 'Cancel', handler: 'cancel', style: 'secondary' },
  ],
};
