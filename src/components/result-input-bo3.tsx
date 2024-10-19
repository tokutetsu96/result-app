"use client";

import { useFormContext } from "react-hook-form";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { TeamNameInput } from "./teamname-input";
import { GameModeInput } from "./gamemode-input";
import { TeamScoreInput } from "./team-score-input";
import { validationSchemaType } from "@/utils/validationSchema";

type GameFormValues = {
  map1: string;
  map2: string;
  map3: string;
  // 他のフィールドも追加できます
};
export default function ResultInputBo3() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<validationSchemaType>();

  const onSubmit = (data: validationSchemaType) => {
    router.push("/battleThree/gameResult");
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[32rem] -mt-32">
      <form className="space-y-3 mt-32">
        <h1 className="sm:text-3xl text-xl font-bold">
          チーム名を入力してください
        </h1>
        <TeamNameInput
          id="myTeamName"
          label="自分のチーム名"
          borderColor="border-blue-500"
          register={register}
          error={errors.myTeamName?.message}
        />
        <div className="flex justify-center font-bold">
          <span>VS</span>
        </div>
        <TeamNameInput
          id="enemyTeamName"
          label="相手のチーム名"
          borderColor="border-red-500"
          register={register}
          error={errors.enemyTeamName?.message}
        />

        {[1, 2, 3].map((modeIndex) => (
          <div key={modeIndex}>
            <h2 className="sm:text-2xl font-bold">{`${modeIndex}モード目`}</h2>
            <GameModeInput
              gameId={`game${modeIndex}`}
              mapId={`map${modeIndex}`}
              register={register}
              error={errors[`map${modeIndex}` as keyof GameFormValues]?.message}
              defaultValue={
                modeIndex === 1
                  ? "HARDPOINT"
                  : modeIndex === 2
                    ? "SEARCH & DESTROY"
                    : modeIndex === 3
                      ? "CONTROL"
                      : ""
              }
            />
            <div className="flex justify-between">
              <TeamScoreInput
                id={`myTeamScore${modeIndex}` as keyof validationSchemaType}
                label="自チーム"
                borderColor="border-blue-500"
                register={register}
                error={
                  (errors as Record<string, any>)[`myTeamScore${modeIndex}`]
                    ?.message
                }
              />
              <TeamScoreInput
                id={`enemyTeamScore${modeIndex}` as keyof validationSchemaType}
                label="相手チーム"
                borderColor="border-red-500"
                register={register}
                error={
                  (errors as Record<string, any>)[`enemyTeamScore${modeIndex}`]
                    ?.message
                }
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit(onSubmit)}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "w-full hover:bg-gray-200 text-lg font-semibold"
          )}
        >
          リザルト画像を生成する
        </button>
      </form>
    </div>
  );
}
