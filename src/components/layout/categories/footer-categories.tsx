"use client";

import LoadingError from "@/components/loading/loading-error";
import { Skeleton } from "@/components/ui/skeleton";
import { KEY, all } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FooterList, FooterListItem, FooterListProps } from "../page-footer";

function FooterCategoriesSkeleton() {
  return (
    <FooterList title="Категории">
      {[...Array(5)].map((c, i) => (
        <FooterListItem key={i} className="my-2">
          <Skeleton className="h-4 w-[120px] bg-neutral-300/50" />
        </FooterListItem>
      ))}
    </FooterList>
  );
}

export default function FooterCategories(props: FooterListProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY],
    queryFn: all,
  });

  if (isLoading) return <FooterCategoriesSkeleton />;
  if (isError) return <LoadingError className="text-primary-foreground" />;

  return (
    <FooterList title="Категории" {...props}>
      {data!.map((c, i) => (
        <FooterListItem key={i}>
          <Link className="py-1" href={c.link}>
            {c.name}
          </Link>
        </FooterListItem>
      ))}
    </FooterList>
  );
}
