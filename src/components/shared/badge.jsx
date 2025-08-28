export const Badge = ({ text, variant = "default" }) => {
  const baseClasses = "px-3 py-[2px] rounded-full text-xs font-medium";
  const variantClasses = {
    default: "text-[#66FCF0] bg-black font-semibold border border-[#66FCF0]",
    outlined: "border border-black bg-transparent text-black font-semibold",
    editorChoice:
      "border border-[#66FCF0] bg-transparent text-[#66FCF0] font-semibold",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>{text}</span>
  );
};
