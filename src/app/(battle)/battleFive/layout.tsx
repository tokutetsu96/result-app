"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  validationSchemaBo5,
  validationSchemaTypeBo5,
} from "@/utils/validationSchema";

export default function BattleFiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<validationSchemaTypeBo5>({
    mode: "onChange",
    resolver: zodResolver(validationSchemaBo5),
  });
  return (
    <FormProvider {...methods}>
      <main className="container">{children}</main>
    </FormProvider>
  );
}
