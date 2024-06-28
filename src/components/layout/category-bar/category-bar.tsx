import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Category } from "@/service/category";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export interface CategoryBarProps extends NavigationMenuProps {
  categories: Category[];
}

export default function CategoryBar({
  categories,
  ...props
}: CategoryBarProps) {
  return (
    <NavigationMenu {...props}>
      <ScrollArea type="auto" useHorizontalScroll>
        <NavigationMenuList className="pb-4">
          {categories.map((c, i) => (
            <NavigationMenuItem key={i}>
              <Link href={c.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {c.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </ScrollArea>
    </NavigationMenu>
  );
}