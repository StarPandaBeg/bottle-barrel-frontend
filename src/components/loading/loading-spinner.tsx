import { cn } from "@/lib/util";
import { LoaderCircle } from "lucide-react";
import { HTMLAttributes } from "react";

export default function LoadingSpinner({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center text-center gap-2 text-primary",
        className
      )}
    >
      <LoaderCircle className="size-12 animate-spin" />
      <p>Загрузка...</p>
    </div>
  );
}
