import { validationSchemaType } from "@/utils/validationSchema";
import { UseFormRegister } from "react-hook-form";

interface TeamScoreInputProps {
  id: keyof validationSchemaType;
  label: string;
  borderColor: string;
  inputBorderColor: string;
  register: UseFormRegister<validationSchemaType>;
  error?: string | undefined;
}

export function TeamScoreInput({
  id,
  label,
  borderColor,
  inputBorderColor,
  register,
  error,
}: TeamScoreInputProps) {
  return (
    <div className={`${borderColor} border-l-4 rounded`}>
      <div className="px-2 space-y-1">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          max={250}
          {...register(id)}
          className={`w-full p-1 border-2 ${inputBorderColor} focus:outline-none focus:border-blue-500 rounded`}
        />
        <p className="text-red-500">{error}</p>
      </div>
    </div>
  );
}
