"use client";

import { FormProvider, useForm } from "react-hook-form";
import { TeamInput } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/utils/validationSchema";

export default function BattleThreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<TeamInput>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  return (
    <FormProvider {...methods}>
      <main className="container">{children}</main>
    </FormProvider>
  );
}
