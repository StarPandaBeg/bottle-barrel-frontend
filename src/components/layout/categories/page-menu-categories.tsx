import LoadingError from "@/components/loading/loading-error";
import { LinkButton, LinkButtonProps } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/util";
import { Category, KEY, all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

interface PageMenuCategoryProps extends Omit<LinkButtonProps, "href"> {
  category: Category;
}
export interface PageMenuCategoriesProps
  extends HTMLAttributes<HTMLUListElement> {
  onCategoryClick?: (category: Category) => void;
}

function PageMenuItem({
  category,
  className,
  ...props
}: PageMenuCategoryProps) {
  return (
    <LinkButton
      href={category.link}
      variant="text"
      className={cn("py-6 w-full justify-start", className)}
      {...props}
    >
      {category.name}
    </LinkButton>
  );
}

function PageMenuSkeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("py-6 flex flex-col gap-6", className)} {...props}>
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}

export function PageMenuCategories({
  className,
  onCategoryClick = () => {},
  ...props
}: PageMenuCategoriesProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY],
    queryFn: all,
  });

  if (isLoading) return <PageMenuSkeleton />;
  if (isError) return <LoadingError className="py-4" />;
  return (
    <ul className={cn("py-4 h-full", className)} {...props}>
      <ScrollArea type="auto" className="h-full">
        <div className="mr-4 divide-y divide-border">
          {data!.map((c, i) => (
            <li key={i}>
              <PageMenuItem category={c} onClick={() => onCategoryClick(c)} />
            </li>
          ))}
        </div>
      </ScrollArea>
    </ul>
  );
}
