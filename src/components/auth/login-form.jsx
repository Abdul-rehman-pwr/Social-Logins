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
import { GithubIcon } from "lucide-react";

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
  const loading = useAuthStore((state) => state.isLoading);

  const onSubmit = async (data) => {
    await login(data);
    router.push(`/profile`);
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    router.push(`/profile`);
  };

  const handleGithubLogin = async () => {
    await loginWithGithub();
    router.push(`/profile`);
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
          disabled={isSubmitting || loading}
          className={loginButton.className}
          text={isSubmitting || loading ? "Signing In..." : loginButton.text}
        />

        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex-1 flex items-center justify-center p-2 rounded"
          >
            <Image src={googleLogo} alt="Google Logo" width={24} height={24} />
          </Button>

          <Button
            variant="outline"
            onClick={handleGithubLogin}
            disabled={loading}
            className="flex-1 flex items-center justify-center p-2 rounded"
          >
            <GithubIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
