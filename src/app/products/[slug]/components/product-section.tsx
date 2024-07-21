import { LinkButton } from "@/components/ui/button";
import getQueryClient from "@/components/util/query-client";
import { cn } from "@/lib/util";
import { KEY, Product } from "@/service/product";
import { ArrowDown, Star } from "lucide-react";
import { HTMLAttributes } from "react";
import { AttributeTable, AttributeTableItem } from "./attribute-table";

export interface ProductSectionProps extends HTMLAttributes<HTMLDivElement> {
  slug: string;
  attributesAnchor?: string;
}

function Rating() {
  return (
    <span>
      <span className="px-2 text-base font-normal align-middle text-primary">
        5.0
      </span>
      <Star className="inline size-4 text-accent" fill="hsl(var(--accent))" />
      <Star className="inline size-4 text-accent" fill="hsl(var(--accent))" />
      <Star className="inline size-4 text-accent" fill="hsl(var(--accent))" />
      <Star className="inline size-4 text-accent" fill="hsl(var(--accent))" />
      <Star className="inline size-4 text-accent" fill="hsl(var(--accent))" />
    </span>
  );
}

export default function ProductSection({
  attributesAnchor,
  slug,
  className,
  ...props
}: ProductSectionProps) {
  const queryClient = getQueryClient();
  const productData = queryClient.getQueryData<Product>([KEY, slug]);

  return (
    <section className={cn("flex flex-col gap-2", className)} {...props}>
      <h1 className="text-2xl font-semibold">{productData?.name}</h1>
      <div className="text-sm font-light text-black/50">
        <span className="align-middle">Рейтинг: </span>
        <Rating />
      </div>
      <AttributeTable>
        <AttributeTableItem attribute="Страна, регион:">
          Южная Африка, Стелленбош
        </AttributeTableItem>
        <AttributeTableItem attribute="Сахар:">сухое</AttributeTableItem>
        <AttributeTableItem attribute="Производитель:">
          Simonsig
        </AttributeTableItem>
        <AttributeTableItem attribute="Крепость:">13.5%</AttributeTableItem>
      </AttributeTable>
      {attributesAnchor && (
        <LinkButton href={attributesAnchor} variant="link">
          <ArrowDown className="pr-2" />
          Смотреть все характеристики
        </LinkButton>
      )}
    </section>
  );
}
