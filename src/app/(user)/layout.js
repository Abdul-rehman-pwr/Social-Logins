export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div>{children}</div>
    </div>
  );
}
