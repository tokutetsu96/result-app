"use client";

import { useForm } from "react-hook-form";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { type TeamInput } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/utils/validationSchema";

export default function ResultInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamInput>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: TeamInput) => {
    console.log(data);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[32rem] -mt-32">
      <form className="space-y-3 mt-32">
        <h1 className="sm:text-3xl text-xl font-bold">
          チーム名を入力してください
        </h1>
        <div className="border-l-4 border-blue-500 rounded">
          <div className="px-2 space-y-1">
            <span>自分のチーム名</span>
            <input
              id="myTeamName"
              type="text"
              className="w-full p-1 border-2 border-blue-300 focus:outline-none focus:border-blue-500 rounded"
              {...register("myTeamName")}
            />
            <p className="text-red-500">{errors.myTeamName?.message}</p>
          </div>
        </div>
        <div className="flex justify-center font-bold">
          <span>VS</span>
        </div>
        <div className="border-l-4 border-red-500 rounded">
          <div className="px-2 space-y-1">
            <span>相手のチーム名</span>
            <input
              id="enemyTeamName"
              type="text"
              className="w-full p-1 border-2 border-red-300 focus:outline-none focus:border-red-500 rounded"
              {...register("enemyTeamName")}
            />
            <p className="text-red-500">{errors.enemyTeamName?.message}</p>
          </div>
        </div>
        <h1 className="sm:text-3xl text-xl font-bold">
          試合結果を入力してください
        </h1>

        <button
          onClick={handleSubmit(onSubmit)}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "w-full hover:bg-gray-200"
          )}
        >
          確定
        </button>
      </form>
    </div>
  );
}
