import AuthIllustration from "@/components/auth/auth-illustration";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex w-full bg-[#FFD1B0] relative">
      <div
        className="absolute top-0 left-0 w-1/1 h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/panda.png')",
          transform: "scaleX(-1)",
        }}
      />

      <div className="relative flex w-full">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white/80">
          <LoginForm />
        </div>

        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100/70">
          <AuthIllustration />
        </div>
      </div>
    </div>
  );
}
