import * as Yup from 'yup';

import type { FieldConfig, FieldOption, FetcherMap } from './types';

export async function resolveOptions(ref?: string, fetchers?: FetcherMap): Promise<FieldOption[]> {
  if (!ref || !fetchers) return [];
  const fn = fetchers[ref];
  if (!fn) return [];
  try {
    return (await fn()) || [];
  } catch (e) {
    console.warn('resolveOptions failed for', ref, e);
    return [];
  }
}

export function buildPartialValidationSchema(fields: FieldConfig[], fieldNames: string[]): Yup.ObjectSchema<Record<string, unknown>> {
  return buildValidationSchema(fields.filter((f) => fieldNames.includes(f.name)));
}

export function buildValidationSchema(fields: FieldConfig[]): Yup.ObjectSchema<Record<string, unknown>> {
  const shape: Record<string, Yup.Schema> = {};

  for (const field of fields) {
    const v = field.validation;
    const requiredMsg = typeof v?.required === 'string' ? v.required : `${field.label} is required`;
    const isRequired = v?.required || field.mandatory;

    if (field.type === 'checkbox') {
      shape[field.name] = Yup.boolean();
      continue;
    }

    if (field.type === 'number') {
      let s = Yup.number().typeError(`${field.label} must be a number`);
      if (v?.min !== undefined) s = s.min(v.min.value, v.min.message ?? `Minimum value is ${v.min.value}`);
      if (v?.max !== undefined) s = s.max(v.max.value, v.max.message ?? `Maximum value is ${v.max.value}`);
      if (isRequired) s = s.required(requiredMsg);
      shape[field.name] = s;
      continue;
    }

    let s = Yup.string();
    if (v?.email) s = s.email(typeof v.email === 'string' ? v.email : 'Invalid email address');
    if (v?.url) s = s.url(typeof v.url === 'string' ? v.url : 'Invalid URL');
    if (v?.minLength) s = s.min(v.minLength.value, v.minLength.message ?? `Minimum ${v.minLength.value} characters`);
    const maxLen = v?.maxLength?.value ?? field.length;
    if (maxLen) s = s.max(maxLen, v?.maxLength?.message ?? `Maximum ${maxLen} characters`);
    if (v?.pattern) s = s.matches(new RegExp(v.pattern.value, v.pattern.flags ?? ''), v.pattern.message ?? 'Invalid format');
    if (v?.match) s = s.oneOf([Yup.ref(v.match.field)], v.match.message ?? 'Fields must match');
    if (isRequired) s = s.required(requiredMsg);
    shape[field.name] = s;
  }

  return Yup.object().shape(shape);
}
