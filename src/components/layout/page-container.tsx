import { HTMLAttributes } from "react";

import { cn } from "@/lib/util";

export interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 w-full min-h-full flex flex-col md:px-8 md:py-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
