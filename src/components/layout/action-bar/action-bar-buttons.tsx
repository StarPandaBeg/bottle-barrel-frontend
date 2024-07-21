"use client";

import { useAppStore } from "@/components/providers/zustand";
import { cn, toIndicator } from "@/lib/util";
import { Heart, LucideProps, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";
import ActionBarProfile from "./action-bar-profile";

export interface ActionBarButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.FC<LucideProps>;
  label: string;
  indicator?: string;
}
export interface ActionBarButtonsProps
  extends HTMLAttributes<HTMLUListElement> {}

export function ActionBarButton({
  className,
  icon: Icon,
  label,
  indicator,
  ...props
}: ActionBarButtonProps) {
  const elementClass =
    "rounded-md px-3 flex flex-col justify-center items-center h-16 text-primary hover:text-accent";
  return (
    <div className={cn(elementClass, className)} {...props}>
      <div className="relative">
        <Icon strokeWidth={1} height={32} />
        {indicator && (
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-light text-white bg-accent border-2 border-white rounded-full -top-1 -end-2">
            {indicator}
          </div>
        )}
      </div>
      <p className="text-xs font-light hidden md:block">{label}</p>
    </div>
  );
}

export function ActionBarButtons({
  className,
  ...props
}: ActionBarButtonsProps) {
  const favorites = useAppStore((state) => state.favorites);

  return (
    <ul
      className={cn("flex md:gap-1 justify-center items-center", className)}
      {...props}
    >
      <li>
        <Link href="/wishlist">
          <ActionBarButton
            icon={Heart}
            label="Избранное"
            indicator={toIndicator(favorites)}
          />
        </Link>
      </li>
      <li>
        <ActionBarButton icon={ShoppingCart} label="Корзина" />
      </li>
      <li className="flex justify-center items-center">
        <ActionBarProfile />
      </li>
    </ul>
  );
}
