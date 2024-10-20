import { validationSchemaTypeBo5 } from "@/utils/validationSchemaBo5";
import { UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface TeamScoreInputBo5Props {
  id: keyof validationSchemaTypeBo5;
  label: string;
  borderColor: string;
  register: UseFormRegister<validationSchemaTypeBo5>;
  error?: string | undefined;
}

export function TeamScoreInputBo5({
  id,
  label,
  borderColor,
  register,
  error,
}: TeamScoreInputBo5Props) {
  return (
    <div className={`${borderColor} border-l-4 rounded`}>
      <div className="px-2 space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type="number"
          {...register(id as keyof validationSchemaTypeBo5)}
          className="w-96 p-1 border-2 rounded text-2xl"
        />
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="invisible h-6">Placeholder for error</p>
        )}
      </div>
    </div>
  );
}
