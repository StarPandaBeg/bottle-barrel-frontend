"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import useHorizontalScroll from "@/hooks/use-horizontal-scroll";
import { cn } from "@/lib/util";

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  horizontal?: boolean | null;
  vertical?: boolean | null;
  useHorizontalScroll?: boolean;
  horizontalScrollBehaviour?: ScrollBehavior;
}

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(
  (
    {
      useHorizontalScroll: useHScroll,
      horizontalScrollBehaviour = "smooth",
      vertical = null,
      horizontal = null,
      children,
      ...props
    },
    ref
  ) => {
    const scrollRef = useHorizontalScroll<HTMLDivElement>(
      horizontalScrollBehaviour
    );
    const isVertical = vertical === null ? !horizontal : vertical;
    const isHorizontal = horizontal ?? false;

    return (
      <ScrollAreaRoot ref={ref} {...props}>
        <ScrollAreaViewport ref={useHScroll ? scrollRef : undefined}>
          {children}
        </ScrollAreaViewport>
        {isVertical && <ScrollBar orientation="vertical" />}
        {(isHorizontal || useHScroll) && <ScrollBar orientation="horizontal" />}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaRoot>
    );
  }
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    className={cn("relative overflow-hidden", className)}
    ref={ref}
    {...props}
  />
));
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    className={cn("h-full w-full rounded-[inherit]", className)}
    ref={ref}
    {...props}
  />
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollBar,
};
