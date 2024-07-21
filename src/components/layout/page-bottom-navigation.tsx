"use client";

import { useAppStore } from "@/components/providers/zustand";
import {
  NavigationBar,
  NavigationBarButton,
  NavigationBarProps,
} from "@/components/ui/navigation-bar";
import useAuth from "@/hooks/use-auth";
import { cn, toIndicator } from "@/lib/util";
import { Heart, Home, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface PageBottomNavigationProps extends NavigationBarProps {}

export default function PageBottomNavigation({
  className,
  ...props
}: PageBottomNavigationProps) {
  const pathname = usePathname();
  const favorites = useAppStore((state) => state.favorites);

  const authData = useAuth();
  const isLoggedIn = useMemo(() => authData !== undefined, [authData]);

  return (
    <NavigationBar className={cn("py-2", className)} {...props}>
      <NavigationBarButton
        href="/"
        icon={Home}
        label="Главная"
        active={pathname == "/"}
      />
      <NavigationBarButton
        href="/wishlist"
        icon={Heart}
        label="Избранное"
        active={pathname == "/wishlist"}
        indicator={toIndicator(favorites)}
      />
      <NavigationBarButton
        href="/cart"
        icon={ShoppingCart}
        label="Корзина"
        active={pathname == "/cart"}
      />
      <NavigationBarButton
        href={isLoggedIn ? "/cabinet" : "/sign-in"}
        icon={User}
        label={isLoggedIn ? "Личный кабинет" : "Вход"}
        active={pathname == (isLoggedIn ? "/cabinet" : "/sign-in")}
      />
    </NavigationBar>
  );
}
