export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      {children}
    </main>
  );
}
