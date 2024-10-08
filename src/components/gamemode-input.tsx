import { mapconfig } from "@/config/map";
import { TeamInput } from "@/types";
import { useEffect, useState } from "react";
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

  const [gameMode, setGameMode] = useState<string>(defaultValue);
  const [gameModeValue, setGameModeValue] = useState<string>("");

  useEffect(() => {
    if (gameMode === "HARDPOINT") {
      setGameModeValue("hp");
    } else if (gameMode === "SEARCH & DESTROY") {
      setGameModeValue("sd");
    } else if (gameMode === "CONTROL") {
      setGameModeValue("ctr");
    }
  }, [gameMode]);

  return (
    <div className="border-l-4 border-slate-500 rounded">
      <select
        id={gameIdValue}
        className="mx-2 p-1 border-2 border-slate-300 focus:outline-none focus:border-slate-500 rounded"
        defaultValue={defaultValue}
        {...register(gameId as keyof TeamInput, {
          onChange: (e) => setGameMode(e.target.value),
        })}
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
        {mapconfig[gameModeValue]?.map((map: string) => (
          <option key={map} value={map}>
            {map}
          </option>
        ))}
      </select>
    </div>
  );
}
