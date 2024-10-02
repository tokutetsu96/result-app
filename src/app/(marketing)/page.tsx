import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:pt-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-semibold text-xl mr-1">X</span>をフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            COD RESULT CREATE
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはCOD eスポーツの対戦結果を表示し、
            <br />
            画像として生成するサイトです
          </p>
        </div>
        <div className="flex justify-center pt-6 md:pt-10">
          <Link href={"/create"} className={cn(buttonVariants({ size: "lg" }))}>
            作成する
          </Link>
        </div>
      </section>
    </>
  );
}
