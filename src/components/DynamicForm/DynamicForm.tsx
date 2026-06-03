import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';

import ActionButton from './ActionButton';
import CheckboxField from './fields/CheckboxField';
import SelectField from './fields/SelectField';
import TextAreaField from './fields/TextAreaField';
import TextField from './fields/TextField';
import type { ActionHandlers, FieldChangeHandler, FieldConfig, FieldOption, FetcherMap, FormConfig } from './types';
import { buildValidationSchema, resolveOptions } from './utils';

type Props = {
  config: FormConfig;
  fetchers?: FetcherMap;
  actionHandlers?: ActionHandlers;
  onFieldChange?: FieldChangeHandler;
  onChange?: (values: Record<string, unknown>) => void;
};

export default function DynamicForm({ config, fetchers, actionHandlers, onFieldChange, onChange }: Props) {
  const [dynamicOptions, setDynamicOptions] = useState<Record<string, FieldOption[]>>({});

  useEffect(() => {
    config.fields
      .filter((f) => f.optionsRef)
      .forEach(async (f) => {
        const opts = await resolveOptions(f.optionsRef, fetchers);
        setDynamicOptions((s) => ({ ...s, [f.optionsRef!]: opts }));
      });
  }, [config.fields, fetchers]);

  const initialValues: Record<string, unknown> = {};
  config.fields.forEach((f) => { initialValues[f.name] = f.default ?? ''; });

  const validationSchema = buildValidationSchema(config.fields);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const submitAction = config.actions?.find((a) => a.submit);
        if (submitAction) await actionHandlers?.[submitAction.handler]?.(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, setFieldValue, setFieldTouched, isSubmitting }) => {
        function handleChange(name: string, v: unknown) {
          setFieldValue(name, v);
          const next = { ...values, [name]: v };
          onFieldChange?.(name, v, next);
          onChange?.(next);
        }

        function renderField(field: FieldConfig) {
          const error = touched[field.name] ? (errors[field.name] as string | undefined) : undefined;
          const onBlur = () => setFieldTouched(field.name, true);

          switch (field.type) {
            case 'text':
            case 'date':
            case 'number':
              return <TextField key={field.name} config={field} value={values[field.name]} onChange={(v) => handleChange(field.name, v)} onBlur={onBlur} error={error} />;
            case 'textarea':
              return <TextAreaField key={field.name} config={field} value={values[field.name]} onChange={(v) => handleChange(field.name, v)} onBlur={onBlur} error={error} />;
            case 'select': {
              const opts = field.options ?? dynamicOptions[field.optionsRef ?? ''] ?? [];
              return <SelectField key={field.name} config={field} value={values[field.name]} options={opts} onChange={(v) => handleChange(field.name, v)} onBlur={onBlur} error={error} />;
            }
            case 'checkbox':
              return <CheckboxField key={field.name} config={field} value={!!values[field.name]} onChange={(v) => handleChange(field.name, v)} error={error} />;
            default:
              return null;
          }
        }

        return (
          <Box component={Form} sx={{ width: '100%' }}>
            {config.title && <Typography variant="h6" gutterBottom>{config.title}</Typography>}
            {config.description && <Typography variant="body2" gutterBottom>{config.description}</Typography>}
            <Stack spacing={2}>
              {config.fields.map((f) => (
                <Box key={f.name}>{renderField(f)}</Box>
              ))}
            </Stack>
            <Box sx={{ mt: 2 }}>
              {config.actions?.map((a) => (
                <ActionButton
                  key={a.label}
                  config={a}
                  disabled={a.submit ? isSubmitting : false}
                  onClick={a.submit ? undefined : () => actionHandlers?.[a.handler]?.(values)}
                />
              ))}
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
