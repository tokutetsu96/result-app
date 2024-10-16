import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  icons: {
    icon: "/icons/cod.ico",
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          fontNotoSansJP.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
