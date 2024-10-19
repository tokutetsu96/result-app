"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { imageMapConfig, ImageMapConfig } from "@/config/map";

export default function GameResultPage() {
  const router = useRouter();
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Game Result</h1>
      <div className="flex space-x-2 items-center justify-center">
        {["map1", "map2", "map3", "map4", "map5"].map((key, index) => (
          <div
            key={index}
            className="relative w-[20%] pb-[30%] overflow-hidden"
          >
            <img
              src={
                imageMapConfig[
                  data[key as keyof typeof data] as keyof ImageMapConfig
                ]
              }
              alt={`Map for ${data[key as keyof typeof data]}`}
              className="absolute w-full h-full object-cover blur-xs brightness-75"
            />
            <div className="flex flex-col absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white p-4 w-48">
              <div className="flex space-x-2 text-6xl font-bold items-center justify-center">
                <p>{data[`myTeamScore${index + 1}`]}</p>
                <span>-</span>
                <p>{data[`enemyTeamScore${index + 1}`]}</p>
              </div>
              <div className="mt-1 font-semibold text-center">
                {data[`game${index + 1}`]}
              </div>
            </div>
            <div
              className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-6xl font-bold px-4 py-2 rounded-md backdrop-blur-md bg-slate-100 bg-opacity-75 whitespace-nowrap ${
                data[`myTeamScore${index + 1}`] >
                data[`enemyTeamScore${index + 1}`]
                  ? "text-blue-500"
                  : data[`myTeamScore${index + 1}`] <
                      data[`enemyTeamScore${index + 1}`]
                    ? "text-red-500"
                    : "text-black text-4xl"
              }`}
            >
              {data[`myTeamScore${index + 1}`] >
              data[`enemyTeamScore${index + 1}`]
                ? data.myTeamName
                : data[`myTeamScore${index + 1}`] <
                    data[`enemyTeamScore${index + 1}`]
                  ? data.enemyTeamName
                  : "NOT PLAY"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
