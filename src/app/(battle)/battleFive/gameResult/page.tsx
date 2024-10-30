"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { imageMapConfig, ImageMapConfig } from "@/config/map";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";

export default function GameResultPage() {
  const { getValues } = useFormContext();
  const data = getValues();

  // 画像化とダウンロードをトリガーする関数
  const onClickExport = (): void => {
    // 画像化したい要素を取得
    const target = document.getElementById("result-component") as HTMLElement;
    // html2canvasを使って要素をキャンバスに描画
    html2canvas(target).then((canvas: HTMLCanvasElement) => {
      // キャンバスをPNG形式のデータURLに変換
      const targetImgUri = canvas.toDataURL("image/png");
      // 画像をダウンロード
      saveAsImage(targetImgUri);
    });
  };

  // 画像をダウンロードする関数
  const saveAsImage = (uri: string): void => {
    // ダウンロードリンクを作成
    const downloadLink = document.createElement("a");
    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
      downloadLink.download = "cod_result.png"; // ダウンロードするファイル名を指定
      document.body.appendChild(downloadLink);
      downloadLink.click(); // 自動的にクリックしてダウンロードを開始
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri); // ダウンロードリンクが使えない場合は新しいタブで開く
    }
  };
  return (
    <div className="p-4">
      <div id="result-component">
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
                className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold px-4 py-2 rounded-md backdrop-blur-md bg-slate-100 bg-opacity-75 whitespace-nowrap ${
                  parseInt(data[`myTeamScore${index + 1}`]) >
                  parseInt(data[`enemyTeamScore${index + 1}`])
                    ? "text-blue-500"
                    : parseInt(data[`myTeamScore${index + 1}`]) <
                        parseInt(data[`enemyTeamScore${index + 1}`])
                      ? "text-red-500"
                      : "text-black"
                }`}
              >
                {parseInt(data[`myTeamScore${index + 1}`]) >
                parseInt(data[`enemyTeamScore${index + 1}`])
                  ? data.myTeamName
                  : parseInt(data[`myTeamScore${index + 1}`]) <
                      parseInt(data[`enemyTeamScore${index + 1}`])
                    ? data.enemyTeamName
                    : "NOT PLAY"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button onClick={onClickExport}>画像をダウンロードする</Button>
      </div>
    </div>
  );
}
