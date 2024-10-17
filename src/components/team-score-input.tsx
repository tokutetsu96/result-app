import { validationSchemaType } from "@/utils/validationSchema";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface TeamScoreInputProps {
  id: keyof validationSchemaType;
  label: string;
  borderColor: string;
  register: UseFormRegister<validationSchemaType>;
  error?: string | undefined;
}

export function TeamScoreInput({
  id,
  label,
  borderColor,
  register,
  error,
}: TeamScoreInputProps) {
  return (
    <div className={`${borderColor} border-l-4 rounded`}>
      <div className="px-2 space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type="number"
          {...register(id as keyof validationSchemaType)}
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
