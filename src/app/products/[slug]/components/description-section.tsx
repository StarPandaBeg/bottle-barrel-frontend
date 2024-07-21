"use client";

import LoadingError from "@/components/loading/loading-error";
import { cn } from "@/lib/util";
import { KEY, getBySlug } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";
import { AttributeTable, AttributeTableItem } from "./attribute-table";

export interface DescriptionSectionProps
  extends HTMLAttributes<HTMLDivElement> {
  slug: string;
}

export default function DescriptionSection({
  slug,
  className,
  ...props
}: DescriptionSectionProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [KEY, slug],
    queryFn: () => getBySlug(slug),
  });

  if (isError) return <LoadingError />;
  if (isLoading) return <></>;

  return (
    <section className={cn("space-y-2", className)} {...props}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-2">
          <h2 className="text-xl text-primary">Описание</h2>
          <p className="font-light text-black/80">{data!.description}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl text-primary">Характеристики</h2>
          <AttributeTable className="w-full">
            <AttributeTableItem attribute="Страна, регион:">
              Южная Африка, Стелленбош
            </AttributeTableItem>
            <AttributeTableItem attribute="Сахар:">сухое</AttributeTableItem>
            <AttributeTableItem attribute="Производитель:">
              Simonsig
            </AttributeTableItem>
            <AttributeTableItem attribute="Крепость:">13.5%</AttributeTableItem>
            <AttributeTableItem attribute="Цвет:">красное</AttributeTableItem>
            <AttributeTableItem attribute="Выдержано в:">
              бочка
            </AttributeTableItem>
            <AttributeTableItem attribute="Объем:">0.75 л</AttributeTableItem>
          </AttributeTable>
        </div>
      </div>
    </section>
  );
}
