import clsx from "clsx";
import Link from "next/link";

export default function FormFooter({
  label = "",
  linkText = "",
  href = "",
  linkClassName = "",
}) {
  const locale = useLocale();

  return (
    <p className="text-sm lg:text-xs text-center">
      {label && <>{label} </>}
      <Link
        href={`/${href}`}
        className={clsx("text-[#66FCF0] hover:underline ml-1", linkClassName)}
      >
        {linkText}
      </Link>
    </p>
  );
}
