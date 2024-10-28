"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  validationSchemaBo3,
  validationSchemaTypeBo3,
} from "@/utils/validationSchemaBo3";

export default function BattleThreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<validationSchemaTypeBo3>({
    mode: "onChange",
    resolver: zodResolver(validationSchemaBo3),
  });
  return (
    <FormProvider {...methods}>
      <main>{children}</main>
    </FormProvider>
  );
}
