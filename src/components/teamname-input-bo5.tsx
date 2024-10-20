import { validationSchemaTypeBo5 } from "@/utils/validationSchemaBo3";
import { UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface TeamNameInputBo5Props {
  id: string;
  label: string;
  borderColor: string;
  register: UseFormRegister<validationSchemaTypeBo5>;
  error?: string | undefined;
}

export function TeamNameInputBo5({
  id,
  label,
  borderColor,
  register,
  error,
}: TeamNameInputBo5Props) {
  const idValue = String(id);

  return (
    <div className={`${borderColor} border-l-4 rounded`}>
      <div className="px-2 space-y-1">
        <Label htmlFor={idValue}>{label}</Label>
        <Input
          id={idValue}
          type="text"
          placeholder="大文字アルファベットのみで入力してください"
          className="w-full py-2 rounded text-lg"
          {...register(id as keyof validationSchemaTypeBo5)}
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
