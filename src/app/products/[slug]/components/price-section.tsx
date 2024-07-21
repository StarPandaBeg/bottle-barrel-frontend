"use client";

import LoadingError from "@/components/loading/loading-error";
import ProductFavoriteButton from "@/components/products/product-favorite";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/util";
import { KEY, getBySlug } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

export interface PriceSectionProps extends HTMLAttributes<HTMLDivElement> {
  slug: string;
}

export default function PriceSection({
  slug,
  className,
  ...props
}: PriceSectionProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [KEY, slug],
    queryFn: () => getBySlug(slug),
  });

  if (isError) return <LoadingError />;
  if (isLoading) return <></>;

  const priceWithoutDiscount = data!.price * 1.4;

  return (
    <section
      className={cn("p-4 h-min bg-secondary rounded space-y-4", className)}
      {...props}
    >
      <div>
        <div className="line-through text-black/50">
          {priceWithoutDiscount} Р
        </div>
        <div className="text-2xl text-accent font-semibold space-x-2">
          <span>{data!.price} Р</span>
          <Badge className="align-middle">-40%</Badge>
        </div>
      </div>
      <div className="flex gap-2">
        <Button className="grow">В корзину</Button>
        <ProductFavoriteButton productId={data!.id} />
      </div>
    </section>
  );
}
