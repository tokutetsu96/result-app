import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create",
};
export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
