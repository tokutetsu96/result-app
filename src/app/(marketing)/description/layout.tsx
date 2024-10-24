import { Metadata } from "next";

export const metadata: Metadata = {
  title: "description",
};
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
