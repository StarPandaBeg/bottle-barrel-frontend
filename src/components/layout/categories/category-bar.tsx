"use client";

import LoadingError from "@/components/loading/loading-error";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/util";
import { KEY, all } from "@/service/category";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { HTMLAttributes } from "react";

export interface CategoryBarProps extends NavigationMenuProps {}

function CategoryBarSkeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-2 py-4 space-x-4", className)} {...props}>
      <Skeleton className="inline-block h-4 w-[80px]" />
      <Skeleton className="inline-block h-4 w-[120px]" />
      <Skeleton className="inline-block h-4 w-[95px]" />
      <Skeleton className="inline-block h-4 w-[65px]" />
    </div>
  );
}

export default function CategoryBar({ ...props }: CategoryBarProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY],
    queryFn: all,
  });

  if (isLoading) return <CategoryBarSkeleton {...props} />;
  if (isError) return <LoadingError />;

  return (
    <NavigationMenu {...props}>
      <ScrollArea type="auto" useHorizontalScroll>
        <NavigationMenuList className="pb-4">
          {data!.map((c, i) => (
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
