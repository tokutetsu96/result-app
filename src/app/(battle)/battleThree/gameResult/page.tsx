"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { imageMapConfig, ImageMapConfig } from "@/config/map";
import Image from "next/image";

export default function GameResultPage() {
  const router = useRouter();
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Game Result</h1>
      <div className="flex space-x-4 align-items-center justify-center">
        {["map1", "map2", "map3"].map((key, index) => (
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
              <div className="flex space-x-2 text-6xl font-bold align-items-center justify-center">
                <p>{data[`myTeamScore${index + 1}`]}</p>
                <span>-</span>
                <p>{data[`enemyTeamScore${index + 1}`]}</p>
              </div>
              <div className="mt-1 font-semibold text-center">
                {data[`game${index + 1}`]}
              </div>
            </div>
            <div
              className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-6xl font-bold ${
                data[`myTeamScore${index + 1}`] >
                data[`enemyTeamScore${index + 1}`]
                  ? "text-red-500"
                  : data[`myTeamScore${index + 1}`] <
                      data[`enemyTeamScore${index + 1}`]
                    ? "text-blue-500"
                    : "text-white"
              }`}
            >
              {data[`myTeamScore${index + 1}`] >
              data[`enemyTeamScore${index + 1}`]
                ? data.myTeamName
                : data[`myTeamScore${index + 1}`] <
                    data[`enemyTeamScore${index + 1}`]
                  ? data.enemyTeamName
                  : "存在しない"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
