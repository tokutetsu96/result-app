import { marketingConfig } from "@/config/marketing";
import MainNav from "./main-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="h-20 py-6 flex items-center justify-between">
        <MainNav items={marketingConfig.mainNav} />
        <nav>
          <Link
            href={siteConfig.links.cod}
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
            target="_blank"
            rel="noreferrer"
          >
            COD公式サイト
          </Link>
        </nav>
      </div>
    </header>
  );
}
