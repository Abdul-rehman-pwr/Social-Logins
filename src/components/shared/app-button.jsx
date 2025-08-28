import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function AppButton({
  className = "",
  text,
  fullWidth = true,
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={disabled}
      className={clsx(
        fullWidth ? "min-w-full" : "w-auto inline-flex",
        className
      )}
      {...props}
    >
      {text}
    </Button>
  );
}
