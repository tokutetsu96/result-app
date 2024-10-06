"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export default function GameResultPage() {
  const router = useRouter();
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div>
      <div className="flex flex-col">
        <div>
          {data.myTeamName} vs {data.enemyTeamName}
        </div>
        <div>
          <h1>一試合目</h1>
          <span>{data.mapOne}</span>
          <span>{data.gameOne}</span>
          <span>{data.myTeamScoreOne}</span>
          <span>{data.enemyTeamScoreOne}</span>
        </div>
        <div>
          <h1>二試合目</h1>
          <span>{data.mapTwo}</span>
          <span>{data.gameTwo}</span>
          <span>{data.myTeamScoreTwo}</span>
          <span>{data.enemyTeamScoreTwo}</span>
        </div>
        <div>
          <h1>三試合目</h1>
          <span>{data.mapThree}</span>
          <span>{data.gameThree}</span>
          <span>{data.myTeamScoreThree}</span>
          <span>{data.enemyTeamScoreThree}</span>
        </div>
      </div>
    </div>
  );
}
