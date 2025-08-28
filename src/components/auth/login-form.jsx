"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/schemas/login-schema";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import FormHeader from "@/components/shared/form/form-header";
import FormRememberRow from "@/components/shared/form/form-remember-row";
import AppButton from "../shared/app-button";
import FieldGroup from "@/components/shared/form/field-group";
import {
  formRememberData,
  loginButton,
  formHeaderData,
  loginFields,
} from "@/data/login-data";
import { GithubIcon, Loader2 } from "lucide-react";
import { useState } from "react";

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
          className={loginButton.className}
          text={isSubmitting ? "Signing In..." : loginButton.text}
        />

        <div className="flex justify-center gap-6">
          {/* Google Button */}
          {/* Google Button */}
          <Button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-red-500 hover:bg-red-50 transition cursor-pointer"
          >
            {googleLoading ? (
              <Loader2 className="animate-spin w-5 h-5 text-red-500" />
            ) : (
              <Image
                src={googleLogo}
                alt="Google Logo"
                width={40} // bigger size
                height={40}
              />
            )}
          </Button>

          {/* GitHub Button */}
          <Button
            type="button"
            onClick={handleGithubLogin}
            disabled={githubLoading}
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-800 hover:bg-gray-100 transition cursor-pointer"
          >
            {githubLoading ? (
              <Loader2 className="animate-spin w-5 h-5 text-gray-800" />
            ) : (
              <GithubIcon className="w-10 h-10 text-gray-800" />
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
