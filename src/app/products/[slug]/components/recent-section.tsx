"use client";

import LoadingError from "@/components/loading/loading-error";
import { RecentProductList } from "@/components/products/recent-products";
import useRecentProducts from "@/hooks/use-recent-products";
import { KEY, getBySlug } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

export interface RecentSectionProps extends HTMLAttributes<HTMLDivElement> {
  slug: string;
}

export default function RecentSection({ slug, ...props }: RecentSectionProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [KEY, slug],
    queryFn: () => getBySlug(slug),
  });
  const recent = useRecentProducts(data?.id);

  if (isError) return <LoadingError />;
  if (isLoading) return null;
  if (recent.length === 0) return null;

  return (
    <section {...props}>
      <h2 className="font-semibold text-xl text-primary">
        Недавно просмотренные
      </h2>
      <RecentProductList exclude={data!.id} />
    </section>
  );
}
