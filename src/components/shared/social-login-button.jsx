"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

export default function SocialLoginButton({
  icon: Icon,
  loading = false,
  onClick,
  className = "",
  bgColor = "bg-white",
  hoverColor = "hover:bg-gray-100",
  size = "w-[72.67px] h-[35px]",
  rounded = "rounded-[28.46px]",
  iconSize = "w-5 h-5",
}) {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={clsx(
        "flex items-center justify-center transition cursor-pointer opacity-100 shadow-sm px-4 py-[9px]",
        size,
        rounded,
        bgColor,
        hoverColor,
        className
      )}
    >
      {loading ? (
        <Loader2 className="animate-spin w-4 h-4 text-gray-800" />
      ) : (
        Icon && <Icon className={iconSize} />
      )}
    </Button>
  );
}
