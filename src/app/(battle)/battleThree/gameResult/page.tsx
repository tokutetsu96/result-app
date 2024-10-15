"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export default function GameResultPage() {
  const router = useRouter();
  const { getValues } = useFormContext();
  const data = getValues();
  console.log(data);

  return <div></div>;
}
