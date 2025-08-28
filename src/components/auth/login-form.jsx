"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/schemas/login-schema";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import FormHeader from "@/components/shared/form/form-header";
import FormRememberRow from "@/components/shared/form/form-remember-row";
import AppButton from "@/components/shared/app-button";
import FieldGroup from "@/components/shared/form/field-group";
import {
  formRememberData,
  loginButton,
  formHeaderData,
  loginFields,
} from "@/data/login-data";
import { useState } from "react";
import clsx from "clsx";
import { socialLoginButtons } from "@/data/social-login-data";
import SocialLoginButton from "@/components/shared/social-login-button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const loginWithGoogle = useAuthStore((state) => state.loginWithGoogle);
  const loginWithGithub = useAuthStore((state) => state.loginWithGithub);

  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result?.success) {
      router.push(`/profile`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      const result = await loginWithGoogle();
      if (result?.success) {
        router.push(`/profile`);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    try {
      setGithubLoading(true);
      const result = await loginWithGithub();
      if (result?.success) {
        router.push(`/profile`);
      }
    } finally {
      setGithubLoading(false);
    }
  };

  const googleLogo =
    "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-google-icon-PNG.png";

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
        <FieldGroup fields={loginFields} register={register} errors={errors} />
        <FormRememberRow
          rememberLabel={formRememberData.rememberLabel}
          forgotText={formRememberData.forgotText}
          forgotHref={formRememberData.forgotHref}
        />
        <AppButton
          type="submit"
          disabled={isSubmitting}
          className={clsx(loginButton.className, "text-white !important")}
          text={isSubmitting ? "Signing In..." : loginButton.text}
        />

        <div className="flex justify-center gap-4">
          {socialLoginButtons.map((btn) => (
            <SocialLoginButton
              key={btn.id}
              icon={btn.icon}
              loading={btn.id === "google" ? googleLoading : githubLoading}
              onClick={
                btn.id === "google" ? handleGoogleLogin : handleGithubLogin
              }
              bgColor={btn.bgColor}
              hoverColor={btn.hoverColor}
              iconSize={btn.iconSize}
            />
          ))}
        </div>
      </div>
    </form>
  );
}
