"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <header className="flex items-center px-4 py-2 md:py-4 border-b gap-4 sticky top-0 bg-background">
      <h3 className="font-bold text-lg">Ali Askari</h3>
      <ul className="flex-1 flex items-center gap-4">
        <li>
          <Link
            className={cn("hover:text-primary duration-150 transition-all", {
              "text-primary": isActive("/"),
            })}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={cn("hover:text-primary duration-150 transition-all", {
              "text-primary": isActive("/blog"),
            })}
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </header>
  );
}
