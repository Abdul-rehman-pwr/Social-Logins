"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AppButton from "../shared/app-button";
import FieldGroup from "@/components/shared/form/field-group";
import FormHeader from "../shared/form/form-header";
import forgotPasswordSchema from "@/lib/schemas/forgot-password-schema";
import {
  backToLogin,
  ForgotButton,
  forgotPasswordFields,
} from "@/data/forgot-password-data";
import FormFooter from "../shared/form/form-footer";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log("Sending OTP to:", data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl px-6 sm:px-10 lg:px-14"
    >
      <FormHeader title="forgotPassword" subtitle="enterEmailForOTP" />

      <div className="space-y-6">
        <FieldGroup
          fields={forgotPasswordFields}
          register={register}
          errors={errors}
        />

        <AppButton
          type={ForgotButton.type}
          disabled={isSubmitting}
          text={
            isSubmitting
              ? `${ForgotButton.disabledText}`
              : `${ForgotButton.text}`
          }
          className={ForgotButton.className}
        />
        <FormFooter
          linkText={backToLogin.text}
          href={backToLogin.href}
          linkClassName="hover:text-underlined"
        />
      </div>
    </form>
  );
}
