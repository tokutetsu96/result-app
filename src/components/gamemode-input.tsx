import { TeamInput } from "@/types";
import { UseFormRegister } from "react-hook-form";

interface GameModeInputProps {
  gameId: string;
  mapId: string;
  register: UseFormRegister<TeamInput>;
  defaultValue: string;
}

export function GameModeInput({
  gameId,
  mapId,
  register,
  defaultValue,
}: GameModeInputProps) {
  const gameIdValue = String(gameId);

  return (
    <div className="border-l-4 border-slate-500 rounded">
      <select
        id={String(gameIdValue)}
        className="mx-2 p-1 border-2 border-slate-300 focus:outline-none focus:border-slate-500 rounded"
        defaultValue={defaultValue}
        {...register(gameId as keyof TeamInput)}
      >
        <option value={"HARDPOINT"}>HARDPOINT</option>
        <option value={"SEARCH & DESTROY"}>SEARCH & DESTROY</option>
        <option value={"CONTROL"}>CONTROL</option>
      </select>
      <select
        id={mapId}
        className="mx-2 p-1 border-2 border-slate-300 focus:outline-none focus:border-slate-500 rounded"
        {...register(mapId as keyof TeamInput)}
      >
        <option value="マップ１">マップ１</option>
        <option value="マップ２">マップ２</option>
        <option value="マップ３">マップ３</option>
        <option value="マップ４">マップ４</option>
        <option value="マップ５">マップ５</option>
      </select>
    </div>
  );
}
