import { Skeleton } from "../ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="p-4 flex flex-col items-center gap-2">
      <div className="relative w-full aspect-square">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-28 h-4" />
      </div>
      <Skeleton className="w-20 h-8" />
    </div>
  );
}
