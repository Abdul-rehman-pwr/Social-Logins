import AuthIllustration from "@/components/auth/auth-illustration";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex w-full">
      <div className="w-full md:w-1/2 flex bg-white items-center justify-center">
        <LoginForm />
      </div>
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <AuthIllustration />
      </div>
    </div>
  );
}
