import { mapconfig } from "@/config/map";
import { TeamInput } from "@/types";
import { validationSchemaType } from "@/utils/validationSchema";
import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface GameModeInputProps {
  gameId: string;
  mapId: string;
  register: UseFormRegister<validationSchemaType>;
  defaultValue: string;
}

/**
 *　ゲームモードとマップを選択するコンポーネント
 *
 * @gameId 何ゲーム目か
 * @mapId 何マップ目か
 * @register react-hook-form register
 * @defaultValue ゲームモード初期値
 *
 * @returns
 */
export function GameModeInput({
  gameId,
  mapId,
  register,
  defaultValue,
}: GameModeInputProps) {
  const gameIdValue = String(gameId);
  // ゲームモードを保持しておく
  const [gameMode, setGameMode] = useState<string>(defaultValue);
  // gameModeに応じて選択できるマップを制御するための変数を保持しておく
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
        {...register(gameId as keyof validationSchemaType, {
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
        {...register(mapId as keyof validationSchemaType)}
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
