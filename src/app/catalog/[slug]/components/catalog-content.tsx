"use client";

import LoadingError from "@/components/loading/loading-error";
import LoadingSpinner from "@/components/loading/loading-spinner";
import ProductCard from "@/components/products/product-card-base";
import CardList from "@/components/ui/card-list";
import { cn } from "@/lib/util";
import { KEY, getBySlug } from "@/service/category";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

export interface CatalogContentProps extends HTMLAttributes<HTMLDivElement> {
  slug: string;
}

export default function CatalogContent({
  slug,
  className,
  ...props
}: CatalogContentProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [KEY, slug],
    queryFn: () => getBySlug(slug),
  });

  if (isLoading) return <LoadingSpinner className="py-4" />;
  if (isError) return <LoadingError />;

  return (
    <section className={cn("flex flex-col gap-4", className)} {...props}>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{data!.name}</h1>
        <p className="text-sm font-light text-black/80">
          Мы нашли для Вас {data!.products.length} напитков и отсортировали{" "}
          <span className="text-accent font-semibold">по релевантности</span>
        </p>
      </div>
      <CardList items={data!.products} itemBase={ProductCard} />
    </section>
  );
}
