export const LabelText = ({
  text,
  variant = "default",
  containerClassName = "",
}) => {
  const variantClasses = {
    default: "bg-[#1E1E2F] text-[#66FCF1] font-semibold px-3 py-1",
    light: "bg-[#F1F7F7] text-black font-semibold px-3 py-1",
    plain: "text-black font-semibold",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${containerClassName} flex items-center justify-center`}
    >
      {text}
    </div>
  );
};
