import React from "react";
import Link from "next/link";

export default function CreatePage() {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="flex justify-center md:text-5xl sm:text-3xl font-bold mb-5">
        <h1>ゲーム数を選択してください</h1>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-1/2 bg-blue-100 text-center">
          <Link href={"/battleThree"} className="w-full">
            Battle of 3
          </Link>
        </div>
        <div className="w-1/2 bg-green-100 text-center">
          <Link href={"/battleFive"} className="w-full max-w-xl">
            Battle of 5
          </Link>
        </div>
      </div>
    </div>
  );
}
