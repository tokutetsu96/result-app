import { validationSchemaTypeBo3 } from "@/utils/validationSchemaBo3";
import { UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface TeamNameInputProps {
  id: string;
  label: string;
  borderColor: string;
  register: UseFormRegister<validationSchemaTypeBo3>;
  error?: string | undefined;
}

export function TeamNameInput({
  id,
  label,
  borderColor,
  register,
  error,
}: TeamNameInputProps) {
  const idValue = String(id);

  return (
    <div className={`${borderColor} border-l-4 rounded`}>
      <div className="px-2 space-y-1">
        <Label htmlFor={idValue}>{label}</Label>
        <Input
          id={idValue}
          type="text"
          placeholder="アルファベットのみで入力してください"
          className="w-full py-2 rounded text-lg"
          {...register(id as keyof validationSchemaTypeBo3)}
        />
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          // レイアウトが崩れないようにするためのダミー
          <p className="invisible h-6">Placeholder for error</p>
        )}
      </div>
    </div>
  );
}
