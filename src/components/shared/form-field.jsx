import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function FormField({
  id,
  label,
  type,
  value,
  disabled = false,
  onChange,
  placeholder,
  className = "",
  register,
  error = null,
}) {
  const isControlled = value !== undefined && onChange;
  return (
    <div>
      <Label htmlFor={id} className="block mb-1 font-normal">
        {label}
      </Label>

      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={isControlled ? value : undefined}
        onChange={isControlled ? onChange : undefined}
        disabled={disabled}
        {...(!isControlled && register ? register(id) : {})}
        className={`${className} ${
          error ? "border-red-500" : ""
        } placeholder:text-[12px] md:placeholder:text-[15px]`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
