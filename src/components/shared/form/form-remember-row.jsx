import { Checkbox } from "@/components/ui/checkbox";

export default function FormRememberRow({ rememberLabel }) {
  return (
    <div className="flex items-center justify-between text-[12px] lg:text-sm">
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" className="border-[#636364]" />
        <label htmlFor="remember" className="cursor-pointer">
          {rememberLabel}
        </label>
      </div>
    </div>
  );
}
