import { validationSchemaType } from "@/utils/validationSchema";
import { UseFormRegister } from "react-hook-form";

interface TeamNameInputProps {
  id: string;
  label: string;
  borderColor: string;
  inputBorderColor: string;
  register: UseFormRegister<validationSchemaType>;
  error?: string | undefined;
}

export function TeamNameInput({
  id,
  label,
  borderColor,
  inputBorderColor,
  register,
  error,
}: TeamNameInputProps) {
  const idValue = String(id);

  return (
    <div className={`${borderColor} border-l-4 rounded`}>
      <div className="px-2 space-y-1">
        <span>{label}</span>
        <input
          id={idValue}
          type="text"
          className={`w-full p-1 border-2 ${inputBorderColor} focus:outline-none focus:border-blue-500 rounded`}
          {...register(id as keyof validationSchemaType)}
        />
        <p className="text-red-500">{error}</p>
      </div>
    </div>
  );
}
