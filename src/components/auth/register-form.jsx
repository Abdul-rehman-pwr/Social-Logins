"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/lib/schemas/register-schema";

import { useAuthStore } from "@/stores/auth-store";
import { useLocale } from "next-intl";

import {
  formFooterData,
  registerButton,
  formHeaderData,
  registerFields,
} from "@/data/register-data";

import FormHeader from "@/components/shared/form/form-header";
import FormFooter from "@/components/shared/form/form-footer";
import AppButton from "../shared/app-button";
import FieldGroup from "@/components/shared/form/field-group";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });
  const router = useRouter();

  const registerUser = useAuthStore((state) => state.register);
  const loading = useAuthStore((state) => state.isLoading);
  const locale = useLocale();

  const onSubmit = async (data) => {
    await registerUser(data);
    router.push(`/${locale}/profile`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl px-6 sm:px-10 lg:px-14"
    >
      <FormHeader
        title={formHeaderData.title}
        subtitle={formHeaderData.subtitle}
      />

      <div className="space-y-5 lg:space-y-6">
        <FieldGroup
          fields={registerFields}
          register={register}
          errors={errors}
        />

        <AppButton
          type="submit"
          disabled={isSubmitting || loading}
          className={registerButton.className}
          text={
            isSubmitting || loading
              ? "Creating Account..."
              : registerButton.text
          }
        />

        <FormFooter
          label={formFooterData.label}
          linkText={formFooterData.linkText}
          href={formFooterData.href}
        />
      </div>
    </form>
  );
}
