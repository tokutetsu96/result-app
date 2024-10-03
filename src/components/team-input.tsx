"use client";

import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface TeamInput {
  myTeamName: string;
  enemyTeamName: string;
}
export default function TeamInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamInput>();

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
          </div>
        </div>
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
