"use client";

import { useFormContext } from "react-hook-form";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { TeamNameInputBo5 } from "./teamname-input-bo5";
import { GameModeInputBo5 } from "./gamemode-input-bo5";
import { TeamScoreInputBo5 } from "./team-score-input-bo5";
import { validationSchemaTypeBo5 } from "@/utils/validationSchema";

type GameFormValues = {
  map1: string;
  map2: string;
  map3: string;
  map4: string;
  map5: string;
};
export default function ResultInputBo5() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<validationSchemaTypeBo5>();

  const onSubmit = (data: validationSchemaTypeBo5) => {
    router.push("/battleFive/gameResult");
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[32rem] -mt-32">
      <form className="space-y-3 mt-32">
        <h1 className="sm:text-3xl text-xl font-bold">
          チーム名を入力してください
        </h1>
        <TeamNameInputBo5
          id="myTeamName"
          label="自分のチーム名"
          borderColor="border-blue-500"
          register={register}
          error={errors.myTeamName?.message}
        />
        <div className="flex justify-center font-bold">
          <span>VS</span>
        </div>
        <TeamNameInputBo5
          id="enemyTeamName"
          label="相手のチーム名"
          borderColor="border-red-500"
          register={register}
          error={errors.enemyTeamName?.message}
        />

        {[1, 2, 3, 4, 5].map((modeIndex) => (
          <div key={modeIndex}>
            <h2 className="sm:text-2xl font-bold">{`${modeIndex}モード目`}</h2>
            <GameModeInputBo5
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
                      : modeIndex === 4
                        ? "HARDPOINT"
                        : modeIndex === 5
                          ? "SEARCH & DESTROY"
                          : ""
              }
            />
            <div className="flex justify-between">
              <TeamScoreInputBo5
                id={`myTeamScore${modeIndex}` as keyof validationSchemaTypeBo5}
                label="自チーム"
                borderColor="border-blue-500"
                register={register}
                error={
                  (errors as Record<string, any>)[`myTeamScore${modeIndex}`]
                    ?.message
                }
              />
              <TeamScoreInputBo5
                id={
                  `enemyTeamScore${modeIndex}` as keyof validationSchemaTypeBo5
                }
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
