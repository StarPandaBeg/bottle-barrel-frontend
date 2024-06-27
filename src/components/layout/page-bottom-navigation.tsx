"use client";

import { Heart, Home, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  NavigationBar,
  NavigationBarButton,
  NavigationBarProps,
} from "../ui/navigation-bar";

export interface PageBottomNavigationProps extends NavigationBarProps {}

export default function PageBottomNavigation(props: PageBottomNavigationProps) {
  const pathname = usePathname();

  return (
    <NavigationBar {...props}>
      <NavigationBarButton
        icon={Home}
        label="Главная"
        active={pathname == "/"}
      />
      <NavigationBarButton
        icon={Heart}
        label="Избранное"
        active={pathname == "/favorite"}
      />
      <NavigationBarButton
        icon={ShoppingCart}
        label="Корзина"
        active={pathname == "/cart"}
      />
      <NavigationBarButton icon={User} label="Войти" />
    </NavigationBar>
  );
}
