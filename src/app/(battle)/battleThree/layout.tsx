"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  validationSchema,
  validationSchemaType,
} from "@/utils/validationSchema";

export default function BattleThreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<validationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  return (
    <FormProvider {...methods}>
      <main className="container">{children}</main>
    </FormProvider>
  );
}
