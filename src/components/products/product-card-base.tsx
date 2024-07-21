import { cn } from "@/lib/util";
import { Product } from "@/service/product";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ImageWithFallback from "../util/image-with-fallback";
import ProductFavoriteButton from "./product-favorite";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  item: Product;
}

export default function ProductCard({
  item,
  className,
  ...props
}: ProductCardProps) {
  const priceWithoutDiscount = item.price * 1.4;

  return (
    <div
      className={cn(
        "relative p-4 flex flex-col items-center gap-2 transition hover:scale-105 hover:bg-secondary",
        className
      )}
      {...props}
    >
      <div className="absolute right-4 top-4 z-10">
        <ProductFavoriteButton
          productId={item!.id}
          className="opacity-30 data-[active=true]:opacity-80"
        />
      </div>
      <div className="relative w-full aspect-square">
        <Link href={item.link}>
          <ImageWithFallback
            className="object-contain"
            src={item.images?.[0]}
            fallbackSrc="/images/placeholders/product.png"
            alt={item.name}
            fill={true}
          />
        </Link>
      </div>
      <div className="text-center">
        <Link href={item.link}>
          <h1 className="hover:underline">{item.name}</h1>
        </Link>
        <p className="text-sm font-light text-black/50">
          Италия, красное, сухое, 0.75л
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-sm line-through text-black/50">
          {priceWithoutDiscount} Р
        </p>
        <Badge>-40%</Badge>
      </div>
      <h2 className="text-xl font-semibold text-accent">{item.price} Р</h2>
      <Button>В корзину</Button>
    </div>
  );
}
