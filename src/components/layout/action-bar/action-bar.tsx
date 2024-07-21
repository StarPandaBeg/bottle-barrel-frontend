import { cn } from "@/lib/util";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Brand from "../../ui/brand";
import { ActionBarButtons } from "./action-bar-buttons";
import ActionBarMenu from "./action-bar-menu";
import ActionBarSearch from "./action-bar-search";

export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {}

export default function ActionBar({ className, ...props }: ActionBarProps) {
  return (
    <div
      className={cn("flex justify-between items-center gap-6", className)}
      {...props}
    >
      <Link href="/">
        <Brand adaptive />
      </Link>
      <ActionBarSearch className="flex-grow" />
      <ActionBarButtons className="hidden xs:flex" />
      <ActionBarMenu className="block xs:hidden" />
    </div>
  );
}
