"use client";

import FormField from "@/components/shared/form-field";

export default function FieldGroup({
  fields,
  register,
  errors,
  values,
  onChange,
}) {
  return (
    <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.id} className="w-full">
          <FormField
            {...field}
            value={values?.[field.id]}
            onChange={onChange}
            disabled={field?.disabled || null}
            register={register ? register : undefined}
            error={errors?.[field.id]?.message || null}
          />
        </div>
      ))}
    </div>
  );
}
