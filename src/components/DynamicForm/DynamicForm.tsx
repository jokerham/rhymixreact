import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
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
  const [currentStep, setCurrentStep] = useState(0);

  const isMultiStep = !!config.steps?.length;
  const totalSteps = config.steps?.length ?? 1;
  const isLastStep = currentStep === totalSteps - 1;

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
      {({ values, errors, touched, setFieldValue, setFieldTouched, setTouched, validateForm, isSubmitting }) => {
        function handleChange(name: string, v: unknown) {
          setFieldValue(name, v);
          const next = { ...values, [name]: v };
          onFieldChange?.(name, v, next);
          onChange?.(next);
        }

        const size = config.size;

        function renderField(field: FieldConfig) {
          const error = touched[field.name] ? (errors[field.name] as string | undefined) : undefined;
          const onBlur = () => setFieldTouched(field.name, true);

          switch (field.type) {
            case 'text':
            case 'password':
            case 'date':
            case 'number':
              return <TextField key={field.name} config={field} value={values[field.name]} onChange={(v) => handleChange(field.name, v)} onBlur={onBlur} error={error} size={size} />;
            case 'textarea':
              return <TextAreaField key={field.name} config={field} value={values[field.name]} onChange={(v) => handleChange(field.name, v)} onBlur={onBlur} error={error} size={size} />;
            case 'select': {
              const opts = field.options ?? dynamicOptions[field.optionsRef ?? ''] ?? [];
              return <SelectField key={field.name} config={field} value={values[field.name]} options={opts} onChange={(v) => handleChange(field.name, v)} onBlur={onBlur} error={error} size={size} />;
            }
            case 'checkbox':
              return <CheckboxField key={field.name} config={field} value={!!values[field.name]} onChange={(v) => handleChange(field.name, v)} error={error} />;
            default:
              return null;
          }
        }

        const stepFieldNames = isMultiStep ? config.steps![currentStep].fields : config.fields.map((f) => f.name);
        const visibleFields = config.fields.filter((f) => stepFieldNames.includes(f.name));
        const stepDescription = isMultiStep ? config.steps![currentStep].description : config.description;

        async function handleNext() {
          const touches: Record<string, boolean> = {};
          stepFieldNames.forEach((name) => { touches[name] = true; });
          await setTouched({ ...touched, ...touches }, true);

          const allErrors = await validateForm();
          const hasStepErrors = stepFieldNames.some((name) => name in allErrors);
          if (!hasStepErrors) setCurrentStep((s) => s + 1);
        }

        return (
          <Box component={Form} sx={{ width: '100%' }}>
            {config.title && <Typography variant="h6" gutterBottom>{config.title}</Typography>}

            {isMultiStep && (
              <Stepper activeStep={currentStep} sx={{ mb: 3 }}>
                {config.steps!.map((step) => (
                  <Step key={step.title}>
                    <StepLabel>{step.title}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}

            {stepDescription && (
              <Typography variant="body2" color="text.secondary" gutterBottom>{stepDescription}</Typography>
            )}

            <Stack spacing={2}>
              {visibleFields.map((f) => (
                <Box key={f.name}>{renderField(f)}</Box>
              ))}
            </Stack>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                {isMultiStep && currentStep > 0 && (
                  <Button variant="outlined" onClick={() => setCurrentStep((s) => s - 1)} sx={{ mr: 1 }}>
                    Back
                  </Button>
                )}
              </Box>
              <Box>
                {isMultiStep && !isLastStep ? (
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  config.actions?.map((a) => (
                    <ActionButton
                      key={a.label}
                      config={a}
                      disabled={a.submit ? isSubmitting : false}
                      onClick={a.submit ? undefined : () => actionHandlers?.[a.handler]?.(values)}
                    />
                  ))
                )}
              </Box>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
